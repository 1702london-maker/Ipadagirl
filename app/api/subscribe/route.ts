import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendNotification } from "@/lib/mailer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const { error } = await supabase.from("newsletter_subscribers").insert({ email });
  if (error) {
    if (error.code === "23505") return NextResponse.json({ success: true }); // already subscribed
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await sendNotification(
    `New Newsletter Subscriber`,
    `<p><b>Email:</b> ${email}</p>`
  );

  return NextResponse.json({ success: true });
}
