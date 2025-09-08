import AFCHeader from "@/components/AFCHeader";
import { Link } from "react-router-dom";
import { Shield, Search, FileText, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <AFCHeader />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Anti-Fraud Commission</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Independent Investigation Team with extensive experience in analyzing fraud cases 
              and providing evidence-based documentation services.
            </p>
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <Shield className="w-16 h-16 text-primary" />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Anti-Fraud Commission exists to provide independent, thorough, and confidential 
                investigation services for fraud victims. We specialize in analyzing complex fraud 
                cases, documenting evidence, and providing clear findings that help victims understand 
                their situation and explore potential paths forward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-card p-6 rounded-lg border border-border">
                <Search className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Evidence-Based Analysis</h3>
                <p className="text-muted-foreground">
                  Our investigative process relies on thorough evidence collection and analysis, 
                  ensuring all findings are backed by verifiable information and documentation.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <FileText className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Comprehensive Documentation</h3>
                <p className="text-muted-foreground">
                  We provide detailed reports and documentation that clearly outline our findings, 
                  making complex information accessible and actionable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Experience</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Years of dedicated investigation work have given us deep insights into fraud patterns 
                and recovery opportunities across multiple jurisdictions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$200M+</div>
                <div className="text-sm text-muted-foreground">Funds Traced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1,000+</div>
                <div className="text-sm text-muted-foreground">Victims Consulted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Countries Investigated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">72hrs</div>
                <div className="text-sm text-muted-foreground">Avg. Initial Findings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  We maintain complete transparency in our investigation process and findings, 
                  ensuring you understand every step of our analysis.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Confidentiality</h3>
                <p className="text-muted-foreground">
                  All case information is handled with strict confidentiality protocols, 
                  protecting your privacy and sensitive details throughout the process.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Independence</h3>
                <p className="text-muted-foreground">
                  As an independent organization, we have no conflicts of interest and 
                  conduct all investigations with complete objectivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Our Presence</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Headquartered in the United States with investigative capabilities across multiple jurisdictions, 
              we maintain the resources and expertise necessary to handle complex international fraud cases.
            </p>
            <div className="bg-card p-6 rounded-lg border border-border inline-block">
              <h3 className="text-xl font-semibold mb-2">United States Office</h3>
              <p className="text-muted-foreground">
                Professional investigation team with secure facilities<br />
                Contact: <a href="mailto:info@afcinvestigations.com" className="text-primary hover:underline">info@afcinvestigations.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Case Review?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experienced investigation team is ready to analyze your case and provide 
              comprehensive documentation of our findings.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Start Case Review
            </Link>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl">
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

export default AboutUs;