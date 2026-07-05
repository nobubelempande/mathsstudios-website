import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const cv = formData.get("cv") as File | null;

    if (!name || !email || !cv) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Basic server-side validation (mirrors the frontend checks)
    const allowedExt = [".pdf", ".doc", ".docx"];
    const ext = path.extname(cv.name).toLowerCase();
    if (!allowedExt.includes(ext)) {
      return NextResponse.json({ error: "Invalid file type." }, { status: 400 });
    }
    const MAX_SIZE = 8 * 1024 * 1024;
    if (cv.size > MAX_SIZE) {
      return NextResponse.json({ error: "File too large." }, { status: 400 });
    }

    // Build the SMTP transport from env vars
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // false for 587/STARTTLS, true for 465/SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Read the uploaded file into a buffer for the attachment
    const buffer = Buffer.from(await cv.arrayBuffer());

    await transporter.sendMail({
      from: `"MathsStudios Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Tutor Application: ${name}`,
      text: `New tutor application received.\n\nName: ${name}\nEmail: ${email}\n\nCV attached.`,
      html: `
        <p>New tutor application received.</p>
        <p><strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}</p>
        <p>CV attached.</p>
      `,
      attachments: [
        {
          filename: cv.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("become-a-tutor submission error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}