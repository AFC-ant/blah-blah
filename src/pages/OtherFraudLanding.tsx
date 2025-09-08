import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AFCHeader from "@/components/AFCHeader";
import LeadForm from "@/components/LeadForm";
import StatsSection from "@/components/StatsSection";
import VideoSection from "@/components/VideoSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import { useEffect } from "react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    fbq?: any;
    dataLayer?: any[];
  }
}

const OtherFraudLanding = () => {
  useEffect(() => {
    // Track page view
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_title: 'Other Fraud Types - AFC',
        page_location: window.location.href
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AFCHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Victim of Other Types of Fraud?
                <span className="block text-primary mt-2">We Can Help You Too</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Whether it's romance scams, crypto schemes, fake investments, or other fraudulent activities - 
                our independent investigators can help trace your funds and build your case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="text-lg px-8">
                  Start Case Review
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg border shadow-lg">
              <LeadForm variant="recent" />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Fraud We Handle */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Types of Fraud We Investigate</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our investigators have experience with all types of financial fraud and scams
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Romance Scams</h3>
                <p className="text-muted-foreground">Dating site fraudsters who build relationships to steal money</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Crypto Scams</h3>
                <p className="text-muted-foreground">Fake cryptocurrency exchanges and investment schemes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Investment Fraud</h3>
                <p className="text-muted-foreground">Ponzi schemes, fake stocks, and fraudulent investment platforms</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Business Email Compromise</h3>
                <p className="text-muted-foreground">Email fraud targeting businesses and wire transfers</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Tech Support Scams</h3>
                <p className="text-muted-foreground">Fake technical support that steals personal information</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Other Schemes</h3>
                <p className="text-muted-foreground">Any type of financial fraud or theft you've experienced</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <StatsSection />
      
      <VideoSection variant="recent" />
      
      <HowWeWorkSection />

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Common questions about investigating other types of fraud</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can you help with any type of fraud?</AccordionTrigger>
              <AccordionContent>
                Yes, our investigators have experience with all types of financial fraud including romance scams, 
                crypto fraud, investment schemes, business email compromise, and more. We adapt our investigation 
                methods to each specific type of fraud.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>What if I don't know what type of fraud I experienced?</AccordionTrigger>
              <AccordionContent>
                That's perfectly fine. Part of our investigation process is determining exactly what type of fraud 
                occurred. We'll analyze your case details and identify the fraud scheme that was used against you.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you work with law enforcement on these cases?</AccordionTrigger>
              <AccordionContent>
                Yes, we can provide our investigation findings to law enforcement agencies. Our reports are 
                professional and can support criminal investigations and civil litigation efforts.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Broker Fraud Link Button */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Issues with a broker or trading platform?
            </h3>
            <p className="text-muted-foreground mb-6">
              Withdrawal delays, suspicious activity, or blocked access to your funds? We specialize in broker investigations.
            </p>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <Link to="/">Submit broker case here</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 shadow-lg z-30">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <p className="font-semibold">Ready to start your investigation?</p>
            <p className="text-sm opacity-90">Free case review - no advance fees</p>
          </div>
          <Button variant="secondary" size="lg">
            Start Case Review
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4 pb-20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={`${import.meta.env.BASE_URL}lovable-uploads/eb9f24bd-0f13-47c6-9f72-66d1fb56a5b4.png`} alt="AFC Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Anti-Fraud Commission</h3>
              <p className="text-sm text-muted-foreground">Independent Investigations</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Professional fraud investigation services
          </p>
          <p className="text-sm text-muted-foreground">
            *We cannot guarantee recovery results. We provide independent investigation services only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OtherFraudLanding;