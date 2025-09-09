import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationNotification {
  application_id: string;
  full_name: string;
  email: string;
  phone?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Resend API key not configured" }),
        { 
          status: 500, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        }
      );
    }

    const resend = new Resend(resendApiKey);

    if (req.method === "POST") {
      const { application_id, full_name, email, phone, message }: ApplicationNotification = await req.json();

      console.log("New application notification:", { application_id, full_name, email });

      // Send email notification via Resend
      try {
        const emailResponse = await resend.emails.send({
          from: "Application <onboarding@resend.dev>",
          to: ["christian.blake@cyberinvestigationsteam.com"],
          subject: "Someone submitted a new application",
          html: `
            <h2>New Application Submitted</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Application Details:</h3>
              <p><strong>Name:</strong> ${full_name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p><strong>Message:</strong> ${message || "No message provided"}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <p>Please review this application in your admin dashboard.</p>
            <hr>
            <small>Application ID: ${application_id}</small>
          `,
        });

        if (emailResponse.error) {
          console.error("Resend API error:", emailResponse.error);
          throw new Error(`Resend API error: ${emailResponse.error.message}`);
        }

        console.log("Email sent successfully via Resend:", emailResponse);

        return new Response(
          JSON.stringify({ 
            success: true, 
            message: "Email notification sent successfully",
            messageId: emailResponse.data?.id 
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );

      } catch (emailError: any) {
        console.error("Email sending failed:", emailError);
        return new Response(
          JSON.stringify({ error: `Failed to send email: ${emailError.message}` }),
          { 
            status: 500, 
            headers: { "Content-Type": "application/json", ...corsHeaders } 
          }
        );
      }
    }

    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { 
        status: 405, 
        headers: { "Content-Type": "application/json", ...corsHeaders } 
      }
    );

  } catch (error: any) {
    console.error("Error in send-application-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);