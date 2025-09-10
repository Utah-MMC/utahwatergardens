import React from 'react';
import CTA from '../../components/CTA';
import { Link } from 'react-router-dom';
import StandardHero from '../../components/StandardHero';
import './ServiceAreaPage.css';

const MantiPage = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for Manti properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your Manti pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in Manti',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens created a stunning pond for our Manti home. Their expertise in central Utah's climate is unmatched.",
      author: "Jennifer M., Manti"
    },
    {
      text: "Outstanding service and beautiful results. They understand what works in Manti's environment and deliver every time.",
      author: "David L., Manti"
    }
  ];

  return (
    <div className="service-area-page">
      <StandardHero 
        title="Pond Services in Manti"
        subtitle="Professional pond services for Manti and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Manti"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

      <div className="container">
        <section className="location-overview">
          <h2>Pond Services in Manti</h2>
          <p>
            Utah Water Gardens proudly serves Manti and surrounding Sanpete County areas with comprehensive pond and water feature services. 
            Our local expertise in Manti's unique climate and water conditions ensures your pond thrives year-round in this beautiful historic community.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for Manti Pond Services?</h3>
              <ul>
                <li>Local expertise in Manti's climate and water conditions</li>
                <li>Over 25 years of experience serving the Manti area</li>
                <li>Licensed and insured for all Manti projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
                <li>Experience with historic properties and communities</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sManti%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manti Service Area"
              ></iframe>

            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Our Manti Pond Services</h2>
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
          <h2>What Manti Customers Say</h2>
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
            <Link to="/pond-services/nephi" className="area-link">Nephi</Link>
            <Link to="/pond-services/mona" className="area-link">Mona</Link>
            <Link to="/pond-services/ephraim" className="area-link">Ephraim</Link>
            <Link to="/pond-services/richfield" className="area-link">Richfield</Link>
            <Link to="/pond-services/salina" className="area-link">Salina</Link>
            <Link to="/pond-services/delta" className="area-link">Delta</Link>
            <Link to="/pond-services/fillmore" className="area-link">Fillmore</Link>
            <Link to="/pond-services/beaver" className="area-link">Beaver</Link>
            <Link to="/pond-services/milford" className="area-link">Milford</Link>
            <Link to="/pond-services/cedar-city" className="area-link">Cedar City</Link>
          </div>
        </section>
      </div>

        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    );
};

export default MantiPage;
