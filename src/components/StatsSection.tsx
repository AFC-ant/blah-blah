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