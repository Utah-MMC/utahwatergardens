import React from 'react';
import CTA from '../../components/CTA';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero.js';
import './ServiceAreaPage.css';

const MidwayPage = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for Midway luxury properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your Midway pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in Midway',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens created an amazing pond for our Midway home. Their expertise in mountain climate is impressive.",
      author: "Mark S., Midway"
    },
    {
      text: "Professional service and beautiful results. They understand what works in Midway's environment and deliver every time.",
      author: "Susan P., Midway"
    }
  ];

  return (
    <div className="service-area-page">
      <PageHero 
        title="Pond Services in Midway"
        subtitle="Professional pond services for Midway and surrounding Wasatch County luxury communities"
        backgroundImage="/images/pond-services-hero.jpg"
        backgroundImageAlt="Professional pond services in Midway"
      />

      <div className="container">
        <section className="location-overview">
          <h2>Pond Services in Midway</h2>
          <p>
            Utah Water Gardens proudly serves Midway and surrounding Wasatch County areas with comprehensive pond and water feature services. 
            Our local expertise in Midway's unique mountain climate and water conditions ensures your pond thrives year-round in this beautiful Swiss-inspired community.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for Midway Pond Services?</h3>
              <ul>
                <li>Local expertise in Midway's mountain climate and water conditions</li>
                <li>Over 25 years of experience serving the Midway area</li>
                <li>Licensed and insured for all Midway projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
                <li>Experience with luxury resorts and mountain properties</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sMidway%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Midway Service Area"
              ></iframe>

            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Our Midway Pond Services</h2>
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
          <h2>What Midway Customers Say</h2>
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
            <Link to="/pond-services/heber-city" className="area-link">Heber City</Link>
            <Link to="/pond-services/red-ledges" className="area-link">Red Ledges</Link>
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
      </div>

        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    );
};

export default MidwayPage;
