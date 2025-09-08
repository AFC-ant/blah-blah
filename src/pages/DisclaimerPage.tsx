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
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Service Nature</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                The Anti-Fraud Commission (AFC) is an <strong>independent investigative service</strong> that provides:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Analysis of fraud cases and circumstances</li>
                <li>Documentation of findings and evidence</li>
                <li>Professional investigation reports</li>
                <li>Identification of potential paths forward (when applicable)</li>
              </ul>
              <p className="mb-3 text-[11px] md:text-xs">
                <strong>We are NOT:</strong> A recovery service, legal firm, financial advisor, or government agency.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">No Guaranteed Outcomes</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                While our investigations may reveal recovery opportunities in some cases, this is 
                <strong> not guaranteed</strong> and depends on numerous factors including:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Jurisdiction and applicable laws</li>
                <li>Time elapsed since the fraud occurred</li>
                <li>Availability and location of assets</li>
                <li>Complexity of the fraud scheme</li>
                <li>Cooperation from involved parties</li>
                <li>Legal and regulatory limitations</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Independent Analysis</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                AFC operates independently and is not affiliated with:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Government agencies or regulators</li>
                <li>Law enforcement organizations</li>
                <li>Financial institutions or brokers</li>
                <li>Recovery or asset retrieval companies</li>
                <li>Legal firms or attorneys</li>
              </ul>
              <p className="mb-3 text-[11px] md:text-xs">
                Our findings are based on available information and evidence at the time of analysis.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Professional Advice</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                Our analysis and documentation does not constitute:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Legal advice or representation</li>
                <li>Financial or investment guidance</li>
                <li>Regulatory or compliance advice</li>
                <li>Guaranteed solutions or outcomes</li>
              </ul>
              <p className="mb-3 text-[11px] md:text-xs">
                You should consult with qualified legal and financial professionals regarding 
                your specific situation and any actions you may consider taking.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">User Acknowledgment</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                By using our services, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>You understand our service is investigative analysis only</li>
                <li>No recovery or specific outcome is guaranteed</li>
                <li>Results may vary significantly between cases</li>
                <li>You will seek appropriate professional advice when needed</li>
                <li>You will not rely solely on our analysis for important decisions</li>
              </ul>
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