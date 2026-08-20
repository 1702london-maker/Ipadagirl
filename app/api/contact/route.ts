import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { full_name, email, subject, message } = body;

  if (!full_name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await supabase
    .from("contact_submissions")
    .insert({ full_name, email, subject, message });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "iPadAGirl <noreply@ipadagirl.com>",
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `New Contact: ${subject || "General Enquiry"} from ${full_name}`,
      html: `<p><b>Name:</b> ${full_name}</p><p><b>Email:</b> ${email}</p><p><b>Subject:</b> ${subject}</p><p><b>Message:</b> ${message}</p>`,
    });
  }

  return NextResponse.json({ success: true });
}
