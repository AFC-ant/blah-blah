import { Link } from "react-router-dom";

const AFCHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">AFC</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Anti-Fraud Commission</h1>
            <p className="text-sm text-muted-foreground">Independent Investigations</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/recent-cases" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Recent Cases
          </Link>
          <Link 
            to="/older-cases" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Older Cases
          </Link>
          <button className="btn-secondary">
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default AFCHeader;