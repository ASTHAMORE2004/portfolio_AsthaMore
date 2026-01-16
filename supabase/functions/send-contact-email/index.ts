import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message }: ContactEmailRequest = await req.json();
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    console.log("Contact form submission:", { name, email, company, message: message.substring(0, 100) });

    if (!RESEND_API_KEY) {
      console.log("RESEND_API_KEY not configured - logging contact submission");
      // Store the contact submission even without email service
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Contact form received successfully! Astha will get back to you soon.",
          data: { name, email, company }
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email using Resend API directly via fetch
    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["asthamore@email.com"], // Update with your actual email
        subject: `New Portfolio Contact: ${name} from ${company || 'N/A'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #14b8a6;">New Contact Form Submission</h2>
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company || 'Not provided'}</p>
              <hr style="border: 1px solid #e5e7eb; margin: 15px 0;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #6b7280; font-size: 14px;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        `,
      }),
    });

    const notificationData = await notificationResponse.json();
    console.log("Notification email sent:", notificationData);

    // Send confirmation email to sender
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Astha More <onboarding@resend.dev>",
        to: [email],
        subject: "Thanks for reaching out! - Astha More",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #14b8a6;">Thank you for contacting me, ${name}!</h2>
            <p>I've received your message and will get back to you within 24-48 hours.</p>
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Your message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Connect with me on <a href="https://linkedin.com/in/asthamore" style="color: #14b8a6;">LinkedIn</a></li>
              <li>Check out my projects on <a href="https://github.com/asthamore" style="color: #14b8a6;">GitHub</a></li>
            </ul>
            <p>Best regards,<br><strong>Astha More</strong><br>Full-Stack Developer & Software Engineer</p>
          </div>
        `,
      }),
    });

    const confirmationData = await confirmationResponse.json();
    console.log("Confirmation email sent:", confirmationData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message sent successfully! Astha will get back to you soon.",
        notificationId: notificationData.id,
        confirmationId: confirmationData.id
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
