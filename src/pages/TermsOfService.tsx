import AFCHeader from "@/components/AFCHeader";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <AFCHeader />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-xs md:text-sm text-[#777] leading-relaxed">
            <h1 className="text-lg md:text-xl font-semibold mb-6 text-foreground">Terms of Service</h1>
            <p className="text-[#777] mb-6 text-[11px] md:text-xs">Effective Date: January 1, 2024</p>

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
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Eligibility</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                You must be at least 18 years old to use our services. By using our website and 
                services, you represent that you meet this age requirement and have the legal 
                capacity to enter into these terms.
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
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">User Responsibilities</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                You agree to:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Provide accurate and truthful information</li>
                <li>Use our services for legitimate purposes only</li>
                <li>Not misrepresent facts or provide false documentation</li>
                <li>Understand that our service is investigative analysis only</li>
              </ul>
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
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Intellectual Property</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                All content, trademarks, and intellectual property on this website remain the 
                property of AFC. You may not reproduce, distribute, or create derivative works 
                without express written permission.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Termination</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                We reserve the right to terminate or suspend access to our services at our sole 
                discretion, without notice, for conduct that we believe violates these Terms of 
                Service or is harmful to other users or third parties.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Governing Law</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                These Terms of Service shall be governed by and construed in accordance with the 
                laws of the United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Changes to Terms</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                We reserve the right to modify these terms at any time. We will notify users of 
                any changes by posting the updated terms on this page and updating the effective date.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Contact Information</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <p className="mb-3 text-[11px] md:text-xs">
                Email: <a href="mailto:support@detectiveblockchain.com" className="text-primary hover:underline text-[11px] md:text-xs">support@detectiveblockchain.com</a>
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

export default TermsOfService;