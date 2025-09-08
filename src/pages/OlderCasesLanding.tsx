import AFCHeader from "@/components/AFCHeader";
import StatsSection from "@/components/StatsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import VideoSection from "@/components/VideoSection";
import LeadForm from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-older-cases.jpg";
import { Link } from "react-router-dom";

const OlderCasesLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <AFCHeader />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 bg-gradient-hero bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                It's Not Too Late to{" "}
                <span className="text-gradient">Get Answers</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Even if your case happened months ago, our evidence-based process can still uncover facts, 
                strengthen escalation, and highlight possible opportunities for recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-hero">
                  Start Case Review
                </button>
                <button className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>
            
            <div>
              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-1 shadow-primary">
                <LeadForm variant="older" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Time Still Matters Section */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Time Still <span className="text-gradient">Matters</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Fraudulent brokers often operate for years. Documenting your case even months later can strengthen 
              escalation and, in some cases, uncover new recovery paths.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-feature text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-semibold mb-2">Document What Happened</h3>
              <p className="text-sm text-muted-foreground">
                Create a comprehensive record of events, communications, and transactions.
              </p>
            </div>
            
            <div className="card-feature text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-semibold mb-2">Build a Factual Report</h3>
              <p className="text-sm text-muted-foreground">
                Professional documentation that can be used for various escalation purposes.
              </p>
            </div>
            
            <div className="card-feature text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Identify Escalation Opportunities</h3>
              <p className="text-sm text-muted-foreground">
                Find the best paths for complaints, regulatory action, and follow-up.
              </p>
            </div>
            
            <div className="card-feature text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2">Support Complaints</h3>
              <p className="text-sm text-muted-foreground">
                Strengthen complaints to regulators and banks with detailed evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <VideoSection variant="older" />
      <HowWeWorkSection />

      {/* FAQ Section */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about investigating older cases.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card-feature">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Is it too late to investigate my case?
              </h3>
              <p className="text-muted-foreground">
                No. Many clients come to us after 3+ months or even years. We can still clarify your case, 
                document what happened, and identify potential next steps for escalation.
              </p>
            </div>
            
            <div className="card-feature">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                What if I already tried another recovery service?
              </h3>
              <p className="text-muted-foreground">
                That's common. Our focus is evidence, not promises. Our thorough investigation process may reveal 
                new angles or provide better documentation for future action.
              </p>
            </div>
            
            <div className="card-feature">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Can funds still be recovered after months?
              </h3>
              <p className="text-muted-foreground">
                In some cases, yes, but no guarantees can be made. Our role is to provide clear documentation 
                and identify any available recovery paths, regardless of timing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="sticky-cta">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Start Case Review</h3>
              <p className="text-sm text-muted-foreground">Even if it happened months ago</p>
            </div>
            <button className="btn-hero">
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
      <footer className="bg-muted py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/blah-blah/lovable-uploads/eb9f24bd-0f13-47c6-9f72-66d1fb56a5b4.png" alt="AFC Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <span className="text-lg font-semibold">Anti-Fraud Commission</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Contact: <a href="mailto:cases@afcinvestigations.com" className="text-primary hover:underline">
                cases@afcinvestigations.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <strong>Disclaimer:</strong> We provide investigative analysis and documentation. While some cases have resulted in partial recovery, 
              no outcome is guaranteed. This site is not affiliated with government or regulators. All investigations are conducted 
              independently for informational purposes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OlderCasesLanding;