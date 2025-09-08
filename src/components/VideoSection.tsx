interface VideoSectionProps {
  variant: "recent" | "older";
}

const VideoSection = ({ variant }: VideoSectionProps) => {
  const testimonialContent = variant === "recent" 
    ? {
        title: "Client Success Story",
        subtitle: "Recent Case Recovery",
        description: "James from California shares how AFC helped him recover funds from a suspicious forex broker that blocked his withdrawals for weeks.",
        clientName: "James K., California",
        clientCase: "Forex broker withdrawal delay - $45,000 recovered"
      }
    : {
        title: "Client Success Story", 
        subtitle: "Delayed Case Recovery",
        description: "Mark from Texas explains how AFC provided answers and recovery paths even 8 months after his initial loss to a crypto investment scheme.",
        clientName: "Mark R., Texas", 
        clientCase: "Crypto investment fraud - Evidence led to partial recovery after 8 months"
      };

  return (
    <section className="py-12 sm:py-16 section-darker">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            See How We <span className="text-gradient">Help</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Real stories from real clients and an inside look at our investigation process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">
          {/* Client Testimonial Video */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="relative aspect-video bg-gradient-to-br from-card to-muted rounded-xl overflow-hidden shadow-card border border-border group-hover:shadow-primary transition-all duration-300">
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background/20 to-muted/40">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-colors">
                      <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-primary font-medium">Play Testimonial</p>
                  </div>
                </div>
                
                {/* Video overlay with client info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <h3 className="text-primary font-semibold text-lg mb-1">{testimonialContent.subtitle}</h3>
                  <p className="text-foreground font-medium mb-2">{testimonialContent.clientName}</p>
                  <p className="text-sm text-muted-foreground">{testimonialContent.clientCase}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left px-2 sm:px-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">{testimonialContent.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {testimonialContent.description}
              </p>
            </div>
          </div>

          {/* How We Work Explainer Video */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl shadow-card border border-border group-hover:shadow-primary transition-all duration-300">
                {/* Actual Professional Video */}
                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe 
                    src="https://iframe.mediadelivery.net/embed/492019/848af09f-9b21-4e31-9249-e5329ef8cec6?autoplay=false&loop=false&muted=false&preload=true&responsive=true" 
                    loading="lazy" 
                    style={{ border: 0, position: 'absolute', top: 0, height: '100%', width: '100%' }} 
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
                    allowFullScreen={true}
                    title="AFC Investigation Process - Professional Explanation"
                    className="rounded-xl"
                  />
                </div>
                
                {/* Video overlay info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-primary font-semibold text-sm sm:text-lg mb-1">Professional Explanation</h3>
                  <p className="text-foreground font-medium mb-1 text-sm sm:text-base">AFC Investigation Process</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">1-minute overview of our methodology</p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left px-2 sm:px-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">How Our Process Works</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {variant === "recent" 
                  ? "Our lead investigator explains the step-by-step process we use to analyze recent fraud cases and identify recovery opportunities within the critical first few months."
                  : "Learn how our team approaches older cases with specialized techniques to uncover evidence and recovery paths even months or years after the initial incident."
                }
              </p>
            </div>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-base sm:text-lg font-semibold mb-2">Verified Results</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">All testimonials are from real clients with documented case outcomes</p>
          </div>
          
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-base sm:text-lg font-semibold mb-2">Confidential Process</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">All investigations conducted with complete client confidentiality</p>
          </div>
          
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-base sm:text-lg font-semibold mb-2">Fast Response</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Initial case review and contact within 24 hours of submission</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;