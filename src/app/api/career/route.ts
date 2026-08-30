import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5MB

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const designation = formData.get("designation");
  const resume = formData.get("resume");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof phone !== "string" ||
    typeof designation !== "string" ||
    !name ||
    !email ||
    !phone ||
    !designation
  ) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const attachments: { filename: string; content: Buffer }[] = [];
  if (resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_RESUME_SIZE) {
      return NextResponse.json(
        { error: "Resume file is too large (max 5MB)." },
        { status: 400 }
      );
    }
    const buffer = Buffer.from(await resume.arrayBuffer());
    attachments.push({ filename: resume.name, content: buffer });
  }

  const resend = new Resend(apiKey);
  const toEmail = process.env.CAREER_TO_EMAIL || "hr@hpladditives.com";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  const { error } = await resend.emails.send({
    from: `HPL Additives Careers <${fromEmail}>`,
    to: toEmail,
    replyTo: email,
    subject: `New Job Application: ${designation} - ${name}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Designation:</strong> ${escapeHtml(designation)}</p>
    `,
    attachments,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send application. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
