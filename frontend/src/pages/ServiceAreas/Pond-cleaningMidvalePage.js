import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero.js';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const Pond-cleaningMidvalePage = () => {
  const services = [
    {
      name: 'Deep Pond Cleaning',
      description: 'Comprehensive pond cleaning services using our professional Truxor T50 equipment',
      features: ['Debris Removal', 'Sludge Extraction', 'Filter Cleaning', 'Water Clarity Restoration']
    },
    {
      name: 'Algae Control & Removal',
      description: 'Professional algae treatment and removal for your pond',
      features: ['Algae Assessment', 'Treatment Application', 'Prevention Planning', 'Water Balance']
    },
    {
      name: 'Seasonal Pond Cleaning',
      description: 'Spring and fall cleaning services to prepare your pond for seasonal changes',
      features: ['Spring Startup', 'Fall Cleanup', 'Winter Preparation', 'Equipment Maintenance']
    },
    {
      name: 'Emergency Pond Cleaning',
      description: '24/7 emergency pond cleaning services',
      features: ['Storm Damage Cleanup', 'Equipment Failures', 'Water Quality Emergencies', 'Rapid Response']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens completely transformed our murky pond into crystal clear water. Their Truxor equipment made all the difference.",
      author: "Mark T."
    },
    {
      text: "Professional, efficient, and thorough. Our pond has never looked better since their deep cleaning service.",
      author: "Sarah W."
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Cleaning Midvale | Professional Pond Cleaning Services"
        description="Expert pond cleaning services in Midvale. Professional pond cleaning and maintenance services Licensed & insured. Call (801) 590-8516."
        keywords="pond cleaning, pond cleaning services, algae removal, pond maintenance, midvale pond cleaning, pond cleaning midvale"
        canonical="https://utahwatergardens.com/pond-cleaning-midvale"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Pond Cleaning Services Midvale",
          "description": "Professional pond cleaning services in Midvale",
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
            "name": "Midvale"
          },
          "serviceType": "Pond Cleaning",
          "offers": {
            "@type": "Offer",
            "description": "Professional pond cleaning services",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <PageHero 
          title="Pond Cleaning Services in Midvale"
          subtitle="Professional pond cleaning and maintenance services"
          backgroundImage="/images/pondCleanings-topaz-enhance-3.9x.jpeg"
          backgroundImageAlt="Professional pond cleaning services"
        />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Pond Cleaning in Midvale</h2>
            <p>
              Keep your pond crystal clear and healthy with our professional cleaning services. Using state-of-the-art Truxor T50 equipment, we provide thorough cleaning that removes debris, sludge, and algae while preserving the delicate ecosystem of your pond.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Midvale Pond Cleaning?</h3>
                <ul>
                  <li>Professional Truxor T50 equipment for thorough cleaning</li>
                  <li>Eco-friendly cleaning methods that protect fish and plants</li>
                  <li>Licensed and insured cleaning professionals</li>
                  <li>Flexible scheduling to fit your needs</li>
                  <li>Emergency cleaning services available</li>
                  <li>Comprehensive water quality testing</li>
                </ul>
              </div>
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sMidvale!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Midvale Pond Cleaning Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Midvale Pond Cleaning Services</h2>
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
            <h2>What Midvale Customers Say About Our Pond Cleaning</h2>
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
            <h2>We Also Provide Pond Cleaning in These Areas</h2>
            <div className="areas-grid">
              <Link to="/pond-cleaning-nearby-city-1" className="area-link">Nearby City 1</Link>
              <Link to="/pond-cleaning-nearby-city-2" className="area-link">Nearby City 2</Link>
              <Link to="/pond-cleaning-nearby-city-3" className="area-link">Nearby City 3</Link>
              <Link to="/pond-cleaning-nearby-city-4" className="area-link">Nearby City 4</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default Pond-cleaningMidvalePage;