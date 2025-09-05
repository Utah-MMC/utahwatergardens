import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero.js';
import './ServiceAreaPage.css';

const HeberCityPage = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for Heber City properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your Heber City pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in Heber City',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens created a stunning pond for our Heber City home. Their expertise in mountain climate is unmatched.",
      author: "Mark S., Heber City"
    },
    {
      text: "Professional service and beautiful results. They understand what works in Heber City's environment and deliver every time.",
      author: "Susan P., Heber City"
    }
  ];

  return (
    <div className="service-area-page">
      <PageHero 
        title="Pond Services in Heber City"
        subtitle="Professional pond services for Heber City and surrounding Wasatch County areas"
        backgroundImage="/images/pond-services-hero.jpg"
        backgroundImageAlt="Professional pond services in Heber City"
      />

      <div className="container">
        <section className="location-overview">
          <h2>Pond Services in Heber City</h2>
          <p>
            Utah Water Gardens proudly serves Heber City and surrounding Wasatch County areas with comprehensive pond and water feature services. 
            Our local expertise in Heber City's unique mountain climate and water conditions ensures your pond thrives year-round in this beautiful valley community.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for Heber City Pond Services?</h3>
              <ul>
                <li>Local expertise in Heber City's mountain climate and water conditions</li>
                <li>Over 25 years of experience serving the Heber City area</li>
                <li>Licensed and insured for all Heber City projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
                <li>Experience with luxury mountain properties and communities</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sHeber%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Heber City Service Area"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Our Heber City Pond Services</h2>
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
          <h2>What Heber City Customers Say</h2>
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
            <Link to="/pond-services/red-ledges" className="area-link">Red Ledges</Link>
            <Link to="/pond-services/midway" className="area-link">Midway</Link>
            <Link to="/pond-services/charleston" className="area-link">Charleston</Link>
            <Link to="/pond-services/park-city" className="area-link">Park City</Link>
            <Link to="/pond-services/kamas" className="area-link">Kamas</Link>
            <Link to="/pond-services/oakley" className="area-link">Oakley</Link>
            <Link to="/pond-services/francis" className="area-link">Francis</Link>
            <Link to="/pond-services/hoytsville" className="area-link">Hoytsville</Link>
            <Link to="/pond-services/peoa" className="area-link">Peoa</Link>
            <Link to="/pond-services/samak" className="area-link">Samak</Link>
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
          <h2>Ready to Get Started in Heber City?</h2>
          <p>Contact us today for a free consultation and quote on your Heber City pond project.</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Get Free Quote</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeberCityPage;
