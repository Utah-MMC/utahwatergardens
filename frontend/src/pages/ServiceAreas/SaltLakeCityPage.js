import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StandardHero from '../../components/StandardHero';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const SaltLakeCityPage = () => {
  const services = [
    {
      name: 'Pond Design & Construction',
      description: 'Custom pond design and construction services for Salt Lake City properties',
      features: ['Custom Design', 'Professional Installation', 'Quality Materials', 'Local Expertise']
    },
    {
      name: 'Pond Maintenance & Care',
      description: 'Regular maintenance to keep your Salt Lake City pond healthy and beautiful',
      features: ['Water Testing', 'Plant Care', 'Fish Health', 'Seasonal Maintenance']
    },
    {
      name: 'Pond Cleaning',
      description: 'Deep cleaning and debris removal services with our Truxor T50 equipment',
      features: ['Debris Removal', 'Algae Control', 'Filter Cleaning', 'Water Clarity']
    },
    {
      name: 'Equipment Repair',
      description: 'Repair and maintenance of pond equipment in Salt Lake City',
      features: ['Pump Repair', 'Filter Maintenance', 'Lighting Systems', 'Emergency Service']
    }
  ];

  const testimonials = [
    {
      text: "Utah Water Gardens transformed our backyard into a beautiful oasis. Their expertise in Salt Lake City's climate made all the difference.",
      author: "Sarah M., Salt Lake City"
    },
    {
      text: "Professional, reliable, and knowledgeable. They understand what works in our area and deliver exceptional results.",
      author: "Mike R., Salt Lake City"
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Services Near Salt Lake City, UT | Utah Water Gardens"
        description="Professional pond services near Salt Lake City, UT. Expert pond design, construction, maintenance, and cleaning services. Licensed & insured. Call (801) 590-8516 for free quote."
        keywords="pond services near salt lake city ut, salt lake city pond services, pond maintenance salt lake city, pond construction salt lake city, pond cleaning salt lake city, utah water gardens"
        canonical="https://utahwatergardens.com/pond-services/salt-lake-city"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Utah Water Gardens - Salt Lake City Pond Services",
          "description": "Professional pond services near Salt Lake City, UT. Expert pond design, construction, maintenance, and cleaning services.",
          "url": "https://utahwatergardens.com/pond-services/salt-lake-city",
          "telephone": "+1-801-590-8516",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5911 S 1300 E",
            "addressLocality": "Salt Lake City",
            "addressRegion": "UT",
            "postalCode": "84121",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.7608",
            "longitude": "-111.8910"
          },
          "openingHours": [
            "Mo-Sa 10:00-18:00"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "40.7608",
              "longitude": "-111.8910"
            },
            "geoRadius": "50000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Pond Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pond Design & Construction",
                  "description": "Custom pond design and construction services for Salt Lake City properties"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pond Maintenance & Care",
                  "description": "Regular maintenance to keep your Salt Lake City pond healthy and beautiful"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pond Cleaning",
                  "description": "Deep cleaning and debris removal services with our Truxor T50 equipment"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Equipment Repair",
                  "description": "Repair and maintenance of pond equipment in Salt Lake City"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
          }
        })}
      </script>
      <div className="service-area-page">
      <StandardHero 
        title="Pond Services in Salt Lake City"
        subtitle="Professional pond services for Salt Lake City and surrounding areas"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Professional pond services in Salt Lake City"
        primaryButtonText="CALL (801) 590-8516"
        primaryButtonLink="tel:(801) 590-8516"
        secondaryButtonText="GET QUOTE"
        secondaryButtonLink="/contact"
      />

      <div className="container">
        {/* Location Overview */}
        <section className="location-overview first-section-gradient">
          <h2>Pond Services in Salt Lake City</h2>
          <p>
            Utah Water Gardens proudly serves Salt Lake City and surrounding areas with comprehensive pond and water feature services. 
            Our local expertise in Salt Lake City's unique climate and water conditions ensures your pond thrives year-round.
          </p>
          <div className="location-details">
            <div className="location-info">
              <h3>Why Choose Us for Salt Lake City Pond Services?</h3>
              <ul>
                <li>Local expertise in Salt Lake City's climate and water conditions</li>
                <li>Over 25 years of experience serving the Salt Lake City area</li>
                <li>Licensed and insured for all Salt Lake City projects</li>
                <li>Quick response times for emergency services</li>
                <li>Knowledge of local regulations and permits</li>
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
                title="Salt Lake City Service Area"
              ></iframe>
            
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services-section">
          <h2>Our Salt Lake City Pond Services</h2>
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
          <h2>What Salt Lake City Customers Say</h2>
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
          <h2>We Also Serve These Nearby Areas</h2>
          <div className="areas-grid">
            <Link to="/pond-services/murray" className="area-link">Murray</Link>
            <Link to="/pond-services/west-valley-city" className="area-link">West Valley City</Link>
            <Link to="/pond-services/sandy" className="area-link">Sandy</Link>
            <Link to="/pond-services/west-jordan" className="area-link">West Jordan</Link>
            <Link to="/pond-services/south-jordan" className="area-link">South Jordan</Link>
            <Link to="/pond-services/riverton" className="area-link">Riverton</Link>
            <Link to="/pond-services/herriman" className="area-link">Herriman</Link>
            <Link to="/pond-services/bluffdale" className="area-link">Bluffdale</Link>
            <Link to="/pond-services/draper" className="area-link">Draper</Link>
          </div>
          </section>
        </div>
        
        {/* CTA Section - Outside container for full width */}
        <CTA />
      </div>
    </>
  );
};

export default SaltLakeCityPage;
