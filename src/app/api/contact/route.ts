import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/data/contact";

export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown; message?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid-body" }, { status: 400 });
  }

  const { name, email, message } = body;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ ok: false, error: "missing-fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not configured.");
    return NextResponse.json({ ok: false, error: "not-configured" }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      // Resend's shared sandbox sender — works without verifying a custom
      // domain, but only delivers to the email address on the Resend
      // account itself. Swap for a verified domain address once one
      // exists, so this can send to any inbox.
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    });

    if (error) {
      console.error("Contact form: Resend returned an error:", error);
      return NextResponse.json({ ok: false, error: "send-failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form: unexpected send failure:", error);
    return NextResponse.json({ ok: false, error: "send-failed" }, { status: 502 });
  }
}
