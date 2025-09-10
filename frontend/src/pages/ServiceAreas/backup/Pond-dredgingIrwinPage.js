import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StandardHero from '../../components/StandardHero';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const Pond-dredgingIrwinPage = () => {
  const services = [
    {
      name: 'Complete Pond Dredging',
      description: 'Full pond dredging services to restore original depth and water quality',
      features: ['Sediment Removal', 'Sludge Extraction', 'Depth Restoration', 'Water Quality Improvement']
    },
    {
      name: 'Partial Pond Dredging',
      description: 'Targeted dredging for specific areas of your pond',
      features: ['Selective Dredging', 'Minimal Disruption', 'Cost-Effective Solutions', 'Quick Turnaround']
    },
    {
      name: 'Emergency Dredging',
      description: 'Emergency dredging services for urgent pond restoration needs',
      features: ['Rapid Response', 'Emergency Assessment', 'Quick Dredging', 'Immediate Relief']
    },
    {
      name: 'Maintenance Dredging',
      description: 'Regular dredging services to prevent sediment buildup',
      features: ['Preventive Maintenance', 'Scheduled Dredging', 'Long-term Pond Health', 'Cost Savings']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens completely restored our pond's depth and clarity. The dredging service brought our pond back to life.",
      author: "Robert L."
    },
    {
      text: "Professional dredging service that transformed our shallow, murky pond into a beautiful, deep water feature.",
      author: "Amanda K."
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Dredging Irwin | Professional Pond Dredging Services"
        description="Expert pond dredging services in Irwin. Professional pond dredging services to restore water depth and quality Licensed & insured. Call (801) 590-8516."
        keywords="pond dredging, pond excavation, pond restoration, sediment removal, irwin pond dredging, pond dredging irwin"
        canonical="https://utahwatergardens.com/pond-dredging-irwin"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Pond Dredging Services Irwin",
          "description": "Professional pond dredging services in Irwin",
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
            "name": "Irwin"
          },
          "serviceType": "Pond Dredging",
          "offers": {
            "@type": "Offer",
            "description": "Professional pond dredging services",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <StandardHero 
        title="Pond Dredging Services in Irwin"
        subtitle="Professional pond services for Pond Dredging Services in Irwin and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Pond Dredging Services in Irwin"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Pond Dredging in Irwin</h2>
            <p>
              Restore your pond to its original depth and beauty with our professional dredging services. Using specialized equipment, we remove accumulated sediment, sludge, and debris to improve water quality, increase depth, and restore the natural beauty of your pond.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Irwin Pond Dredging?</h3>
                <ul>
                  <li>Specialized dredging equipment for efficient sediment removal</li>
                  <li>Eco-friendly dredging methods that protect aquatic life</li>
                  <li>Licensed and insured dredging professionals</li>
                  <li>Flexible scheduling to minimize disruption</li>
                  <li>Comprehensive water quality testing before and after</li>
                  <li>Proper disposal of dredged materials</li>
                </ul>
              </div>
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sIrwin!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Irwin Pond Dredging Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Irwin Pond Dredging Services</h2>
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
            <h2>What Irwin Customers Say About Our Pond Dredging</h2>
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
            <h2>We Also Provide Pond Dredging in These Areas</h2>
            <div className="areas-grid">
              <Link to="/pond-dredging-nearby-city-1" className="area-link">Nearby City 1</Link>
              <Link to="/pond-dredging-nearby-city-2" className="area-link">Nearby City 2</Link>
              <Link to="/pond-dredging-nearby-city-3" className="area-link">Nearby City 3</Link>
              <Link to="/pond-dredging-nearby-city-4" className="area-link">Nearby City 4</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default Pond-dredgingIrwinPage;