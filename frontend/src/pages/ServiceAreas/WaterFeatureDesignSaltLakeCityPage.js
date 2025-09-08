import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero.js';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const WaterFeatureDesignSaltLakeCityPage = () => {
  const services = [
    {
      name: 'Custom Water Feature Design',
      description: 'Bespoke water feature designs tailored to your Salt Lake City property and aesthetic preferences',
      features: ['Site Analysis', 'Custom Design', '3D Visualization', 'Material Selection']
    },
    {
      name: 'Waterfall Design & Installation',
      description: 'Stunning waterfall designs that complement your Salt Lake City landscape',
      features: ['Natural Stone Waterfalls', 'Modern Water Features', 'Multi-Tier Designs', 'Lighting Integration']
    },
    {
      name: 'Fountain Design & Installation',
      description: 'Elegant fountain designs for Salt Lake City homes and businesses',
      features: ['Decorative Fountains', 'Interactive Fountains', 'Wall Fountains', 'Pond Fountains']
    },
    {
      name: 'Stream & Creek Design',
      description: 'Natural-looking streams and creeks that enhance your Salt Lake City property',
      features: ['Natural Stream Design', 'Meandering Creeks', 'Rock Work', 'Plant Integration']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens designed the most beautiful waterfall for our Salt Lake City backyard. It's become the focal point of our entire landscape.",
      author: "Jennifer S., Salt Lake City"
    },
    {
      text: "Their water feature design transformed our property completely. The attention to detail and craftsmanship is outstanding.",
      author: "Michael D., Salt Lake City"
    }
  ];

  return (
    <>
      <SEO 
        title="Water Feature Design Salt Lake City, UT | Custom Water Feature Design & Installation"
        description="Expert water feature design services in Salt Lake City, UT. Custom waterfalls, fountains, streams, and water features. Licensed & insured. Call (801) 590-8516."
        keywords="water feature design salt lake city, salt lake city water feature design, waterfall design salt lake city, fountain design salt lake city, custom water features salt lake city"
        canonical="https://utahwatergardens.com/water-feature-design-salt-lake-city"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Water Feature Design Services Salt Lake City",
          "description": "Professional water feature design and installation services in Salt Lake City, UT",
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
          "serviceType": "Water Feature Design",
          "offers": {
            "@type": "Offer",
            "description": "Professional water feature design and installation services",
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <PageHero 
          title="Water Feature Design Services in Salt Lake City"
          subtitle="Custom water feature design and installation services for Salt Lake City properties"
          backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
          backgroundImageAlt="Custom water feature design services in Salt Lake City"
        />

        <div className="container">
          {/* Service Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Professional Water Feature Design in Salt Lake City</h2>
            <p>
              Transform your Salt Lake City property with stunning custom water features. 
              Our experienced design team creates beautiful waterfalls, fountains, streams, and ponds 
              that enhance your landscape and provide years of enjoyment for your family.
            </p>
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Our Salt Lake City Water Feature Design?</h3>
                <ul>
                  <li>Custom designs tailored to your property and budget</li>
                  <li>3D visualization to see your design before construction</li>
                  <li>Licensed and insured design professionals</li>
                  <li>Knowledge of Salt Lake City's climate and soil conditions</li>
                  <li>Quality materials and professional installation</li>
                  <li>Comprehensive warranty on all design work</li>
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
                  title="Salt Lake City Water Feature Design Service Area"
                ></iframe>
            
            </div>
          </div>
        </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our Salt Lake City Water Feature Design Services</h2>
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
            <h2>What Salt Lake City Customers Say About Our Water Feature Design</h2>
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
            <h2>We Also Design Water Features in These Areas</h2>
            <div className="areas-grid">
              <Link to="/water-feature-design-murray" className="area-link">Murray</Link>
              <Link to="/water-feature-design-west-valley-city" className="area-link">West Valley City</Link>
              <Link to="/water-feature-design-sandy" className="area-link">Sandy</Link>
              <Link to="/water-feature-design-west-jordan" className="area-link">West Jordan</Link>
              <Link to="/water-feature-design-south-jordan" className="area-link">South Jordan</Link>
              <Link to="/water-feature-design-riverton" className="area-link">Riverton</Link>
              <Link to="/water-feature-design-herriman" className="area-link">Herriman</Link>
              <Link to="/water-feature-design-draper" className="area-link">Draper</Link>
            </div>        
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default WaterFeatureDesignSaltLakeCityPage;
