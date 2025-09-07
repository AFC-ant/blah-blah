import { Button } from "@/components/ui/button";
import { useTracking, setupVideoTracking } from "@/hooks/useTracking";
import { useEffect } from "react";

interface VideoSectionProps {
  variant: "recent" | "older";
}

const VideoSection = ({ variant }: VideoSectionProps) => {
  const { trackVideoPlay, trackVideoView } = useTracking();
  
  const testimonialContent = variant === "recent" 
    ? {
        title: "Client Success Story",
        subtitle: "Recent Case Recovery",
        description: "James from California shares how AFC helped him recover funds from a suspicious forex broker that blocked his withdrawals for weeks.",
        clientName: "James K., California",
        clientCase: "Forex broker withdrawal delay - $45,000 recovered",
        videoId: "testimonialVideo",
        videoName: "Recent Case Testimonial"
      }
    : {
        title: "Client Success Story", 
        subtitle: "Delayed Case Recovery",
        description: "Mark from Texas explains how AFC provided answers and recovery paths even 8 months after his initial loss to a crypto investment scheme.",
        clientName: "Mark R., Texas", 
        clientCase: "Crypto investment fraud - Evidence led to partial recovery after 8 months",
        videoId: "testimonialVideo",
        videoName: "Older Case Testimonial"
      };

  const explainerContent = {
    title: "How Our Process Works",
    subtitle: "Professional Explanation",
    description: variant === "recent" 
      ? "Our lead investigator explains the step-by-step process we use to analyze recent fraud cases and identify recovery opportunities within the critical first few months."
      : "Learn how our team approaches older cases with specialized techniques to uncover evidence and recovery paths even months or years after the initial incident.",
    videoId: "explainerVideo",
    videoName: "Process Explainer"
  };

  // Setup video tracking when component mounts
  useEffect(() => {
    const cleanup1 = setupVideoTracking(
      testimonialContent.videoId,
      testimonialContent.videoName,
      trackVideoPlay,
      trackVideoView
    );
    const cleanup2 = setupVideoTracking(
      explainerContent.videoId,
      explainerContent.videoName,
      trackVideoPlay,
      trackVideoView
    );
    
    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, [testimonialContent.videoId, testimonialContent.videoName, explainerContent.videoId, explainerContent.videoName, trackVideoPlay, trackVideoView]);

  return (
    <section className="py-16 section-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See How We <span className="text-gradient">Help</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real clients and an inside look at our investigation process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Client Testimonial Video */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="relative aspect-video bg-gradient-to-br from-card to-muted rounded-xl overflow-hidden shadow-card border border-border group-hover:shadow-primary transition-all duration-300">
                {/* Testimonial Video */}
                <video 
                  id={testimonialContent.videoId}
                  className="absolute inset-0 w-full h-full object-cover"
                  poster="/placeholder.svg"
                  controls
                  preload="metadata"
                >
                  <source src="#" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Fallback play button for when video isn't loaded */}
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
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-3">{testimonialContent.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {testimonialContent.description}
              </p>
            </div>
          </div>

          {/* How We Work Explainer Video */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="relative aspect-video bg-gradient-to-br from-card to-muted rounded-xl overflow-hidden shadow-card border border-border group-hover:shadow-primary transition-all duration-300">
                {/* Explainer Video */}
                <video 
                  id={explainerContent.videoId}
                  className="absolute inset-0 w-full h-full object-cover"
                  poster="/placeholder.svg"
                  controls
                  preload="metadata"
                >
                  <source src="#" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Fallback play button */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background/20 to-muted/40">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-colors">
                      <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-primary font-medium">Play Explainer</p>
                  </div>
                </div>
                
                {/* Video overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <h3 className="text-primary font-semibold text-lg mb-1">{explainerContent.subtitle}</h3>
                  <p className="text-foreground font-medium mb-2">AFC Investigation Process</p>
                  <p className="text-sm text-muted-foreground">3-minute overview of our methodology</p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-3">{explainerContent.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {explainerContent.description}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2">Verified Results</h4>
            <p className="text-sm text-muted-foreground">All testimonials are from real clients with documented case outcomes</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2">Confidential Process</h4>
            <p className="text-sm text-muted-foreground">All investigations conducted with complete client confidentiality</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2">Fast Response</h4>
            <p className="text-sm text-muted-foreground">Initial case review and contact within 24 hours of submission</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;