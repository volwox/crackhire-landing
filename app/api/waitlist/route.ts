import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const email = (body?.email ?? '').toString().trim();
    const source = (body?.source ?? 'unknown').toString().trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const smtpUser = process.env.ZOHO_SMTP_USER;
    const smtpPass = process.env.ZOHO_SMTP_PASS;
    const toEmail = process.env.WAITLIST_TO_EMAIL || 'support@crackhire.com';

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: 'Server is not configured (missing SMTP env vars).' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const ts = new Date().toISOString();

    await transporter.sendMail({
      from: `"CrackHire Waitlist" <${smtpUser}>`,
      to: toEmail,
      subject: `New waitlist signup: ${email}`,
      text: `Email: ${email}\nSource: ${source}\nTime: ${ts}\n`,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || 'Unexpected error' },
      { status: 500 }
    );
  }
}
