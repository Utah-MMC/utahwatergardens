import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero.js';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const PondRepairSaltLakeCityPage = () => {
  const services = [
    {
      name: 'Pump Repair & Replacement',
      description: 'Expert pump repair and replacement services for Salt Lake City ponds',
      features: ['Pump Diagnosis', 'Repair Services', 'Replacement Options', 'Performance Optimization']
    },
    {
      name: 'Filter System Repair',
      description: 'Comprehensive filter system repair and maintenance for Salt Lake City ponds',
      features: ['Filter Assessment', 'Component Repair', 'System Upgrades', 'Performance Testing']
    },
    {
      name: 'Pond Liner Repair',
      description: 'Professional pond liner repair and replacement services in Salt Lake City',
      features: ['Leak Detection', 'Liner Repair', 'Liner Replacement', 'Sealant Application']
    },
    {
      name: 'Emergency Pond Repair',
      description: '24/7 emergency pond repair services for Salt Lake City residents',
      features: ['Emergency Response', 'Quick Diagnosis', 'Temporary Fixes', 'Permanent Solutions']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens fixed our pond pump quickly and efficiently. Their emergency service saved our fish during a critical failure.",
      author: "Tom H., Salt Lake City"
    },
    {
      text: "Professional repair service with fair pricing. They diagnosed the problem accurately and had it fixed the same day.",
      author: "Maria G., Salt Lake City"
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Repair Salt Lake City, UT | Professional Pond Equipment Repair Services"
        description="Expert pond repair services in Salt Lake City, UT. Pump repair, filter repair, liner repair, and emergency services. Licensed & insured. Call (801) 590-8516."
        keywords="pond repair salt lake city, salt lake city pond repair, pond pump repair salt lake city, pond filter repair salt lake city, pond liner repair salt lake city"
        canonical="https://utahwatergardens.com/pond-repair-salt-lake-city"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Pond Repair Services Salt Lake City",
          "description": "Professional pond repair and equipment maintenance services in Salt Lake City, UT",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Utah Water Gardens",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5911 S 1300 E",
              "addressLocality": "Salt Lake City",
              "addressRegion": "UT",
              "postalCode": "84121",
              "addressCountry": "US"
            },
            "telephone": "+1-801-590-8516"
          },
          "areaServed": {
            "@type": "City",
            "name": "Salt Lake City, UT"
          },
          "serviceType": "Pond Repair",
          "offers": {
            "@type": "Offer",
            "description": "Professional pond repair and equipment maintenance services",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <PageHero 
          title="Pond Repair Services in Salt Lake City"
          subtitle="Professional pond repair and equipment maintenance services for Salt Lake City residents"
          backgroundImage="/images/pumpRepair.webp"
          backgroundImageAlt="Professional pond repair services in Salt Lake City"
        />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Pond Repair in Salt Lake City</h2>
            <p>
              When your Salt Lake City pond equipment fails, you need fast, reliable repair services. 
              Our experienced technicians provide comprehensive pond repair services, from pump failures 
              to filter system issues, ensuring your pond continues to function properly year-round.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Salt Lake City Pond Repair?</h3>
                <ul>
                  <li>Licensed and certified repair technicians</li>
                  <li>Emergency repair services available 24/7</li>
                  <li>Quality parts and equipment from trusted manufacturers</li>
                  <li>Fair pricing with upfront estimates</li>
                  <li>Warranty on all repair work</li>
                  <li>Preventive maintenance programs</li>
                </ul>
              </div>
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salt Lake City Pond Repair Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Salt Lake City Pond Repair Services</h2>
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
            <h2>What Salt Lake City Customers Say About Our Repair Services</h2>
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
          <section className="nearby-areas gradient-wipe-up">
            <h2>We Also Repair Ponds in These Areas</h2>
            <div className="areas-grid">
              <Link to="/pond-repair-murray" className="area-link">Murray</Link>
              <Link to="/pond-repair-west-valley-city" className="area-link">West Valley City</Link>
              <Link to="/pond-repair-sandy" className="area-link">Sandy</Link>
              <Link to="/pond-repair-west-jordan" className="area-link">West Jordan</Link>
              <Link to="/pond-repair-south-jordan" className="area-link">South Jordan</Link>
              <Link to="/pond-repair-riverton" className="area-link">Riverton</Link>
              <Link to="/pond-repair-herriman" className="area-link">Herriman</Link>
              <Link to="/pond-repair-draper" className="area-link">Draper</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default PondRepairSaltLakeCityPage;
