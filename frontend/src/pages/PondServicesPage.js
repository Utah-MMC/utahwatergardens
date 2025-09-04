import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.js';
import './PondServicesPage.css';

const PondServicesPage = () => {
  const services = [
    {
      name: 'Pond Design & Build',
      path: '/pond-services/design-build',
      description: 'Custom pond design and construction services',
      image: '/images/pondConstruction1000x800.webp',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Warranty']
    },
    {
      name: 'Pond Maintenance',
      path: '/pond-services/maintenance',
      description: 'Regular maintenance to keep your pond healthy and beautiful',
      image: '/images/pondMaintenance.webp',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Water Quality Testing',
      path: '/pond-services/water-quality',
      description: 'Professional water quality analysis and treatment',
      image: '/images/pondMaintenance.webp',
      features: ['pH Testing', 'Chemical Analysis', 'Treatment Plans', 'Monitoring']
    },
    {
      name: 'Pond Cleaning',
      path: '/pond-services/cleaning',
      description: 'Deep cleaning and debris removal services',
      image: '/images/pondCleanings.webp',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      path: '/pond-services/repair',
      description: 'Repair and maintenance of pond equipment',
      image: '/images/pumpRepair.webp',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    },
    {
      name: 'Seasonal Services',
      path: '/pond-services/seasonal',
      description: 'Season-specific pond care and preparation',
      image: '/images/pondMaintenance.webp',
      features: ['Winter Prep', 'Spring Opening', 'Summer Care', 'Fall Cleanup']
    }
  ];

  const additionalServices = [
    {
      name: 'Pond Dredging',
      path: '/pond-and-lake-dredging',
      description: 'Remove built-up sediment and restore pond depth'
    },
    {
      name: 'Pond Repair & Rebuild',
      path: '/pond-repair-and-rebuild',
      description: 'Fix damage and restore pond functionality'
    },
    {
      name: 'Pond Consultations',
      path: '/pond-consultations',
      description: 'Expert advice for pond planning and maintenance'
    }
  ];

  return (
    <div className="pond-services-page">
      <PageHero 
        title="Pond Services"
        subtitle="Professional pond services to keep your water feature beautiful and healthy"
        backgroundImage="/images/pondConstruction1000x800.webp"
        backgroundImageAlt="Professional pond construction and maintenance services"
      />

      <div className="container">
        {/* Main Services */}
        <section className="main-services">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="service-content">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <Link to={service.path} className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="additional-services">
          <h2>Additional Services</h2>
          <div className="additional-grid">
            {additionalServices.map((service, index) => (
              <div key={index} className="additional-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <Link to={service.path} className="btn btn-outline">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us">
          <h2>Why Choose Utah Water Gardens?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🏆</div>
              <h3>Expert Team</h3>
              <p>Years of experience in pond design and maintenance</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <h3>Quality Service</h3>
              <p>Professional equipment and proven techniques</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💚</div>
              <h3>Eco-Friendly</h3>
              <p>Sustainable practices that protect your pond ecosystem</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Emergency services when you need them most</p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="service-areas">
          <h2>Service Areas</h2>
          <p>We proudly serve the greater Utah area including:</p>
          <div className="areas-grid">
            <div className="area-item">Murray</div>
            <div className="area-item">Salt Lake City</div>
            <div className="area-item">West Valley City</div>
            <div className="area-item">Sandy</div>
            <div className="area-item">West Jordan</div>
            <div className="area-item">South Jordan</div>
            <div className="area-item">Riverton</div>
            <div className="area-item">Herriman</div>
            <div className="area-item">Bluffdale</div>
            <div className="area-item">Draper</div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a free consultation and quote</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Get Free Quote
            </Link>
            <Link to="/schedule" className="btn btn-outline">
              Schedule Service
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PondServicesPage;
