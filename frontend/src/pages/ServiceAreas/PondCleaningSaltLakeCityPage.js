import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StandardHero from '../../components/StandardHero';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const PondCleaningSaltLakeCityPage = () => {
  const services = [
    {
      name: 'Deep Pond Cleaning',
      description: 'Comprehensive pond cleaning services using our professional Truxor T50 equipment',
      features: ['Debris Removal', 'Sludge Extraction', 'Filter Cleaning', 'Water Clarity Restoration']
    },
    {
      name: 'Algae Control & Removal',
      description: 'Professional algae treatment and removal for Salt Lake City ponds',
      features: ['Algae Assessment', 'Treatment Application', 'Prevention Planning', 'Water Balance']
    },
    {
      name: 'Seasonal Pond Cleaning',
      description: 'Spring and fall cleaning services to prepare your Salt Lake City pond for seasonal changes',
      features: ['Spring Startup', 'Fall Cleanup', 'Winter Preparation', 'Equipment Maintenance']
    },
    {
      name: 'Emergency Pond Cleaning',
      description: '24/7 emergency pond cleaning services for Salt Lake City residents',
      features: ['Storm Damage Cleanup', 'Equipment Failures', 'Water Quality Emergencies', 'Rapid Response']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens completely transformed our murky pond into crystal clear water. Their Truxor equipment made all the difference.",
      author: "Mark T., Salt Lake City"
    },
    {
      text: "Professional, efficient, and thorough. Our pond has never looked better since their deep cleaning service.",
      author: "Sarah W., Salt Lake City"
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Cleaning Salt Lake City, UT | Professional Pond Cleaning Services"
        description="Expert pond cleaning services in Salt Lake City, UT. Deep cleaning, algae control, and seasonal maintenance with Truxor equipment. Licensed & insured. Call (801) 590-8516."
        keywords="pond cleaning salt lake city, salt lake city pond cleaning, pond cleaning services salt lake city, algae removal salt lake city, pond maintenance salt lake city"
        canonical="https://utahwatergardens.com/pond-cleaning-salt-lake-city"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Pond Cleaning Services Salt Lake City",
          "description": "Professional pond cleaning and maintenance services in Salt Lake City, UT",
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
          "serviceType": "Pond Cleaning",
          "offers": {
            "@type": "Offer",
            "description": "Professional pond cleaning services with Truxor equipment",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <StandardHero 
        title="Pond Cleaning Services in Salt Lake City"
        subtitle="Professional pond services for Pond Cleaning Services in Salt Lake City and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Pond Cleaning Services in Salt Lake City"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Pond Cleaning in Salt Lake City</h2>
            <p>
              Keep your Salt Lake City pond crystal clear and healthy with our professional cleaning services. 
              Using state-of-the-art Truxor T50 equipment, we provide thorough cleaning that removes debris, 
              sludge, and algae while preserving the delicate ecosystem of your pond.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Salt Lake City Pond Cleaning?</h3>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salt Lake City Pond Cleaning Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Salt Lake City Pond Cleaning Services</h2>
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
            <h2>What Salt Lake City Customers Say About Our Cleaning</h2>
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
            <h2>We Also Clean Ponds in These Areas</h2>
            <div className="areas-grid">
              <Link to="/pond-cleaning-murray" className="area-link">Murray</Link>
              <Link to="/pond-cleaning-west-valley-city" className="area-link">West Valley City</Link>
              <Link to="/pond-cleaning-sandy" className="area-link">Sandy</Link>
              <Link to="/pond-cleaning-west-jordan" className="area-link">West Jordan</Link>
              <Link to="/pond-cleaning-south-jordan" className="area-link">South Jordan</Link>
              <Link to="/pond-cleaning-riverton" className="area-link">Riverton</Link>
              <Link to="/pond-cleaning-herriman" className="area-link">Herriman</Link>
              <Link to="/pond-cleaning-draper" className="area-link">Draper</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default PondCleaningSaltLakeCityPage;
