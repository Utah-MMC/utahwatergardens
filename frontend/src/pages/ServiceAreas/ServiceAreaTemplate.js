import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import StandardHero from '../../components/StandardHero';
import CTA from '../../components/CTA';
import './ServiceAreaPage.css';

const ServiceAreaTemplate = ({ 
  serviceType, 
  cityName, 
  citySlug, 
  state = "Utah",
  phoneNumber = "(801) 590-8516"
}) => {
  
  // Service-specific content based on service type
  const getServiceContent = (type) => {
    const serviceConfigs = {
      'pond-cleaning': {
        title: `Pond Cleaning ${cityName} | Professional Pond Cleaning Services`,
        description: `Expert pond cleaning services in ${cityName}. Professional pond cleaning and maintenance services Licensed & insured. Call ${phoneNumber}.`,
        keywords: `pond cleaning, pond cleaning services, algae removal, pond maintenance, ${cityName.toLowerCase()} pond cleaning, pond cleaning ${cityName.toLowerCase()}`,
        canonical: `https://utahwatergardens.com/pond-cleaning-${citySlug}`,
        serviceName: `Pond Cleaning Services ${cityName}`,
        serviceDescription: `Professional pond cleaning services in ${cityName}`,
        serviceType: "Pond Cleaning",
        services: [
          {
            name: 'Deep Pond Cleaning',
            description: 'Comprehensive pond cleaning services using our professional Truxor T50 equipment',
            features: ['Debris Removal', 'Sludge Extraction', 'Filter Cleaning', 'Water Clarity Restoration']
          },
          {
            name: 'Algae Control & Removal',
            description: 'Professional algae treatment and removal for your pond',
            features: ['Algae Assessment', 'Treatment Application', 'Prevention Planning', 'Water Balance']
          },
          {
            name: 'Seasonal Pond Cleaning',
            description: 'Spring and fall cleaning services to prepare your pond for seasonal changes',
            features: ['Spring Startup', 'Fall Cleanup', 'Winter Preparation', 'Equipment Maintenance']
          },
          {
            name: 'Emergency Pond Cleaning',
            description: '24/7 emergency pond cleaning services',
            features: ['Storm Damage Cleanup', 'Equipment Failures', 'Water Quality Emergencies', 'Rapid Response']
          }
        ],
        testimonials: [
          {
            text: "Utah Water Gardens completely transformed our murky pond into crystal clear water. Their Truxor equipment made all the difference.",
            author: "Mark T."
          },
          {
            text: "Professional, efficient, and thorough. Our pond has never looked better since their deep cleaning service.",
            author: "Sarah W."
          }
        ]
      },
      'pond-dredging': {
        title: `Pond Dredging ${cityName} | Professional Pond Dredging Services`,
        description: `Expert pond dredging services in ${cityName}. Professional pond dredging and restoration services Licensed & insured. Call ${phoneNumber}.`,
        keywords: `pond dredging, pond dredging services, sediment removal, pond restoration, ${cityName.toLowerCase()} pond dredging, pond dredging ${cityName.toLowerCase()}`,
        canonical: `https://utahwatergardens.com/pond-dredging-${citySlug}`,
        serviceName: `Pond Dredging Services ${cityName}`,
        serviceDescription: `Professional pond dredging services in ${cityName}`,
        serviceType: "Pond Dredging",
        services: [
          {
            name: 'Complete Pond Dredging',
            description: 'Full pond dredging services to restore original depth and water quality',
            features: ['Sediment Removal', 'Sludge Extraction', 'Depth Restoration', 'Water Quality Improvement']
          },
          {
            name: 'Partial Pond Dredging',
            description: 'Targeted dredging for specific areas of your pond',
            features: ['Selective Dredging', 'Minimal Disruption', 'Cost-Effective Solutions', 'Quick Turnaround']
          },
          {
            name: 'Emergency Dredging',
            description: 'Emergency dredging services for urgent pond restoration needs',
            features: ['Rapid Response', 'Emergency Assessment', 'Quick Dredging', 'Immediate Relief']
          },
          {
            name: 'Maintenance Dredging',
            description: 'Regular dredging services to prevent sediment buildup',
            features: ['Preventive Maintenance', 'Scheduled Dredging', 'Long-term Pond Health', 'Cost Savings']
          }
        ],
        testimonials: [
          {
            text: "Utah Water Gardens completely restored our pond's depth and clarity. The dredging service brought our pond back to life.",
            author: "Robert L."
          },
          {
            text: "Professional dredging service that transformed our shallow, murky pond into a beautiful, deep water feature.",
            author: "Amanda K."
          }
        ]
      },
      'pond-construction': {
        title: `Pond Construction ${cityName} | Professional Pond Construction Services`,
        description: `Expert pond construction services in ${cityName}. Custom pond design and construction services for your property Licensed & insured. Call ${phoneNumber}.`,
        keywords: `pond construction, custom pond design, koi pond construction, water feature installation, ${cityName.toLowerCase()} pond construction, pond construction ${cityName.toLowerCase()}`,
        canonical: `https://utahwatergardens.com/pond-construction-${citySlug}`,
        serviceName: `Pond Construction Services ${cityName}`,
        serviceDescription: `Professional pond construction services in ${cityName}`,
        serviceType: "Pond Construction",
        services: [
          {
            name: 'Custom Pond Design',
            description: 'Bespoke pond designs tailored to your property and preferences',
            features: ['Site Assessment', 'Custom Design', '3D Visualization', 'Permit Assistance']
          },
          {
            name: 'Koi Pond Construction',
            description: 'Specialized koi pond construction with proper filtration and aeration',
            features: ['Koi-Specific Design', 'Advanced Filtration', 'Proper Aeration', 'Fish Health Focus']
          },
          {
            name: 'Water Feature Installation',
            description: 'Complete water feature installation including waterfalls and fountains',
            features: ['Waterfall Design', 'Fountain Installation', 'Lighting Systems', 'Landscaping Integration']
          },
          {
            name: 'Commercial Pond Construction',
            description: 'Large-scale commercial pond construction for businesses and communities',
            features: ['Commercial Design', 'Heavy Equipment', 'Project Management', 'Timeline Guarantee']
          }
        ],
        testimonials: [
          {
            text: "Utah Water Gardens designed and built the most beautiful pond we could have imagined. Their attention to detail is unmatched.",
            author: "Lisa R."
          },
          {
            text: "Professional construction team that delivered exactly what they promised. Our koi pond is the centerpiece of our garden.",
            author: "David M."
          }
        ]
      },
      'harvesting': {
        title: `Aquatic Plant Harvesting ${cityName} | Professional Harvesting Services`,
        description: `Expert aquatic plant harvesting services in ${cityName}. Professional harvesting and maintenance services Licensed & insured. Call ${phoneNumber}.`,
        keywords: `aquatic plant harvesting, pond harvesting, plant removal, pond maintenance, ${cityName.toLowerCase()} harvesting, harvesting ${cityName.toLowerCase()}`,
        canonical: `https://utahwatergardens.com/harvesting-${citySlug}`,
        serviceName: `Aquatic Plant Harvesting Services ${cityName}`,
        serviceDescription: `Professional aquatic plant harvesting services in ${cityName}`,
        serviceType: "Aquatic Plant Harvesting",
        services: [
          {
            name: 'Selective Plant Harvesting',
            description: 'Targeted harvesting of specific aquatic plants while preserving beneficial species',
            features: ['Species Identification', 'Selective Removal', 'Ecosystem Balance', 'Native Plant Preservation']
          },
          {
            name: 'Complete Pond Harvesting',
            description: 'Comprehensive harvesting of all aquatic vegetation for pond restoration',
            features: ['Full Vegetation Removal', 'Pond Restoration', 'Water Quality Improvement', 'Fresh Start']
          },
          {
            name: 'Seasonal Harvesting',
            description: 'Regular seasonal harvesting to maintain optimal pond conditions',
            features: ['Spring Cleanup', 'Summer Maintenance', 'Fall Preparation', 'Winter Planning']
          },
          {
            name: 'Emergency Harvesting',
            description: 'Rapid response harvesting for overgrown or problematic vegetation',
            features: ['Emergency Response', 'Rapid Assessment', 'Quick Removal', 'Immediate Relief']
          }
        ],
        testimonials: [
          {
            text: "Utah Water Gardens expertly managed our overgrown pond vegetation. Their selective harvesting preserved the good plants while removing the problematic ones.",
            author: "Jennifer L."
          },
          {
            text: "Professional harvesting service that restored our pond's natural balance. The water quality improved dramatically.",
            author: "Michael S."
          }
        ]
      }
    };
    
    return serviceConfigs[type] || serviceConfigs['pond-cleaning'];
  };

  const content = getServiceContent(serviceType);
  const { services, testimonials } = content;

  return (
    <>
      <SEO 
        title={content.title}
        description={content.description}
        keywords={content.keywords}
        canonical={content.canonical}
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": content.serviceName,
          "description": content.serviceDescription,
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
            "name": cityName
          },
          "serviceType": content.serviceType,
          "offers": {
            "@type": "Offer",
            "description": content.serviceDescription,
            "priceCurrency": "USD"
          }
        })}
      </script>
      <div className="service-area-page">
        <StandardHero
          title={`${content.serviceType} Services in ${cityName}`}
          subtitle={`Professional ${content.serviceType.toLowerCase()} services in ${cityName}, ${state}. Licensed, insured, and experienced professionals ready to serve your pond needs.`}
          backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
          backgroundImageAlt={`Professional ${content.serviceType.toLowerCase()} services in ${cityName}`}
        />

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2>Our {content.serviceType} Services</h2>
            <p>We provide comprehensive {content.serviceType.toLowerCase()} services throughout {cityName} and surrounding areas.</p>
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why Choose Utah Water Gardens?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h3>Licensed & Insured</h3>
                <p>Fully licensed and insured for your peace of mind and protection.</p>
              </div>
              <div className="benefit-item">
                <h3>Professional Equipment</h3>
                <p>State-of-the-art equipment including our professional Truxor T50 system.</p>
              </div>
              <div className="benefit-item">
                <h3>Local Expertise</h3>
                <p>Deep knowledge of {cityName} and surrounding area conditions and requirements.</p>
              </div>
              <div className="benefit-item">
                <h3>Satisfaction Guarantee</h3>
                <p>100% satisfaction guarantee on all our {content.serviceType.toLowerCase()} services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <h2>What Our Customers Say</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <p>"{testimonial.text}"</p>
                  <cite>- {testimonial.author}</cite>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="service-areas-section">
          <div className="container">
            <h2>We Serve {cityName} and Surrounding Areas</h2>
            <p>Utah Water Gardens proudly serves {cityName} and all surrounding communities. Our service area includes residential neighborhoods, commercial properties, and local attractions throughout the {cityName} region.</p>
            <div className="service-area-info">
              <h3>Service Coverage</h3>
              <ul>
                <li>Residential {content.serviceType.toLowerCase()} services</li>
                <li>Commercial {content.serviceType.toLowerCase()} services</li>
                <li>Emergency {content.serviceType.toLowerCase()} services</li>
                <li>Regular maintenance programs</li>
              </ul>
            </div>
          </div>
        </section>

        <CTA />
      </div>
    </>
  );
};

export default ServiceAreaTemplate;
