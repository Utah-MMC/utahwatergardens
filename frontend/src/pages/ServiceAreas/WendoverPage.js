import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero.js';
import './ServiceAreaPage.css';

const WendoverPage = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for Wendover properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your Wendover pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in Wendover',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens created a stunning pond for our Wendover home. Their expertise in Tooele County's climate is unmatched.",
      author: "Jennifer M., Wendover"
    },
    {
      text: "Outstanding service and beautiful results. They understand what works in Wendover's environment and deliver every time.",
      author: "David L., Wendover"
    }
  ];

  return (
    <div className="service-area-page">
      <PageHero 
        title="Pond Services in Wendover"
        subtitle="Professional pond services for Wendover and surrounding Tooele County areas"
        backgroundImage="/images/pond-services-hero.jpg"
        backgroundImageAlt="Professional pond services in Wendover"
      />

      <div className="container">
        <section className="location-overview">
          <h2>Pond Services in Wendover</h2>
          <p>
            Utah Water Gardens proudly serves Wendover and surrounding Tooele County areas with comprehensive pond and water feature services. 
            Our local expertise in Wendover's unique climate and water conditions ensures your pond thrives year-round.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for Wendover Pond Services?</h3>
              <ul>
                <li>Local expertise in Wendover's climate and water conditions</li>
                <li>Over 25 years of experience serving the Wendover area</li>
                <li>Licensed and insured for all Wendover projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sWendover%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wendover Service Area"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Our Wendover Pond Services</h2>
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
          <h2>What Wendover Customers Say</h2>
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
            <Link to="/pond-services/grantsville" className="area-link">Grantsville</Link>
            <Link to="/pond-services/stansbury-park" className="area-link">Stansbury Park</Link>
            <Link to="/pond-services/lake-point" className="area-link">Lake Point</Link>
            <Link to="/pond-services/erda" className="area-link">Erda</Link>
            <Link to="/pond-services/stockton" className="area-link">Stockton</Link>
            <Link to="/pond-services/vernon" className="area-link">Vernon</Link>
            <Link to="/pond-services/dugway" className="area-link">Dugway</Link>
            <Link to="/pond-services/ibapah" className="area-link">Ibapah</Link>
            <Link to="/pond-services/callao" className="area-link">Callao</Link>
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
          <h2>Ready to Get Started in Wendover?</h2>
          <p>Contact us today for a free consultation and quote on your Wendover pond project.</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Get Free Quote</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WendoverPage;
