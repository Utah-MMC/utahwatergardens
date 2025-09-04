import React from 'react';

function Services() {
  const services = [
    {
      title: "Pond Cleanings",
      description: "Comprehensive cleaning service for your pond",
      price: "Starting at $150",
      features: [
        "Clean all sediment and muck",
        "Pressure wash algae and grime",
        "Clean filter pads and medium",
        "Clean skimmer filters",
        "Re-pot and fertilize plants",
        "Water conditioning",
        "Improvement recommendations"
      ],
      color: "#90EE90"
    },
    {
      title: "Pond Maintenance",
      description: "Customized maintenance plans for your pond",
      price: "Custom Pricing",
      features: [
        "Regular maintenance schedules",
        "Water quality monitoring",
        "Plant care and fertilization",
        "Equipment maintenance",
        "Seasonal adjustments",
        "Health assessments",
        "Preventive care"
      ],
      color: "#20B2AA"
    },
    {
      title: "Pond Construction",
      description: "Professional pond building services",
      price: "Starting at $2,500",
      features: [
        "Custom design consultation",
        "Site evaluation",
        "Professional construction",
        "Equipment installation",
        "Plant selection",
        "Fish stocking options",
        "Warranty included"
      ],
      color: "#008B8B"
    },
    {
      title: "Pond Repair & Rebuild",
      description: "Expert repair and restoration services",
      price: "Starting at $500",
      features: [
        "Leak detection and repair",
        "Equipment replacement",
        "Structural repairs",
        "Complete rebuilds",
        "Emergency services",
        "Quality guarantee",
        "Follow-up maintenance"
      ],
      color: "#4682B4"
    },
    {
      title: "Pond Dredging",
      description: "Professional dredging for larger water features",
      price: "Custom Pricing",
      features: [
        "Scuba diver services",
        "Sediment removal",
        "Equipment operation",
        "Large pond expertise",
        "Lake dredging",
        "Environmental compliance",
        "Site restoration"
      ],
      color: "#556B2F"
    },
    {
      title: "Pond Consultations",
      description: "Expert assessment and recommendations",
      price: "Starting at $75",
      features: [
        "On-site evaluation",
        "Detailed assessment report",
        "Equipment condition review",
        "Size and volume analysis",
        "Plant identification",
        "Improvement recommendations",
        "Maintenance planning"
      ],
      color: "#8FBC8F"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2>Professional Pond Services</h2>
          <p>We offer comprehensive pond services to keep your water feature beautiful and healthy. From routine maintenance to major construction projects, our qualified technicians are here to help.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <h3>{service.title}</h3>
                <p className="description">{service.description}</p>
                <div className="service-price">{service.price}</div>
              </div>
              <div className="service-features" style={{ backgroundColor: service.color }}>
                <ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="checkmark">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-cta">
                <form action="https://formspree.io/f/xdkdnrgp" method="POST" style={{ display: 'inline' }}>
                  <input type="hidden" name="subject" value={`Pond Service Request - ${service.title}`} />
                  <input type="hidden" name="message" value={`New service request for ${service.title}`} />
                  <input type="hidden" name="service" value={service.title} />
                  <button type="submit">
                    Get Quote
                    <span style={{ color: '#22c55e' }}>→</span>
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 