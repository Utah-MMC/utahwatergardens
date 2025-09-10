import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StandardHero from '../../components/StandardHero';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const Pond-maintenanceCarbondalePage = () => {
  const services = [
    {
      name: 'Regular Pond Maintenance',
      description: 'Weekly, bi-weekly, or monthly maintenance schedules tailored to your pond',
      features: ['Water Quality Testing', 'Filter Cleaning', 'Plant Trimming', 'Debris Removal']
    },
    {
      name: 'Seasonal Pond Care',
      description: 'Specialized care for your area's unique seasonal changes',
      features: ['Spring Startup', 'Summer Care', 'Fall Preparation', 'Winter Protection']
    },
    {
      name: 'Emergency Pond Service',
      description: '24/7 emergency pond maintenance services',
      features: ['Pump Failures', 'Water Quality Issues', 'Equipment Breakdowns', 'Storm Damage']
    },
    {
      name: 'Pond Health Monitoring',
      description: 'Comprehensive monitoring to keep your pond healthy',
      features: ['Water Testing', 'Fish Health Checks', 'Plant Health Assessment', 'Equipment Inspection']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens keeps our pond in perfect condition year-round. Their maintenance program is comprehensive and reliable.",
      author: "Jennifer L."
    },
    {
      text: "Professional, knowledgeable, and always on time. They understand our climate challenges and keep our pond thriving.",
      author: "Robert K."
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Maintenance Carbondale | Professional Pond Maintenance Services"
        description="Expert pond maintenance services in Carbondale. Professional pond maintenance and care services for your water feature Licensed & insured. Call (801) 590-8516."
        keywords="pond maintenance, pond care, pond service, water feature maintenance, carbondale pond maintenance, pond maintenance carbondale"
        canonical="https://utahwatergardens.com/pond-maintenance-carbondale"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Pond Maintenance Services Carbondale",
          "description": "Professional pond maintenance services in Carbondale",
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
            "name": "Carbondale"
          },
          "serviceType": "Pond Maintenance",
          "offers": {
            "@type": "Offer",
            "description": "Professional pond maintenance services",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <StandardHero 
        title="Pond Maintenance Services in Carbondale"
        subtitle="Professional pond services for Pond Maintenance Services in Carbondale and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Pond Maintenance Services in Carbondale"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Pond Maintenance in Carbondale</h2>
            <p>
              Keep your pond healthy and beautiful year-round with our comprehensive maintenance services. Our experienced team provides tailored care to ensure your water feature thrives in every season.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Carbondale Pond Maintenance?</h3>
                <ul>
                  <li>Local expertise in your area's climate and water conditions</li>
                  <li>Flexible maintenance schedules to fit your needs</li>
                  <li>Emergency services available 24/7</li>
                  <li>Licensed and insured professionals</li>
                  <li>Comprehensive water quality testing</li>
                  <li>Seasonal care programs</li>
                </ul>
              </div>
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sCarbondale!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carbondale Pond Maintenance Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Carbondale Pond Maintenance Services</h2>
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
            <h2>What Carbondale Customers Say About Our Pond Maintenance</h2>
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
            <h2>We Also Provide Pond Maintenance in These Areas</h2>
            <div className="areas-grid">
              <Link to="/pond-maintenance-nearby-city-1" className="area-link">Nearby City 1</Link>
              <Link to="/pond-maintenance-nearby-city-2" className="area-link">Nearby City 2</Link>
              <Link to="/pond-maintenance-nearby-city-3" className="area-link">Nearby City 3</Link>
              <Link to="/pond-maintenance-nearby-city-4" className="area-link">Nearby City 4</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default Pond-maintenanceCarbondalePage;