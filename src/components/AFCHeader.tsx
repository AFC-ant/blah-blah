import { Link } from "react-router-dom";

const AFCHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-primary/5 rounded-full">
            <img 
              src="/lovable-uploads/eb9f24bd-0f13-47c6-9f72-66d1fb56a5b4.png" 
              alt="AFC Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full" 
              onError={(e) => {
                console.error('Logo failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-foreground">Anti-Fraud Commission</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">Independent Investigations</p>
          </div>
        </Link>
        
        <div className="text-right">
          <p className="text-xs sm:text-sm font-medium text-primary">No Advance Fees Required</p>
          <p className="text-xs text-muted-foreground hidden sm:block">Free case review</p>
        </div>
        
        {/* Navigation removed as requested */}
      </div>
    </header>
  );
};

export default AFCHeader;