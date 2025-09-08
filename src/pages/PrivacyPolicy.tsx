import AFCHeader from "@/components/AFCHeader";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <AFCHeader />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Effective Date: January 1, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="mb-4">
                When you use our case review service, we collect the following information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Full name and phone number (required for case review)</li>
                <li>Email address (optional)</li>
                <li>Case timing and amount information</li>
                <li>UTM parameters and referral source for analytics</li>
                <li>Basic website usage data through analytics cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="mb-4">
                Your information is used solely for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Conducting case review and analysis</li>
                <li>Contacting you regarding your specific case</li>
                <li>Improving our investigative services</li>
                <li>Basic website analytics (aggregated, non-personal data)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="mb-4">
                All personal information is stored in secure databases with industry-standard encryption. 
                We implement appropriate technical and organizational measures to protect your data against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties. 
                Information may only be shared with trusted service providers who assist in conducting 
                our investigations, and only under strict confidentiality agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
              <p className="mb-4">
                We use basic analytics cookies to understand website usage patterns. We do not use 
                third-party advertising pixels unless explicitly disclosed. You can disable cookies 
                in your browser, though this may affect site functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="mb-4">
                Under GDPR and CCPA, you have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, contact us at <a href="mailto:privacy@afcinvestigations.com" className="text-primary hover:underline">privacy@afcinvestigations.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-4">
                Email: <a href="mailto:privacy@afcinvestigations.com" className="text-primary hover:underline">privacy@afcinvestigations.com</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the effective date.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Anti-Fraud Commission. Independent investigative service.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;