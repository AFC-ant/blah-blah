import AFCHeader from "@/components/AFCHeader";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <AFCHeader />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-xs md:text-sm text-[#777] leading-relaxed">
            <h1 className="text-lg md:text-xl font-semibold mb-6 text-foreground">Privacy Policy</h1>
            <p className="text-[#777] mb-6 text-[11px] md:text-xs">Effective Date: January 1, 2024</p>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Information We Collect</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                When you use our case review service, we collect the following information:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Full name and phone number (required for case review)</li>
                <li>Email address (optional)</li>
                <li>Case timing and amount information</li>
                <li>UTM parameters and referral source for analytics</li>
                <li>Basic website usage data through analytics cookies</li>
                <li>IP addresses for security, analytics, and technical purposes</li>
                <li>Google Ads conversion tracking data and advertising identifiers</li>
                <li>Device information, browser type, and operating system</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Google Ads & Tracking</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                We use Google Ads conversion tracking to measure the effectiveness of our advertising campaigns. 
                This includes Google Analytics and Google Tag Manager which may collect:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Page views, session duration, and user interactions</li>
                <li>Advertising click data and conversion events</li>
                <li>Cross-device tracking for advertising optimization</li>
                <li>Remarketing data for targeted advertising</li>
              </ul>
              <p className="mb-3 text-[11px] md:text-xs">
                You can opt-out of Google Ads personalization by visiting <a href="https://adssettings.google.com" className="text-primary hover:underline text-[11px] md:text-xs" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">How We Use Your Information</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                Your information is used solely for:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Conducting case review and analysis</li>
                <li>Contacting you regarding your specific case</li>
                <li>Improving our investigative services</li>
                <li>Basic website analytics (aggregated, non-personal data)</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Data Security</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                All personal information is stored in secure databases with industry-standard encryption. 
                We implement appropriate technical and organizational measures to protect your data against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Data Sharing</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                We do not sell, trade, or otherwise transfer your personal information to third parties. 
                Information may only be shared with trusted service providers who assist in conducting 
                our investigations, and only under strict confidentiality agreements.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Cookies</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                We use basic analytics cookies to understand website usage patterns. We do not use 
                third-party advertising pixels unless explicitly disclosed. You can disable cookies 
                in your browser, though this may affect site functionality.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Your Rights</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                Under GDPR and CCPA, you have the right to:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
              <p className="mb-3 text-[11px] md:text-xs">
                To exercise these rights, contact us at <a href="mailto:support@detectiveblockchain.com" className="text-primary hover:underline text-[11px] md:text-xs">support@detectiveblockchain.com</a>.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">California Consumer Privacy Act (CCPA)</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                California residents have additional rights under the CCPA:
              </p>
              <ul className="list-disc pl-4 mb-3 text-[11px] md:text-xs space-y-1">
                <li><strong>Right to Know:</strong> Request information about personal information collected, used, disclosed, or sold</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal information we have collected</li>
                <li><strong>Right to Opt-Out:</strong> Opt-out of the sale of personal information (we do not sell personal information)</li>
                <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising CCPA rights</li>
              </ul>
              <p className="mb-3 text-[11px] md:text-xs">
                <strong>Categories of Information Collected:</strong> Identifiers (name, phone, email), commercial information (case details), 
                internet activity (website usage), and professional information (case circumstances).
              </p>
              <p className="mb-3 text-[11px] md:text-xs">
                <strong>Business Purpose:</strong> Case investigation, customer service, security, and service improvement.
              </p>
              <p className="mb-3 text-[11px] md:text-xs">
                To submit a CCPA request, email us at <a href="mailto:privacy@detectiveblockchain.com" className="text-primary hover:underline text-[11px] md:text-xs">privacy@detectiveblockchain.com</a> 
                with "CCPA Request" in the subject line.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Contact Information</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-3 text-[11px] md:text-xs">
                Email: <a href="mailto:support@detectiveblockchain.com" className="text-primary hover:underline text-[11px] md:text-xs">support@detectiveblockchain.com</a>
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-sm md:text-base font-medium mb-3 text-foreground">Updates to This Policy</h2>
              <p className="mb-3 text-[11px] md:text-xs">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the effective date.
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

export default PrivacyPolicy;