import { NextResponse } from "next/server";
import crypto from "crypto";

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
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    // HMAC SHA256 signature üret
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(rawBody, "utf8");
    const digest = hmac.digest("hex");

    const isValid = crypto.timingSafeEqual(
      Buffer.from(digest),
      Buffer.from(signature)
    );

    if (!isValid) {
      console.error("❌ Invalid webhook signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    console.log("✅ Webhook signature verified");

    const payload = JSON.parse(rawBody);
const eventName = payload?.meta?.event_name;

// Order bilgileri
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

return NextResponse.json({ ok: true });

  } catch (err) {
    console.error("❌ Webhook error:", err);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
