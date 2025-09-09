import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormSubmission {
  fullName: string;
  phone: string;
  timing?: string;
  amount?: string;
  variant: "recent" | "older";
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Initialize Resend client
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    if (req.method === "POST") {
      const { fullName, phone, timing, amount, variant }: FormSubmission = await req.json();

      console.log("Form submission received:", { fullName, phone, timing, amount, variant });

      // Validate required fields
      if (!fullName || !phone || !variant) {
        return new Response(
          JSON.stringify({ error: "Missing required fields" }),
          { 
            status: 400, 
            headers: { "Content-Type": "application/json", ...corsHeaders } 
          }
        );
      }

      // Save to database
      const { data: submission, error: dbError } = await supabase
        .from("form_submissions")
        .insert({
          full_name: fullName,
          phone: phone,
          timing: timing || null,
          amount: amount || null,
          variant: variant,
        })
        .select()
        .single();

      if (dbError) {
        console.error("Database error:", dbError);
        return new Response(
          JSON.stringify({ error: "Failed to save submission" }),
          { 
            status: 500, 
            headers: { "Content-Type": "application/json", ...corsHeaders } 
          }
        );
      }

      console.log("Submission saved to database:", submission);

      // Send email notification
      try {
        const emailResponse = await resend.emails.send({
          from: "AFC Notifications <onboarding@resend.dev>",
          to: ["support@detectiveblockchain.com"],
          subject: "New Case Review Request",
          html: `
            <h2>New Case Review Request</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Submission Details:</h3>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Case Type:</strong> ${variant === "recent" ? "Recent Cases" : "Older Cases"}</p>
              <p><strong>Timing:</strong> ${timing || "Not specified"}</p>
              <p><strong>Amount at Risk:</strong> ${amount || "Not specified"}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <p>Please follow up with this lead within 24 hours.</p>
            <hr>
            <small>Submission ID: ${submission.id}</small>
          `,
        });

        console.log("Email sent successfully:", emailResponse);
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the request if email fails, just log it
      }

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Form submitted successfully",
          submissionId: submission.id 
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Handle GET request for CSV export
    if (req.method === "GET") {
      const { data: submissions, error } = await supabase
        .from("form_submissions")
        .select("*")
        .order("submitted_at", { ascending: false });

      if (error) {
        console.error("Database error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch submissions" }),
          { 
            status: 500, 
            headers: { "Content-Type": "application/json", ...corsHeaders } 
          }
        );
      }

      // Convert to CSV
      const csvHeader = "ID,Full Name,Phone,Timing,Amount,Variant,Submitted At\n";
      const csvRows = submissions.map(sub => 
        `${sub.id},"${sub.full_name}","${sub.phone}","${sub.timing || ''}","${sub.amount || ''}","${sub.variant}","${sub.submitted_at}"`
      ).join("\n");
      
      const csv = csvHeader + csvRows;

      return new Response(csv, {
        status: 200,
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": "attachment; filename=form_submissions.csv",
          ...corsHeaders,
        },
      });
    }

    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { 
        status: 405, 
        headers: { "Content-Type": "application/json", ...corsHeaders } 
      }
    );

  } catch (error: any) {
    console.error("Error in submit-form function:", error);
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