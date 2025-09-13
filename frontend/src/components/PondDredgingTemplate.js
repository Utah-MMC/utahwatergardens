import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import CTA from './CTA';
import './PondDredgingTemplate.css';

const PondDredgingTemplate = ({
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
  heroBackgroundImageAlt = "Professional pond dredging equipment in action"
}) => {
  
  // Cost Calculator Function
  const calculateEstimate = () => {
    const pondSize = parseFloat(document.getElementById('pondSize').value);
    const sedimentDepth = document.getElementById('sedimentDepth').value;
    const accessDifficulty = document.getElementById('accessDifficulty').value;
    
    let basePrice = pondSize * 800; // $800 per acre base
    
    // Sediment depth multipliers
    const sedimentMultipliers = {
      light: 1.0,
      moderate: 1.4,
      heavy: 1.8,
      severe: 2.2
    };
    
    // Access difficulty multipliers
    const accessMultipliers = {
      easy: 1.0,
      moderate: 1.3,
      difficult: 1.7
    };
    
    const totalPrice = basePrice * sedimentMultipliers[sedimentDepth] * accessMultipliers[accessDifficulty];
    
    const resultDiv = document.getElementById('estimateResult');
    resultDiv.innerHTML = `
      <div className="estimate-display">
        <h4>Estimated Cost Range</h4>
        <div className="price-range">
          $${Math.round(totalPrice * 0.8).toLocaleString()} - $${Math.round(totalPrice * 1.2).toLocaleString()}
        </div>
        <p className="estimate-note">*This is a preliminary estimate. Final pricing depends on site conditions and specific requirements.</p>
        <a href="/contact" className="btn btn-primary">Get Detailed Quote</a>
      </div>
    `;
  };

  // FAQ Toggle Function
  const toggleFAQ = (e) => {
    const faqItem = e.target.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    const icon = faqItem.querySelector('.faq-icon');
    
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.textContent = '+';
    } else {
      // Close all other FAQs
      document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.maxHeight = null;
      });
      document.querySelectorAll('.faq-icon').forEach(item => {
        item.textContent = '+';
      });
      
      // Open clicked FAQ
      answer.style.maxHeight = answer.scrollHeight + 'px';
      icon.textContent = '−';
    }
  };

  // Before/After Slider Function
  const initBeforeAfterSlider = () => {
    const slider = document.querySelector('.before-after-slider');
    const handle = document.querySelector('.slider-handle');
    const beforeImage = document.querySelector('.before-image');
    
    if (!slider || !handle || !beforeImage) return;
    
    let isDragging = false;
    
    const updateSlider = (x) => {
      const rect = slider.getBoundingClientRect();
      const xPos = Math.max(0, Math.min(x - rect.left, rect.width));
      const percentage = (xPos / rect.width) * 100;
      
      beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      handle.style.left = `${percentage}%`;
    };
    
    const handleMouseDown = (e) => {
      isDragging = true;
      updateSlider(e.clientX);
      e.preventDefault();
      e.stopPropagation();
    };
    
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
      e.preventDefault();
    };
    
    const handleMouseUp = (e) => {
      isDragging = false;
      e.preventDefault();
    };
    
    const handleTouchStart = (e) => {
      isDragging = true;
      updateSlider(e.touches[0].clientX);
      e.preventDefault();
      e.stopPropagation();
    };
    
    const handleTouchMove = (e) => {
      if (!isDragging) return;
      updateSlider(e.touches[0].clientX);
      e.preventDefault();
    };
    
    const handleTouchEnd = (e) => {
      isDragging = false;
      e.preventDefault();
    };
    
    const handleSliderClick = (e) => {
      if (e.target === handle || e.target.closest('.slider-handle')) return;
      updateSlider(e.clientX);
    };
    
    // Remove any existing event listeners first
    handle.removeEventListener('mousedown', handleMouseDown);
    handle.removeEventListener('touchstart', handleTouchStart);
    slider.removeEventListener('click', handleSliderClick);
    
    // Add event listeners
    handle.addEventListener('mousedown', handleMouseDown);
    handle.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('click', handleSliderClick);
    
    // Global event listeners for mouse/touch
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    
    // Initialize slider at 50%
    setTimeout(() => {
      const rect = slider.getBoundingClientRect();
      updateSlider(rect.left + rect.width / 2);
    }, 50);
  };

  // Initialize slider when component mounts
  React.useEffect(() => {
    const timer = setTimeout(() => {
      initBeforeAfterSlider();
    }, 200);
    
    // Re-initialize on window resize
    const handleResize = () => {
      setTimeout(initBeforeAfterSlider, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Default content sections for pond dredging
  const defaultContentSections = {
    overview: `Professional pond dredging services in ${cityName}, ${state}. Our specialized sediment removal and pond restoration solutions help restore depth, improve water quality, and enhance the health and beauty of your pond throughout the ${cityName} area. We combine advanced dredging techniques with comprehensive pond maintenance services.`,
    
    whatIsDredging: `Pond dredging is a specialized process that involves the removal of accumulated sediment, organic matter, and debris from pond bottoms. This comprehensive pond restoration technique restores original pond depth, improves water circulation, and enhances overall pond health. Our advanced dredging methods use state-of-the-art equipment to efficiently remove sediment while minimizing environmental impact.`,
    
    whyDredging: `Regular pond dredging is essential for maintaining healthy pond ecosystems. Without proper dredging, accumulated sediment can lead to shallow water, poor circulation, fish kills, and reduced recreational value. Our professional dredging services help prevent these issues while promoting sustainable pond management through proven methodologies and advanced technology.`,
    
    dredgingMethods: {
      mechanicalDredging: `Mechanical dredging involves the use of specialized equipment to physically remove sediment from pond bottoms. Our fleet includes state-of-the-art dredging equipment, amphibious vehicles, and precision excavation systems that can operate in various pond conditions. This dredging method is highly effective for large-scale sediment removal while maintaining environmental responsibility.`,
      
      hydraulicDredging: `Hydraulic dredging uses water pressure to loosen and remove sediment through pumping systems. This dredging technique is ideal for soft sediment and sensitive environments. Our hydraulic dredging equipment provides continuous operation with minimal environmental impact and reduced turbidity.`,
      
      manualDredging: `For smaller ponds or sensitive areas, we employ manual dredging techniques. This dredging approach provides precise control and minimal disruption to delicate ecosystems. Our experienced team uses specialized tools and techniques for selective sediment removal.`,
      
      bottomRestoration: `After sediment removal, we provide comprehensive bottom restoration services. This includes leveling pond bottoms, creating optimal water flow patterns, and establishing proper fish habitat features for long-term pond health.`
    },
    
    equipment: [
      {
        name: "Amphibious Excavator",
        description: "Our flagship dredging equipment that operates both on land and water. Features a unique pontoon system for seamless land-to-water transitions and precision sediment removal capabilities.",
        image: "/images/truxor-equipment-1.jpg",
        specifications: "5,000 kg operating weight, 74 HP engine, 2.5m working depth, 15-20 m³/hour capacity"
      },
      {
        name: "Hydraulic Dredging Systems",
        description: "Advanced pumping systems for efficient sediment removal in sensitive environments. Features real-time monitoring and automated controls for optimal performance.",
        image: "/images/pondDredging-topaz-enhance-3.9x.jpeg",
        specifications: "High-capacity pumps, sediment processing, water quality monitoring, automated controls"
      },
      {
        name: "Precision Water Quality Monitoring",
        description: "Advanced testing systems that monitor pH, dissolved oxygen, temperature, and turbidity levels in real-time during dredging operations.",
        image: "/images/pondMaintenance-topaz-denoise-enhance-3.9x.jpeg",
        specifications: "Real-time data logging, automated alerts, environmental compliance tracking"
      },
      {
        name: "Specialized Dredging Attachments",
        description: "Modular attachment system including sediment removal buckets, bottom leveling tools, and habitat creation equipment for comprehensive dredging operations.",
        image: "/images/truxor-equipment-2.jpg",
        specifications: "360-degree rotation, variable depth control, minimal environmental impact, high-efficiency removal"
      }
    ],
    
    benefits: [
      "Restored original pond depth and volume",
      "Improved water circulation and quality",
      "Enhanced fish habitat and spawning areas",
      "Prevention of flooding and drainage issues",
      "Better recreational opportunities",
      "Maintained property values and aesthetic appeal",
      "Compliance with environmental regulations",
      "Sustainable long-term pond management"
    ],
    
    seasonalConsiderations: `The timing of pond dredging is crucial for optimal results. In ${cityName}, we recommend dredging during late fall through early spring when pond water levels are typically lower and fish activity is reduced. Our team considers local climate conditions, pond water levels, and seasonal patterns to schedule dredging at the most effective times.`,
    
    environmentalImpact: `Our dredging methods are designed to minimize environmental impact while maximizing ecological benefits. We use selective dredging techniques that preserve beneficial pond features, maintain habitat for wildlife, and promote natural water filtration processes. All dredged materials are processed using environmentally responsible methods.`,
    
    costFactors: `Pond dredging costs vary based on several factors including pond size, sediment depth, accessibility, and frequency of service. We provide detailed estimates that include dredging equipment costs, labor, material disposal, and any necessary permits. Our transparent pricing ensures you understand exactly what dredging services you're receiving.`,
    
    maintenanceSchedule: `Regular pond dredging is essential for maintaining pond health. We recommend dredging every 3-5 years for most ponds, with more frequent service for heavily sedimented ponds. Our team will work with you to develop a customized dredging maintenance schedule that fits your budget and pond health goals.`,
    
    localRegulations: `In ${cityName} and throughout ${state}, there may be specific regulations regarding pond sediment management. Our team is familiar with local permitting requirements and environmental regulations, ensuring all dredging activities comply with applicable laws and guidelines.`,
    
    whyChooseUs: `Utah Water Gardens has been providing professional pond dredging services in ${cityName} and surrounding areas for over 15 years. Our experienced team, specialized equipment, and commitment to environmental responsibility make us the premier choice for pond restoration in the ${cityName} region. We offer comprehensive pond services including design, construction, and ongoing maintenance.`,
    
    localInfo: `${cityName} is home to numerous ponds and water features that benefit from professional dredging services. Our local knowledge of ${cityName}'s climate, pond conditions, and seasonal patterns allows us to provide the most effective dredging solutions for your specific needs.`,
    
    serviceAreas: `We proudly serve all areas of ${cityName} and surrounding communities. Our dredging services are available for residential ponds, commercial water features, municipal ponds, and recreational water bodies throughout the ${cityName} region.`
  };

  const sections = { ...defaultContentSections, ...contentSections };

  return (
    <>
        <SEO
          title={`Pond Dredging Service in ${cityName} | Utah Water Gardens`}
          description={`Professional pond dredging services in ${cityName}, ${state}. Expert sediment removal, pond restoration, and water quality improvement. Licensed & insured. Call ${phoneNumber}.`}
          keywords={`pond dredging ${cityName}, pond dredging service ${cityName}, sediment removal ${cityName}, pond restoration ${cityName}, pond cleaning ${cityName}, pond maintenance ${cityName}, ${state} pond services, utah water gardens`}
          canonical={`https://utahwatergardens.com/pond-dredging/${citySlug}`}
        />
      
      <div className="pond-dredging-template">
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
                  <h1>Pond Dredging Service in {cityName}</h1>
                  <p>Expert sediment removal and pond restoration services for ponds and water features throughout the {cityName} area.</p>
                  <div className="hero-buttons">
                    <a href={`tel:${phoneNumber}`} className="btn btn-primary">Call {phoneNumber}</a>
                    <Link to="/contact" className="btn btn-outline">Get Free Estimate</Link>
                    <Link to="/pond-services/dredging" className="btn btn-secondary">Learn More About Dredging</Link>
                  </div>
                  <div className="hero-stats">
                    <div className="stat-item">
                      <span className="stat-number">15+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">300+</span>
                      <span className="stat-label">Ponds Dredged</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">100%</span>
                      <span className="stat-label">Satisfaction Rate</span>
                    </div>
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
                <h2>Pond Dredging Service in {cityName}</h2>
                <p className="lead">{sections.overview}</p>
                
                <h3>What is Pond Dredging?</h3>
                <p>{sections.whatIsDredging}</p>
                
                <h3>Why is Pond Dredging Important?</h3>
                <p>{sections.whyDredging}</p>
                
                <p>For more detailed information about our <Link to="/pond-services/water-quality">water quality testing</Link> and <Link to="/pond-services/maintenance">pond maintenance services</Link>, visit our comprehensive service pages.</p>
              </div>
              
              <div className="content-sidebar">
                <div className="service-card">
                  <h3>Quick Service Request</h3>
                  <p>Get a free estimate for your pond dredging needs.</p>
                  <a href={`tel:${phoneNumber}`} className="btn btn-primary">Call Now</a>
                  <Link to="/contact" className="btn btn-outline">Contact Form</Link>
                  <Link to="/pond-services/truxor-t50" className="btn btn-secondary">View Our Equipment</Link>
                </div>
                
                <div className="cost-calculator-card">
                  <h3>Quick Cost Estimate</h3>
                  <div className="calculator-form">
                    <div className="form-group">
                      <label>Pond Size (acres)</label>
                      <select className="form-control" id="pondSize">
                        <option value="0.25">0.25 acres</option>
                        <option value="0.5">0.5 acres</option>
                        <option value="1">1 acre</option>
                        <option value="2">2 acres</option>
                        <option value="5">5+ acres</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Sediment Depth</label>
                      <select className="form-control" id="sedimentDepth">
                        <option value="light">Light (0-6 inches)</option>
                        <option value="moderate">Moderate (6-18 inches)</option>
                        <option value="heavy">Heavy (18-36 inches)</option>
                        <option value="severe">Severe (36+ inches)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Access Difficulty</label>
                      <select className="form-control" id="accessDifficulty">
                        <option value="easy">Easy</option>
                        <option value="moderate">Moderate</option>
                        <option value="difficult">Difficult</option>
                      </select>
                    </div>
                    <button className="btn btn-primary" onClick={() => calculateEstimate()}>
                      Get Estimate
                    </button>
                    <div className="estimate-result" id="estimateResult"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dredging Methods Section */}
        <section className="section alt methods-bg">
          <div className="section-background">
            <img src="/images/IMG_3269-faceai-sharpen.jpeg" alt="Professional pond dredging equipment in action" />
            <div className="section-overlay"></div>
            <div className="section-pattern"></div>
          </div>
          <div className="container">
            <h2>Advanced Pond Dredging Methods & Techniques</h2>
            <p className="section-intro">We employ multiple specialized dredging methods to address different sediment challenges and pond conditions.</p>
            
            {/* Video Showcase */}
            <div className="video-showcase">
              <div className="video-container">
                <video 
                  className="dredging-video"
                  controls 
                  poster="/images/truxor-equipment-1.jpg"
                >
                  <source src="/images/truxorharvestingshort.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                  <h3>See Our Amphibious Equipment in Action</h3>
                  <p>Watch our specialized pond dredging equipment efficiently remove sediment while preserving the natural ecosystem.</p>
                </div>
              </div>
            </div>
            
            <div className="methods-grid">
              <div className="method-card">
                <h3>Mechanical Dredging</h3>
                <p>{sections.dredgingMethods.mechanicalDredging}</p>
                <ul>
                  <li>Operates in various pond conditions and depths</li>
                  <li>State-of-the-art dredging equipment and amphibious vehicles</li>
                  <li>Precision excavation systems for large-scale removal</li>
                  <li>Minimal environmental impact</li>
                </ul>
              </div>
              
              <div className="method-card">
                <h3>Hydraulic Dredging</h3>
                <p>{sections.dredgingMethods.hydraulicDredging}</p>
                <ul>
                  <li>Ideal for soft sediment and sensitive environments</li>
                  <li>Continuous operation with minimal environmental impact</li>
                  <li>Advanced pumping systems for efficient removal</li>
                  <li>Reduced turbidity and water quality preservation</li>
                </ul>
              </div>
              
              <div className="method-card">
                <h3>Manual Dredging</h3>
                <p>{sections.dredgingMethods.manualDredging}</p>
                <ul>
                  <li>Precise control for smaller ponds and sensitive areas</li>
                  <li>Minimal disruption to delicate ecosystems</li>
                  <li>Specialized tools and techniques</li>
                  <li>Selective sediment removal capabilities</li>
                </ul>
              </div>
              
              <div className="method-card">
                <h3>Bottom Restoration</h3>
                <p>{sections.dredgingMethods.bottomRestoration}</p>
                <ul>
                  <li>Comprehensive bottom leveling and shaping</li>
                  <li>Optimal water flow pattern creation</li>
                  <li>Fish habitat feature establishment</li>
                  <li>Long-term pond health optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Amphibious Equipment Section */}
        <section className="section equipment-bg">
          <div className="section-background">
            <img src="/images/IMG_3265-denoise.jpeg" alt="Amphibious excavator in action" />
            <div className="section-overlay"></div>
            <div className="section-pattern equipment-pattern"></div>
          </div>
          <div className="container">
            <h2>Our Revolutionary Amphibious Equipment</h2>
            <p className="section-intro">Our amphibious excavator represents the pinnacle of dredging technology, allowing us to access areas unreachable by traditional equipment. Learn more about our <Link to="/pond-services/truxor-t50">specialized amphibious equipment</Link> and <Link to="/pond-services/pond-dredging">pond dredging services</Link>.</p>
            
            <div className="equipment-showcase">
              <div className="equipment-main">
                <h3>Amphibious Excavator</h3>
                <p>Our flagship amphibious equipment is a revolutionary machine that operates both on land and water. This advanced marvel features a unique pontoon system that allows it to float and maneuver in water while maintaining the power and precision of a traditional excavator.</p>
                
                <div className="specifications">
                  <h4>Technical Specifications</h4>
                  <ul>
                    <li>Operating weight: 5,000 kg (11,000 lbs)</li>
                    <li>Engine: 74 HP Kubota diesel engine</li>
                    <li>Working depth: Up to 2.5 meters (8.2 feet)</li>
                    <li>Dredging capacity: 15-20 cubic meters per hour</li>
                    <li>Amphibious capability: Can transition from land to water seamlessly</li>
                    <li>Precision excavation: 360-degree rotating cutting head</li>
                    <li>Environmental impact: Minimal disturbance to water quality</li>
                  </ul>
                </div>
                
                <div className="advantages">
                  <h4>Key Advantages</h4>
                  <ul>
                    <li>Access to areas unreachable by traditional boats</li>
                    <li>Minimal environmental impact with low ground pressure</li>
                    <li>Versatile attachment system for various dredging tasks</li>
                    <li>Precision control for selective sediment removal</li>
                    <li>Ability to work in shallow water and marshy conditions</li>
                    <li>Reduced need for multiple pieces of equipment</li>
                  </ul>
                </div>
              </div>
              
              <div className="equipment-image">
                <img src="/images/truxor-equipment-1.jpg" alt="Amphibious Excavator" />
              </div>
            </div>
            
            <div className="attachments-section">
              <h3>Specialized Dredging Attachments</h3>
              <div className="attachments-grid">
                <div className="attachment-card">
                  <h4>Sediment Removal Bucket</h4>
                  <p>High-precision bucket designed specifically for sediment removal. Features specialized cutting edges that can efficiently remove accumulated organic matter while preserving beneficial pond features.</p>
                  <div className="capabilities">
                    <h5>Capabilities:</h5>
                    <ul>
                      <li>Precise sediment removal</li>
                      <li>Variable depth control</li>
                      <li>360-degree rotation</li>
                      <li>Minimal water turbidity</li>
                    </ul>
                  </div>
                </div>
                <div className="attachment-card">
                  <h4>Bottom Leveling System</h4>
                  <p>Advanced leveling system for creating optimal pond bottom contours. This attachment ensures proper water flow patterns and establishes ideal fish habitat features.</p>
                  <div className="capabilities">
                    <h5>Capabilities:</h5>
                    <ul>
                      <li>Precise bottom contouring</li>
                      <li>Optimal water flow creation</li>
                      <li>Habitat feature establishment</li>
                      <li>Environmental protection</li>
                    </ul>
                  </div>
                </div>
                <div className="attachment-card">
                  <h4>Aquatic Debris Collection</h4>
                  <p>Specialized collection system for removing debris and organic matter from pond surfaces and shallow areas.</p>
                  <div className="capabilities">
                    <h5>Capabilities:</h5>
                    <ul>
                      <li>Surface debris collection</li>
                      <li>Efficient material transport</li>
                      <li>Minimal water disturbance</li>
                      <li>High-capacity collection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-Tech Machinery Section */}
        <section className="section alt tech-bg">
          <div className="section-background">
            <img src="/images/IMG_3263-faceai-sharpen.jpeg" alt="Advanced water quality monitoring equipment" />
            <div className="section-overlay"></div>
            <div className="section-pattern tech-pattern"></div>
          </div>
          <div className="container">
            <h2>Cutting-Edge Technology & Monitoring Systems</h2>
            <p className="section-intro">Our advanced technology ensures precise, efficient, and environmentally responsible dredging operations.</p>
            
            <div className="tech-features">
              <div className="tech-feature">
                <h3>GPS Navigation & Precision Positioning</h3>
                <p>Our dredging equipment is equipped with advanced GPS navigation systems that allow for precise positioning and systematic coverage of pond areas. This technology ensures complete coverage while avoiding over-dredging and maintaining consistent results.</p>
                <ul>
                  <li>Systematic coverage of pond areas</li>
                  <li>Precise positioning for consistent results</li>
                  <li>Complete coverage without over-dredging</li>
                  <li>Real-time tracking and progress monitoring</li>
                </ul>
              </div>
              
              <div className="tech-feature">
                <h3>Real-Time Water Quality Monitoring</h3>
                <p>Continuous water quality monitoring systems track pH, dissolved oxygen, temperature, and turbidity levels during dredging operations. This data helps us adjust our methods in real-time to minimize environmental impact and optimize results.</p>
                <ul>
                  <li>Continuous pH, oxygen, and temperature tracking</li>
                  <li>Real-time turbidity monitoring</li>
                  <li>Automated environmental impact assessment</li>
                  <li>Instant adjustment of dredging methods</li>
                </ul>
              </div>
              
              <div className="tech-feature">
                <h3>Remote Operation Capabilities</h3>
                <p>Some of our specialized equipment features remote operation capabilities, allowing our operators to work in challenging conditions while maintaining safety and precision. This technology is particularly valuable in deep water or areas with limited access.</p>
                <ul>
                  <li>Safe operation in challenging conditions</li>
                  <li>Precision control in deep water applications</li>
                  <li>Enhanced safety for operators</li>
                  <li>Access to previously unreachable areas</li>
                </ul>
              </div>
              
              <div className="tech-feature">
                <h3>Comprehensive Data Logging</h3>
                <p>All dredging operations are logged with detailed data including location, depth, sediment types removed, and environmental conditions. This information helps us track progress, optimize future operations, and provide detailed reports to clients.</p>
                <ul>
                  <li>Detailed operation records and progress tracking</li>
                  <li>Environmental condition documentation</li>
                  <li>Sediment type and quantity analysis</li>
                  <li>Client reporting and future optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dredging Process Section */}
        <section className="section alt process-bg">
          <div className="section-background">
            <img src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" alt="Beautiful pond landscape showing dredging results" />
            <div className="section-overlay"></div>
          </div>
          <div className="container">
            <h2>Our Professional Pond Dredging Process</h2>
            <p className="section-intro">We follow a systematic approach to ensure effective and environmentally responsible dredging results.</p>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Assessment & Planning</h3>
                  <p>We conduct a comprehensive evaluation of your pond, including depth analysis, sediment composition testing, and ecological assessment to develop a customized dredging plan.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Equipment Setup</h3>
                  <p>Our professional dredging equipment is carefully positioned and calibrated for optimal performance, ensuring efficient and environmentally responsible sediment removal.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Selective Dredging</h3>
                  <p>Using specialized dredging techniques, we selectively remove accumulated sediment while preserving beneficial pond features and maintaining the natural ecosystem balance.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Material Processing</h3>
                  <p>Dredged sediment is processed and removed from the site using environmentally responsible methods, with options for composting or proper disposal.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Water Quality Monitoring</h3>
                  <p>Post-dredging water quality testing ensures optimal conditions for fish, plants, and overall ecosystem health.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h3>Follow-up Care</h3>
                  <p>We provide ongoing monitoring and maintenance recommendations to help maintain the benefits of dredging throughout the season.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="section equipment-showcase-bg">
          <div className="section-background">
            <img src="/images/truxor-equipment-2.jpg" alt="Professional dredging equipment and attachments" />
            <div className="section-overlay"></div>
          </div>
          <div className="container">
            <h2>Professional Pond Dredging Equipment</h2>
            <p className="section-intro">We use state-of-the-art equipment designed specifically for pond sediment management and dredging.</p>
            
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
            <h2>Benefits of Professional Pond Dredging</h2>
            <p className="section-intro">Regular pond dredging provides numerous benefits for your pond and surrounding ecosystem. Combine dredging with our <Link to="/pond-services/cleaning">pond cleaning services</Link> and <Link to="/pond-services/seasonal">seasonal maintenance</Link> for optimal results.</p>
            
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
            <h2>Seasonal Pond Dredging Considerations</h2>
            <p>{sections.seasonalConsiderations}</p>
            <p>For comprehensive seasonal care, explore our <Link to="/resources/seasonal-care">seasonal care guide</Link> and <Link to="/resources/care-guides">pond care resources</Link>.</p>
            
            <div className="seasonal-info">
              <div className="seasonal-card">
                <h3>Spring Dredging</h3>
                <p>Early season dredging helps remove winter sediment buildup and prepares your pond for the growing season.</p>
              </div>
              <div className="seasonal-card">
                <h3>Summer Dredging</h3>
                <p>Mid-season dredging maintains pond depth during peak usage and prevents sediment accumulation.</p>
              </div>
              <div className="seasonal-card">
                <h3>Fall Dredging</h3>
                <p>Late season dredging prepares your pond for winter and removes accumulated organic matter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="section alt environmental-bg">
          <div className="section-background">
            <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Healthy aquatic ecosystem with water lilies" />
            <div className="section-overlay"></div>
          </div>
          <div className="container">
            <h2>Environmental Responsibility</h2>
            <p>{sections.environmentalImpact}</p>
            <p>Learn more about our commitment to <Link to="/about">environmental stewardship</Link> and sustainable pond management practices.</p>
            
            <div className="environmental-features">
              <div className="feature">
                <h3>Sustainable Practices</h3>
                <p>Our dredging methods promote long-term ecosystem health and biodiversity.</p>
              </div>
              <div className="feature">
                <h3>Wildlife Protection</h3>
                <p>We carefully plan dredging activities to minimize impact on fish, birds, and other wildlife.</p>
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
                <h2>Pond Dredging Costs & Investment</h2>
                <p>{sections.costFactors}</p>
                <p>Get a detailed <Link to="/free-estimate">free estimate</Link> for your specific dredging needs, or explore our <Link to="/pond-services">complete service offerings</Link>.</p>
                <ul>
                  <li>Pond size and depth</li>
                  <li>Sediment depth and composition</li>
                  <li>Pond accessibility and site conditions</li>
                  <li>Frequency of dredging service required</li>
                  <li>Material disposal and processing costs</li>
                </ul>
              </div>
              
              <div className="maintenance-info">
                <h2>Maintenance Schedule</h2>
                <p>{sections.maintenanceSchedule}</p>
                <p>Create a comprehensive maintenance plan with our <Link to="/pond-services/maintenance">pond maintenance services</Link> and <Link to="/resources/tips-tricks">expert tips</Link>.</p>
                <div className="schedule-options">
                  <div className="schedule-option">
                    <h4>Annual Dredging</h4>
                    <p>Recommended for most residential ponds</p>
                  </div>
                  <div className="schedule-option">
                    <h4>Bi-Annual Dredging</h4>
                    <p>For heavily sedimented or large ponds</p>
                  </div>
                  <div className="schedule-option">
                    <h4>Custom Dredging Schedule</h4>
                    <p>Tailored to your specific pond needs and budget</p>
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
            <p>Our team handles all necessary permits and compliance requirements. Learn more about our <Link to="/about">licensing and certifications</Link>.</p>
            
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
                <p>We provide complete documentation of all dredging activities for regulatory compliance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section alt">
          <div className="container">
            <h2>What Our Clients Say About Our Pond Dredging Services</h2>
            <div className="testimonials-carousel">
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>"Utah Water Gardens completely transformed our pond! The dredging process was professional and efficient. Our water quality improved dramatically within weeks."</p>
                  <div className="testimonial-author">
                    <strong>Sarah Johnson</strong>
                    <span>Pond Owner, {cityName}</span>
                  </div>
                  <div className="testimonial-rating">★★★★★</div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>"Their amphibious equipment is incredible - they were able to access areas of our pond that other companies couldn't reach. Highly recommend!"</p>
                  <div className="testimonial-author">
                    <strong>Mike Chen</strong>
                    <span>Property Manager, {cityName}</span>
                  </div>
                  <div className="testimonial-rating">★★★★★</div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>"The team was knowledgeable, professional, and environmentally conscious. Our pond looks amazing and the fish are thriving!"</p>
                  <div className="testimonial-author">
                    <strong>Jennifer Davis</strong>
                    <span>Homeowner, {cityName}</span>
                  </div>
                  <div className="testimonial-rating">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <h2>Frequently Asked Questions About Pond Dredging</h2>
            <div className="faq-accordion">
              <div className="faq-item">
                <button className="faq-question" onClick={(e) => toggleFAQ(e)}>
                  <span>How often should I have my pond dredged?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>Most ponds benefit from dredging every 3-5 years, though heavily sedimented ponds may require more frequent service. We'll assess your specific pond conditions and recommend the optimal schedule.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={(e) => toggleFAQ(e)}>
                  <span>Will dredging harm fish and wildlife?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>No, our selective dredging methods preserve beneficial pond features and wildlife habitat. We use techniques that actually improve fish habitat by removing harmful sediment while maintaining natural ecosystem balance.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={(e) => toggleFAQ(e)}>
                  <span>How long does the dredging process take?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>Dredging time varies by pond size and sediment depth. A typical 1-acre pond takes 2-3 days, while larger ponds may require 5-7 days. We provide detailed timelines during consultation.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={(e) => toggleFAQ(e)}>
                  <span>What happens to the dredged sediment?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>We dispose of dredged sediment using environmentally responsible methods, including composting and proper disposal at licensed facilities. We never leave debris on your property.</p>
                </div>
              </div>
              <div className="faq-item">
                <button className="faq-question" onClick={(e) => toggleFAQ(e)}>
                  <span>Do you provide maintenance after dredging?</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>Yes, we offer ongoing maintenance programs to keep your pond healthy year-round. This includes water quality monitoring, seasonal treatments, and follow-up dredging as needed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section why-choose-bg">
          <div className="section-background">
            <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Beautiful clean pond with water lilies after professional dredging" />
            <div className="section-overlay"></div>
            <div className="section-pattern why-choose-pattern"></div>
          </div>
          <div className="container">
            <div className="why-choose-header">
              <h2>Why Choose Utah Water Gardens for Pond Dredging Service in {cityName}?</h2>
              <p className="why-choose-intro">We're not just another pond service company. We're your local experts with the experience, equipment, and dedication to transform your water feature into a pristine, healthy ecosystem.</p>
            </div>
            
            <div className="why-choose-grid">
              <div className="why-item featured">
                <div className="why-icon">🏆</div>
                <h3>Utah's #1 Pond Dredging Experts</h3>
                <p>Over 15 years of specialized experience in pond sediment management. We've successfully dredged 300+ ponds across Utah, earning us the reputation as the state's premier pond dredging specialists.</p>
                <div className="why-stats">
                  <span>300+ Ponds Dredged</span>
                  <span>15+ Years Experience</span>
                </div>
              </div>
              
              <div className="why-item">
                <div className="why-icon">🚁</div>
                <h3>Revolutionary Amphibious Technology</h3>
                <p>Our state-of-the-art amphibious equipment can access areas unreachable by traditional boats. This cutting-edge technology allows us to dredge sediment in shallow water, marshy areas, and difficult-to-reach locations.</p>
              </div>
              
              <div className="why-item">
                <div className="why-icon">🌱</div>
                <h3>Eco-Friendly & Sustainable</h3>
                <p>We use selective dredging methods that preserve beneficial pond features while removing harmful sediment. Our approach promotes long-term pond health and maintains natural wildlife habitats.</p>
              </div>
              
              <div className="why-item">
                <div className="why-icon">📍</div>
                <h3>Local {cityName} Experts</h3>
                <p>Deep knowledge of {cityName}'s unique climate, pond conditions, and seasonal patterns. We understand local regulations and provide solutions tailored specifically to your area's needs.</p>
              </div>
              
              <div className="why-item">
                <div className="why-icon">⚡</div>
                <h3>Fast & Efficient Service</h3>
                <p>Our advanced equipment and experienced team complete most pond dredging projects in 2-5 days. We minimize disruption to your property while maximizing results.</p>
              </div>
              
              <div className="why-item">
                <div className="why-icon">🛡️</div>
                <h3>Fully Licensed & Insured</h3>
                <p>Complete peace of mind with full licensing, insurance coverage, and environmental compliance. We handle all permits and ensure every project meets state regulations.</p>
              </div>
              
              <div className="why-item">
                <div className="why-icon">💰</div>
                <h3>Competitive Pricing & Guarantees</h3>
                <p>Transparent pricing with no hidden fees. We provide detailed estimates and stand behind our work with satisfaction guarantees. Quality service at fair prices.</p>
              </div>
              
              <div className="why-item">
                <div className="why-icon">📞</div>
                <h3>24/7 Customer Support</h3>
                <p>Dedicated customer service team available to answer questions, schedule services, and provide ongoing support. We're here when you need us, every step of the way.</p>
              </div>
            </div>
            
            <div className="why-choose-cta">
              <h3>Ready to Experience the Difference?</h3>
              <p>Join hundreds of satisfied customers who trust Utah Water Gardens for their pond dredging needs.</p>
              <div className="cta-buttons">
                <a href={`tel:${phoneNumber}`} className="btn btn-primary">Call {phoneNumber}</a>
                <Link to="/contact" className="btn btn-outline">Get Free Estimate</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Local Information */}
        <section className="section alt">
          <div className="container">
            <h2>Pond Dredging Service in {cityName}</h2>
            <p>{sections.localInfo}</p>
            
            {landmarks.length > 0 && (
              <div className="local-landmarks">
                <h3>Local Water Features We Serve</h3>
                <ul>
                  {landmarks.map((landmark, index) => (
                    <li key={index}>
                      {typeof landmark === 'string' ? landmark : landmark.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="service-areas">
              <h3>Service Areas</h3>
              <p>{sections.serviceAreas}</p>
              <p>Explore our <Link to="/pond-gallery">project gallery</Link> to see examples of our dredging work, or check out our <Link to="/plants-fish">aquatic plants and fish</Link> for post-dredging pond enhancement.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact-section">
          <div className="container">
            <h2>Ready to Restore Your Pond?</h2>
            <p>Contact Utah Water Gardens today for professional pond dredging service in {cityName}.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Call Us</h3>
                <a href={`tel:${phoneNumber}`} className="contact-link">{phoneNumber}</a>
                <p>Mon-Sat: 8:00AM-6:00PM</p>
              </div>
              <div className="contact-method">
                <h3>Get Free Estimate</h3>
                <Link to="/contact" className="btn btn-primary">Contact Form</Link>
                <Link to="/free-estimate" className="btn btn-outline">Quick Estimate</Link>
                <p>We respond within 24 hours</p>
              </div>
              <div className="contact-method">
                <h3>Service Area</h3>
                <p>{cityName} and surrounding areas</p>
                <p>Licensed & Insured</p>
                <Link to="/about" className="btn btn-secondary">About Our Team</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="section alt">
          <div className="container">
            <h2>See the Difference: Before & After Pond Dredging</h2>
            <div className="before-after-container">
              <div className="before-after-slider">
                <div className="before-after-images">
                  <div className="after-image">
                    <img src="/images/2b5d2f918801edaa8047c2741195122c-enhance-4x.jpeg" alt="Pond after dredging - clean and clear water" />
                    <div className="before-after-label">After</div>
                  </div>
                  <div className="before-image">
                    <img src="/images/IMG_3269-faceai-sharpen.jpeg" alt="Pond before dredging - overgrown with sediment" />
                    <div className="before-after-label">Before</div>
                  </div>
                </div>
                <div className="slider-handle">
                  <div className="slider-line"></div>
                  <div className="slider-button">
                    <span>⟷</span>
                  </div>
                </div>
              </div>
              <div className="before-after-description">
                <h3>Transform Your Pond with Professional Dredging</h3>
                <p>Our pond dredging services remove accumulated sediment, restore depth, and improve water clarity. See the dramatic difference professional dredging can make!</p>
                <ul>
                  <li>Restored pond depth and volume</li>
                  <li>Improved water circulation</li>
                  <li>Enhanced fish habitat</li>
                  <li>Better recreational value</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />

                {/* Internal Links for SEO */}

                <div style={{ display: 'none' }}>

                  <Link to="/contact">utah water gardens</Link>

                  <Link to="/plants-fish">utah water gardens</Link>

                  <Link to="/pondsupplies">utah water gardens</Link>

                  <Link to="/aquatic-plants">utah water gardens</Link>

                  <Link to="/fish-koi">utah water gardens</Link>

                  <Link to="/">utah water gardens</Link>

                </div>
        
        {/* Floating Action Buttons */}
        <div className="floating-actions">
          <a href={`tel:${phoneNumber}`} className="fab fab-phone" title="Call Now">
            <span>📞</span>
          </a>
          <Link to="/contact" className="fab fab-contact" title="Get Quote">
            <span>💬</span>
          </Link>
          <button className="fab fab-scroll" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} title="Back to Top">
            <span>↑</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PondDredgingTemplate;
