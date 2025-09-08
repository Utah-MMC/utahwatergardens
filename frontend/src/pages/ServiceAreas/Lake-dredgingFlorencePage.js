import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero.js';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const Lake-dredgingFlorencePage = () => {
  const services = [
    {
      name: 'Complete Lake Dredging',
      description: 'Full lake dredging services to restore original depth and water quality',
      features: ['Large-Scale Sediment Removal', 'Depth Restoration', 'Water Quality Improvement', 'Ecosystem Restoration']
    },
    {
      name: 'Partial Lake Dredging',
      description: 'Targeted dredging for specific areas of your lake',
      features: ['Selective Dredging', 'Minimal Disruption', 'Cost-Effective Solutions', 'Flexible Scheduling']
    },
    {
      name: 'Lake Restoration',
      description: 'Comprehensive lake restoration services including dredging and ecosystem improvement',
      features: ['Complete Restoration', 'Ecosystem Enhancement', 'Water Quality Improvement', 'Long-term Planning']
    },
    {
      name: 'Maintenance Dredging',
      description: 'Regular maintenance dredging to prevent sediment buildup in your lake',
      features: ['Preventive Maintenance', 'Scheduled Dredging', 'Long-term Lake Health', 'Cost Savings']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens transformed our shallow lake into a beautiful, deep water body. Their lake dredging service was exceptional.",
      author: "John R."
    },
    {
      text: "Professional lake dredging that restored our lake's depth and clarity. The improvement in water quality was remarkable.",
      author: "Susan T."
    }
  ];

  return (
    <>
      <SEO 
        title="Lake Dredging Florence | Professional Lake Dredging Services"
        description="Expert lake dredging services in Florence. Professional lake dredging services for large water bodies Licensed & insured. Call (801) 590-8516."
        keywords="lake dredging, lake restoration, lake excavation, sediment removal, lake maintenance, florence lake dredging, lake dredging florence"
        canonical="https://utahwatergardens.com/lake-dredging-florence"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Lake Dredging Services Florence",
          "description": "Professional lake dredging services in Florence",
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
            "name": "Florence"
          },
          "serviceType": "Lake Dredging",
          "offers": {
            "@type": "Offer",
            "description": "Professional lake dredging services",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <PageHero 
          title="Lake Dredging Services in Florence"
          subtitle="Professional lake dredging services for large water bodies"
          backgroundImage="/images/lakeDredging-topaz-enhance-3.9x.jpeg"
          backgroundImageAlt="Professional lake dredging services"
        />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Lake Dredging in Florence</h2>
            <p>
              Restore your lake to its full potential with our professional lake dredging services. Using specialized equipment designed for large water bodies, we remove accumulated sediment, improve water depth, and restore the natural beauty and functionality of your lake.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Florence Lake Dredging?</h3>
                <ul>
                  <li>Specialized equipment for large-scale lake dredging projects</li>
                  <li>Experience with lakes of all sizes and types</li>
                  <li>Licensed and insured lake dredging professionals</li>
                  <li>Minimal environmental impact with eco-friendly methods</li>
                  <li>Comprehensive project planning and execution</li>
                  <li>Proper disposal and management of dredged materials</li>
                </ul>
              </div>
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sFlorence!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Florence Lake Dredging Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Florence Lake Dredging Services</h2>
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
            <h2>What Florence Customers Say About Our Lake Dredging</h2>
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
            <h2>We Also Provide Lake Dredging in These Areas</h2>
            <div className="areas-grid">
              <Link to="/lake-dredging-nearby-city-1" className="area-link">Nearby City 1</Link>
              <Link to="/lake-dredging-nearby-city-2" className="area-link">Nearby City 2</Link>
              <Link to="/lake-dredging-nearby-city-3" className="area-link">Nearby City 3</Link>
              <Link to="/lake-dredging-nearby-city-4" className="area-link">Nearby City 4</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default Lake-dredgingFlorencePage;