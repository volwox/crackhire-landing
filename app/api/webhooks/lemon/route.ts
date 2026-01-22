import { NextResponse } from "next/server";
import crypto from "crypto";

/**
 * TikTok Purchase Event Sender (Server-side)
 */
async function sendTikTokPurchaseEvent(order: any) {
  const pixelId = process.env.TIKTOK_PIXEL_ID;
  const accessToken = process.env.TIKTOK_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.error("❌ Missing TikTok env variables");
    return;
  }

  const payload = {
    pixel_code: pixelId,
    event: "Purchase",
    timestamp: Math.floor(Date.now() / 1000),
    properties: {
      currency: order.currency || "USD",
      value: (order.totalUsd || 0) / 100, // cents → dollars
      contents: [
        {
          content_name: order.productName,
          quantity: 1,
          price: (order.totalUsd || 0) / 100,
        },
      ],
    },
  };

  try {
    const res = await fetch(
      `https://business-api.tiktok.com/open_api/v1.3/pixel/track/?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json();
    console.log("🎯 TikTok API Response:", result);
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
      console.error("❌ Missing signature header");
      return NextResponse.json({ error: "Missing signature" }, { status: 401 });
    }

    const secret = process.env.LEMON_WEBHOOK_SECRET;

    if (!secret) {
      console.error("❌ Missing LEMON_WEBHOOK_SECRET env");
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 }
      );
    }

    // 🔐 HMAC SHA256 doğrulama
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(rawBody, "utf8");
    const digest = hmac.digest("hex");

    const isValid = crypto.timingSafeEqual(
      Buffer.from(digest),
      Buffer.from(signature)
    );

    if (!isValid) {
      console.error("❌ Invalid webhook signature");
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }

    console.log("✅ Webhook signature verified");

    const payload = JSON.parse(rawBody);
    const eventName = payload?.meta?.event_name;

    // 📦 Order bilgileri
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

    // 🎯 TikTok Purchase Event
    if (eventName === "order_created") {
      await sendTikTokPurchaseEvent(extracted);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
