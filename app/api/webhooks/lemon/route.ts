import { NextResponse } from "next/server";
import crypto from "crypto";

/**
 * Yardımcı Fonksiyon: Email Hashleme (SHA256)
 * TikTok email adreslerinin lowercase (küçük harf) ve hashlenmiş olmasını ister.
 */
function hashEmail(email: string) {
  if (!email) return undefined;
  return crypto.createHash("sha256").update(email.trim().toLowerCase()).digest("hex");
}

/**
 * TikTok Purchase Event Sender (Server-side)
 */
async function sendTikTokPurchaseEvent(order: any) {
  const pixelId = process.env.TIKTOK_PIXEL_ID;
  const accessToken = process.env.TIKTOK_ACCESS_TOKEN;
  const testEventCode = process.env.TIKTOK_TEST_CODE; // .env dosyasına eklediğinizden emin olun

  // Kullanıcıyı eşleştirmek için Email şart
  const hashedEmail = hashEmail(order.email);

  console.log("🔐 ENV CHECK", {
    pixelExists: !!pixelId,
    tokenExists: !!accessToken,
    testCode: testEventCode || "Not Set (Production Mode - Events may be delayed)",
    userEmail: order.email ? "Present" : "Missing",
  });

  if (!pixelId || !accessToken) {
    console.error("❌ Missing TikTok env variables");
    return;
  }

  const payload = {
    pixel_code: pixelId,
    event: "Purchase",
    test_event_code: testEventCode || undefined,
    timestamp: String(Math.floor(Date.now() / 1000)),
    // 🛑 ESKİ YERİ (Yanlış):
    // user: { email: hashedEmail }, 

    // ✅ YENİ YERİ (Doğru): 'context' içine alıyoruz
    context: {
      user: {
        email: hashedEmail,
      },
    },

    properties: {
      currency: order.currency || "USD",
      value: (order.totalUsd || 0) / 100,
      contents: [
        {
          content_type: "product",
          content_name: order.productName,
          quantity: 1,
          price: (order.totalUsd || 0) / 100,
        },
      ],
    },
  };

  try {
    const res = await fetch(
      `https://business-api.tiktok.com/open_api/v1.3/pixel/track/`, 
      {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Access-Token": accessToken 
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json();
    
    // TikTok Code 0 dışındaki her şey hatadır (veya kısmi uyarıdır)
    if (result.code !== 0) {
        console.error("⚠️ TikTok API Warning:", result);
    } else {
        console.log("🎯 TikTok API Success (Event Sent):", result);
    }
    
  } catch (err) {
    console.error("❌ TikTok API Error:", err);
  }
}

/**
 * Lemon Squeezy Webhook Handler
 */
export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 401 });
    }

    const secret = process.env.LEMON_WEBHOOK_SECRET;
    if (!secret) {
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(rawBody, "utf8");
    const digest = hmac.digest("hex");

    const isValid = crypto.timingSafeEqual(
      Buffer.from(digest),
      Buffer.from(signature)
    );

    if (!isValid) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    console.log("✅ Webhook signature verified");

    const payload = JSON.parse(rawBody);
    const eventName = payload?.meta?.event_name;
    const order = payload?.data?.attributes;
    const item = order?.first_order_item;

    const extracted = {
      event: eventName,
      orderId: payload?.data?.id,
      email: order?.user_email, // Email buradan alınıyor
      name: order?.user_name,
      totalUsd: order?.total_usd,
      currency: order?.currency,
      productName: item?.product_name,
      variant: item?.variant_name,
      testMode: order?.test_mode,
    };

    console.log("📦 Extracted Order:", extracted);

    if (eventName === "order_created") {
      await sendTikTokPurchaseEvent(extracted);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
