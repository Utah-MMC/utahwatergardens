import React from 'react';
import { Link } from 'react-router-dom';
import './PondMaintenancePage.css';

const PondMaintenancePage = () => {
  const maintenanceServices = [
    {
      name: 'Regular Water Testing',
      image: '/images/IMG_2782.jpg',
      description: 'Comprehensive water quality testing to ensure optimal pond health',
      benefits: ['pH balance monitoring', 'Ammonia levels', 'Nitrite testing', 'Oxygen levels'],
      frequency: 'Monthly',
      price: 'Starting at $45'
    },
    {
      name: 'Plant Maintenance',
      image: '/images/IMG_2775.jpg',
      description: 'Professional care for aquatic plants including trimming and fertilization',
      benefits: ['Plant trimming', 'Fertilization', 'Disease prevention', 'Growth monitoring'],
      frequency: 'Bi-weekly',
      price: 'Starting at $35'
    },
    {
      name: 'Fish Health Monitoring',
      image: '/images/IMG_2776.jpg',
      description: 'Regular health checks and monitoring for your pond fish',
      benefits: ['Health assessments', 'Disease prevention', 'Feeding guidance', 'Population control'],
      frequency: 'Weekly',
      price: 'Starting at $25'
    },
    {
      name: 'Equipment Maintenance',
      image: '/images/pumpRepair.webp',
      description: 'Preventive maintenance for pumps, filters, and other pond equipment',
      benefits: ['Pump cleaning', 'Filter maintenance', 'Performance optimization', 'Emergency repairs'],
      frequency: 'Monthly',
      price: 'Starting at $55'
    },
    {
      name: 'Seasonal Care',
      image: '/images/IMG_2779.jpg',
      description: 'Specialized care for each season to maintain pond health year-round',
      benefits: ['Spring opening', 'Summer care', 'Fall preparation', 'Winter protection'],
      frequency: 'Seasonal',
      price: 'Starting at $75'
    },
    {
      name: 'Water Quality Management',
      image: '/images/IMG_2770.jpg',
      description: 'Professional water treatment and quality management services',
      benefits: ['Algae control', 'Water clarity', 'Nutrient balance', 'Bacterial treatment'],
      frequency: 'As needed',
      price: 'Starting at $40'
    }
  ];

  const maintenanceSchedule = [
    {
      season: 'Spring',
      tasks: ['Remove winter debris', 'Test water quality', 'Start filtration systems', 'Plant new aquatic plants'],
      image: '/images/IMG_2775.jpg'
    },
    {
      season: 'Summer',
      tasks: ['Monitor water levels', 'Control algae growth', 'Maintain equipment', 'Check fish health'],
      image: '/images/IMG_2779.jpg'
    },
    {
      season: 'Fall',
      tasks: ['Prepare for winter', 'Clean filters', 'Trim plants', 'Test water parameters'],
      image: '/images/IMG_2780.jpg'
    },
    {
      season: 'Winter',
      tasks: ['Protect equipment', 'Monitor ice conditions', 'Check fish', 'Plan spring maintenance'],
      image: '/images/IMG_2782.jpg'
    }
  ];

  return (
    <div className="pond-maintenance-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Pond Maintenance Services</h1>
          <p>Professional pond maintenance to keep your water feature healthy and beautiful year-round</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Maintenance Quote</a>
            <Link to="/pond-services" className="secondary-button">View All Services</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2770.jpg" alt="Professional pond maintenance services" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section first-section-gradient">
        <div className="container">
          <h2>Our Maintenance Services</h2>
          <p>We offer comprehensive pond maintenance services to ensure your water feature remains healthy and beautiful</p>
          <div className="services-grid">
            {maintenanceServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="service-benefits">
                    <h4>Includes:</h4>
                    <ul>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-details">
                    <span className="frequency">Frequency: {service.frequency}</span>
                    <span className="price">{service.price}</span>
                  </div>
                  <a href="tel:(801) 590-8516" className="service-cta">Call for Service</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Maintenance */}
      <section className="seasonal-section">
        <div className="container">
          <h2>Seasonal Maintenance Schedule</h2>
          <p>Our maintenance program adapts to each season's unique requirements</p>
          <div className="seasonal-grid">
            {maintenanceSchedule.map((season, index) => (
              <div key={index} className="season-card">
                <div className="season-image">
                  <img src={season.image} alt={`${season.season} pond maintenance`} />
                </div>
                <div className="season-content">
                  <h3>{season.season}</h3>
                  <ul className="season-tasks">
                    {season.tasks.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                  <a href="tel:(801) 590-8516" className="seasonal-cta">Schedule {season.season} Service</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Maintenance */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Our Maintenance Services?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🔧</div>
              <h3>Professional Equipment</h3>
              <p>We use professional-grade equipment for thorough maintenance</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📱</div>
              <h3>Regular Monitoring</h3>
              <p>Consistent monitoring prevents problems before they occur</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🌿</div>
              <h3>Expert Knowledge</h3>
              <p>Years of experience in pond care and maintenance</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3>Cost Effective</h3>
              <p>Preventive maintenance saves money on expensive repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="plans-section gradient-wipe-up">
        <div className="container">
          <h2>Maintenance Plans</h2>
          <p>Choose the maintenance plan that fits your needs and budget</p>
          <div className="plans-grid">
            <div className="plan-card">
              <h3>Basic Plan</h3>
              <div className="plan-price">$99/month</div>
              <ul className="plan-features">
                <li>Monthly water testing</li>
                <li>Basic equipment check</li>
                <li>Plant trimming</li>
                <li>Emergency support</li>
              </ul>
              <a href="tel:(801) 590-8516" className="plan-cta">Call for Basic Plan</a>
            </div>
            <div className="plan-card featured">
              <h3>Standard Plan</h3>
              <div className="plan-price">$149/month</div>
              <ul className="plan-features">
                <li>Bi-weekly maintenance</li>
                <li>Comprehensive water testing</li>
                <li>Equipment maintenance</li>
                <li>Plant care</li>
                <li>Fish health monitoring</li>
                <li>Priority support</li>
              </ul>
              <a href="tel:(801) 590-8516" className="plan-cta">Call for Standard Plan</a>
            </div>
            <div className="plan-card">
              <h3>Premium Plan</h3>
              <div className="plan-price">$199/month</div>
              <ul className="plan-features">
                <li>Weekly maintenance</li>
                <li>Advanced water testing</li>
                <li>Full equipment service</li>
                <li>Comprehensive plant care</li>
                <li>Fish health program</li>
                <li>Seasonal preparation</li>
                <li>24/7 emergency support</li>
              </ul>
              <a href="tel:(801) 590-8516" className="plan-cta">Call for Premium Plan</a>
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
          <h2>Ready to Start Your Maintenance Plan?</h2>
          <p>Contact us today to discuss your pond maintenance needs</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PondMaintenancePage;
