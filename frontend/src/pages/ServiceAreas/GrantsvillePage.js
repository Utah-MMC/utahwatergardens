import React from 'react';
import CTA from '../../components/CTA';
import { Link } from 'react-router-dom';
import StandardHero from '../../components/StandardHero';
import './ServiceAreaPage.css';

const GrantsvillePage = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for Grantsville properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your Grantsville pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in Grantsville',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens created a stunning pond for our Grantsville home. Their expertise in Tooele County's climate is unmatched.",
      author: "Jennifer M., Grantsville"
    },
    {
      text: "Outstanding service and beautiful results. They understand what works in Grantsville's environment and deliver every time.",
      author: "David L., Grantsville"
    }
  ];

  return (
    <div className="service-area-page">
      <StandardHero 
        title="Pond Services in Grantsville"
        subtitle="Professional pond services for Grantsville and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Grantsville"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

      <div className="container">
        <section className="location-overview">
          <h2>Pond Services in Grantsville</h2>
          <p>
            Utah Water Gardens proudly serves Grantsville and surrounding Tooele County areas with comprehensive pond and water feature services. 
            Our local expertise in Grantsville's unique climate and water conditions ensures your pond thrives year-round.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for Grantsville Pond Services?</h3>
              <ul>
                <li>Local expertise in Grantsville's climate and water conditions</li>
                <li>Over 25 years of experience serving the Grantsville area</li>
                <li>Licensed and insured for all Grantsville projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sGrantsville%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grantsville Service Area"
              ></iframe>
            
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Our Grantsville Pond Services</h2>
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
          <h2>What Grantsville Customers Say</h2>
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
            <Link to="/pond-services/tooele" className="area-link">Tooele</Link>
            <Link to="/pond-services/stansbury-park" className="area-link">Stansbury Park</Link>
            <Link to="/pond-services/lake-point" className="area-link">Lake Point</Link>
            <Link to="/pond-services/erda" className="area-link">Erda</Link>
            <Link to="/pond-services/stockton" className="area-link">Stockton</Link>
            <Link to="/pond-services/vernon" className="area-link">Vernon</Link>
            <Link to="/pond-services/wendover" className="area-link">Wendover</Link>
            <Link to="/pond-services/dugway" className="area-link">Dugway</Link>
            <Link to="/pond-services/ibapah" className="area-link">Ibapah</Link>
            <Link to="/pond-services/callao" className="area-link">Callao</Link>
          </div>
        </section>
      </div>

        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    );
};

export default GrantsvillePage;
