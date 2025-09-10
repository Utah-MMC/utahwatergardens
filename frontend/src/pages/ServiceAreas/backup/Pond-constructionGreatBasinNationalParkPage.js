import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StandardHero from '../../components/StandardHero';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const Pond-constructionGreatBasinNationalParkPage = () => {
  const services = [
    {
      name: 'Custom Pond Design',
      description: 'Bespoke pond designs tailored to your property and lifestyle',
      features: ['Site Analysis', 'Custom Design', '3D Visualization', 'Permit Assistance']
    },
    {
      name: 'Koi Pond Construction',
      description: 'Professional koi pond construction with proper filtration and aeration',
      features: ['Proper Depth & Size', 'Advanced Filtration', 'Aeration Systems', 'Fish Health Focus']
    },
    {
      name: 'Water Feature Installation',
      description: 'Beautiful waterfalls, streams, and fountains for your home',
      features: ['Natural Stone Work', 'Waterfall Design', 'Stream Creation', 'Fountain Installation']
    },
    {
      name: 'Pond Renovation',
      description: 'Transform your existing pond with professional renovation',
      features: ['Design Updates', 'Equipment Upgrades', 'Landscaping Integration', 'Modern Features']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens designed and built the most beautiful pond in our backyard. Their attention to detail is incredible.",
      author: "David M."
    },
    {
      text: "From design to completion, the entire process was professional and stress-free. Our new pond is the centerpiece of our garden.",
      author: "Lisa R."
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Construction Great Basin National Park | Professional Pond Construction Services"
        description="Expert pond construction services in Great Basin National Park. Custom pond design and construction services for your property Licensed & insured. Call (801) 590-8516."
        keywords="pond construction, custom pond design, koi pond construction, water feature installation, great basin national park pond construction, pond construction great basin national park"
        canonical="https://utahwatergardens.com/pond-construction-great-basin-national-park"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Pond Construction Services Great Basin National Park",
          "description": "Professional pond construction services in Great Basin National Park",
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
            "name": "Great Basin National Park"
          },
          "serviceType": "Pond Construction",
          "offers": {
            "@type": "Offer",
            "description": "Professional pond construction services",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <StandardHero 
        title="Pond Construction Services in Great Basin National Park"
        subtitle="Professional pond services for Pond Construction Services in Great Basin National Park and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Pond Construction Services in Great Basin National Park"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Pond Construction in Great Basin National Park</h2>
            <p>
              Transform your property with a custom-designed pond or water feature. Our experienced construction team specializes in creating beautiful, functional ponds that complement your landscape and thrive in your local climate conditions.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Great Basin National Park Pond Construction?</h3>
                <ul>
                  <li>Over 25 years of pond construction experience</li>
                  <li>Custom designs tailored to your property and budget</li>
                  <li>Licensed and insured construction team</li>
                  <li>Knowledge of local building codes and permits</li>
                  <li>Quality materials and professional installation</li>
                  <li>Comprehensive warranty on all construction work</li>
                </ul>
              </div>
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sGreat%20Basin%20National%20Park!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Great Basin National Park Pond Construction Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Great Basin National Park Pond Construction Services</h2>
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
            <h2>What Great Basin National Park Customers Say About Our Pond Construction</h2>
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
            <h2>We Also Provide Pond Construction in These Areas</h2>
            <div className="areas-grid">
              <Link to="/pond-construction-nearby-city-1" className="area-link">Nearby City 1</Link>
              <Link to="/pond-construction-nearby-city-2" className="area-link">Nearby City 2</Link>
              <Link to="/pond-construction-nearby-city-3" className="area-link">Nearby City 3</Link>
              <Link to="/pond-construction-nearby-city-4" className="area-link">Nearby City 4</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default Pond-constructionGreatBasinNationalParkPage;