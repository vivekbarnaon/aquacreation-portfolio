import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/contact-schema";

// Simple in-memory rate limiting map for basic spam protection
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 4;

export async function POST(req: NextRequest) {
  try {
    // 1. IP-based rate limiting check
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown-ip";
    
    const now = Date.now();
    const rateData = rateLimitMap.get(clientIp);

    if (rateData) {
      if (now - rateData.firstRequest < RATE_LIMIT_WINDOW_MS) {
        if (rateData.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            { error: "Too many enquiries sent from this network. Please wait a minute before trying again." },
            { status: 429 }
          );
        }
        rateData.count += 1;
      } else {
        rateLimitMap.set(clientIp, { count: 1, firstRequest: now });
      }
    } else {
      rateLimitMap.set(clientIp, { count: 1, firstRequest: now });
    }

    // 2. Parse & sanitize JSON payload
    const body = await req.json();

    // 3. Honeypot check for bots
    if (body.companyWebsite && String(body.companyWebsite).length > 0) {
      return NextResponse.json(
        { error: "Spam submission rejected." },
        { status: 400 }
      );
    }

    // 4. Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Validation failed. Please verify your inputs.", details: fieldErrors },
        { status: 422 }
      );
    }

    const data = validationResult.data;

    // 5. Check Resend configuration
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "vivekbarnaon@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey || apiKey.trim() === "" || apiKey === "re_test_dummy_key") {
      // In development or when credentials are not yet entered,
      // return a structured response indicating configuration is needed
      return NextResponse.json({
        success: true,
        mockMode: true,
        message: "Enquiry received in development mode. To send live emails, set valid RESEND_API_KEY in your environment.",
        data: {
          fullName: data.fullName,
          email: data.email,
          serviceCategory: data.serviceCategory,
        },
      });
    }

    // 6. Execute Resend email transmission
    const resend = new Resend(apiKey);

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #070609; color: #F7F5FA; padding: 32px; border-radius: 8px;">
        <div style="border-bottom: 1px solid #160D25; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="color: #C4B5FD; margin: 0; font-size: 24px;">New Client Project Enquiry — AquaCreation</h2>
          <p style="color: #A9A2B4; margin: 4px 0 0 0; font-size: 14px;">Received via aquacreation.com portfolio</p>
        </div>

        <div style="background-color: #0B0910; border: 1px solid #6D28D9; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
          <p style="margin: 0 0 12px 0;"><strong style="color: #8B5CF6;">Client Name:</strong> ${escapeHtml(data.fullName)}</p>
          <p style="margin: 0 0 12px 0;"><strong style="color: #8B5CF6;">Client Email:</strong> <a href="mailto:${escapeHtml(data.email)}" style="color: #C4B5FD;">${escapeHtml(data.email)}</a></p>
          <p style="margin: 0 0 12px 0;"><strong style="color: #8B5CF6;">Requested Service:</strong> ${escapeHtml(data.serviceCategory)}</p>
          <p style="margin: 0 0 12px 0;"><strong style="color: #8B5CF6;">Target Budget:</strong> ${escapeHtml(data.budgetRange || "Not specified")}</p>
          <p style="margin: 0;"><strong style="color: #8B5CF6;">Timeline / Deadline:</strong> ${escapeHtml(data.projectDeadline || "Flexible")}</p>
        </div>

        <div style="background-color: #0B0910; border-radius: 8px; padding: 24px;">
          <h3 style="color: #8B5CF6; margin: 0 0 12px 0; font-size: 16px;">Project Vision & Requirements:</h3>
          <p style="color: #F7F5FA; line-height: 1.6; white-space: pre-wrap; margin: 0;">${escapeHtml(data.projectDescription)}</p>
        </div>

        <div style="margin-top: 32px; font-size: 12px; color: #6D28D9; text-align: center;">
          AquaCreation • Your Vision. Our Creativity. • @aquacreation18
        </div>
      </div>
    `;

    const { error: resendError } = await resend.emails.send({
      from: `AquaCreation Portfolio <${fromEmail}>`,
      to: [toEmail],
      replyTo: data.email,
      subject: `Project Enquiry: ${data.serviceCategory} — ${data.fullName}`,
      html: emailHtml,
    });

    if (resendError) {
      console.error("Resend API transmission error:", resendError);
      return NextResponse.json(
        { error: "We were unable to deliver your message at this time. Please try contacting @aquacreation18 on Instagram directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your project vision has been transmitted to AquaCreation. We will review your brief and respond promptly.",
    });
  } catch (error) {
    console.error("Internal contact handler error:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again shortly." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
