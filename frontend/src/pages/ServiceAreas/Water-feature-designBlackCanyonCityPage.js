import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StandardHero from '../../components/StandardHero';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const Water-feature-designBlackCanyonCityPage = () => {
  const services = [
    {
      name: 'Custom Water Feature Design',
      description: 'Bespoke water feature designs tailored to your property and aesthetic preferences',
      features: ['Site Analysis', 'Custom Design', '3D Visualization', 'Material Selection']
    },
    {
      name: 'Waterfall Design & Installation',
      description: 'Stunning waterfall designs that complement your landscape',
      features: ['Natural Stone Waterfalls', 'Modern Water Features', 'Multi-Tier Designs', 'Lighting Integration']
    },
    {
      name: 'Fountain Design & Installation',
      description: 'Elegant fountain designs for your home or business',
      features: ['Decorative Fountains', 'Interactive Fountains', 'Wall Fountains', 'Pond Fountains']
    },
    {
      name: 'Stream & Creek Design',
      description: 'Natural-looking streams and creeks that enhance your property',
      features: ['Natural Stream Design', 'Meandering Creeks', 'Rock Work', 'Plant Integration']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens designed the most beautiful waterfall for our backyard. It's become the focal point of our entire landscape.",
      author: "Jennifer S."
    },
    {
      text: "Their water feature design transformed our property completely. The attention to detail and craftsmanship is outstanding.",
      author: "Michael D."
    }
  ];

  return (
    <>
      <SEO 
        title="Water Feature Design Black Canyon City | Professional Water Feature Design Services"
        description="Expert water feature design services in Black Canyon City. Custom water feature design and installation services Licensed & insured. Call (801) 590-8516."
        keywords="water feature design, waterfall design, fountain design, custom water features, black canyon city water feature design, water feature design black canyon city"
        canonical="https://utahwatergardens.com/water-feature-design-black-canyon-city"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Water Feature Design Services Black Canyon City",
          "description": "Professional water feature design services in Black Canyon City",
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
            "name": "Black Canyon City"
          },
          "serviceType": "Water Feature Design",
          "offers": {
            "@type": "Offer",
            "description": "Professional water feature design services",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <StandardHero 
        title="Water Feature Design Services in Black Canyon City"
        subtitle="Professional pond services for Water Feature Design Services in Black Canyon City and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Water Feature Design Services in Black Canyon City"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Water Feature Design in Black Canyon City</h2>
            <p>
              Transform your property with stunning custom water features. Our experienced design team creates beautiful waterfalls, fountains, streams, and ponds that enhance your landscape and provide years of enjoyment for your family.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Black Canyon City Water Feature Design?</h3>
                <ul>
                  <li>Custom designs tailored to your property and budget</li>
                  <li>3D visualization to see your design before construction</li>
                  <li>Licensed and insured design professionals</li>
                  <li>Knowledge of your local climate and soil conditions</li>
                  <li>Quality materials and professional installation</li>
                  <li>Comprehensive warranty on all design work</li>
                </ul>
              </div>
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d-111.8910!3d40.7608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sBlack%20Canyon%20City!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Black Canyon City Water Feature Design Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Black Canyon City Water Feature Design Services</h2>
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
            <h2>What Black Canyon City Customers Say About Our Water Feature Design</h2>
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
            <h2>We Also Provide Water Feature Design in These Areas</h2>
            <div className="areas-grid">
              <Link to="/water-feature-design-nearby-city-1" className="area-link">Nearby City 1</Link>
              <Link to="/water-feature-design-nearby-city-2" className="area-link">Nearby City 2</Link>
              <Link to="/water-feature-design-nearby-city-3" className="area-link">Nearby City 3</Link>
              <Link to="/water-feature-design-nearby-city-4" className="area-link">Nearby City 4</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default Water-feature-designBlackCanyonCityPage;