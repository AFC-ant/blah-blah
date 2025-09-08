import { Shield, Eye, FileSearch, Users } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Independent",
      description: "Unbiased analysis"
    },
    {
      icon: Eye,
      title: "Confidential",
      description: "Secure & private"
    },
    {
      icon: FileSearch,
      title: "Evidence-Based",
      description: "Factual documentation"
    },
    {
      icon: Users,
      title: "Verified Experts",
      description: "Cybercrime specialists"
    }
  ];

  return (
    <section className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by fraud victims worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-semibold mb-1">{badge.title}</h3>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;