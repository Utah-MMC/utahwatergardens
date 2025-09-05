import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero.js';
import './ServiceAreaPage.css';

const SandyPage = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for Sandy properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your Sandy pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in Sandy',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens transformed our Sandy backyard into a stunning water feature. Their expertise in our local area is incredible.",
      author: "Robert T., Sandy"
    },
    {
      text: "Outstanding service and beautiful results. They know exactly what works in Sandy's climate and deliver every time.",
      author: "Lisa W., Sandy"
    }
  ];

  return (
    <div className="service-area-page">
      <PageHero 
        title="Pond Services in Sandy"
        subtitle="Professional pond services for Sandy and surrounding areas"
        backgroundImage="/images/pond-services-hero.jpg"
        backgroundImageAlt="Professional pond services in Sandy"
      />

      <div className="container">
        {/* Location Overview */}
        <section className="location-overview">
          <h2>Pond Services in Sandy</h2>
          <p>
            Utah Water Gardens proudly serves Sandy and surrounding areas with comprehensive pond and water feature services. 
            Our local expertise in Sandy's unique climate and water conditions ensures your pond thrives year-round.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for Sandy Pond Services?</h3>
              <ul>
                <li>Local expertise in Sandy's climate and water conditions</li>
                <li>Over 25 years of experience serving the Sandy area</li>
                <li>Licensed and insured for all Sandy projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sSandy%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sandy Service Area"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services-section">
          <h2>Our Sandy Pond Services</h2>
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
          <h2>What Sandy Customers Say</h2>
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
            <Link to="/pond-services/salt-lake-city" className="area-link">Salt Lake City</Link>
            <Link to="/pond-services/murray" className="area-link">Murray</Link>
            <Link to="/pond-services/west-jordan" className="area-link">West Jordan</Link>
            <Link to="/pond-services/south-jordan" className="area-link">South Jordan</Link>
            <Link to="/pond-services/riverton" className="area-link">Riverton</Link>
            <Link to="/pond-services/herriman" className="area-link">Herriman</Link>
            <Link to="/pond-services/bluffdale" className="area-link">Bluffdale</Link>
            <Link to="/pond-services/draper" className="area-link">Draper</Link>
            <Link to="/pond-services/west-valley-city" className="area-link">West Valley City</Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section 
          className="contact-cta"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/cta-bg-enhanced.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h2>Ready to Get Started in Sandy?</h2>
          <p>Contact us today for a free consultation and quote on your Sandy pond project.</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Get Free Quote</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SandyPage;
