import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StandardHero from '../../components/StandardHero';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const Pond-repairDeweyvillePage = () => {
  const services = [
    {
      name: 'Pump Repair & Replacement',
      description: 'Expert pump repair and replacement services for your pond',
      features: ['Pump Diagnosis', 'Repair Services', 'Replacement Options', 'Performance Optimization']
    },
    {
      name: 'Filter System Repair',
      description: 'Comprehensive filter system repair and maintenance for your pond',
      features: ['Filter Assessment', 'Component Repair', 'System Upgrades', 'Performance Testing']
    },
    {
      name: 'Pond Liner Repair',
      description: 'Professional pond liner repair and replacement services',
      features: ['Leak Detection', 'Liner Repair', 'Liner Replacement', 'Sealant Application']
    },
    {
      name: 'Emergency Pond Repair',
      description: '24/7 emergency pond repair services',
      features: ['Emergency Response', 'Quick Diagnosis', 'Temporary Fixes', 'Permanent Solutions']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens fixed our pond pump quickly and efficiently. Their emergency service saved our fish during a critical failure.",
      author: "Tom H."
    },
    {
      text: "Professional repair service with fair pricing. They diagnosed the problem accurately and had it fixed the same day.",
      author: "Maria G."
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Repair Deweyville | Professional Pond Repair Services"
        description="Expert pond repair services in Deweyville. Professional pond repair and equipment maintenance services Licensed & insured. Call (801) 590-8516."
        keywords="pond repair, pond pump repair, pond filter repair, pond liner repair, deweyville pond repair, pond repair deweyville"
        canonical="https://utahwatergardens.com/pond-repair-deweyville"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Pond Repair Services Deweyville",
          "description": "Professional pond repair services in Deweyville",
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
            "name": "Deweyville"
          },
          "serviceType": "Pond Repair",
          "offers": {
            "@type": "Offer",
            "description": "Professional pond repair services",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <StandardHero 
        title="Pond Repair Services in Deweyville"
        subtitle="Professional pond services for Pond Repair Services in Deweyville and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Pond Repair Services in Deweyville"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Pond Repair in Deweyville</h2>
            <p>
              When your pond equipment fails, you need fast, reliable repair services. Our experienced technicians provide comprehensive pond repair services, from pump failures to filter system issues, ensuring your pond continues to function properly year-round.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Deweyville Pond Repair?</h3>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sDeweyville!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Deweyville Pond Repair Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Deweyville Pond Repair Services</h2>
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
            <h2>What Deweyville Customers Say About Our Pond Repair</h2>
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
            <h2>We Also Provide Pond Repair in These Areas</h2>
            <div className="areas-grid">
              <Link to="/pond-repair-nearby-city-1" className="area-link">Nearby City 1</Link>
              <Link to="/pond-repair-nearby-city-2" className="area-link">Nearby City 2</Link>
              <Link to="/pond-repair-nearby-city-3" className="area-link">Nearby City 3</Link>
              <Link to="/pond-repair-nearby-city-4" className="area-link">Nearby City 4</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default Pond-repairDeweyvillePage;