import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero.js';
import './PondMaintenancePage.css';

const PondMaintenancePage = () => {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '500+', label: 'Ponds Maintained', icon: 'Ponds' },
    { number: '100%', label: 'Customer Satisfaction', icon: 'Quality' },
    { number: '24/7', label: 'Emergency Support', icon: 'Support' }
  ];

  const maintenanceServices = [
    {
      name: 'Regular Water Testing',
      image: '/images/IMG_2782.jpg',
      description: 'Comprehensive water quality testing to ensure optimal pond health',
      benefits: ['pH balance monitoring', 'Ammonia levels', 'Nitrite testing', 'Oxygen levels'],
      frequency: 'Monthly'
    },
    {
      name: 'Plant Maintenance',
      image: '/images/IMG_2775.jpg',
      description: 'Professional care for aquatic plants including trimming and fertilization',
      benefits: ['Plant trimming', 'Fertilization', 'Disease prevention', 'Growth monitoring'],
      frequency: 'Bi-weekly'
    },
    {
      name: 'Fish Health Monitoring',
      image: '/images/IMG_2776.jpg',
      description: 'Regular health checks and monitoring for your pond fish',
      benefits: ['Health assessments', 'Disease prevention', 'Feeding guidance', 'Population control'],
      frequency: 'Weekly'
    },
    {
      name: 'Equipment Maintenance',
      image: '/images/pumpRepair.webp',
      description: 'Preventive maintenance for pumps, filters, and other pond equipment',
      benefits: ['Pump cleaning', 'Filter maintenance', 'Performance optimization', 'Emergency repairs'],
      frequency: 'Monthly'
    },
    {
      name: 'Seasonal Care',
      image: '/images/IMG_2779.jpg',
      description: 'Specialized care for each season to maintain pond health year-round',
      benefits: ['Spring opening', 'Summer care', 'Fall preparation', 'Winter protection'],
      frequency: 'Seasonal'
    },
    {
      name: 'Water Quality Management',
      image: '/images/IMG_2770.jpg',
      description: 'Professional water treatment and quality management services',
      benefits: ['Algae control', 'Water clarity', 'Nutrient balance', 'Bacterial treatment'],
      frequency: 'As needed'
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
    <>
      <SEO 
        title="Pond Maintenance Services - Professional Pond Care | Utah Water Gardens"
        description="Professional pond maintenance services in Utah. Water testing, plant care, fish health monitoring, equipment maintenance. 15+ years experience, 500+ ponds maintained. Serving Salt Lake County, Davis County, and surrounding areas."
        keywords="pond maintenance, pond care, water quality testing, pond cleaning, fish health monitoring, equipment maintenance, utah pond maintenance, salt lake county pond care, davis county pond services, seasonal pond maintenance, pond health"
        canonical="https://utahwatergardens.com/pond-services/maintenance"
      />
      <div className="pond-maintenance-page">
        <PageHero 
          title="Pond Maintenance Services"
          subtitle="Professional pond maintenance to keep your water feature healthy and beautiful year-round"
          backgroundImage="/images/IMG_2770.jpg"
          backgroundImageAlt="Professional pond maintenance services"
          stats={stats}
        />

      {/* Services Overview */}
      <section className="services-section first-section-gradient">
        <div className="container">
          <h2>Our Maintenance Services</h2>
          <p>We offer comprehensive pond maintenance services to ensure your water feature remains healthy and beautiful</p>
          <div className="services-grid">
            {maintenanceServices.map((service, index) => (
              <Link key={index} to="/pond-services/maintenance" className="service-card">
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
                  </div>
                  <a href="tel:(801) 590-8516" className="service-cta" onClick={(e) => e.stopPropagation()}>Call for Service</a>
                </div>
              </Link>
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
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3L9 6.9L6.9 9L3 5.1C1 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 23C20.3 23 20.7 22.7 21 22.4L22.4 21C22.7 20.7 22.7 20.3 22.7 19Z" fill="#6C757D"/>
  </svg>
              </div>
              <h3>Professional Equipment</h3>
              <p>We use professional-grade equipment for thorough maintenance</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#007BFF"/>
  </svg>
              </div>
              <h3>Regular Monitoring</h3>
              <p>Consistent monitoring prevents problems before they occur</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 6 17.25C7.12 17.25 8.25 16.75 9 16L17 8Z" fill="#32CD32"/>
  </svg>
              </div>
              <h3>Expert Knowledge</h3>
              <p>Years of experience in pond care and maintenance</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#FFD700"/>
                </svg>
              </div>
              <h3>Cost Effective</h3>
              <p>Preventive maintenance saves money on expensive repairs</p>
            </div>
          </div>
        </div>
      </section>


      {/* Service Areas */}
      <section className="service-areas-section">
        <div className="container">
          <h2>Areas We Serve</h2>
          <p className="service-areas-intro">
            We proudly serve the greater Salt Lake City area and surrounding communities with our professional 
            pond maintenance services. Our experienced team provides regular maintenance throughout Utah.
          </p>
          
          <div className="service-areas-grid">
            <div className="service-area-group">
              <h3>Salt Lake County</h3>
              <div className="cities-list">
                <span>Salt Lake City</span>
                <span>West Jordan</span>
                <span>Murray</span>
                <span>Sandy</span>
                <span>West Valley City</span>
                <span>Draper</span>
                <span>Cottonwood Heights</span>
                <span>Holladay</span>
              </div>
            </div>
            
            <div className="service-area-group">
              <h3>Davis County</h3>
              <div className="cities-list">
                <span>Layton</span>
                <span>Bountiful</span>
                <span>Farmington</span>
                <span>Centerville</span>
                <span>Kaysville</span>
                <span>Clearfield</span>
                <span>Clinton</span>
                <span>Syracuse</span>
              </div>
            </div>
            
            <div className="service-area-group">
              <h3>Utah County</h3>
              <div className="cities-list">
                <span>Provo</span>
                <span>Orem</span>
                <span>American Fork</span>
                <span>Lehi</span>
                <span>Pleasant Grove</span>
                <span>Spanish Fork</span>
                <span>Springville</span>
                <span>Alpine</span>
              </div>
            </div>
            
            <div className="service-area-group">
              <h3>Weber County</h3>
              <div className="cities-list">
                <span>Ogden</span>
                <span>Roy</span>
                <span>Clearfield</span>
                <span>South Ogden</span>
                <span>North Ogden</span>
                <span>Riverdale</span>
                <span>Washington Terrace</span>
                <span>Farr West</span>
              </div>
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
    </>
  );
};

export default PondMaintenancePage;
