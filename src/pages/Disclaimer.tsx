import AFCHeader from "@/components/AFCHeader";
import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <AFCHeader />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-xs md:text-sm text-[#777] leading-relaxed">
            <h1 className="text-lg md:text-xl font-semibold mb-6 text-foreground">Disclaimer</h1>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Service Limitations</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                The Anti-Fraud Commission (AFC) provides investigative analysis and documentation 
                services for informational purposes only. Our service involves:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Case review and analysis of fraud circumstances</li>
                <li>Documentation of findings and evidence</li>
                <li>Identification of potential recovery opportunities (when applicable)</li>
                <li>Preparation of investigative reports</li>
              </ul>
              <p className="mb-3 text-[11px] md:text-xs">
                <strong>Important:</strong> While some cases may reveal recovery opportunities, 
                this is not assured and depends on numerous factors beyond our control, including 
                but not limited to jurisdictional issues, asset availability, legal complexities, 
                and cooperation from third parties.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">No Legal or Financial Advice</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                The information and analysis provided by AFC does not constitute:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Legal advice or representation</li>
                <li>Financial advice or investment guidance</li>
                <li>Regulatory or compliance advice</li>
                <li>Guaranteed solutions or outcomes</li>
              </ul>
              <p className="mb-3 text-[11px] md:text-xs">
                You should consult with qualified legal and financial professionals regarding 
                your specific situation and any actions you may wish to take.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Independent Service</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                AFC operates as an independent investigative service. We are not affiliated with:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Government agencies or regulators</li>
                <li>Law enforcement organizations</li>
                <li>Financial institutions or brokers</li>
                <li>Recovery or asset retrieval companies</li>
              </ul>
              <p className="mb-3 text-[11px] md:text-xs">
                Our investigations are conducted independently and our findings are based on 
                available information and evidence at the time of analysis.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Results May Vary</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                Each fraud case is unique and subject to different circumstances, jurisdictions, 
                and complexities. Factors that may affect outcomes include:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Time elapsed since the fraudulent activity</li>
                <li>Jurisdiction and applicable laws</li>
                <li>Availability and location of assets</li>
                <li>Cooperation from involved parties</li>
                <li>Quality and completeness of available evidence</li>
              </ul>
              <p className="mb-3 text-[11px] md:text-xs">
                Past results and statistics do not guarantee future outcomes for your specific case.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Use at Your Own Risk</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                By using our services, you acknowledge that:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>You understand the limitations of our service</li>
                <li>You will not rely solely on our analysis for important decisions</li>
                <li>You will seek appropriate professional advice when needed</li>
                <li>You understand that no outcome is guaranteed</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Contact Information</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                If you have questions about this disclaimer or our services, please contact us at:
              </p>
              <p className="mb-3 text-[11px] md:text-xs">
                Email: <a href="mailto:support@detectiveblockchain.com" className="text-primary hover:underline text-[11px] md:text-xs">support@detectiveblockchain.com</a>
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Important Notice</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                We provide independent investigation and documentation services. No outcome or recovery can be guaranteed.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <Link to="/" className="text-primary hover:underline text-[11px] md:text-xs">← Back to Home</Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] md:text-xs text-muted-foreground">
            © 2024 Anti-Fraud Commission. Independent investigative service.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Disclaimer;