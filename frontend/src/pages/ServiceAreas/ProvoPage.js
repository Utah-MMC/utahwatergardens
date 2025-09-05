import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero.js';
import './ServiceAreaPage.css';

const ProvoPage = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for Provo properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your Provo pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in Provo',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens created a stunning pond for our Provo home. Their expertise in Utah County's climate is unmatched.",
      author: "Jennifer M., Provo"
    },
    {
      text: "Outstanding service and beautiful results. They understand what works in Provo's environment and deliver every time.",
      author: "David L., Provo"
    }
  ];

  return (
    <div className="service-area-page">
      <PageHero 
        title="Pond Services in Provo"
        subtitle="Professional pond services for Provo and surrounding Utah County areas"
        backgroundImage="/images/pond-services-hero.jpg"
        backgroundImageAlt="Professional pond services in Provo"
      />

      <div className="container">
        {/* Location Overview */}
        <section className="location-overview">
          <h2>Pond Services in Provo</h2>
          <p>
            Utah Water Gardens proudly serves Provo and surrounding Utah County areas with comprehensive pond and water feature services. 
            Our local expertise in Provo's unique climate and water conditions ensures your pond thrives year-round.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for Provo Pond Services?</h3>
              <ul>
                <li>Local expertise in Provo's climate and water conditions</li>
                <li>Over 25 years of experience serving the Provo area</li>
                <li>Licensed and insured for all Provo projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sProvo%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Provo Service Area"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services-section">
          <h2>Our Provo Pond Services</h2>
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

        {/* Testimonials */}
        <section className="testimonials-section">
          <h2>What Provo Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p>"{testimonial.text}"</p>
                <cite>- {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas */}
        <section className="nearby-areas">
          <h2>We Also Serve These Nearby Areas</h2>
          <div className="areas-grid">
            <Link to="/pond-services/orem" className="area-link">Orem</Link>
            <Link to="/pond-services/lehi" className="area-link">Lehi</Link>
            <Link to="/pond-services/american-fork" className="area-link">American Fork</Link>
            <Link to="/pond-services/pleasant-grove" className="area-link">Pleasant Grove</Link>
            <Link to="/pond-services/lindon" className="area-link">Lindon</Link>
            <Link to="/pond-services/spanish-fork" className="area-link">Spanish Fork</Link>
            <Link to="/pond-services/springville" className="area-link">Springville</Link>
            <Link to="/pond-services/mapleton" className="area-link">Mapleton</Link>
            <Link to="/pond-services/payson" className="area-link">Payson</Link>
            <Link to="/pond-services/salem" className="area-link">Salem</Link>
            <Link to="/pond-services/cedar-hills" className="area-link">Cedar Hills</Link>
            <Link to="/pond-services/alpine" className="area-link">Alpine</Link>
            <Link to="/pond-services/highland" className="area-link">Highland</Link>
            <Link to="/pond-services/saratoga-springs" className="area-link">Saratoga Springs</Link>
            <Link to="/pond-services/eagle-mountain" className="area-link">Eagle Mountain</Link>
            <Link to="/pond-services/cedar-valley" className="area-link">Cedar Valley</Link>
            <Link to="/pond-services/genola" className="area-link">Genola</Link>
            <Link to="/pond-services/goshen" className="area-link">Goshen</Link>
            <Link to="/pond-services/woodland-hills" className="area-link">Woodland Hills</Link>
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
          <h2>Ready to Get Started in Provo?</h2>
          <p>Contact us today for a free consultation and quote on your Provo pond project.</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Get Free Quote</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProvoPage;
