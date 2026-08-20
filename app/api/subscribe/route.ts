import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

  const { error } = await supabase.from("newsletter_subscribers").insert({ email });
  if (error && error.code === "23505") {
    return NextResponse.json({ success: true, message: "Already subscribed" });
  }
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "iPadAGirl <noreply@ipadagirl.com>",
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `New subscriber: ${email}`,
      html: `<p>New newsletter subscriber: <b>${email}</b></p>`,
    });
  }

  return NextResponse.json({ success: true });
}
