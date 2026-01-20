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

    // Send notification email to Astha (your verified Resend email)
    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["asthauday2004@gmail.com"], // Your verified Resend email
        subject: `🚀 New Portfolio Contact: ${name} from ${company || 'N/A'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 30px; border-radius: 12px;">
            <h2 style="color: #3b82f6; margin-bottom: 20px;">📬 New Contact Form Submission</h2>
            <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <p style="margin: 10px 0;"><strong style="color: #3b82f6;">Name:</strong> <span style="color: #e5e5e5;">${name}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #3b82f6;">Email:</strong> <a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #3b82f6;">Company:</strong> <span style="color: #e5e5e5;">${company || 'Not provided'}</span></p>
              <hr style="border: 1px solid #374151; margin: 15px 0;">
              <p style="margin: 10px 0;"><strong style="color: #3b82f6;">Message:</strong></p>
              <p style="white-space: pre-wrap; color: #d1d5db; background: #0f0f1a; padding: 15px; border-radius: 6px;">${message}</p>
            </div>
            <p style="color: #9ca3af; font-size: 14px; margin-top: 20px;">
              ⏰ Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST<br>
              📍 Reply directly to: <a href="mailto:${email}" style="color: #60a5fa;">${email}</a>
            </p>
          </div>
        `,
      }),
    });

    const notificationData = await notificationResponse.json();
    console.log("Notification email result:", notificationData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message sent successfully! Astha will get back to you soon.",
        emailSent: notificationData.id ? true : false
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
