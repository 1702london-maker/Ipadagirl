import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendNotification } from "@/lib/mailer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { school_name, school_type, contact_person, position, email, phone, state, lga, address, estimated_girls, age_range, preferred_period, reason } = body;

  if (!school_name || !contact_person || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await supabase.from("outreach_requests").insert({ school_name, school_type, contact_person, position, email, phone, state, lga, address, estimated_girls, age_range, preferred_period, reason });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  await sendNotification(
    `New Outreach Request: ${school_name}, ${state}`,
    `<p><b>School:</b> ${school_name} (${school_type})</p><p><b>Contact:</b> ${contact_person} — ${position}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>State:</b> ${state}, ${lga}</p><p><b>Address:</b> ${address}</p><p><b>Girls:</b> ${estimated_girls} (${age_range})</p><p><b>Period:</b> ${preferred_period}</p><p><b>Reason:</b> ${reason}</p>`
  );

  return NextResponse.json({ success: true });
}
