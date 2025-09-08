import AFCHeader from "@/components/AFCHeader";
import StatsSection from "@/components/StatsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import VideoSection from "@/components/VideoSection";
import LeadForm from "@/components/LeadForm";
import TrustBadges from "@/components/TrustBadges";
import ComplianceFooter from "@/components/ComplianceFooter";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-recent-cases.jpg";
import { Link } from "react-router-dom";

const RecentCasesLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <AFCHeader />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-hero bg-cover bg-center min-h-[600px] sm:min-h-[700px]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Suspicious broker{" "}
                <span className="text-gradient">delaying withdrawals?</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                We analyze suspicious platforms and withdrawal delays. Whether your issue started last week or in recent months, 
                we provide evidence-based findings — and if recovery paths exist, we highlight them.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
                <button className="btn-hero text-base sm:text-lg py-3 sm:py-4">
                  Request Free Case Review
                </button>
                <button className="btn-secondary text-base sm:text-lg py-3 sm:py-4">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-3 sm:p-1 shadow-primary mx-2 sm:mx-0">
                <LeadForm variant="recent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <VideoSection variant="recent" />
      <HowWeWorkSection />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 section-dark">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              Common questions about our investigation process for recent cases.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <div className="card-feature">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">
                Do you guarantee recovery?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                No, we provide evidence and documentation. In some cases partial recovery opportunities are identified, 
                but no outcome is guaranteed. Our focus is on thorough investigation and clear findings.
              </p>
            </div>
            
            <div className="card-feature">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">
                How fast is the review process?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Most cases receive initial findings within 72 hours. Our team works quickly to analyze recent cases 
                while the trail is still fresh.
              </p>
            </div>
            
            <div className="card-feature">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">
                What if my case is older than 2 months?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We still analyze older cases, but earlier action is recommended. For cases over 3 months old, 
                please visit our dedicated older cases page for specialized handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="sticky-cta">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold">Start Free Case Review</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Average response under 24 hours</p>
            </div>
            <button className="btn-hero text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 w-full sm:w-auto">
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      {/* Other Fraud Types Button */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Your money was stolen by another type of fraud?
            </h3>
            <p className="text-muted-foreground mb-6">
              Romance scams, crypto fraud, investment schemes, or other financial fraud? We can help.
            </p>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <Link to="/other-fraud">Submit here please</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ComplianceFooter />
    </div>
  );
};

export default RecentCasesLanding;