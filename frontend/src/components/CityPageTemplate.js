import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import StandardHero from './StandardHero';
import CTA from './CTA';
import './CityPageTemplate.css';
import './CityPageTemplateOverrides.css';

const CityPageTemplate = ({
  cityName,
  citySlug,
  state,
  phoneNumber,
  latitude,
  longitude,
  landmarks,
  businessDistricts,
  permitInfo,
  contentSections,
  nearbyAreas
}) => {
  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Utah Water Gardens - ${cityName} Pond Services`,
    "description": `Professional pond services in ${cityName}, ${state}. Expert pond design, construction, maintenance, and cleaning services.`,
    "url": `https://utahwatergardens.com/pond-services/${citySlug}`,
    "telephone": "+1-801-590-8516",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": state,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "openingHours": [
      "Mo-Sa 10:00-18:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pond Services",
      "itemListElement": contentSections.residentialServices.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "description": `Professional ${service.toLowerCase()} in ${cityName}, ${state}`
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  // Generate FAQ data
  const faqs = [
    {
      question: `Do you provide pond services in ${cityName}?`,
      answer: `Yes, Utah Water Gardens provides comprehensive pond services throughout ${cityName} and surrounding areas. We offer pond design, construction, maintenance, cleaning, and repair services for both residential and commercial properties.`
    },
    {
      question: `What types of ponds do you build in ${cityName}?`,
      answer: `We build all types of ponds in ${cityName}, including koi ponds, water gardens, natural ponds, and commercial water features. Our designs are customized to your property, budget, and preferences.`
    },
    {
      question: `What pond services do you offer in ${cityName}?`,
      answer: `We offer comprehensive pond services in ${cityName} including design, construction, maintenance, and repair. Our experienced team can help you create the perfect water feature for your property.`
    },
    {
      question: `Do I need permits for a pond in ${cityName}?`,
      answer: `Permit requirements for ponds in ${cityName} depend on the size and location of your pond. We can help you navigate the permit process and ensure your project meets all local requirements.`
    },
    {
      question: `How often should I maintain my pond in ${cityName}?`,
      answer: `Pond maintenance frequency in ${cityName} depends on your pond type and size. We recommend regular maintenance to keep your pond healthy and beautiful year-round.`
    }
  ];

  return (
    <>
      <SEO 
        title={`Pond Services in ${cityName}, ${state} | Utah Water Gardens - (801) 590-8516`}
        description={`Professional pond services in ${cityName}, ${state}. Expert pond design, construction, maintenance, and cleaning services. Licensed & insured. Call (801) 590-8516 for free quote.`}
        keywords={`pond services ${cityName.toLowerCase()} ${state.toLowerCase()}, ${cityName.toLowerCase()} pond services, pond maintenance ${cityName.toLowerCase()}, pond construction ${cityName.toLowerCase()}, pond cleaning ${cityName.toLowerCase()}, utah water gardens`}
        canonical={`https://utahwatergardens.com/pond-services/${citySlug}`}
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      <div className="city-page-template">
        <StandardHero 
          title={`Pond Services in ${cityName}`}
          subtitle={`Professional pond services for ${cityName} and surrounding ${state} areas`}
          backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
          backgroundImageAlt={`Professional pond services in ${cityName}`}
          primaryButtonText="CALL (801) 590-8516"
          primaryButtonLink="tel:(801) 590-8516"
          secondaryButtonText="CONTACT US"
          secondaryButtonLink="/contact"
        />

        <div className="container">
          {/* Location Overview */}
          <section className="location-overview first-section-gradient">
            <h2>Pond Services in {cityName}</h2>
            <p>{contentSections.overview}</p>
            
            <div className="location-details">
              <div className="location-info">
                <h3>Why Choose Us for {cityName} Pond Services?</h3>
                <ul>
                  <li>Local expertise in {cityName}'s climate and water conditions</li>
                  <li>Over 25 years of experience serving the {cityName} area</li>
                  <li>Licensed and insured for all {cityName} projects</li>
                  <li>Quick response times for emergency services</li>
                  <li>Knowledge of local regulations and permits</li>
                </ul>
                
                {landmarks && landmarks.length > 0 && (
                  <div className="local-landmarks">
                    <h4>Local Landmarks & Attractions</h4>
                    <ul>
                      {landmarks.map((landmark, index) => (
                        <li key={index}>
                          <strong>{landmark.name}</strong> - {landmark.address}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="location-map">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9346!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f38c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2s${encodeURIComponent(cityName)}%2C%20${state}!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${cityName} Service Area`}
                ></iframe>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="services-section">
            <h2>Our {cityName} Pond Services</h2>
            <div className="services-grid">
              <div className="service-category">
                <h3>Residential Services</h3>
                <ul className="service-list">
                  {contentSections.residentialServices.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
              
              <div className="service-category">
                <h3>Commercial Services</h3>
                <ul className="service-list">
                  {contentSections.commercialServices.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="why-choose-section">
            <h2>Why Choose Utah Water Gardens in {cityName}?</h2>
            <p>{contentSections.whyChooseUs}</p>
            
            <div className="features-grid">
              <div className="feature-card">
                <h4>Local Expertise</h4>
                <p>We understand {cityName}'s unique climate and water conditions, ensuring your pond thrives year-round.</p>
              </div>
              <div className="feature-card">
                <h4>Quality Craftsmanship</h4>
                <p>Over 25 years of experience building beautiful, durable ponds that enhance your property value.</p>
              </div>
              <div className="feature-card">
                <h4>Licensed & Insured</h4>
                <p>Fully licensed and insured for all {cityName} projects, giving you peace of mind.</p>
              </div>
              <div className="feature-card">
                <h4>Emergency Service</h4>
                <p>Quick response times for emergency repairs and maintenance throughout {cityName}.</p>
              </div>
            </div>
          </section>

          {/* Pond Sizes */}
          <section className="pond-sizes-section">
            <h2>Pond Sizes & Types We Build in {cityName}</h2>
            <div className="pond-sizes-grid">
              {contentSections.pondSizes.map((pond, index) => (
                <div key={index} className="pond-size-card">
                  <h3>{pond.size}</h3>
                  <p>{pond.description}</p>
                  <ul>
                    {pond.useCases.map((useCase, useIndex) => (
                      <li key={useIndex}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Local Information */}
          <section className="local-info-section">
            <h2>About {cityName}</h2>
            <p>{contentSections.localInfo}</p>
            
            {businessDistricts && businessDistricts.length > 0 && (
              <div className="business-districts">
                <h3>Business Districts We Serve</h3>
                <div className="districts-grid">
                  {businessDistricts.map((district, index) => (
                    <div key={index} className="district-card">
                      <h4>{district.name}</h4>
                      <p>{district.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Process Guide */}
          <section className="process-section">
            <h2>Our {cityName} Pond Installation Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Free Consultation</h3>
                <p>We visit your {cityName} property to assess your space, discuss your vision, and provide a detailed estimate.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Custom Design</h3>
                <p>Our designers create a custom pond plan tailored to your {cityName} property and preferences.</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Permits & Planning</h3>
                <p>We handle all necessary permits and coordinate with {cityName} city requirements.</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Professional Installation</h3>
                <p>Our experienced team installs your pond using quality materials and proven techniques.</p>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <h3>Ongoing Support</h3>
                <p>We provide maintenance services and support to keep your {cityName} pond beautiful year-round.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq-section">
            <h2>Frequently Asked Questions - {cityName} Pond Services</h2>
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Service Areas */}
          <section className="nearby-areas gradient-wipe-up">
            <h2>We Also Serve These Nearby Areas</h2>
            <div className="areas-grid">
              {nearbyAreas.map((area, index) => (
                <Link key={index} to={`/pond-services/${area.toLowerCase().replace(/\s+/g, '-')}`} className="area-link">
                  {area}
                </Link>
              ))}
            </div>
          </section>
        </div>
        
        {/* CTA Section */}
        <CTA />
      </div>
    </>
  );
};

export default CityPageTemplate;
