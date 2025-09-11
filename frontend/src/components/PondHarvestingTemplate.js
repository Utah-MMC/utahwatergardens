import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import CTA from './CTA';
import './PondHarvestingTemplate.css';

const PondHarvestingTemplate = ({
  cityName,
  citySlug,
  state = "Utah",
  phoneNumber = "(801) 590-8516",
  latitude,
  longitude,
  landmarks = [],
  businessDistricts = [],
  permitInfo = {},
  contentSections = {},
  heroBackgroundImage = "/images/pondDredging-topaz-enhance-3.9x.jpeg",
  heroBackgroundImageAlt = "Professional pond and lake harvesting equipment in action"
}) => {
  
  // Default content sections for pond harvesting
  const defaultContentSections = {
    overview: `Professional pond and lake harvesting services in ${cityName}, ${state}. Our specialized aquatic vegetation management and harvesting solutions help maintain healthy water ecosystems while preserving the natural beauty of your water features throughout the ${cityName} area.`,
    
    whatIsHarvesting: `Pond and lake harvesting is a specialized aquatic vegetation management technique that involves the systematic removal of excess aquatic plants, algae, and organic matter from water bodies. This process is essential for maintaining water quality, preventing oxygen depletion, and preserving the ecological balance of your pond or lake.`,
    
    whyHarvesting: `Regular harvesting is crucial for maintaining healthy water ecosystems. Without proper management, excessive aquatic vegetation can lead to oxygen depletion, fish kills, unpleasant odors, and reduced recreational value. Our harvesting services help prevent these issues while promoting sustainable water management.`,
    
    harvestingProcess: [
      {
        step: "Assessment & Planning",
        description: "We conduct a comprehensive evaluation of your water body, including water quality testing, vegetation analysis, and ecological assessment to develop a customized harvesting plan."
      },
      {
        step: "Equipment Setup",
        description: "Our professional harvesting equipment is carefully positioned and calibrated for optimal performance, ensuring efficient and environmentally responsible vegetation removal."
      },
      {
        step: "Selective Harvesting",
        description: "Using specialized harvesting techniques, we selectively remove excess vegetation while preserving beneficial plants and maintaining the natural ecosystem balance."
      },
      {
        step: "Material Processing",
        description: "Harvested vegetation is processed and removed from the site using environmentally responsible methods, with options for composting or proper disposal."
      },
      {
        step: "Water Quality Monitoring",
        description: "Post-harvesting water quality testing ensures optimal conditions for fish, plants, and overall ecosystem health."
      },
      {
        step: "Follow-up Care",
        description: "We provide ongoing monitoring and maintenance recommendations to help maintain the benefits of harvesting throughout the season."
      }
    ],
    
    equipment: [
      {
        name: "Aquatic Harvesting Boats",
        description: "Specialized boats equipped with cutting and collection systems for efficient vegetation removal",
        image: "/images/truxor-equipment-1.jpg"
      },
      {
        name: "Underwater Harvesting Equipment",
        description: "Professional-grade equipment for removing submerged vegetation and organic matter",
        image: "/images/pondDredging-topaz-enhance-3.9x.jpeg"
      },
      {
        name: "Water Quality Testing Equipment",
        description: "Advanced testing systems to monitor water quality before, during, and after harvesting operations",
        image: "/images/pondMaintenance-topaz-denoise-enhance-3.9x.jpeg"
      }
    ],
    
    benefits: [
      "Improved water quality and clarity",
      "Enhanced oxygen levels for fish and aquatic life",
      "Reduced algae blooms and unwanted vegetation",
      "Better recreational opportunities",
      "Prevention of fish kills and ecosystem collapse",
      "Maintained property values and aesthetic appeal",
      "Compliance with environmental regulations",
      "Sustainable long-term water management"
    ],
    
    seasonalConsiderations: `The timing of pond and lake harvesting is crucial for optimal results. In ${cityName}, we recommend harvesting during late spring through early fall when vegetation growth is most active. Our team considers local climate conditions, water temperature, and seasonal growth patterns to schedule harvesting at the most effective times.`,
    
    environmentalImpact: `Our harvesting methods are designed to minimize environmental impact while maximizing ecological benefits. We use selective harvesting techniques that preserve beneficial vegetation, maintain habitat for wildlife, and promote natural water filtration processes. All harvested materials are processed using environmentally responsible methods.`,
    
    costFactors: `Harvesting costs vary based on several factors including pond size, vegetation density, accessibility, and frequency of service. We provide detailed estimates that include equipment costs, labor, material disposal, and any necessary permits. Our transparent pricing ensures you understand exactly what services you're receiving.`,
    
    maintenanceSchedule: `Regular harvesting is essential for maintaining water quality. We recommend annual harvesting for most ponds, with more frequent service for heavily vegetated water bodies. Our team will work with you to develop a customized maintenance schedule that fits your budget and water quality goals.`,
    
    localRegulations: `In ${cityName} and throughout ${state}, there may be specific regulations regarding aquatic vegetation management. Our team is familiar with local permitting requirements and environmental regulations, ensuring all harvesting activities comply with applicable laws and guidelines.`,
    
    whyChooseUs: `Utah Water Gardens has been providing professional pond and lake harvesting services in ${cityName} and surrounding areas for over 15 years. Our experienced team, specialized equipment, and commitment to environmental responsibility make us the premier choice for aquatic vegetation management in the ${cityName} region.`,
    
    localInfo: `${cityName} is home to numerous ponds, lakes, and water features that benefit from professional harvesting services. Our local knowledge of ${cityName}'s climate, water conditions, and seasonal patterns allows us to provide the most effective harvesting solutions for your specific needs.`,
    
    serviceAreas: `We proudly serve all areas of ${cityName} and surrounding communities. Our harvesting services are available for residential ponds, commercial water features, municipal lakes, and recreational water bodies throughout the ${cityName} region.`
  };

  const sections = { ...defaultContentSections, ...contentSections };

  return (
    <>
      <SEO 
        title={`Pond Harvesting Services in ${cityName} | Utah Water Gardens`}
        description={`Professional pond and lake harvesting services in ${cityName}, ${state}. Expert aquatic vegetation management, water quality improvement, and ecosystem maintenance. Licensed & insured. Call ${phoneNumber}.`}
        keywords={`pond harvesting ${cityName}, lake harvesting ${cityName}, aquatic vegetation management ${cityName}, pond maintenance ${cityName}, water quality improvement ${cityName}, ${state} pond services, utah water gardens`}
        canonical={`https://utahwatergardens.com/pond-harvesting/${citySlug}`}
      />
      
      <div className="pond-harvesting-template">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <img 
              src={heroBackgroundImage} 
              alt={heroBackgroundImageAlt}
              className="hero-bg-img"
            />
            <div className="hero-overlay">
              <div className="container">
                <div className="hero-content">
                  <h1>Professional Pond & Lake Harvesting in {cityName}, {state}</h1>
                  <p>Expert aquatic vegetation management and water quality improvement services for ponds and lakes throughout the {cityName} area.</p>
                  <div className="hero-buttons">
                    <a href={`tel:${phoneNumber}`} className="btn btn-primary">Call {phoneNumber}</a>
                    <Link to="/contact" className="btn btn-outline">Get Free Estimate</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section">
          <div className="container">
            <div className="content-grid">
              <div className="content-main">
                <h2>Pond & Lake Harvesting Services in {cityName}</h2>
                <p className="lead">{sections.overview}</p>
                
                <h3>What is Pond and Lake Harvesting?</h3>
                <p>{sections.whatIsHarvesting}</p>
                
                <h3>Why is Harvesting Important?</h3>
                <p>{sections.whyHarvesting}</p>
              </div>
              
              <div className="content-sidebar">
                <div className="service-card">
                  <h3>Quick Service Request</h3>
                  <p>Get a free estimate for your pond or lake harvesting needs.</p>
                  <a href={`tel:${phoneNumber}`} className="btn btn-primary">Call Now</a>
                  <Link to="/contact" className="btn btn-outline">Contact Form</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Harvesting Process Section */}
        <section className="section alt">
          <div className="container">
            <h2>Our Professional Harvesting Process</h2>
            <p className="section-intro">We follow a systematic approach to ensure effective and environmentally responsible harvesting results.</p>
            
            <div className="process-steps">
              {sections.harvestingProcess.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h3>{step.step}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="section">
          <div className="container">
            <h2>Professional Harvesting Equipment</h2>
            <p className="section-intro">We use state-of-the-art equipment designed specifically for aquatic vegetation management.</p>
            
            <div className="equipment-grid">
              {sections.equipment.map((item, index) => (
                <div key={index} className="equipment-card">
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section alt">
          <div className="container">
            <h2>Benefits of Professional Harvesting</h2>
            <p className="section-intro">Regular harvesting provides numerous benefits for your water feature and surrounding ecosystem.</p>
            
            <div className="benefits-grid">
              {sections.benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Considerations */}
        <section className="section">
          <div className="container">
            <h2>Seasonal Harvesting Considerations</h2>
            <p>{sections.seasonalConsiderations}</p>
            
            <div className="seasonal-info">
              <div className="seasonal-card">
                <h3>Spring Harvesting</h3>
                <p>Early season harvesting helps control initial vegetation growth and prepares your pond for the growing season.</p>
              </div>
              <div className="seasonal-card">
                <h3>Summer Harvesting</h3>
                <p>Mid-season harvesting maintains water quality during peak vegetation growth and recreational use.</p>
              </div>
              <div className="seasonal-card">
                <h3>Fall Harvesting</h3>
                <p>Late season harvesting prepares your pond for winter and removes accumulated organic matter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="section alt">
          <div className="container">
            <h2>Environmental Responsibility</h2>
            <p>{sections.environmentalImpact}</p>
            
            <div className="environmental-features">
              <div className="feature">
                <h3>Sustainable Practices</h3>
                <p>Our harvesting methods promote long-term ecosystem health and biodiversity.</p>
              </div>
              <div className="feature">
                <h3>Wildlife Protection</h3>
                <p>We carefully plan harvesting activities to minimize impact on fish, birds, and other wildlife.</p>
              </div>
              <div className="feature">
                <h3>Water Quality Preservation</h3>
                <p>Our techniques maintain natural water filtration processes and prevent contamination.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost and Maintenance */}
        <section className="section">
          <div className="container">
            <div className="cost-maintenance-grid">
              <div className="cost-info">
                <h2>Harvesting Costs & Investment</h2>
                <p>{sections.costFactors}</p>
                <ul>
                  <li>Pond size and depth</li>
                  <li>Vegetation density and type</li>
                  <li>Accessibility and site conditions</li>
                  <li>Frequency of service required</li>
                  <li>Disposal and processing costs</li>
                </ul>
              </div>
              
              <div className="maintenance-info">
                <h2>Maintenance Schedule</h2>
                <p>{sections.maintenanceSchedule}</p>
                <div className="schedule-options">
                  <div className="schedule-option">
                    <h4>Annual Service</h4>
                    <p>Recommended for most residential ponds</p>
                  </div>
                  <div className="schedule-option">
                    <h4>Bi-Annual Service</h4>
                    <p>For heavily vegetated or large water bodies</p>
                  </div>
                  <div className="schedule-option">
                    <h4>Custom Schedule</h4>
                    <p>Tailored to your specific needs and budget</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="section alt">
          <div className="container">
            <h2>Local Regulations & Permits</h2>
            <p>{sections.localRegulations}</p>
            
            <div className="regulations-info">
              <div className="regulation-item">
                <h3>Permit Requirements</h3>
                <p>We handle all necessary permits and ensure compliance with local environmental regulations.</p>
              </div>
              <div className="regulation-item">
                <h3>Environmental Compliance</h3>
                <p>Our methods meet or exceed all state and local environmental protection standards.</p>
              </div>
              <div className="regulation-item">
                <h3>Documentation</h3>
                <p>We provide complete documentation of all harvesting activities for regulatory compliance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section">
          <div className="container">
            <h2>Why Choose Utah Water Gardens for Harvesting in {cityName}?</h2>
            <p>{sections.whyChooseUs}</p>
            
            <div className="why-choose-grid">
              <div className="why-item">
                <h3>15+ Years Experience</h3>
                <p>Extensive experience in aquatic vegetation management and water quality improvement.</p>
              </div>
              <div className="why-item">
                <h3>Specialized Equipment</h3>
                <p>Professional-grade harvesting equipment designed for efficient and effective vegetation removal.</p>
              </div>
              <div className="why-item">
                <h3>Environmental Expertise</h3>
                <p>Deep understanding of aquatic ecosystems and sustainable management practices.</p>
              </div>
              <div className="why-item">
                <h3>Local Knowledge</h3>
                <p>Familiar with {cityName}'s climate, water conditions, and seasonal patterns.</p>
              </div>
              <div className="why-item">
                <h3>Licensed & Insured</h3>
                <p>Fully licensed and insured for your protection and peace of mind.</p>
              </div>
              <div className="why-item">
                <h3>Customer Satisfaction</h3>
                <p>Committed to delivering exceptional results and customer service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Information */}
        <section className="section alt">
          <div className="container">
            <h2>Pond & Lake Harvesting in {cityName}, {state}</h2>
            <p>{sections.localInfo}</p>
            
            {landmarks.length > 0 && (
              <div className="local-landmarks">
                <h3>Local Water Features We Serve</h3>
                <ul>
                  {landmarks.map((landmark, index) => (
                    <li key={index}>{landmark}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="service-areas">
              <h3>Service Areas</h3>
              <p>{sections.serviceAreas}</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact-section">
          <div className="container">
            <h2>Ready to Improve Your Water Quality?</h2>
            <p>Contact Utah Water Gardens today for professional pond and lake harvesting services in {cityName}.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Call Us</h3>
                <a href={`tel:${phoneNumber}`} className="contact-link">{phoneNumber}</a>
                <p>Mon-Sat: 8:00AM-6:00PM</p>
              </div>
              <div className="contact-method">
                <h3>Get Free Estimate</h3>
                <Link to="/contact" className="btn btn-primary">Contact Form</Link>
                <p>We respond within 24 hours</p>
              </div>
              <div className="contact-method">
                <h3>Service Area</h3>
                <p>{cityName} and surrounding areas</p>
                <p>Licensed & Insured</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </div>
    </>
  );
};

export default PondHarvestingTemplate;
