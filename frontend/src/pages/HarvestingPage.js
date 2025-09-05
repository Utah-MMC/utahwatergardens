import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HarvestingPage.css';

const HarvestingPage = () => {
  const harvestingServices = [
    {
      name: 'Aquatic Plant Harvesting',
      description: 'Professional removal and harvesting of aquatic plants for ecosystem balance',
      image: '/images/IMG_2775.jpg',
      benefits: [
        'Prevents overgrowth and ecosystem imbalance',
        'Improves water quality and clarity',
        'Creates space for fish and other wildlife',
        'Maintains healthy plant diversity',
        'Prevents invasive species spread'
      ],
      process: [
        'Assessment of plant growth and health',
        'Selective harvesting of overgrown areas',
        'Proper disposal or relocation of harvested plants',
        'Ecosystem impact evaluation',
        'Follow-up monitoring and maintenance'
      ],
      equipment: ['Harvesting tools', 'Safety gear', 'Collection containers', 'Transport equipment', 'Disposal methods']
    },
    {
      name: 'Fish Harvesting',
      description: 'Safe and humane fish harvesting for population control and health management',
      image: '/images/IMG_2782.jpg',
      benefits: [
        'Maintains optimal fish population density',
        'Removes sick or diseased fish',
        'Improves overall pond health',
        'Prevents overcrowding stress',
        'Allows for selective breeding programs'
      ],
      process: [
        'Population assessment and planning',
        'Safe capture methods and timing',
        'Health evaluation of harvested fish',
        'Humane handling and processing',
        'Population balance restoration'
      ],
      equipment: ['Nets and traps', 'Fish handling equipment', 'Transport containers', 'Health assessment tools', 'Processing equipment']
    },
    {
      name: 'Algae Harvesting',
      description: 'Effective algae removal and harvesting for water quality improvement',
      image: '/images/IMG_2780.jpg',
      benefits: [
        'Immediate water clarity improvement',
        'Reduces nutrient competition',
        'Prevents oxygen depletion',
        'Improves fish and plant health',
        'Maintains aesthetic appeal'
      ],
      process: [
        'Algae type identification and assessment',
        'Strategic harvesting timing and methods',
        'Nutrient level monitoring',
        'Preventive measures implementation',
        'Long-term management planning'
      ],
      equipment: ['Algae harvesting tools', 'Filtration systems', 'Water testing equipment', 'Preventive treatments', 'Monitoring devices']
    }
  ];

  const harvestingMethods = [
    {
      method: 'Manual Harvesting',
      description: 'Hand-picking and manual removal of plants and algae',
      bestFor: 'Small ponds, selective harvesting, delicate areas',
      advantages: ['Precise control', 'Minimal ecosystem disruption', 'Selective removal', 'Cost-effective for small areas'],
      disadvantages: ['Labor intensive', 'Time consuming', 'Limited to accessible areas', 'May require multiple sessions']
    },
    {
      method: 'Mechanical Harvesting',
      description: 'Use of specialized equipment for large-scale harvesting',
      bestFor: 'Large ponds, commercial operations, extensive growth',
      advantages: ['Efficient for large areas', 'Consistent results', 'Reduced labor costs', 'Faster completion'],
      disadvantages: ['Higher equipment costs', 'Less selective', 'Potential ecosystem disruption', 'Requires skilled operators']
    },
    {
      method: 'Biological Harvesting',
      description: 'Using natural predators and biological controls',
      bestFor: 'Long-term management, natural approaches, sustainable solutions',
      advantages: ['Natural and sustainable', 'Long-term effectiveness', 'Low maintenance', 'Ecosystem friendly'],
      disadvantages: ['Slower results', 'Less predictable', 'May require ongoing management', 'Not suitable for all situations']
    }
  ];

  const seasonalHarvesting = [
    {
      season: 'Spring',
      activities: [
        'Remove winter debris and dead plant material',
        'Harvest early spring algae blooms',
        'Thin out overgrown winter plants',
        'Prepare for new growth season',
        'Assess fish population health'
      ],
      timing: 'March - May',
      considerations: 'Wait for water to warm above 50°F, avoid disturbing spawning fish'
    },
    {
      season: 'Summer',
      activities: [
        'Regular algae harvesting and control',
        'Aquatic plant thinning and maintenance',
        'Fish population monitoring and selective harvesting',
        'Water quality maintenance',
        'Preventive harvesting to avoid overgrowth'
      ],
      timing: 'June - August',
      considerations: 'Harvest early morning or evening, monitor water temperature and oxygen levels'
    },
    {
      season: 'Fall',
      activities: [
        'Harvest mature plants and seeds',
        'Remove excess growth before winter',
        'Prepare pond for winter dormancy',
        'Final fish population assessment',
        'Clean up and winter preparation'
      ],
      timing: 'September - November',
      considerations: 'Complete harvesting before first frost, preserve beneficial plants for winter'
    },
    {
      season: 'Winter',
      activities: [
        'Minimal harvesting activities',
        'Emergency removal if needed',
        'Planning for spring harvesting',
        'Equipment maintenance and preparation',
        'Winter ecosystem monitoring'
      ],
      timing: 'December - February',
      considerations: 'Avoid disturbing winter dormancy, focus on planning and preparation'
    }
  ];

  const harvestingBenefits = [
    {
      category: 'Ecosystem Health',
      benefits: [
        'Maintains balanced plant and animal populations',
        'Prevents invasive species dominance',
        'Improves water quality and clarity',
        'Supports healthy fish populations',
        'Preserves biodiversity'
      ]
    },
    {
      category: 'Water Quality',
      benefits: [
        'Reduces nutrient overload',
        'Improves oxygen levels',
        'Prevents harmful algae blooms',
        'Maintains proper pH balance',
        'Reduces organic matter buildup'
      ]
    },
    {
      category: 'Aesthetic Appeal',
      benefits: [
        'Maintains clean and attractive appearance',
        'Prevents unsightly overgrowth',
        'Creates balanced visual design',
        'Improves property value',
        'Enhances outdoor living space'
      ]
    },
    {
      category: 'Long-term Maintenance',
      benefits: [
        'Prevents costly emergency interventions',
        'Reduces need for chemical treatments',
        'Maintains pond functionality',
        'Extends pond lifespan',
        'Supports sustainable management'
      ]
    }
  ];

  const waveRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    let lastMouseX = 0;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (waveRef.current) {
            const scrolled = window.pageYOffset;
            const deltaY = scrolled - lastScrollY;
            const rate = scrolled * -0.1; // Reduced from -0.3 to -0.1 for subtler movement
            const wave = waveRef.current;
            
            // Add scrolling class for enhanced effects
            wave.classList.add('scrolling');
            
            // Apply very subtle horizontal wave motion based on scroll
            wave.style.transform = `translateX(${rate}px)`;
            
            // Add vertical wave motion based on scroll direction
            const wavePaths = wave.querySelectorAll('svg path');
            wavePaths.forEach((path, index) => {
              const speed = (index + 1) * 0.15; // Reduced from 0.2 for subtler effect
              const yOffset = Math.sin(scrolled * 0.003 + index) * 6; // Reduced from 0.005 and 8
              const scrollEffect = deltaY * 0.08 * speed; // Reduced from 0.1 for subtler effect
              path.style.transform = `translateY(${yOffset + scrollEffect}px)`;
            });
            
            lastScrollY = scrolled;
            
            // Remove scrolling class after animation
            setTimeout(() => {
              wave.classList.remove('scrolling');
            }, 150);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e) => {
      if (waveRef.current) {
        const mouseX = e.clientX;
        const deltaX = mouseX - lastMouseX;
        const wave = waveRef.current;
        
        // Subtle wave response to mouse movement
        const wavePaths = wave.querySelectorAll('svg path');
        wavePaths.forEach((path, index) => {
          const sensitivity = (index + 1) * 0.1;
          const mouseEffect = deltaX * sensitivity;
          const currentTransform = path.style.transform;
          const yMatch = currentTransform.match(/translateY\(([^)]+)px\)/);
          const yValue = yMatch ? parseFloat(yMatch[1]) : 0;
          
          path.style.transform = `translateY(${yValue + mouseEffect * 0.01}px)`;
        });
        
        lastMouseX = mouseX;
      }
    };

    const handleResize = () => {
      if (waveRef.current) {
        // Reset wave position on resize
        waveRef.current.style.transform = 'translateX(0)';
        const wavePaths = waveRef.current.querySelectorAll('svg path');
        wavePaths.forEach(path => {
          path.style.transform = 'translateY(0)';
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="harvesting-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/images/IMG_2779.jpg" alt="Professional pond harvesting services for ecosystem balance" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-logo">
            <img src="/images/utahWaterGardensLogoHoriz.webp" alt="Utah Water Gardens Logo" />
          </div>
          
          <h1>Utah Water Gardens</h1>
          <p className="hero-subtitle">Professional Harvesting Services Since 1995</p>
          
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button primary">
              <span>Get Free Estimate</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="tel:(801) 590-8516" className="cta-button secondary">
              <span>Call (801) 590-8516</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link to="/pond-services" className="cta-button secondary">
              <span>View All Services</span>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H12L19 12M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="hero-wave" ref={waveRef}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill-rule="evenodd">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" fill-opacity="1"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,12.24,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#87ceeb" fill-opacity="1"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#0ea5e9" fill-opacity="1"></path>
          </svg>
        </div>
      </section>

      {/* Harvesting Services */}
      <section className="services-section">
        <div className="container">
          <h2>Our Harvesting Services</h2>
          <p>Comprehensive harvesting solutions for all your pond management needs</p>
          <div className="services-grid">
            {harvestingServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="service-content">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  
                  <div className="service-benefits">
                    <h4>Benefits:</h4>
                    <ul>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-process">
                    <h4>Our Process:</h4>
                    <ol>
                      {service.process.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="service-equipment">
                    <h4>Equipment Used:</h4>
                    <div className="equipment-tags">
                      {service.equipment.map((item, itemIndex) => (
                        <span key={itemIndex} className="equipment-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Harvesting Methods */}
      <section className="methods-section">
        <div className="container">
          <h2>Harvesting Methods</h2>
          <p>We use the most appropriate harvesting method for your specific situation</p>
          <div className="methods-grid">
            {harvestingMethods.map((method, index) => (
              <div key={index} className="method-card">
                <h3>{method.method}</h3>
                <p className="method-description">{method.description}</p>
                
                <div className="method-best-for">
                  <strong>Best For:</strong> {method.bestFor}
                </div>
                
                <div className="method-advantages">
                  <h4>Advantages:</h4>
                  <ul>
                    {method.advantages.map((advantage, advantageIndex) => (
                      <li key={advantageIndex}>{advantage}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="method-disadvantages">
                  <h4>Considerations:</h4>
                  <ul>
                    {method.disadvantages.map((disadvantage, disadvantageIndex) => (
                      <li key={disadvantageIndex}>{disadvantage}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Harvesting */}
      <section className="seasonal-section">
        <div className="container">
          <h2>Seasonal Harvesting Guide</h2>
          <p>Optimal harvesting timing and activities for each season</p>
          <div className="seasonal-grid">
            {seasonalHarvesting.map((season, index) => (
              <div key={index} className="season-card">
                <div className="season-header">
                  <h3>{season.season}</h3>
                  <span className="season-timing">{season.timing}</span>
                </div>
                
                <div className="season-activities">
                  <h4>Key Activities:</h4>
                  <ul>
                    {season.activities.map((activity, activityIndex) => (
                      <li key={activityIndex}>{activity}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="season-considerations">
                  <h4>Important Considerations:</h4>
                  <p>{season.considerations}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Harvesting */}
      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Professional Harvesting</h2>
          <p>Why regular harvesting is essential for your pond's health and beauty</p>
          <div className="benefits-grid">
            {harvestingBenefits.map((category, index) => (
              <div key={index} className="benefit-category">
                <h3>{category.category}</h3>
                <ul>
                  {category.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Choose Utah Water Gardens for Harvesting</h2>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-icon">🌱</div>
              <h3>Ecosystem Expertise</h3>
              <p>Deep understanding of pond ecosystems and sustainable harvesting practices</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">🔧</div>
              <h3>Professional Equipment</h3>
              <p>State-of-the-art harvesting equipment for efficient and effective results</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">📅</div>
              <h3>Seasonal Knowledge</h3>
              <p>Expert timing and seasonal planning for optimal harvesting results</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">♻️</div>
              <h3>Sustainable Practices</h3>
              <p>Environmentally responsible harvesting that maintains ecosystem balance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section 
        className="contact-cta"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <h2>Ready for Professional Harvesting?</h2>
          <p>Contact us to schedule a consultation and get a customized harvesting plan for your pond</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HarvestingPage;
