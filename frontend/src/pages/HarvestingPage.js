import React from 'react';
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


  return (
    <div className="harvesting-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/images/IMG_2779.jpg" alt="Professional pond harvesting services for ecosystem balance" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
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
        
      </section>

      {/* Harvesting Services */}
      <section className="services-section first-section-gradient">
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
      <section className="why-choose-section gradient-wipe-up">
        <div className="container">
          <h2>Why Choose Utah Water Gardens for Harvesting</h2>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 6 17.25C7.12 17.25 8.25 16.75 9 16L17 8Z" fill="#32CD32"/>
  </svg>
              </div>
              <h3>Ecosystem Expertise</h3>
              <p>Deep understanding of pond ecosystems and sustainable harvesting practices</p>
            </div>
            <div className="reason-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3L9 6.9L6.9 9L3 5.1C1 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 23C20.3 23 20.7 22.7 21 22.4L22.4 21C22.7 20.7 22.7 20.3 22.7 19Z" fill="#6C757D"/>
  </svg>
              </div>
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
