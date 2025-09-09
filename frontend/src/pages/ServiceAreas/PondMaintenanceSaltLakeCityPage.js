import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StandardHero from '../../components/StandardHero';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const PondMaintenanceSaltLakeCityPage = () => {
  const services = [
    {
      name: 'Regular Pond Maintenance',
      description: 'Weekly, bi-weekly, or monthly maintenance schedules tailored to your Salt Lake City pond',
      features: ['Water Quality Testing', 'Filter Cleaning', 'Plant Trimming', 'Debris Removal']
    },
    {
      name: 'Seasonal Pond Care',
      description: 'Specialized care for Salt Lake City\'s unique seasonal changes',
      features: ['Spring Startup', 'Summer Care', 'Fall Preparation', 'Winter Protection']
    },
    {
      name: 'Emergency Pond Service',
      description: '24/7 emergency pond maintenance services in Salt Lake City',
      features: ['Pump Failures', 'Water Quality Issues', 'Equipment Breakdowns', 'Storm Damage']
    },
    {
      name: 'Pond Health Monitoring',
      description: 'Comprehensive monitoring to keep your Salt Lake City pond healthy',
      features: ['Water Testing', 'Fish Health Checks', 'Plant Health Assessment', 'Equipment Inspection']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens keeps our Salt Lake City pond in perfect condition year-round. Their maintenance program is comprehensive and reliable.",
      author: "Jennifer L., Salt Lake City"
    },
    {
      text: "Professional, knowledgeable, and always on time. They understand Salt Lake City's climate challenges and keep our pond thriving.",
      author: "Robert K., Salt Lake City"
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Maintenance Salt Lake City, UT | Professional Pond Care Services"
        description="Expert pond maintenance services in Salt Lake City, UT. Regular care, seasonal maintenance, and emergency services. Licensed & insured. Call (801) 590-8516."
        keywords="pond maintenance salt lake city, salt lake city pond maintenance, pond care salt lake city, pond service salt lake city, utah water gardens"
        canonical="https://utahwatergardens.com/pond-maintenance-salt-lake-city"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Pond Maintenance Services Salt Lake City",
          "description": "Professional pond maintenance services in Salt Lake City, UT",
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
        title="Pond Maintenance Services in Salt Lake City"
        subtitle="Professional pond services for Pond Maintenance Services in Salt Lake City and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Pond Maintenance Services in Salt Lake City"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Pond Maintenance in Salt Lake City</h2>
            <p>
              Keep your Salt Lake City pond healthy and beautiful year-round with our comprehensive maintenance services. 
              Our experienced team understands the unique challenges of maintaining ponds in Salt Lake City's climate and provides 
              tailored care to ensure your water feature thrives in every season.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Salt Lake City Pond Maintenance?</h3>
                <ul>
                  <li>Local expertise in Salt Lake City's climate and water conditions</li>
                  <li>Flexible maintenance schedules to fit your needs</li>
                  <li>Emergency services available 24/7</li>
                  <li>Licensed and insured professionals</li>
                  <li>Comprehensive water quality testing</li>
                  <li>Seasonal care programs</li>
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
                  title="Salt Lake City Pond Maintenance Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Salt Lake City Pond Maintenance Services</h2>
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
            <h2>What Salt Lake City Customers Say About Our Maintenance</h2>
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
              <Link to="/pond-maintenance-murray" className="area-link">Murray</Link>
              <Link to="/pond-maintenance-west-valley-city" className="area-link">West Valley City</Link>
              <Link to="/pond-maintenance-sandy" className="area-link">Sandy</Link>
              <Link to="/pond-maintenance-west-jordan" className="area-link">West Jordan</Link>
              <Link to="/pond-maintenance-south-jordan" className="area-link">South Jordan</Link>
              <Link to="/pond-maintenance-riverton" className="area-link">Riverton</Link>
              <Link to="/pond-maintenance-herriman" className="area-link">Herriman</Link>
              <Link to="/pond-maintenance-draper" className="area-link">Draper</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default PondMaintenanceSaltLakeCityPage;
