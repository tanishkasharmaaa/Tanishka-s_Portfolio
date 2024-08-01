import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // Ensure this key is correctly set in .env.local
const fromEmail = "anjanasharma8448766174@gmail.com";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      text: `
        Thank you for contacting us!
        
        New message submitted:
        
        ${message}
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
