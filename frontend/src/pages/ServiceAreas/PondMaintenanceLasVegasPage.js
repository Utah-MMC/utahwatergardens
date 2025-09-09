import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StandardHero from '../../components/StandardHero';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const PondMaintenanceLasVegasPage = () => {
  const services = [
    {
      name: 'Regular Pond Maintenance',
      description: 'Weekly, bi-weekly, or monthly maintenance schedules tailored to your Las Vegas pond',
      features: ['Water Quality Testing', 'Filter Cleaning', 'Plant Trimming', 'Debris Removal']
    },
    {
      name: 'Desert Climate Care',
      description: 'Specialized care for Las Vegas\'s unique desert climate conditions',
      features: ['Heat Management', 'Water Conservation', 'UV Protection', 'Dust Control']
    },
    {
      name: 'Emergency Pond Service',
      description: '24/7 emergency pond maintenance services in Las Vegas',
      features: ['Pump Failures', 'Water Quality Issues', 'Equipment Breakdowns', 'Storm Damage']
    },
    {
      name: 'Pond Health Monitoring',
      description: 'Comprehensive monitoring to keep your Las Vegas pond healthy',
      features: ['Water Testing', 'Fish Health Checks', 'Plant Health Assessment', 'Equipment Inspection']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens keeps our Las Vegas pond in perfect condition despite the harsh desert climate. Their expertise is unmatched.",
      author: "Jennifer L., Las Vegas"
    },
    {
      text: "Professional, knowledgeable, and always on time. They understand Las Vegas's unique challenges and keep our pond thriving.",
      author: "Robert K., Las Vegas"
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Maintenance Las Vegas, NV | Professional Pond Care Services"
        description="Expert pond maintenance services in Las Vegas, NV. Desert climate care, regular maintenance, and emergency services. Licensed & insured. Call (801) 590-8516."
        keywords="pond maintenance las vegas, las vegas pond maintenance, pond care las vegas, pond service las vegas, desert pond maintenance"
        canonical="https://utahwatergardens.com/pond-maintenance-las-vegas"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Pond Maintenance Services Las Vegas",
          "description": "Professional pond maintenance services in Las Vegas, NV",
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
            "name": "Las Vegas, NV"
          },
          "serviceType": "Pond Maintenance",
          "offers": {
            "@type": "Offer",
            "description": "Professional pond maintenance services for desert climate",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <StandardHero 
        title="Pond Maintenance Services in Las Vegas"
        subtitle="Professional pond services for Pond Maintenance Services in Las Vegas and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Pond Maintenance Services in Las Vegas"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Pond Maintenance in Las Vegas</h2>
            <p>
              Keep your Las Vegas pond healthy and beautiful year-round with our comprehensive maintenance services. 
              Our experienced team understands the unique challenges of maintaining ponds in Las Vegas's desert climate and provides 
              specialized care to ensure your water feature thrives despite the harsh conditions.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Las Vegas Pond Maintenance?</h3>
                <ul>
                  <li>Expertise in desert climate pond care</li>
                  <li>Heat and UV protection strategies</li>
                  <li>Water conservation techniques</li>
                  <li>Emergency services available 24/7</li>
                  <li>Licensed and insured professionals</li>
                  <li>Comprehensive water quality testing</li>
                </ul>
              </div>
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c4c4c4c4c4c%3A0x4c4c4c4c4c4c4c4c!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Las Vegas Pond Maintenance Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Las Vegas Pond Maintenance Services</h2>
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
            <h2>What Las Vegas Customers Say About Our Maintenance</h2>
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
              <Link to="/pond-maintenance-henderson" className="area-link">Henderson</Link>
              <Link to="/pond-maintenance-north-las-vegas" className="area-link">North Las Vegas</Link>
              <Link to="/pond-maintenance-boulder-city" className="area-link">Boulder City</Link>
              <Link to="/pond-maintenance-mesquite" className="area-link">Mesquite</Link>
              <Link to="/pond-maintenance-pahrump" className="area-link">Pahrump</Link>
              <Link to="/pond-maintenance-summerlin" className="area-link">Summerlin</Link>
              <Link to="/pond-maintenance-green-valley" className="area-link">Green Valley</Link>
              <Link to="/pond-maintenance-anthem" className="area-link">Anthem</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default PondMaintenanceLasVegasPage;
