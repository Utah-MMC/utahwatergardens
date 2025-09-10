import React from 'react';
import CTA from '../../components/CTA';
import { Link } from 'react-router-dom';
import StandardHero from '../../components/StandardHero';
import './ServiceAreaPage.css';

const SantaClaraPage = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for Santa Clara properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your Santa Clara pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in Santa Clara',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens created an amazing pond for our Santa Clara home. Their expertise in southern Utah's climate is impressive.",
      author: "Mark S., Santa Clara"
    },
    {
      text: "Professional service and beautiful results. They understand what works in Santa Clara's environment and deliver every time.",
      author: "Susan P., Santa Clara"
    }
  ];

  return (
    <div className="service-area-page">
      <StandardHero 
        title="Pond Services in Santa Clara"
        subtitle="Professional pond services for Santa Clara and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Santa Clara"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

      <div className="container">
        <section className="location-overview">
          <h2>Pond Services in Santa Clara</h2>
          <p>
            Utah Water Gardens proudly serves Santa Clara and surrounding Washington County areas with comprehensive pond and water feature services. 
            Our local expertise in Santa Clara's unique climate and water conditions ensures your pond thrives year-round in this beautiful growing community.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for Santa Clara Pond Services?</h3>
              <ul>
                <li>Local expertise in Santa Clara's climate and water conditions</li>
                <li>Over 25 years of experience serving the Santa Clara area</li>
                <li>Licensed and insured for all Santa Clara projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
                <li>Experience with growing communities and new developments</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sSanta%20Clara%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Santa Clara Service Area"
              ></iframe>
            
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Our Santa Clara Pond Services</h2>
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
          <h2>What Santa Clara Customers Say</h2>
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
            <Link to="/pond-services/st-george" className="area-link">St. George</Link>
            <Link to="/pond-services/hurricane" className="area-link">Hurricane</Link>
            <Link to="/pond-services/la-verkin" className="area-link">La Verkin</Link>
            <Link to="/pond-services/virgin" className="area-link">Virgin</Link>
            <Link to="/pond-services/springdale" className="area-link">Springdale</Link>
            <Link to="/pond-services/ivins" className="area-link">Ivins</Link>
            <Link to="/pond-services/washington" className="area-link">Washington</Link>
            <Link to="/pond-services/leeds" className="area-link">Leeds</Link>
            <Link to="/pond-services/cedar-city" className="area-link">Cedar City</Link>
            <Link to="/pond-services/mesquite" className="area-link">Mesquite, NV</Link>
          </div>
        </section>
      </div>

        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    );
};

export default SantaClaraPage;
