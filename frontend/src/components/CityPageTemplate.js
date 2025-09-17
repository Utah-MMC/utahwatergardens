import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import CTA from './CTA';
import './CityPageTemplate.css';

const CityPageTemplate = ({
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
  heroBackgroundImage = "/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg",
  heroBackgroundImageAlt = "Beautiful pond landscape with waterfall and rock features",
  // Randomized content props
  heroTitle,
  heroSubtitle,
  templateType
}) => {
  
  // Default content sections if not provided
  const defaultContentSections = {
    overview: contentSections.overview || `Professional pond services in ${cityName}, ${state}. From pond design and construction to maintenance and cleaning, we provide comprehensive water garden solutions for residential and commercial properties throughout the ${cityName} area.`,
    residentialServices: contentSections.residentialServices || [
      "Pond Design & Construction",
      "Pond Cleaning & Maintenance", 
      "Water Quality Testing",
      "Aquatic Plant Installation",
      "Koi & Fish Care",
      "Seasonal Pond Care"
    ],
    commercialServices: [
      "Commercial Water Features",
      "Corporate Pond Maintenance",
      "Restaurant Water Features",
      "Hotel Pond Services",
      "Office Building Water Gardens",
      "Retail Center Ponds"
    ],
    whyChooseUs: contentSections.whyChooseUs || `Utah Water Gardens has been serving ${cityName} and surrounding areas for over 15 years. Our local expertise, professional equipment, and commitment to quality make us the premier choice for pond services in ${cityName}.`,
    localInfo: `${cityName} is a beautiful city in ${state} with a growing community of water garden enthusiasts. Our local knowledge of ${cityName}'s climate, soil conditions, and seasonal changes allows us to provide the most effective pond care solutions.`,
    serviceAreas: `We proudly serve all areas of ${cityName} and surrounding communities. Our service area includes residential neighborhoods, commercial districts, and local attractions throughout the ${cityName} region.`
  };

  const sections = { ...defaultContentSections, ...contentSections };

  return (
    <>
      <SEO 
      title={`Pond Services in ${cityName}, ${state} | Utah Water Gardens`}
      description={`Professional pond services in ${cityName}, ${state}. Pond design, construction, maintenance, and cleaning. Licensed & insured. Call ${phoneNumber} for consultation.`}
      keywords={`pond services ${cityName}, ${cityName} pond maintenance, pond cleaning ${cityName}, pond construction ${cityName}, water gardens ${cityName}, ${cityName} pond services, utah water gardens ${cityName}`}
      />
      
      <div className="city-page">
        {/* Hero Section */}
        <section className="city-hero">
          <div className="hero-background">
            <img 
              src={heroBackgroundImage}
              alt={heroBackgroundImageAlt}
              className="hero-image"
            />
            <div className="hero-overlay"></div>
            </div>
            
          <div className="hero-content">
            <div className="hero-text-content">
              <h1 className="hero-title">
                {heroTitle || `Pond Services in ${cityName}`}
              </h1>
              
              <p className="hero-subtitle">
                {heroSubtitle || `Professional pond design, construction, and maintenance services for ${cityName} residents and businesses.`}
              </p>
              
              <div className="hero-buttons">
                <a href={`tel:${phoneNumber}`} className="btn btn-primary btn-large">
                  Call {phoneNumber}
                </a>
                <Link to="/contact" className="btn btn-secondary btn-large">
                  Get Free Quote →
                </Link>
                <Link to="/free-estimate" className="btn btn-outline btn-large">
                  Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Wavy Divider */}
        <div className="hero-wave-attached">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path className="wave-layer-1" d="M0,0L50,20C100,40,200,80,300,80C400,80,500,40,600,20C700,0,800,0,900,20C1000,40,1100,80,1150,100L1200,120V0Z" fill="#ffffff" opacity="0.1"></path>
            <path className="wave-layer-2" d="M0,0L50,15C100,30,200,60,300,60C400,60,500,30,600,15C700,0,800,0,900,15C1000,30,1100,60,1150,75L1200,90V0Z" fill="#ffffff" opacity="0.2"></path>
            <path className="wave-layer-3" d="M0,0L50,10C100,20,200,40,300,40C400,40,500,20,600,10C700,0,800,0,900,10C1000,20,1100,40,1150,50L1200,60V0Z" fill="#ffffff" opacity="0.3"></path>
          </svg>
            </div>
            
        {/* Main Content Wrapper */}
        <div className="main-content-gradient">
          {/* Service Overview */}
          <section className="service-overview">
            <div className="container">
              <h2>Pond Services in {cityName}, {state}</h2>
              <p className="overview-text">
                {sections.overview}
              </p>
              
              <div className="intro-images">
                <img src="/images/74fbce0371cdb09efb1c704f539bc7f6-enhance-4x.jpeg" alt={`Professional pond cleaning services in ${cityName}`} className="intro-image" />
                <img src="/images/76858a7a39560138d598f10f201740f7-enhance-4x.jpeg" alt={`Pond maintenance services in ${cityName}`} className="intro-image" />
                <img src="/images/78abea67ed188112b3e3ca6446e5fa6a-denoise.jpeg" alt={`Pond construction services in ${cityName}`} className="intro-image" />
              </div>
            </div>
          </section>

          {/* Service Types */}
          <section className="service-types">
            <div className="container">
              <div className="services-grid">
                <div className="service-type">
                  <h3>🏠 Residential Pond Services</h3>
                  <div className="service-image">
                    <img src="/images/7944d6d62f5d2d84190bdcc389014193-enhance-4x.jpeg" alt={`Residential pond services in ${cityName}`} />
                  </div>
                  <ul>
                    {sections.residentialServices.map((service, index) => {
                      // Create service-specific links
                      const serviceLinks = {
                        "Pond Design & Construction": "/pond-services/design-build",
                        "Pond Cleaning & Maintenance": "/pond-services/cleaning",
                        "Water Quality Testing": "/pond-services/water-quality",
                        "Aquatic Plant Installation": "/plants-fish/aquatic-plants",
                        "Koi & Fish Care": "/plants-fish/koi-goldfish",
                        "Seasonal Pond Care": "/pond-services/seasonal"
                      };
                      const serviceLink = serviceLinks[service] || "/pond-services";
                      
                      return (
                        <li key={index}>
                          <Link to={serviceLink} className="service-link">
                            • {service}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
              </div>
              
                <div className="service-type">
                  <h3>🏢 Commercial Pond Services</h3>
                  <div className="service-image">
                    <img src="/images/79de7c8277e2bbc9d0c748359466150e-denoise-enhance-4x.jpeg" alt={`Commercial pond services in ${cityName}`} />
                  </div>
                  <ul>
                    {sections.commercialServices.map((service, index) => {
                      // Create commercial service-specific links
                      const commercialServiceLinks = {
                        "Commercial Water Features": "/pond-services/design-build",
                        "Corporate Pond Maintenance": "/pond-services/maintenance",
                        "Restaurant Water Features": "/pond-services/design-build",
                        "Hotel Pond Services": "/pond-services/maintenance",
                        "Office Building Water Gardens": "/pond-services/design-build",
                        "Retail Center Ponds": "/pond-services/design-build"
                      };
                      const serviceLink = commercialServiceLinks[service] || "/pond-services";
                      
                      return (
                        <li key={index}>
                          <Link to={serviceLink} className="service-link">
                            • {service}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
              </div>
            </div>
          </div>
        </section>

          {/* Why Choose Us */}
          <section className="why-choose-section">
            <div className="container">
              <h2>Why Choose Utah Water Gardens in {cityName}?</h2>
              <p className="why-choose-text">
                {sections.whyChooseUs}
              </p>
              
              <div className="equipment-showcase">
                <img src="/images/truxor-equipment-1.jpg" alt={`Professional pond equipment in ${cityName}`} className="equipment-image" />
                <img src="/images/truxor-equipment-2.jpg" alt={`Advanced pond maintenance equipment in ${cityName}`} className="equipment-image" />
            </div>
            
              <div className="benefits-grid">
                <div className="benefit-item">
                  <h4>🚚 Local Expertise</h4>
                    <p>We understand {cityName}'s unique climate and soil conditions, providing tailored solutions for your pond. <Link to="/about" className="inline-link">Learn more about our team</Link>.</p>
                  </div>
                <div className="benefit-item">
                  <h4>⚡ Same-Day Service</h4>
                    <p>Emergency pond services available throughout {cityName} with same-day response when possible. <Link to="/contact" className="inline-link">Contact us for emergencies</Link>.</p>
                  </div>
                <div className="benefit-item">
                  <h4>🔧 Professional Equipment</h4>
                    <p>State-of-the-art equipment including our <Link to="/pond-services/truxor-t50" className="inline-link">Truxor T50</Link> for deep cleaning and maintenance.</p>
                  </div>
                <div className="benefit-item">
                  <h4>💰 Competitive Pricing</h4>
                    <p>Transparent pricing with no hidden fees. Get the best value for pond services in {cityName}. <Link to="/free-estimate" className="inline-link">Get your free estimate</Link>.</p>
              </div>
            </div>
          </div>
        </section>

          {/* Local Information */}
          <section className="local-info-section">
            <div className="container">
              <h2>{cityName} Local Information</h2>
              <p className="local-info-text">
                {sections.localInfo}
              </p>
              
              <div className="local-content">
                <div className="local-attractions">
                  <h3>🏛️ Popular {cityName} Attractions</h3>
                  <ul>
                    {landmarks.map((landmark, index) => (
                      <li key={index}>
                        • <strong>{landmark.name}</strong> - {landmark.address}
                        {landmark.description && <span className="landmark-description"> - {landmark.description}</span>}
                        {landmark.url && (
                          <span className="landmark-link">
                            {' '}<a href={landmark.url} target="_blank" rel="noopener noreferrer" className="external-link">Visit Website</a>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
              </div>
              
                <div className="business-districts">
                  <h3>🏢 {cityName} Business Districts</h3>
                  <ul>
                    {businessDistricts.map((district, index) => (
                      <li key={index}>
                        • <strong>{district.name}</strong> - {district.description}
                        {district.link && (
                          <span className="district-link">
                            {' '}<Link to={district.link} className="internal-link">Learn More</Link>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
            
              <div className="service-areas-info">
                <h3>🚚 Pond Services Near {cityName} Attractions</h3>
                <p>{sections.serviceAreas}</p>
                <div className="service-area-links">
                  <Link to="/pond-services" className="btn btn-primary btn-small">All Pond Services</Link>
                  <Link to="/pond-gallery" className="btn btn-secondary btn-small">View Our Work</Link>
                  <Link to="/contact" className="btn btn-outline btn-small">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

          {/* Service Process */}
          <section className="service-process">
            <div className="container">
              <h2>Our Pond Service Process in {cityName}</h2>
              <p>Our proven process ensures your pond receives the best care possible in {cityName}.</p>
              
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Initial Assessment</h3>
                <p>We evaluate your pond's condition and discuss your goals for the {cityName} area.</p>
              </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Customized Plan</h3>
                <p>We develop a service plan tailored to {cityName}'s climate and your specific needs.</p>
              </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Professional Service</h3>
                <p>Our experienced team performs the work using professional-grade equipment.</p>
              </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Follow-up Care</h3>
                <p>We provide ongoing support and maintenance recommendations for your {cityName} pond.</p>
              </div>
            </div>
          </div>
        </section>

          {/* Detailed Service Information */}
          <section className="detailed-services">
            <div className="container">
              <h2>Comprehensive Pond Services in {cityName}</h2>
              <p className="detailed-intro">
                Our comprehensive approach to pond care in {cityName} ensures your water feature remains healthy, beautiful, and functional throughout all seasons. 
                We understand the unique challenges that {cityName}'s climate presents and have developed specialized techniques to address them effectively.
              </p>
              
              <div className="service-details-grid">
                <div className="service-detail">
                  <h3>🌊 Water Quality Management</h3>
                  <p>
                    Maintaining optimal water quality is crucial for the health of your pond ecosystem in {cityName}. Our water quality management services include 
                    regular testing, pH balancing, and the introduction of beneficial bacteria to create a natural, self-sustaining environment.
                  </p>
                  <ul>
                    <li><Link to="/pond-services/water-quality" className="service-detail-link">Comprehensive water testing and analysis</Link></li>
                    <li>pH and alkalinity adjustment</li>
                    <li>Beneficial bacteria introduction</li>
                    <li><Link to="/pond-services/cleaning" className="service-detail-link">Algae control and prevention</Link></li>
                    <li>Oxygen level optimization</li>
                  </ul>
              </div>
              
                <div className="service-detail">
                  <h3>🐟 Fish Health & Care</h3>
                  <p>
                    Our fish health services ensure your koi and goldfish thrive in {cityName}'s environment. We provide specialized care including health monitoring, 
                    disease prevention, and nutritional guidance to keep your fish healthy and vibrant year-round.
                  </p>
                  <ul>
                    <li>Fish health assessments</li>
                    <li>Disease prevention and treatment</li>
                    <li>Nutritional guidance and feeding schedules</li>
                    <li>Breeding and population management</li>
                    <li><Link to="/pond-services/seasonal" className="service-detail-link">Winter fish care and protection</Link></li>
                  </ul>
              </div>
              
                <div className="service-detail">
                  <h3>🌱 Aquatic Plant Management</h3>
                  <p>
                    Aquatic plants play a vital role in maintaining pond balance and beauty. Our plant management services include selection, installation, 
                    and ongoing care of water lilies, marginal plants, and submerged vegetation suitable for {cityName}'s climate.
                  </p>
                  <ul>
                    <li><Link to="/plants-fish/aquatic-plants" className="service-detail-link">Plant selection and installation</Link></li>
                    <li><Link to="/pond-services/seasonal" className="service-detail-link">Seasonal plant care and maintenance</Link></li>
                    <li>Pruning and thinning services</li>
                    <li>Fertilization and growth management</li>
                    <li><Link to="/pond-services/seasonal" className="service-detail-link">Winter plant protection</Link></li>
                  </ul>
              </div>
              
                <div className="service-detail">
                  <h3>🔧 Equipment Maintenance</h3>
                  <p>
                    Proper equipment maintenance ensures your pond operates efficiently and reliably. We provide comprehensive maintenance for pumps, 
                    filters, UV sterilizers, and aeration systems, extending their lifespan and optimizing performance.
                  </p>
                  <ul>
                    <li><Link to="/pond-supplies/pumps-aeration" className="service-detail-link">Pump cleaning and maintenance</Link></li>
                    <li><Link to="/pond-supplies/filtration" className="service-detail-link">Filter system servicing</Link></li>
                    <li>UV sterilizer bulb replacement</li>
                    <li><Link to="/pond-supplies/pumps-aeration" className="service-detail-link">Aeration system maintenance</Link></li>
                    <li><Link to="/pond-services/repair" className="service-detail-link">Emergency equipment repair</Link></li>
                  </ul>
              </div>
            </div>
          </div>
        </section>

          {/* Seasonal Care Guide */}
          <section className="seasonal-care">
            <div className="container">
              <h2>Seasonal Pond Care in {cityName}</h2>
              <p className="seasonal-intro">
                {cityName}'s climate presents unique challenges and opportunities for pond care throughout the year. Our seasonal care program ensures 
                your pond adapts successfully to temperature changes, precipitation patterns, and seasonal variations specific to the {cityName} area.
              </p>
              
              <div className="seasons-grid">
                <div className="season">
                  <h3>🌸 Spring Care</h3>
                  <p>
                    Spring in {cityName} brings new growth and the perfect opportunity to prepare your pond for the active season. Our spring services 
                    include thorough cleaning, equipment startup, and plant preparation for optimal growth.
                  </p>
                  <ul>
                    <li><Link to="/pond-services/cleaning" className="seasonal-link">Complete pond cleaning and debris removal</Link></li>
                    <li>Equipment startup and testing</li>
                    <li><Link to="/plants-fish/aquatic-plants" className="seasonal-link">Plant division and repotting</Link></li>
                    <li><Link to="/pond-services/water-quality" className="seasonal-link">Water quality restoration</Link></li>
                    <li>Fish health assessment after winter</li>
                  </ul>
              </div>
              
                <div className="season">
                  <h3>☀️ Summer Care</h3>
                  <p>
                    Summer maintenance in {cityName} focuses on managing increased biological activity, maintaining water clarity, and ensuring 
                    adequate oxygen levels during the hottest months of the year.
                  </p>
                  <ul>
                    <li><Link to="/pond-services/water-quality" className="seasonal-link">Regular water quality monitoring</Link></li>
                    <li><Link to="/pond-services/cleaning" className="seasonal-link">Algae control and management</Link></li>
                    <li><Link to="/pond-supplies/pumps-aeration" className="seasonal-link">Increased aeration and circulation</Link></li>
                    <li><Link to="/plants-fish/aquatic-plants" className="seasonal-link">Plant growth management</Link></li>
                    <li>Fish feeding optimization</li>
                  </ul>
              </div>
              
                <div className="season">
                  <h3>🍂 Fall Care</h3>
                  <p>
                    Fall preparation in {cityName} is crucial for winter survival. We help you prepare your pond for the dormant season while 
                    maintaining water quality and protecting your investment.
                  </p>
                  <ul>
                    <li><Link to="/pond-services/cleaning" className="seasonal-link">Leaf and debris removal</Link></li>
                    <li><Link to="/plants-fish/aquatic-plants" className="seasonal-link">Plant preparation for dormancy</Link></li>
                    <li>Equipment winterization</li>
                    <li><Link to="/pond-services/water-quality" className="seasonal-link">Water quality optimization</Link></li>
                    <li><Link to="/pond-services/seasonal" className="seasonal-link">Winter protection planning</Link></li>
                  </ul>
              </div>
              
                <div className="season">
                  <h3>❄️ Winter Care</h3>
                  <p>
                    Winter care in {cityName} ensures your pond survives freezing temperatures while maintaining a healthy ecosystem. Our winter 
                    services protect your pond from ice damage and maintain essential biological processes.
                  </p>
                  <ul>
                    <li>Ice prevention and management</li>
                    <li>Equipment protection and maintenance</li>
                    <li>Fish winter care and feeding</li>
                    <li><Link to="/pond-services/water-quality" className="seasonal-link">Water quality monitoring</Link></li>
                    <li><Link to="/contact" className="seasonal-link">Emergency winter services</Link></li>
                  </ul>
              </div>
            </div>
          </div>
        </section>

          {/* FAQ Section */}
          <section className="faq-section">
            <div className="container">
              <h2>Frequently Asked Questions - {cityName} Pond Services</h2>
              
              <div className="faq-grid">
                <div className="faq-item">
                  <h3>How often should I clean my pond in {cityName}?</h3>
                  <p>Pond cleaning frequency depends on size, fish load, and season. In {cityName}'s climate, we recommend quarterly maintenance with seasonal deep cleaning. Spring and fall are ideal times for comprehensive cleaning to prepare for seasonal changes. <Link to="/pond-services/cleaning" className="faq-link">Learn more about our cleaning services</Link>.</p>
              </div>
              
                <div className="faq-item">
                  <h3>Do you service ponds year-round in {cityName}?</h3>
                  <p>Yes, we provide year-round services in {cityName}. Winter care is especially important to protect your pond from freezing damage. We offer emergency services during extreme weather conditions to ensure your pond's survival. <Link to="/pond-services/seasonal" className="faq-link">View our seasonal services</Link>.</p>
              </div>
              
                <div className="faq-item">
                  <h3>What types of ponds do you work with in {cityName}?</h3>
                  <p>We service all types of ponds in {cityName}: koi ponds, water gardens, natural ponds, and commercial water features. Our experience includes both residential and commercial installations throughout the {cityName} area. <Link to="/pond-gallery" className="faq-link">See examples of our work</Link>.</p>
              </div>
              
                <div className="faq-item">
                  <h3>Do you offer emergency pond services in {cityName}?</h3>
                  <p>Yes, we provide emergency services for pond problems in {cityName}, including pump failures, water quality issues, and weather-related damage. Our rapid response team is available to address urgent pond problems. <Link to="/contact" className="faq-link">Contact us for emergencies</Link>.</p>
              </div>
              
                <div className="faq-item">
                  <h3>What makes {cityName} pond care different?</h3>
                  <p>{cityName}'s unique climate, altitude, and seasonal patterns require specialized knowledge and techniques. We understand local water chemistry, temperature fluctuations, and seasonal challenges specific to the {cityName} area. <Link to="/about" className="faq-link">Learn about our local expertise</Link>.</p>
              </div>
              
                <div className="faq-item">
                  <h3>Do you provide pond design services in {cityName}?</h3>
                  <p>Yes, we offer comprehensive pond design services in {cityName}, including site analysis, custom design, 3D visualization, and permit assistance. Our designs are tailored to {cityName}'s climate and your specific property requirements. <Link to="/pond-services/design-build" className="faq-link">Explore our design services</Link>.</p>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* CTA Section */}
        <CTA 
          title={`Ready to Schedule Your ${cityName} Pond Service?`}
          subtitle={`Contact us today for professional pond care and maintenance services in ${cityName}.`}
          primaryButtonText={`Call ${phoneNumber}`}
          primaryButtonLink={`tel:${phoneNumber}`}
          secondaryButtonText="Get Free Quote"
          secondaryButtonLink="/contact"
          backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        />
        
        {/* Internal Links for SEO */}
        <div style={{ display: 'none' }}>
          <Link to="/contact">utah water gardens</Link>
          <Link to="/plants-fish">utah water gardens</Link>
          <Link to="/pondsupplies">utah water gardens</Link>
          <Link to="/aquatic-plants">utah water gardens</Link>
          <Link to="/fish-koi">utah water gardens</Link>
          <Link to="/">utah water gardens</Link>
        </div>
      </div>
    </>
  );
};

export default CityPageTemplate;