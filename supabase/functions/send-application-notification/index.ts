import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

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
    const postmarkApiKey = Deno.env.get("POSTMARK_API_KEY");
    
    if (!postmarkApiKey) {
      console.error("POSTMARK_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Postmark API key not configured" }),
        { 
          status: 500, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        }
      );
    }

    if (req.method === "POST") {
      const { application_id, full_name, email, phone, message }: ApplicationNotification = await req.json();

      console.log("New application notification:", { application_id, full_name, email });

      // Send email notification via Postmark
      try {
        const emailResponse = await fetch("https://api.postmarkapp.com/email", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-Postmark-Server-Token": postmarkApiKey,
          },
          body: JSON.stringify({
            From: "noreply@yourapp.com", // Replace with your verified sender address
            To: "christian.blake@cyberinvestigationsteam.com",
            Subject: "Someone submitted a new application",
            HtmlBody: `
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
            TextBody: `
New Application Submitted

Name: ${full_name}
Email: ${email}
Phone: ${phone || "Not provided"}
Message: ${message || "No message provided"}
Submitted: ${new Date().toLocaleString()}

Application ID: ${application_id}
            `,
          }),
        });

        if (!emailResponse.ok) {
          const errorData = await emailResponse.text();
          console.error("Postmark API error:", errorData);
          throw new Error(`Postmark API error: ${emailResponse.status} ${errorData}`);
        }

        const emailResult = await emailResponse.json();
        console.log("Email sent successfully via Postmark:", emailResult);

        return new Response(
          JSON.stringify({ 
            success: true, 
            message: "Email notification sent successfully",
            messageId: emailResult.MessageID 
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