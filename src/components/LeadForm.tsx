import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface LeadFormProps {
  variant: "recent" | "older";
}

const LeadForm = ({ variant }: LeadFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFullConsent, setShowFullConsent] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    consent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.consent) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields and accept the consent.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-form', {
        body: {
          fullName: formData.fullName,
          phone: formData.phone,
          variant: variant
        }
      });

      if (error) {
        console.error("Submission error:", error);
        toast({
          title: "Submission failed",
          description: "There was an error submitting your request. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Case review requested successfully",
        description: "Our team will contact you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        consent: false
      });

    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "Submission failed",
        description: "There was an unexpected error. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };


  return (
    <div className="bg-card border border-border rounded-xl p-4 sm:p-6 shadow-card">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input w-full text-base h-12 sm:h-10"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input w-full text-base h-12 sm:h-10"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="flex items-start space-x-3 pt-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-5 h-5 sm:w-4 sm:h-4 text-primary bg-input border-border rounded focus:ring-primary focus:ring-2 flex-shrink-0"
            required
          />
          <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <label htmlFor="consent" className="cursor-pointer">
              I consent to AFC contacting me about my case
              {!showFullConsent && (
                <button
                  type="button"
                  onClick={() => setShowFullConsent(true)}
                  className="ml-1 text-primary hover:underline"
                >
                  read more
                </button>
              )}
              {showFullConsent && (
                <>
                  {" "}and understand that no outcome is guaranteed. This form is for investigation services only.
                  <button
                    type="button"
                    onClick={() => setShowFullConsent(false)}
                    className="ml-1 text-primary hover:underline"
                  >
                    show less
                  </button>
                </>
              )}
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-hero w-full text-base sm:text-lg py-3 sm:py-4 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Request Free Case Review"}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;