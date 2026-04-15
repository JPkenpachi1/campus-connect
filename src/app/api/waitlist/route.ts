// src/app/api/waitlist/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, college, year } = body;

    // ── Basic validation ──────────────────────────────────
    if (!name || !email || !college) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ── Send confirmation email to the user ───────────────
    await resend.emails.send({
      from: "Campus Connect <onboarding@resend.dev>", // use this until you verify a domain
      to: email,
      subject: "🎓 You're on the Campus Connect waitlist!",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; color: #1a1a1a;">
          <h2 style="color: #4f46e5;">Hey ${name}, you're in! 🎉</h2>
          <p>Thanks for joining the <strong>Campus Connect</strong> waitlist.</p>
          <p>We'll notify you the moment early access opens.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="font-size: 13px; color: #6b7280;">
            College: ${college} ${year ? `· Year: ${year}` : ""}
          </p>
          <p style="font-size: 13px; color: #6b7280;">
            — The Campus Connect Team
          </p>
        </div>
      `,
    });

    // ── Send notification email to yourself ───────────────
    await resend.emails.send({
      from: "Campus Connect <onboarding@resend.dev>",
      to: "your@email.com",   // 👈 replace with your email
      subject: `New waitlist signup: ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>College:</strong> ${college}</p>
        <p><strong>Year:</strong> ${year || "Not specified"}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}