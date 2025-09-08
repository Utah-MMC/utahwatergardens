import React from 'react';
import CTA from '../../components/CTA';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero.js';
import './ServiceAreaPage.css';

const WoodlandHillsPage = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for Woodland Hills properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your Woodland Hills pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in Woodland Hills',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens created a stunning pond for our Woodland Hills home. Their expertise in Utah County's climate is unmatched.",
      author: "Jennifer M., Woodland Hills"
    },
    {
      text: "Outstanding service and beautiful results. They understand what works in Woodland Hills's environment and deliver every time.",
      author: "David L., Woodland Hills"
    }
  ];

  return (
    <div className="service-area-page">
      <PageHero 
        title="Pond Services in Woodland Hills"
        subtitle="Professional pond services for Woodland Hills and surrounding Utah County areas"
        backgroundImage="/images/pond-services-hero.jpg"
        backgroundImageAlt="Professional pond services in Woodland Hills"
      />

      <div className="container">
        <section className="location-overview">
          <h2>Pond Services in Woodland Hills</h2>
          <p>
            Utah Water Gardens proudly serves Woodland Hills and surrounding Utah County areas with comprehensive pond and water feature services. 
            Our local expertise in Woodland Hills's unique climate and water conditions ensures your pond thrives year-round.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for Woodland Hills Pond Services?</h3>
              <ul>
                <li>Local expertise in Woodland Hills's climate and water conditions</li>
                <li>Over 25 years of experience serving the Woodland Hills area</li>
                <li>Licensed and insured for all Woodland Hills projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sWoodland%20Hills%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Woodland Hills Service Area"
              ></iframe>

            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Our Woodland Hills Pond Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <a href="tel:(801) 590-8516" className="btn btn-primary">
                  Call (801) 590-8516
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials-section">
          <h2>What Woodland Hills Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p>"{testimonial.text}"</p>
                <cite>- {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </section>

        <section className="nearby-areas">
          <h2>We Also Serve These Nearby Areas</h2>
          <div className="areas-grid">
            <Link to="/pond-services/goshen" className="area-link">Goshen</Link>
            <Link to="/pond-services/genola" className="area-link">Genola</Link>
            <Link to="/pond-services/payson" className="area-link">Payson</Link>
            <Link to="/pond-services/salem" className="area-link">Salem</Link>
            <Link to="/pond-services/spanish-fork" className="area-link">Spanish Fork</Link>
            <Link to="/pond-services/springville" className="area-link">Springville</Link>
            <Link to="/pond-services/mapleton" className="area-link">Mapleton</Link>
            <Link to="/pond-services/provo" className="area-link">Provo</Link>
            <Link to="/pond-services/orem" className="area-link">Orem</Link>
            <Link to="/pond-services/lindon" className="area-link">Lindon</Link>
          </div>
        </section>
      </div>

        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    );
};

export default WoodlandHillsPage;
