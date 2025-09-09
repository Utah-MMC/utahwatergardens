import React from 'react';
import { Link } from 'react-router-dom';
import './EquipmentRepairPage.css';

const EquipmentRepairPage = () => {
  const repairServices = [
    {
      name: 'Pump Repair & Maintenance',
      image: '/images/IMG_2770.jpg',
      description: 'Expert repair and maintenance for all types of pond pumps',
      services: ['Motor repair', 'Impeller replacement', 'Seal replacement', 'Performance optimization'],
      price: 'Starting at $89'
    },
    {
      name: 'Filtration System Repair',
      image: '/images/IMG_2775.jpg',
      description: 'Complete filtration system diagnostics and repair services',
      services: ['Filter media replacement', 'UV bulb replacement', 'Valve repair', 'System optimization'],
      price: 'Starting at $75'
    },
    {
      name: 'Aeration System Repair',
      image: '/images/IMG_2779.jpg',
      description: 'Professional repair for air pumps and diffuser systems',
      services: ['Air pump repair', 'Diffuser replacement', 'Line repair', 'Performance testing'],
      price: 'Starting at $65'
    },
    {
      name: 'Lighting System Repair',
      image: '/images/IMG_2780.jpg',
      description: 'Underwater and landscape lighting repair and maintenance',
      services: ['Fixture repair', 'Transformer replacement', 'Wiring repair', 'LED upgrades'],
      price: 'Starting at $55'
    },
    {
      name: 'Water Feature Repair',
      image: '/images/IMG_2776.jpg',
      description: 'Repair services for fountains, waterfalls, and water features',
      services: ['Nozzle replacement', 'Flow adjustment', 'Leak repair', 'Performance optimization'],
      price: 'Starting at $95'
    },
    {
      name: 'Control System Repair',
      image: '/images/IMG_2782.jpg',
      description: 'Repair for timers, controllers, and automation systems',
      services: ['Timer repair', 'Controller replacement', 'Sensor repair', 'Programming'],
      price: 'Starting at $85'
    }
  ];

  const commonIssues = [
    'Pump not starting or running',
    'Reduced water flow',
    'Unusual noises or vibrations',
    'Water leaks around equipment',
    'Electrical issues or tripping breakers',
    'Poor water quality despite filtration',
    'Equipment overheating',
    'Inconsistent performance'
  ];

  const repairProcess = [
    'Initial diagnostic assessment',
    'Detailed problem identification',
    'Repair quote and approval',
    'Professional repair service',
    'Testing and quality assurance',
    'Preventive maintenance recommendations'
  ];

  return (
    <div className="equipment-repair-page">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1>Pond Equipment Repair Services</h1>
          <p>Professional repair and maintenance for all your pond equipment. Keep your pond running smoothly with our expert repair services.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Emergency Repair</a>
            <Link to="/pond-services" className="secondary-button">View All Services</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2770.jpg" alt="Professional pond equipment repair service" />
        </div>
      </section>

      {/* Wavy Divider - Attached to Hero with Blue Gradient */}
      <div className="hero-wave-attached">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path className="wave-layer-1" d="M0,0L50,20C100,40,200,80,300,80C400,80,500,40,600,20C700,0,800,0,900,20C1000,40,1100,80,1150,100L1200,120V0Z" fill="#ffffff" opacity="0.1"></path>
          <path className="wave-layer-2" d="M0,0L50,15C100,30,200,60,300,60C400,60,500,30,600,15C700,0,800,0,900,15C1000,30,1100,60,1150,75L1200,90V0Z" fill="#ffffff" opacity="0.2"></path>
          <path className="wave-layer-3" d="M0,0L50,10C100,20,200,40,300,40C400,40,500,20,600,10C700,0,800,0,900,10C1000,20,1100,40,1150,50L1200,60V0Z" fill="#ffffff" opacity="0.3"></path>
        </svg>
      </div>

      {/* Services Overview */}
      <section className="services-section first-section-gradient">
        <div className="container">
          <h2>Our Equipment Repair Services</h2>
          <p>We repair all major brands and types of pond equipment with genuine parts and expert service</p>
          <div className="services-grid">
            {repairServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <p className="service-description-mobile">{service.description.split('.')[0]}.</p>
                  <div className="service-details desktop-only">
                    <h4>What We Fix:</h4>
                    <ul>
                      {service.services.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-price">{service.price}</div>
                  <a href="tel:(801) 590-8516" className="service-cta">Call for Repair Quote</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Repair Service */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Our Repair Service?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3L9 6.9L6.9 9L3 5.1C1 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 23C20.3 23 20.7 22.7 21 22.4L22.4 21C22.7 20.7 22.7 20.3 22.7 19Z" fill="#6C757D"/>
  </svg>
              </div>
              <h3>Expert Technicians</h3>
              <p>Certified technicians with years of experience in pond equipment repair</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h3>Fast Response</h3>
              <p>Emergency repair services available with same-day response for critical issues</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💎</div>
              <h3>Genuine Parts</h3>
              <p>We use only genuine manufacturer parts to ensure quality and longevity</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H20C21.1 8 22 8.9 22 10V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V10C2 8.9 2.9 8 4 8H6V6C6 3.79 7.79 2 10 2H14C16.21 2 18 3.79 18 6V8ZM16 8V6C16 4.9 15.1 4 14 4H10C8.9 4 8 4.9 8 6V8H16ZM4 10V20H20V10H4Z" fill="#1e40af"/>
                </svg>
              </div>
              <h3>Warranty Coverage</h3>
              <p>All repairs come with our comprehensive warranty for your peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="issues-section">
        <div className="container">
          <h2>Common Equipment Issues We Fix</h2>
          <div className="issues-content">
            <div className="issues-text">
              <p>Don't let equipment problems ruin your pond experience. We can diagnose and fix most issues quickly and affordably.</p>
              <ul className="issues-list">
                {commonIssues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
              <a href="tel:(801) 590-8516" className="issues-cta">Call for Diagnosis</a>
            </div>
            <div className="issues-image">
              <img src="/images/IMG_2775.jpg" alt="Pond equipment diagnostics and repair" />
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="process-section">
        <div className="container">
          <h2>Our Repair Process</h2>
          <div className="process-grid">
            {repairProcess.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{index + 1}</div>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
          <div className="process-cta">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Start Your Repair Today</a>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="emergency-section">
        <div className="container">
          <h2>Emergency Repair Services</h2>
          <div className="emergency-content">
            <div className="emergency-text">
              <h3>24/7 Emergency Support</h3>
              <p>Critical equipment failures can't wait. We offer emergency repair services for urgent situations that could damage your pond or fish.</p>
              <div className="emergency-features">
                <div className="emergency-feature">
                  <span className="feature-icon">🚨</span>
                  <span>Same-day response for critical issues</span>
                </div>
                <div className="emergency-feature">
                  <span className="feature-icon">📱</span>
                  <span>Direct technician contact</span>
                </div>
                <div className="emergency-feature">
                  <span className="feature-icon">⚡</span>
                  <span>Priority scheduling</span>
                </div>
              </div>
              <a href="tel:(801) 590-8516" className="emergency-cta">Call Emergency Line</a>
            </div>
            <div className="emergency-image">
              <img src="/images/IMG_2780.jpg" alt="Emergency pond equipment repair service" />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="maintenance-section gradient-wipe-up">
        <div className="container">
          <h2>Preventive Maintenance Plans</h2>
          <p>Regular maintenance prevents costly repairs. Choose a plan that fits your needs.</p>
          <div className="maintenance-plans">
            <div className="plan-card">
              <h3>Basic Plan</h3>
              <div className="plan-price">$99/year</div>
              <ul>
                <li>Annual equipment inspection</li>
                <li>Basic cleaning and adjustment</li>
                <li>Performance testing</li>
                <li>Priority repair scheduling</li>
              </ul>
              <a href="tel:(801) 590-8516" className="plan-cta">Call to Enroll</a>
            </div>
            <div className="plan-card featured">
              <h3>Premium Plan</h3>
              <div className="plan-price">$199/year</div>
              <ul>
                <li>Bi-annual equipment inspection</li>
                <li>Deep cleaning and maintenance</li>
                <li>Parts replacement (up to $50 value)</li>
                <li>Emergency repair priority</li>
                <li>Annual performance report</li>
              </ul>
              <a href="tel:(801) 590-8516" className="plan-cta">Call to Enroll</a>
            </div>
            <div className="plan-card">
              <h3>Commercial Plan</h3>
              <div className="plan-price">$399/year</div>
              <ul>
                <li>Quarterly inspections</li>
                <li>Full system maintenance</li>
                <li>Parts replacement (up to $100 value)</li>
                <li>24/7 emergency support</li>
                <li>Detailed maintenance logs</li>
              </ul>
              <a href="tel:(801) 590-8516" className="plan-cta">Call to Enroll</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section 
        className="contact-cta"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <h2>Need Equipment Repair?</h2>
          <p>Our expert technicians are ready to get your pond equipment running perfectly again</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipmentRepairPage;
