const steps = [
  {
    step: "01",
    title: "Intake",
    description: "Secure collection of your case details, platform information, and timeline of events.",
    icon: "📝"
  },
  {
    step: "02", 
    title: "Evidence Analysis",
    description: "Thorough investigation of the platform, transaction records, and communication patterns.",
    icon: "🔍"
  },
  {
    step: "03",
    title: "Findings Report",
    description: "Detailed documentation of findings, evidence compilation, and assessment of the situation.",
    icon: "📋"
  },
  {
    step: "04",
    title: "Next Steps",
    description: "Recommendations for escalation, regulatory complaints, and potential recovery paths.",
    icon: "🎯"
  }
];

const HowWeWorkSection = () => {
  return (
    <section className="py-16 section-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach ensures thorough investigation and clear documentation of your case.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card-feature text-center">
              <div className="text-5xl mb-4">{step.icon}</div>
              <div className="text-primary font-bold text-xl mb-2">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;