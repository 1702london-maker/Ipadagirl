import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendNotification } from "@/lib/mailer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { full_name, email, phone, role, skills } = body;

  if (!full_name || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await supabase.from("volunteer_applications").insert({ full_name, email, phone, role, skills });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  await sendNotification(
    `New Volunteer: ${full_name} — ${role}`,
    `<p><b>Name:</b> ${full_name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Role:</b> ${role}</p><p><b>Skills:</b> ${skills}</p>`
  );

  return NextResponse.json({ success: true });
}
