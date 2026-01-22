import { NextResponse } from "next/server";
import crypto from "crypto";

/**
 * TikTok Purchase Event Sender (Server-side)
 */
async function sendTikTokPurchaseEvent(order: any) {
  const pixelId = process.env.TIKTOK_PIXEL_ID;
  const accessToken = process.env.TIKTOK_ACCESS_TOKEN;
  // Test olaylarını dashboard'da görmek için opsiyonel (Events Manager > Test Events sekmesinden alınır)
  const testEventCode = process.env.TIKTOK_TEST_CODE; 

  console.log("🔐 ENV CHECK", {
    pixelExists: !!pixelId,
    tokenExists: !!accessToken,
    tokenLength: accessToken?.length,
    testCode: testEventCode || "Not Set (Production Mode)",
  });

  if (!pixelId || !accessToken) {
    console.error("❌ Missing TikTok env variables");
    return;
  }

  const payload = {
    pixel_code: pixelId,
    event: "Purchase",
    // Test kodu varsa ekle, yoksa undefined bırak (Prodüksiyon)
    test_event_code: testEventCode || undefined, 
    timestamp: String(Math.floor(Date.now() / 1000)), // ✅ MUST BE STRING
    properties: {
      currency: order.currency || "USD",
      value: (order.totalUsd || 0) / 100, // Lemon Squeezy cents gönderir, 100'e bölüyoruz
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
    // ✅ DÜZELTME: Token URL parametresi yerine Header'a taşındı
    const res = await fetch(
      `https://business-api.tiktok.com/open_api/v1.3/pixel/track/`, 
      {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Access-Token": accessToken // 👈 Kritik Düzeltme Burası
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json();
    
    if (result.code !== 0) {
        console.error("⚠️ TikTok API Warning/Error:", result);
    } else {
        console.log("🎯 TikTok API Success:", result);
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

    // 🔐 Signature verification
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
      email: order?.user_email,
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
