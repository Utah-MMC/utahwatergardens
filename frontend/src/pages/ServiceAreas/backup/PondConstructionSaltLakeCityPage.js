import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StandardHero from '../../components/StandardHero';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const PondConstructionSaltLakeCityPage = () => {
  const services = [
    {
      name: 'Custom Pond Design',
      description: 'Bespoke pond designs tailored to your Salt Lake City property and lifestyle',
      features: ['Site Analysis', 'Custom Design', '3D Visualization', 'Permit Assistance']
    },
    {
      name: 'Koi Pond Construction',
      description: 'Professional koi pond construction with proper filtration and aeration',
      features: ['Proper Depth & Size', 'Advanced Filtration', 'Aeration Systems', 'Fish Health Focus']
    },
    {
      name: 'Water Feature Installation',
      description: 'Beautiful waterfalls, streams, and fountains for Salt Lake City homes',
      features: ['Natural Stone Work', 'Waterfall Design', 'Stream Creation', 'Fountain Installation']
    },
    {
      name: 'Pond Renovation',
      description: 'Transform your existing Salt Lake City pond with professional renovation',
      features: ['Design Updates', 'Equipment Upgrades', 'Landscaping Integration', 'Modern Features']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens designed and built the most beautiful pond in our Salt Lake City backyard. Their attention to detail is incredible.",
      author: "David M., Salt Lake City"
    },
    {
      text: "From design to completion, the entire process was professional and stress-free. Our new pond is the centerpiece of our garden.",
      author: "Lisa R., Salt Lake City"
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Construction Salt Lake City, UT | Custom Pond Design & Installation"
        description="Expert pond construction services in Salt Lake City, UT. Custom pond design, koi ponds, water features, and renovations. Licensed & insured. Call (801) 590-8516."
        keywords="pond construction salt lake city, salt lake city pond construction, custom pond design salt lake city, koi pond construction salt lake city, water feature installation salt lake city"
        canonical="https://utahwatergardens.com/pond-construction-salt-lake-city"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Pond Construction Services Salt Lake City",
          "description": "Professional pond construction and design services in Salt Lake City, UT",
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
          "serviceType": "Pond Construction",
          "offers": {
            "@type": "Offer",
            "description": "Professional pond construction and design services",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <StandardHero 
        title="Pond Construction Services in Salt Lake City"
        subtitle="Professional pond services for Pond Construction Services in Salt Lake City and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Pond Construction Services in Salt Lake City"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Pond Construction in Salt Lake City</h2>
            <p>
              Transform your Salt Lake City property with a custom-designed pond or water feature. 
              Our experienced construction team specializes in creating beautiful, functional ponds that 
              complement your landscape and thrive in Salt Lake City's unique climate conditions.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Salt Lake City Pond Construction?</h3>
                <ul>
                  <li>Over 25 years of pond construction experience in Salt Lake City</li>
                  <li>Custom designs tailored to your property and budget</li>
                  <li>Licensed and insured construction team</li>
                  <li>Knowledge of local building codes and permits</li>
                  <li>Quality materials and professional installation</li>
                  <li>Comprehensive warranty on all construction work</li>
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
                  title="Salt Lake City Pond Construction Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Salt Lake City Pond Construction Services</h2>
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
            <h2>What Salt Lake City Customers Say About Our Construction</h2>
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
            <h2>We Also Build Ponds in These Areas</h2>
            <div className="areas-grid">
              <Link to="/pond-construction-murray" className="area-link">Murray</Link>
              <Link to="/pond-construction-west-valley-city" className="area-link">West Valley City</Link>
              <Link to="/pond-construction-sandy" className="area-link">Sandy</Link>
              <Link to="/pond-construction-west-jordan" className="area-link">West Jordan</Link>
              <Link to="/pond-construction-south-jordan" className="area-link">South Jordan</Link>
              <Link to="/pond-construction-riverton" className="area-link">Riverton</Link>
              <Link to="/pond-construction-herriman" className="area-link">Herriman</Link>
              <Link to="/pond-construction-draper" className="area-link">Draper</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default PondConstructionSaltLakeCityPage;
