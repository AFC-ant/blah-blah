import { Link } from "react-router-dom";

const AFCHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
            <img 
              src="./lovable-uploads/bfe0bbad-91f7-4e33-888f-7379e2753293.png" 
              alt="AFC Logo" 
              className="w-full h-full object-contain rounded-full" 
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