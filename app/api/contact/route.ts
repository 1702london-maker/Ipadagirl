import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendNotification } from "@/lib/mailer";

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

  const { error } = await supabase.from("contact_submissions").insert({ full_name, email, subject, message });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  await sendNotification(
    `New Contact: ${subject} — ${full_name}`,
    `<p><b>Name:</b> ${full_name}</p><p><b>Email:</b> ${email}</p><p><b>Subject:</b> ${subject}</p><p><b>Message:</b><br>${message}</p>`
  );

  return NextResponse.json({ success: true });
}
