import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero.js';
import './ServiceAreaPage.css';

const StGeorgePage = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for St. George luxury properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your St. George pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in St. George',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens created an amazing pond for our St. George home. Their expertise in desert climate is impressive.",
      author: "Mark S., St. George"
    },
    {
      text: "Professional service and beautiful results. They understand what works in St. George's environment and deliver every time.",
      author: "Susan P., St. George"
    }
  ];

  return (
    <div className="service-area-page">
      <PageHero 
        title="Pond Services in St. George"
        subtitle="Professional pond services for St. George and surrounding Washington County luxury communities"
        backgroundImage="/images/pond-services-hero.jpg"
        backgroundImageAlt="Professional pond services in St. George"
      />

      <div className="container">
        <section className="location-overview">
          <h2>Pond Services in St. George</h2>
          <p>
            Utah Water Gardens proudly serves St. George and surrounding Washington County areas with comprehensive pond and water feature services. 
            Our local expertise in St. George's unique desert climate and water conditions ensures your pond thrives year-round in this beautiful red rock destination.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for St. George Pond Services?</h3>
              <ul>
                <li>Local expertise in St. George's desert climate and water conditions</li>
                <li>Over 25 years of experience serving the St. George area</li>
                <li>Licensed and insured for all St. George projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
                <li>Experience with luxury desert properties and golf communities</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sSt.%20George%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="St. George Service Area"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Our St. George Pond Services</h2>
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
          <h2>What St. George Customers Say</h2>
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
            <Link to="/pond-services/hurricane" className="area-link">Hurricane</Link>
            <Link to="/pond-services/la-verkin" className="area-link">La Verkin</Link>
            <Link to="/pond-services/virgin" className="area-link">Virgin</Link>
            <Link to="/pond-services/springdale" className="area-link">Springdale</Link>
            <Link to="/pond-services/ivins" className="area-link">Ivins</Link>
            <Link to="/pond-services/santa-clara" className="area-link">Santa Clara</Link>
            <Link to="/pond-services/washington" className="area-link">Washington</Link>
            <Link to="/pond-services/leeds" className="area-link">Leeds</Link>
            <Link to="/pond-services/cedar-city" className="area-link">Cedar City</Link>
            <Link to="/pond-services/mesquite" className="area-link">Mesquite, NV</Link>
          </div>
        </section>

        <section 
          className="contact-cta"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h2>Ready to Get Started in St. George?</h2>
          <p>Contact us today for a free consultation and quote on your St. George pond project.</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Get Free Quote</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StGeorgePage;
