import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { org_name, sector, contact_person, email, partnership_type, message } = body;

  if (!org_name || !contact_person || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await supabase.from("partner_applications").insert({ org_name, sector, contact_person, email, partnership_type, message });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "iPadAGirl <noreply@ipadagirl.com>",
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `New Partner Application: ${org_name} (${sector})`,
      html: `<p><b>Organisation:</b> ${org_name}</p><p><b>Sector:</b> ${sector}</p><p><b>Contact:</b> ${contact_person}</p><p><b>Email:</b> ${email}</p><p><b>Partnership Type:</b> ${partnership_type}</p><p><b>Message:</b> ${message}</p>`,
    });
  }

  return NextResponse.json({ success: true });
}
