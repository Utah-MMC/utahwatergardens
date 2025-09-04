import React from 'react';

function Process() {
  const processSteps = [
    {
      icon: "🔍",
      title: "1. Assessment & Consultation",
      description: "We evaluate your pond's current condition and discuss your needs and goals."
    },
    {
      icon: "📋",
      title: "2. Service Planning",
      description: "We create a customized plan tailored to your specific pond and requirements."
    },
    {
      icon: "⚙️",
      title: "3. Professional Service",
      description: "Our qualified technicians perform the work with attention to detail and quality."
    },
    {
      icon: "✅",
      title: "4. Follow-up & Maintenance",
      description: "We ensure your satisfaction and provide ongoing maintenance recommendations."
    }
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <h2 className="process-title">Our Professional Process</h2>
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className={`process-icon process-icon-${index + 1}`}>
                <span>{step.icon}</span>
              </div>
              <div className="process-step-title">{step.title}</div>
              <div className="process-step-desc">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process; 