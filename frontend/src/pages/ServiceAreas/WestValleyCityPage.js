import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero.js';
import './ServiceAreaPage.css';

const WestValleyCityPage = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for West Valley City properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your West Valley City pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in West Valley City',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens created a stunning pond for our West Valley City home. Their expertise in Salt Lake County's climate is unmatched.",
      author: "Jennifer M., West Valley City"
    },
    {
      text: "Outstanding service and beautiful results. They understand what works in West Valley City's environment and deliver every time.",
      author: "David L., West Valley City"
    }
  ];

  return (
    <div className="service-area-page">
      <PageHero 
        title="Pond Services in West Valley City"
        subtitle="Professional pond services for West Valley City and surrounding Salt Lake County areas"
        backgroundImage="/images/pond-services-hero.jpg"
        backgroundImageAlt="Professional pond services in West Valley City"
      />

      <div className="container">
        <section className="location-overview">
          <h2>Pond Services in West Valley City</h2>
          <p>
            Utah Water Gardens proudly serves West Valley City and surrounding Salt Lake County areas with comprehensive pond and water feature services. 
            Our local expertise in West Valley City's unique climate and water conditions ensures your pond thrives year-round.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for West Valley City Pond Services?</h3>
              <ul>
                <li>Local expertise in West Valley City's climate and water conditions</li>
                <li>Over 25 years of experience serving the West Valley City area</li>
                <li>Licensed and insured for all West Valley City projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
              </ul>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sWest%20Valley%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="West Valley City Service Area"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Our West Valley City Pond Services</h2>
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
          <h2>What West Valley City Customers Say</h2>
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
            <Link to="/pond-services/salt-lake-city" className="area-link">Salt Lake City</Link>
            <Link to="/pond-services/west-jordan" className="area-link">West Jordan</Link>
            <Link to="/pond-services/murray" className="area-link">Murray</Link>
            <Link to="/pond-services/taylorsville" className="area-link">Taylorsville</Link>
            <Link to="/pond-services/kearns" className="area-link">Kearns</Link>
            <Link to="/pond-services/magna" className="area-link">Magna</Link>
            <Link to="/pond-services/millcreek" className="area-link">Millcreek</Link>
            <Link to="/pond-services/holladay" className="area-link">Holladay</Link>
            <Link to="/pond-services/cottonwood-heights" className="area-link">Cottonwood Heights</Link>
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
          <h2>Ready to Get Started in West Valley City?</h2>
          <p>Contact us today for a free consultation and quote on your West Valley City pond project.</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Get Free Quote</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WestValleyCityPage;
