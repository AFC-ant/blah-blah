import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  variant: "recent" | "older";
}

const LeadForm = ({ variant }: LeadFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    timing: "",
    amount: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.consent) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields and accept the consent.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Case review requested successfully",
      description: "Our team will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      timing: "",
      amount: "",
      consent: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const timingOptions = variant === "recent" 
    ? [
        { value: "", label: "Select timing" },
        { value: "last-7-days", label: "Last 7 days" },
        { value: "last-30-days", label: "Last 30 days" },
        { value: "last-2-months", label: "Last 2 months" },
        { value: "2-plus-months", label: "2+ months" }
      ]
    : [
        { value: "", label: "Select timing" },
        { value: "last-3-months", label: "Last 3 months" },
        { value: "6-12-months", label: "6-12 months ago" },
        { value: "more-than-1-year", label: "More than 1 year" }
      ];

  const amountOptions = [
    { value: "", label: "Select amount (optional)" },
    { value: "under-10k", label: "Under $10,000" },
    { value: "10k-50k", label: "$10,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "100k-500k", label: "$100,000 - $500,000" },
    { value: "over-500k", label: "Over $500,000" }
  ];


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

        <div>
          <label htmlFor="timing" className="block text-sm font-medium mb-2">
            Issue Timing
          </label>
          <select
            id="timing"
            name="timing"
            value={formData.timing}
            onChange={handleChange}
            className="form-select w-full text-base h-12 sm:h-10"
          >
            {timingOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-2">
            Amount at Risk (Optional)
          </label>
          <select
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="form-select w-full text-base h-12 sm:h-10"
          >
            {amountOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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
          <label htmlFor="consent" className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            I consent to AFC contacting me about my case and understand that no outcome is guaranteed. 
            This form is for investigation services only.
          </label>
        </div>

        <button
          type="submit"
          className="btn-hero w-full text-base sm:text-lg py-3 sm:py-4 mt-6"
        >
          Request Free Case Review
        </button>
      </form>
    </div>
  );
};

export default LeadForm;