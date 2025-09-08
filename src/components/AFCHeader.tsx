import { Link } from "react-router-dom";

const AFCHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={`${import.meta.env.BASE_URL}lovable-uploads/eb9f24bd-0f13-47c6-9f72-66d1fb56a5b4.png`} alt="AFC Logo" className="w-full h-full object-contain rounded-full" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Anti-Fraud Commission</h1>
            <p className="text-sm text-muted-foreground">Independent Investigations</p>
          </div>
        </Link>
        
        <div className="text-right">
          <p className="text-sm font-medium text-primary">No Advance Fees Required</p>
          <p className="text-xs text-muted-foreground">Free case review</p>
        </div>
        
        {/* Navigation removed as requested */}
      </div>
    </header>
  );
};

export default AFCHeader;