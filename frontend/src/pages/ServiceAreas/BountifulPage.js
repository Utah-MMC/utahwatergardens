import React from 'react';
import CTA from '../../components/CTA';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero.js';
import './ServiceAreaPage.css';

const BountifulPage = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for Bountiful properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your Bountiful pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in Bountiful',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens created a stunning pond for our Bountiful home. Their expertise in Davis County's climate is unmatched.",
      author: "Jennifer M., Bountiful"
    },
    {
      text: "Outstanding service and beautiful results. They understand what works in Bountiful's environment and deliver every time.",
      author: "David L., Bountiful"
    }
  ];

  return (
    <div className="service-area-page">
      <PageHero 
        title="Pond Services in Bountiful"
        subtitle="Professional pond services for Bountiful and surrounding Davis County areas"
        backgroundImage="/images/pond-services-hero.jpg"
        backgroundImageAlt="Professional pond services in Bountiful"
      />

      <div className="container">
        <section className="location-overview">
          <h2>Pond Services in Bountiful</h2>
          <p>
            Utah Water Gardens proudly serves Bountiful and surrounding Davis County areas with comprehensive pond and water feature services. 
            Our local expertise in Bountiful's unique climate and water conditions ensures your pond thrives year-round.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for Bountiful Pond Services?</h3>
              <ul>
                <li>Local expertise in Bountiful's climate and water conditions</li>
                <li>Over 25 years of experience serving the Bountiful area</li>
                <li>Licensed and insured for all Bountiful projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sBountiful%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bountiful Service Area"
              ></iframe>
            
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Our Bountiful Pond Services</h2>
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
          <h2>What Bountiful Customers Say</h2>
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
            <Link to="/pond-services/north-salt-lake" className="area-link">North Salt Lake</Link>
            <Link to="/pond-services/woods-cross" className="area-link">Woods Cross</Link>
            <Link to="/pond-services/centerville" className="area-link">Centerville</Link>
            <Link to="/pond-services/farmington" className="area-link">Farmington</Link>
            <Link to="/pond-services/kaysville" className="area-link">Kaysville</Link>
            <Link to="/pond-services/layton" className="area-link">Layton</Link>
            <Link to="/pond-services/clearfield" className="area-link">Clearfield</Link>
            <Link to="/pond-services/clinton" className="area-link">Clinton</Link>
            <Link to="/pond-services/roy" className="area-link">Roy</Link>
            <Link to="/pond-services/syracuse" className="area-link">Syracuse</Link>
          </div>
        </section>
      </div>

        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    );
};

export default BountifulPage;
