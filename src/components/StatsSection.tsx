const stats = [
  {
    value: "$200M+",
    label: "Fraudulent Transactions Traced",
    icon: "🔍"
  },
  {
    value: "1000+",
    label: "Victims Consulted Worldwide",
    icon: "🌍"
  },
  {
    value: "25+", 
    label: "Countries Investigated",
    icon: "🗺️"
  },
  {
    value: "72h",
    label: "Avg. Initial Findings Delivered",
    icon: "⚡"
  },
  {
    value: "Many",
    label: "Evidence → Escalation Options in Cases",
    icon: "📋"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Track Record</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Evidence-based investigations that deliver results for fraud victims worldwide.
          </p>
        </div>

        {/* Professional Video Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe 
                src="https://iframe.mediadelivery.net/embed/492019/d91fe9f8-ddd4-4c22-9ac8-255dac446d0a?autoplay=true&loop=true&muted=true&preload=true&responsive=true" 
                loading="lazy" 
                style={{ border: 0, position: 'absolute', top: 0, height: '100%', width: '100%' }} 
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
                allowFullScreen={true}
                title="Professional Investigation Process"
              />
            </div>
            
            {/* Design overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-primary font-semibold text-lg mb-1">Professional Explanation</h3>
              <p className="text-foreground font-medium mb-1">AFC Investigation Process</p>
              <p className="text-sm text-muted-foreground">1-minute overview of our methodology</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="card-stats text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;