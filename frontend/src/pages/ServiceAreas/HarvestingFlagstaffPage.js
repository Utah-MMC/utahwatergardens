import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StandardHero from '../../components/StandardHero';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const HarvestingFlagstaffPage = () => {
  const services = [
    {
      name: 'Selective Plant Harvesting',
      description: 'Careful removal of excess aquatic plants while preserving beneficial species',
      features: ['Species Identification', 'Selective Removal', 'Ecosystem Balance', 'Water Quality Protection']
    },
    {
      name: 'Seasonal Plant Management',
      description: 'Year-round plant management to maintain optimal pond health',
      features: ['Spring Growth Control', 'Summer Maintenance', 'Fall Cleanup', 'Winter Preparation']
    },
    {
      name: 'Invasive Species Removal',
      description: 'Professional removal of invasive aquatic plant species',
      features: ['Invasive Species Identification', 'Complete Removal', 'Prevention Planning', 'Native Plant Restoration']
    },
    {
      name: 'Plant Health Assessment',
      description: 'Comprehensive assessment of your pond's plant ecosystem',
      features: ['Plant Health Analysis', 'Growth Pattern Assessment', 'Management Recommendations', 'Long-term Planning']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens expertly managed our pond's plant growth. Their selective harvesting kept our pond healthy and beautiful.",
      author: "David P."
    },
    {
      text: "Professional plant harvesting service that restored balance to our overgrown pond. The results were immediate and lasting.",
      author: "Lisa M."
    }
  ];

  return (
    <>
      <SEO 
        title="Aquatic Plant Harvesting Flagstaff | Professional Aquatic Plant Harvesting Services"
        description="Expert aquatic plant harvesting services in Flagstaff. Professional aquatic plant harvesting and management services Licensed & insured. Call (801) 590-8516."
        keywords="aquatic plant harvesting, pond plant management, water plant removal, plant control, flagstaff aquatic plant harvesting, aquatic plant harvesting flagstaff"
        canonical="https://utahwatergardens.com/harvesting-flagstaff"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Aquatic Plant Harvesting Services Flagstaff",
          "description": "Professional aquatic plant harvesting services in Flagstaff",
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
            "name": "Flagstaff"
          },
          "serviceType": "Aquatic Plant Harvesting",
          "offers": {
            "@type": "Offer",
            "description": "Professional aquatic plant harvesting services",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <StandardHero 
        title="Aquatic Plant Harvesting Services in Flagstaff"
        subtitle="Professional pond services for Aquatic Plant Harvesting Services in Flagstaff and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Aquatic Plant Harvesting Services in Flagstaff"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Aquatic Plant Harvesting in Flagstaff</h2>
            <p>
              Keep your pond healthy and balanced with our professional aquatic plant harvesting services. We carefully remove excess vegetation while preserving the natural ecosystem, ensuring optimal water quality and fish health.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Flagstaff Aquatic Plant Harvesting?</h3>
                <ul>
                  <li>Expert knowledge of aquatic plant species and growth patterns</li>
                  <li>Selective harvesting that preserves beneficial plants</li>
                  <li>Eco-friendly harvesting methods that protect fish and wildlife</li>
                  <li>Licensed and insured harvesting professionals</li>
                  <li>Flexible scheduling to fit your pond's needs</li>
                  <li>Comprehensive plant management planning</li>
                </ul>
              </div>
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sFlagstaff!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Flagstaff Aquatic Plant Harvesting Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Flagstaff Aquatic Plant Harvesting Services</h2>
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
            <h2>What Flagstaff Customers Say About Our Aquatic Plant Harvesting</h2>
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
            <h2>We Also Provide Aquatic Plant Harvesting in These Areas</h2>
            <div className="areas-grid">
              <Link to="/harvesting-nearby-city-1" className="area-link">Nearby City 1</Link>
              <Link to="/harvesting-nearby-city-2" className="area-link">Nearby City 2</Link>
              <Link to="/harvesting-nearby-city-3" className="area-link">Nearby City 3</Link>
              <Link to="/harvesting-nearby-city-4" className="area-link">Nearby City 4</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default HarvestingFlagstaffPage;