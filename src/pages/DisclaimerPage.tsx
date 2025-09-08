import AFCHeader from "@/components/AFCHeader";
import ComplianceFooter from "@/components/ComplianceFooter";
import { Link } from "react-router-dom";

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <AFCHeader />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-lg md:text-xl font-semibold mb-4 text-foreground">Important Disclaimers</h1>
            <p className="text-[11px] md:text-xs text-[#777] max-w-2xl mx-auto">
              Please read these important disclaimers regarding our investigative services.
            </p>
          </div>

          <div className="text-xs md:text-sm text-[#777] leading-relaxed">

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Service Description</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                The Anti-Fraud Commission (AFC) provides <strong>investigative analysis and documentation services only</strong>. 
                Our service involves reviewing fraud cases, analyzing evidence, and providing documented findings 
                for informational purposes.
              </p>
              <p className="mb-3 text-[11px] md:text-xs">
                <strong>Important:</strong> We do not guarantee recovery of funds or any specific outcome. 
                While our analysis may identify potential recovery opportunities in some cases, 
                this is not assured and depends on many factors beyond our control.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Independent Service</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                AFC is an independent investigative service. We are not affiliated with any government 
                agencies, regulators, law enforcement, or financial institutions. Our investigations 
                are conducted independently for informational and documentation purposes only.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">No Guaranteed Outcomes</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                Our service provides analysis and documentation only. We make no guarantees, warranties, 
                or promises regarding:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Recovery of lost funds</li>
                <li>Legal outcomes or resolutions</li>
                <li>Specific timeframes for results</li>
                <li>Success rates or percentages</li>
              </ul>
              <p className="mb-3 text-[11px] md:text-xs">
                Past results do not guarantee future outcomes. Each case is unique and subject to 
                various factors beyond our control.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Limitation of Liability</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                To the maximum extent permitted by law, AFC shall not be liable for any direct, 
                indirect, incidental, special, consequential, or punitive damages, including but 
                not limited to loss of profits, data, use, goodwill, or other intangible losses 
                resulting from your use of our services.
              </p>
              <p className="mb-3 text-[11px] md:text-xs">
                Our total liability to you for any and all claims shall not exceed the amount 
                you paid for our services, if any.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Important Notice</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                We provide investigative analysis and documentation services only. 
                No outcome, recovery, or specific result can be guaranteed.
              </p>
              <p className="mb-3 text-[11px] md:text-xs">
                Every fraud case is unique. Past results, statistics, or case studies do not 
                predict or guarantee future outcomes for your specific situation. We provide 
                professional analysis and documentation services only.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <Link to="/" className="text-primary hover:underline text-[11px] md:text-xs">← Back to Home</Link>
          </div>
        </div>
      </main>

      <ComplianceFooter />
    </div>
  );
};

export default DisclaimerPage;