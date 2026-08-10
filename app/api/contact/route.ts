import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 },
      );
    }

    // Configure Nodemailer Transporter using environment variables
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            "SMTP credentials not configured in .env. Please add your valid SMTP_USER and SMTP_PASS.",
        },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"Vemzo Web Inquiry" <${smtpUser}>`,
      replyTo: email,
      to: process.env.CONTACT_RECEIVER_EMAIL || smtpUser,
      subject: `[Vemzo Contact] ${subject || "New Inquiry from " + name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #00dc82; margin-top: 0; font-size: 22px;">New Website Contact Query</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 100px; color: #4a5568;">Name:</td>
              <td style="padding: 8px 0; color: #1a202c;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Email:</td>
              <td style="padding: 8px 0; color: #1a202c;"><a href="mailto:${email}" style="color: #00dc82;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Subject:</td>
              <td style="padding: 8px 0; color: #1a202c;">${subject || "General Inquiry"}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <h3 style="color: #2d3748; font-size: 16px; margin-bottom: 8px;">Message Content:</h3>
          <div style="background-color: #f7fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #00dc82; font-size: 14px; color: #2d3748; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0 12px 0;" />
          <p style="font-size: 12px; color: #a0aec0; text-align: center; margin: 0;">Sent via Vemzo Technologies Customer Support Team.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent directly to our team!",
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("API Contact Route Error:", error);

    if (
      error.code === "EAUTH" ||
      error.responseCode === 535 ||
      (error.message && error.message.includes("535"))
    ) {
      return NextResponse.json(
        {
          error:
            "Gmail SMTP Authentication Failed. Google requires a 16-character 'App Password' instead of your regular password. Enable 2-Step Verification in Google Account > Security > App Passwords.",
        },
        { status: 401 },
      );
    }

    return NextResponse.json(
      { error: error.message || "Failed to send email message." },
      { status: 500 },
    );
  }
}
