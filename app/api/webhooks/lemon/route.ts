import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.text();   // raw body (signature için gerekli)
    const signature = req.headers.get("x-signature");
    const eventName = req.headers.get("x-event-name");

    console.log("✅ Lemon Webhook Received");
    console.log("Event:", eventName);
    console.log("Signature:", signature);
    console.log("Raw Body:", body);

    // Şimdilik sadece loglayıp 200 dönüyoruz
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
