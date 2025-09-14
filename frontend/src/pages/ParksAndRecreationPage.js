import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StandardHero from '../components/StandardHero';
import './ParksAndRecreationPage.css';

const ParksAndRecreationPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Municipal Pond Maintenance",
      description: "Regular maintenance services for city parks, recreational facilities, and municipal water features.",
      features: [
        "Weekly/monthly maintenance schedules",
        "Water quality testing and treatment",
        "Algae control and prevention",
        "Debris removal and cleanup",
        "Equipment maintenance and repair"
      ],
      icon: "🏛️"
    },
    {
      title: "Lake Dredging Services",
      description: "Professional lake and pond dredging to restore water depth and improve water quality.",
      features: [
        "Truxor T50 amphibious excavator",
        "Sediment removal and disposal",
        "Shoreline restoration",
        "Minimal environmental impact",
        "Compliance with environmental regulations"
      ],
      icon: "🚤"
    },
    {
      title: "Water Feature Design & Construction",
      description: "Custom water features designed specifically for parks and recreational areas.",
      features: [
        "Fountain installations",
        "Stream and waterfall systems",
        "Interactive water features",
        "ADA-compliant designs",
        "Durable, low-maintenance materials"
      ],
      icon: "⛲"
    },
    {
      title: "Emergency Response Services",
      description: "Rapid response for water quality issues, equipment failures, and emergency situations.",
      features: [
        "24/7 emergency response",
        "Fish kill prevention and treatment",
        "Equipment failure repairs",
        "Water quality crisis management",
        "Public safety compliance"
      ],
      icon: "🚨"
    }
  ];

  const benefits = [
    {
      title: "Cost-Effective Solutions",
      description: "Reduce long-term maintenance costs with our comprehensive service packages and preventive maintenance programs.",
      icon: "💰"
    },
    {
      title: "Environmental Compliance",
      description: "Ensure compliance with environmental regulations and maintain water quality standards for public safety.",
      icon: "🌱"
    },
    {
      title: "Professional Expertise",
      description: "15+ years of experience in municipal water feature management and maintenance.",
      icon: "👨‍🔬"
    },
    {
      title: "Reliable Service",
      description: "Consistent, dependable service with detailed reporting and documentation for your records.",
      icon: "📋"
    }
  ];

  const testimonials = [
    {
      quote: "Utah Water Gardens has been maintaining our city's pond for over 3 years. Their professional service and attention to detail have kept our water feature in excellent condition.",
      author: "City of Salt Lake Parks Department",
      location: "Salt Lake City, UT"
    },
    {
      quote: "The lake dredging service exceeded our expectations. They completed the project on time and within budget, and the results speak for themselves.",
      author: "Weber County Parks & Recreation",
      location: "Weber County, UT"
    },
    {
      quote: "Their emergency response service saved our pond during a critical water quality issue. Professional, fast, and effective.",
      author: "Davis County Parks",
      location: "Davis County, UT"
    }
  ];

  const equipment = [
    {
      name: "Truxor T50 Amphibious Excavator",
      description: "Specialized equipment for lake dredging and shoreline work",
      image: "/images/truxor-equipment-1.jpg"
    },
    {
      name: "Professional Water Testing Equipment",
      description: "Advanced water quality testing and monitoring systems",
      image: "/images/pondDredging-topaz-enhance-3.9x.jpeg"
    },
    {
      name: "Aquatic Plant Management Tools",
      description: "Specialized equipment for aquatic plant control and management",
      image: "/images/pondMaintenance-topaz-denoise-enhance-3.9x.jpeg"
    }
  ];

  return (
    <>
      <SEO 
        title="Parks & Recreation Services - Municipal Pond & Lake Maintenance | Utah Water Gardens"
        description="Professional pond and lake maintenance services for parks departments, recreational facilities, and municipal water features. Lake dredging, water quality management, and emergency response services."
        keywords="parks and recreation, municipal pond maintenance, lake dredging, city parks, recreational facilities, water quality management, Truxor T50, public water features, municipal services"
        canonical="https://utahwatergardens.com/parksandrecreation"
      />
      <div className={`parks-recreation-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <StandardHero 
          title="Parks & Recreation Services"
          subtitle="Professional pond and lake maintenance services for municipal parks, recreational facilities, and public water features"
          backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
          primaryButtonText="REQUEST PROPOSAL"
          primaryButtonLink="tel:(801) 590-8516"
          secondaryButtonText="VIEW SERVICES"
          secondaryButtonLink="#services"
        />

        {/* Main Content */}
        <div className="main-content-gradient">
          {/* Introduction Section */}
          <section className="parks-intro">
            <div className="container">
              <div className="intro-content">
                <h2>Trusted by Municipal Parks & Recreation Departments</h2>
                <p className="intro-text">
                  Utah Water Gardens has been providing professional pond and lake maintenance services 
                  to parks departments, recreational facilities, and municipal organizations throughout Utah. 
                  Our specialized equipment and expertise ensure your public water features remain clean, 
                  safe, and beautiful for your community to enjoy.
                </p>
                
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Municipal Clients</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Compliance Rate</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Emergency Response</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="parks-services">
            <div className="container">
              <h2>Municipal Services</h2>
              <p className="section-subtitle">
                Comprehensive water feature management services designed specifically for parks and recreation departments
              </p>
              
              <div className="services-grid">
                {services.map((service, index) => (
                  <div key={index} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="parks-benefits">
            <div className="container">
              <h2>Why Choose Utah Water Gardens for Your Municipal Needs</h2>
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-card">
                    <div className="benefit-icon">{benefit.icon}</div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Equipment Section */}
          <section className="parks-equipment">
            <div className="container">
              <h2>Specialized Municipal Equipment</h2>
              <p className="section-subtitle">
                Professional-grade equipment designed for large-scale municipal projects
              </p>
              
              <div className="equipment-grid">
                {equipment.map((item, index) => (
                  <div key={index} className="equipment-card">
                    <div className="equipment-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="equipment-content">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="parks-testimonials">
            <div className="container">
              <h2>Trusted by Parks Departments Across Utah</h2>
              <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <div className="testimonial-quote">
                      <p>"{testimonial.quote}"</p>
                    </div>
                    <div className="testimonial-author">
                      <strong>{testimonial.author}</strong>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="parks-process">
            <div className="container">
              <h2>Our Municipal Service Process</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Initial Assessment</h3>
                    <p>Comprehensive evaluation of your water feature, including water quality testing and equipment inspection.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Custom Proposal</h3>
                    <p>Detailed proposal with service schedule, costs, and maintenance plan tailored to your facility's needs.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Service Implementation</h3>
                    <p>Professional service delivery with regular reporting and documentation for your records.</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>Ongoing Support</h3>
                    <p>Continuous monitoring, maintenance, and emergency response to keep your water features in optimal condition.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="parks-cta">
            <div className="container">
              <div className="cta-content">
                <h2>Ready to Partner with Utah Water Gardens?</h2>
                <p>
                  Contact us today to discuss your municipal water feature needs. We'll provide a 
                  comprehensive proposal tailored to your facility's requirements and budget.
                </p>
                <div className="cta-buttons">
                  <a href="tel:(801) 590-8516" className="btn btn-primary">
                    Call (801) 590-8516
                  </a>
                  <Link to="/contact" className="btn btn-outline">
                    Request Proposal
                  </Link>
                </div>
                <div className="cta-info">
                  <p><strong>Free Consultation:</strong> Initial assessment and proposal at no cost</p>
                  <p><strong>Flexible Scheduling:</strong> Services scheduled around your facility's needs</p>
                  <p><strong>Detailed Reporting:</strong> Comprehensive documentation for your records</p>
                </div>
              </div>
            </div>
          </section>

          {/* Lake Background Section */}
          <section className="lake-background-section">
            <div className="lake-background-image">
              <img 
                src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" 
                alt="Beautiful lake and water feature landscape"
                className="lake-bg-img"
              />
              <div className="lake-overlay">
                <div className="lake-content">
                  <h2>Transforming Municipal Water Features</h2>
                  <p>From pristine lakes to stunning water features, we bring expertise and dedication to every municipal project.</p>
                </div>
              </div>
            
      {/* Service Images */}
      <section className="service-images-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-images-grid">
            <div className="service-image-card">
              <img src="/images/IMG_2770.jpg" alt="Professional pond services and maintenance" />
              <h3>Expert Service</h3>
              <p>Professional pond care and maintenance</p>
            </div>
            <div className="service-image-card">
              <img src="/images/IMG_2775.jpg" alt="Quality pond equipment and supplies" />
              <h3>Quality Equipment</h3>
              <p>Only the best pond equipment and supplies</p>
            </div>
            <div className="service-image-card">
              <img src="/images/IMG_2779.jpg" alt="Custom pond design and installation" />
              <h3>Custom Design</h3>
              <p>Custom pond design and installation services</p>
            </div>
            <div className="service-image-card">
              <img src="/images/IMG_2780.jpg" alt="Ongoing pond maintenance and support" />
              <h3>Ongoing Support</h3>
              <p>Continuous maintenance and support services</p>
            </div>
          </div>
        </div>
      </section></div>
          </section>
        </div>
      </div>
    </>
  );
};


export default ParksAndRecreationPage;
