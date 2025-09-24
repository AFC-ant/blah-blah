const VideoSection = () => {
  return (
    <section className="py-12 sm:py-16 section-darker">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Our Track <span className="text-gradient">Record</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Evidence-based investigations that deliver results for fraud victims worldwide.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Client Testimonial Video */}
          <div className="space-y-6">
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-sm border border-border">
                {/* Actual Testimonial Video */}
                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe 
                    src="https://iframe.mediadelivery.net/embed/492019/473c06c8-a799-4db4-8ac8-47b1592bb89b?autoplay=true&loop=true&muted=true&preload=true&responsive=true" 
                    loading="lazy" 
                    style={{ border: 0, position: 'absolute', top: 0, height: '100%', width: '100%' }} 
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
                    allowFullScreen={true}
                    title="Our Track Record - Professional Investigation Video"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center px-2 sm:px-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Professional Investigation Results</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                See how our evidence-based approach delivers real outcomes for fraud victims worldwide.
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