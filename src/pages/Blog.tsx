import AFCHeader from "@/components/AFCHeader";
import { Link } from "react-router-dom";
import { AlertTriangle, TrendingUp, MapPin, Shield } from "lucide-react";

const Blog = () => {
  const stats = [
    {
      title: "$10.3 Billion",
      subtitle: "Lost to fraud in 2022",
      source: "FTC Consumer Sentinel Data"
    },
    {
      title: "2.4 Million",
      subtitle: "Fraud reports filed",
      source: "FTC 2022 Report"
    },
    {
      title: "$3,000",
      subtitle: "Median loss per victim",
      source: "FBI IC3 2022 Report"
    },
    {
      title: "69%",
      subtitle: "Increase in crypto fraud",
      source: "FTC Analysis"
    }
  ];

  const stateAlerts = [
    {
      state: "California",
      type: "Cryptocurrency Scams",
      description: "Romance scams involving crypto investments, fake trading platforms",
      icon: AlertTriangle,
      color: "text-red-500"
    },
    {
      state: "New York",
      type: "Investment Fraud", 
      description: "Ponzi schemes, fake hedge funds, securities fraud",
      icon: TrendingUp,
      color: "text-blue-500"
    },
    {
      state: "Florida",
      type: "Elder Fraud",
      description: "Medicare scams, grandparent scams, tech support fraud",
      icon: Shield,
      color: "text-orange-500"
    },
    {
      state: "Texas",
      type: "Business Email Compromise",
      description: "CEO fraud, wire transfer scams, vendor impersonation",
      icon: MapPin,
      color: "text-green-500"
    }
  ];

  const regulations = [
    {
      agency: "Federal Trade Commission (FTC)",
      role: "Consumer protection and fraud prevention",
      resource: "ReportFraud.ftc.gov",
      link: "https://reportfraud.ftc.gov"
    },
    {
      agency: "Securities and Exchange Commission (SEC)",
      role: "Investment fraud enforcement",
      resource: "Investor.gov fraud alerts",
      link: "https://investor.gov"
    },
    {
      agency: "FBI Internet Crime Complaint Center (IC3)",
      role: "Cybercrime reporting and investigation",
      resource: "IC3.gov complaint filing",
      link: "https://ic3.gov"
    },
    {
      agency: "Consumer Financial Protection Bureau (CFPB)",
      role: "Financial fraud protection",
      resource: "ConsumerFinance.gov complaints",
      link: "https://consumerfinance.gov"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <AFCHeader />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              US Fraud Prevention Resources
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Stay informed about the latest fraud trends, statistics, and protective measures 
              with data from federal agencies and investigative resources.
            </p>
          </div>

          {/* US Fraud Statistics */}
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
              2022 US Fraud Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.title}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-2">
                    {stat.subtitle}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.source}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* State-Specific Fraud Alerts */}
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
              Common Scams by Region
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stateAlerts.map((alert, index) => {
                const Icon = alert.icon;
                return (
                  <div key={index} className="bg-card p-6 rounded-lg border border-border">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-full bg-muted ${alert.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {alert.state} - {alert.type}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {alert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Note:</strong> These are regional trends based on federal reporting data. 
                Fraud can occur in any location and may target any demographic.
              </p>
            </div>
          </section>

          {/* US Regulatory References */}
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
              Federal Fraud Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regulations.map((reg, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">
                    {reg.agency}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {reg.role}
                  </p>
                  <a 
                    href={reg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    {reg.resource} →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-muted p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              Need Professional Investigation?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team works alongside federal agencies and uses official resources 
              to provide comprehensive fraud investigation services.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Case Review
            </Link>
          </section>

          <div className="mt-8 pt-6 border-t border-border">
            <Link to="/" className="text-primary hover:underline text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Anti-Fraud Commission. Independent investigative service.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;