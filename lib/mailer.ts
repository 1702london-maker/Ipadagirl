import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendNotification(subject: string, html: string) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) return;
  await transporter.sendMail({
    from: `"iPadAGirl" <${process.env.GMAIL_USER}>`,
    to: "letspadagirlnow@gmail.com",
    subject,
    html,
  });
}
