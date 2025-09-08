import { Link } from "react-router-dom";

const ComplianceFooter = () => {
  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/lovable-uploads/eb9f24bd-0f13-47c6-9f72-66d1fb56a5b4.png" alt="AFC Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <span className="text-lg font-semibold">Anti-Fraud Commission</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Contact: <a href="mailto:cases@afcinvestigations.com" className="text-primary hover:underline">
              cases@afcinvestigations.com
            </a>
          </p>
          
          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
              Disclaimer
            </Link>
            <Link to="/about-us" className="text-muted-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground text-center">
            © 2024 Anti-Fraud Commission. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ComplianceFooter;