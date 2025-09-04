import React from 'react';
import { Link } from 'react-router-dom';
import './LakeDredgingPage.css';

const LakeDredgingPage = () => {
  const dredgingServices = [
    {
      name: 'Sediment Removal',
      description: 'Comprehensive removal of accumulated sediment and debris from lake bottoms',
      image: '/images/IMG_2780.jpg',
      benefits: [
        'Restores original lake depth and volume',
        'Improves water quality and clarity',
        'Prevents flooding and drainage issues',
        'Enhances recreational opportunities',
        'Maintains proper ecosystem balance'
      ],
      process: [
        'Lake depth and sediment analysis',
        'Strategic dredging plan development',
        'Sediment removal and disposal',
        'Water quality monitoring',
        'Post-dredging restoration'
      ],
      equipment: ['Dredging equipment', 'Sediment pumps', 'Transport barges', 'Water quality monitors', 'Safety equipment']
    },
    {
      name: 'Aquatic Vegetation Management',
      description: 'Control and removal of excessive aquatic vegetation that impacts lake health',
      image: '/images/IMG_2775.jpg',
      benefits: [
        'Improves water circulation and flow',
        'Reduces oxygen depletion risks',
        'Enhances fish habitat quality',
        'Maintains navigational access',
        'Prevents invasive species spread'
      ],
      process: [
        'Vegetation assessment and mapping',
        'Selective removal planning',
        'Mechanical or manual removal',
        'Disposal and processing',
        'Preventive maintenance planning'
      ],
      equipment: ['Harvesting equipment', 'Cutting tools', 'Collection systems', 'Transport equipment', 'Monitoring devices']
    },
    {
      name: 'Shoreline Restoration',
      description: 'Rehabilitation and stabilization of eroded or damaged lake shorelines',
      image: '/images/IMG_2779.jpg',
      benefits: [
        'Prevents further erosion and damage',
        'Improves shoreline stability',
        'Enhances aesthetic appeal',
        'Protects adjacent properties',
        'Creates better access points'
      ],
      process: [
        'Shoreline condition assessment',
        'Erosion control planning',
        'Stabilization implementation',
        'Native vegetation planting',
        'Long-term maintenance planning'
      ],
      equipment: ['Erosion control materials', 'Planting equipment', 'Stabilization tools', 'Monitoring systems', 'Maintenance tools']
    }
  ];

  const dredgingMethods = [
    {
      method: 'Mechanical Dredging',
      description: 'Use of heavy equipment to remove sediment and debris from lake bottoms',
      bestFor: 'Large lakes, heavy sediment buildup, commercial operations',
      advantages: ['High efficiency', 'Handles large volumes', 'Precise depth control', 'Fast completion', 'Cost-effective for large areas'],
      considerations: ['Requires access roads', 'Higher initial costs', 'Equipment mobilization', 'Sediment disposal planning', 'Environmental permits']
    },
    {
      method: 'Hydraulic Dredging',
      description: 'Using water pressure to loosen and remove sediment through pumping systems',
      bestFor: 'Soft sediment, sensitive environments, continuous operations',
      advantages: ['Minimal environmental impact', 'Continuous operation', 'Handles soft materials', 'Reduced turbidity', 'Flexible operation'],
      considerations: ['Water quality monitoring', 'Sediment processing', 'Pump maintenance', 'Flow rate management', 'Disposal site requirements']
    },
    {
      method: 'Environmental Dredging',
      description: 'Specialized dredging techniques for contaminated or sensitive lake environments',
      bestFor: 'Contaminated sediments, protected areas, sensitive ecosystems',
      advantages: ['Minimal ecosystem disruption', 'Contamination control', 'Regulatory compliance', 'Long-term protection', 'Sustainable approach'],
      considerations: ['Higher costs', 'Specialized equipment', 'Regulatory requirements', 'Extended timelines', 'Expert supervision needed']
    }
  ];

  const lakeTypes = [
    {
      type: 'Residential Lakes',
      description: 'Private lakes and ponds serving residential communities',
      challenges: ['Limited access', 'Resident coordination', 'Aesthetic considerations', 'Noise restrictions', 'Timing constraints'],
      solutions: ['Coordinated scheduling', 'Minimal disruption approach', 'Aesthetic restoration', 'Community communication', 'Flexible timing']
    },
    {
      type: 'Commercial Lakes',
      description: 'Lakes serving commercial properties, resorts, and businesses',
      challenges: ['Business operations', 'Customer impact', 'Revenue considerations', 'Safety requirements', 'Regulatory compliance'],
      solutions: ['Off-peak scheduling', 'Safety protocols', 'Business coordination', 'Regulatory management', 'Minimal disruption']
    },
    {
      type: 'Agricultural Lakes',
      description: 'Lakes used for irrigation, livestock, and agricultural purposes',
      challenges: ['Seasonal timing', 'Water availability', 'Crop considerations', 'Equipment access', 'Cost constraints'],
      solutions: ['Seasonal planning', 'Water management', 'Crop coordination', 'Efficient equipment', 'Cost-effective methods']
    },
    {
      type: 'Recreational Lakes',
      description: 'Lakes used for fishing, boating, swimming, and other recreational activities',
      challenges: ['Public access', 'Safety concerns', 'Activity scheduling', 'Environmental protection', 'Public communication'],
      solutions: ['Public notification', 'Safety protocols', 'Activity coordination', 'Environmental monitoring', 'Clear communication']
    }
  ];

  const dredgingBenefits = [
    {
      category: 'Water Quality',
      benefits: [
        'Removes accumulated pollutants and contaminants',
        'Improves water clarity and transparency',
        'Reduces nutrient loading from sediment',
        'Enhances oxygen levels and circulation',
        'Prevents harmful algal blooms'
      ]
    },
    {
      category: 'Ecosystem Health',
      benefits: [
        'Restores natural lake depth and volume',
        'Improves fish and wildlife habitat',
        'Maintains biodiversity balance',
        'Prevents invasive species dominance',
        'Supports native vegetation growth'
      ]
    },
    {
      category: 'Recreational Value',
      benefits: [
        'Maintains safe boating depths',
        'Improves fishing conditions',
        'Enhances swimming areas',
        'Prevents navigation hazards',
        'Increases property values'
      ]
    },
    {
      category: 'Infrastructure Protection',
      benefits: [
        'Prevents flooding and drainage issues',
        'Protects shoreline structures',
        'Maintains water flow systems',
        'Prevents property damage',
        'Extends lake lifespan'
      ]
    }
  ];

  const projectPhases = [
    {
      phase: 'Phase 1: Assessment & Planning',
      duration: '1-2 weeks',
      activities: [
        'Lake depth and sediment analysis',
        'Water quality testing',
        'Environmental impact assessment',
        'Regulatory permit applications',
        'Dredging plan development'
      ],
      deliverables: ['Comprehensive assessment report', 'Dredging plan', 'Permit applications', 'Cost estimates', 'Timeline schedule']
    },
    {
      phase: 'Phase 2: Preparation & Setup',
      duration: '1-2 weeks',
      activities: [
        'Equipment mobilization and setup',
        'Access road preparation',
        'Safety protocol implementation',
        'Environmental monitoring setup',
        'Stakeholder communication'
      ],
      deliverables: ['Equipment ready', 'Safety protocols in place', 'Monitoring systems active', 'Communication plan executed']
    },
    {
      phase: 'Phase 3: Dredging Operations',
      duration: '2-8 weeks',
      activities: [
        'Sediment removal and processing',
        'Water quality monitoring',
        'Progress tracking and reporting',
        'Quality control measures',
        'Safety protocol enforcement'
      ],
      deliverables: ['Sediment removal complete', 'Water quality maintained', 'Progress reports', 'Quality assurance documentation']
    },
    {
      phase: 'Phase 4: Restoration & Completion',
      duration: '1-2 weeks',
      activities: [
        'Shoreline restoration',
        'Vegetation replanting',
        'Final water quality testing',
        'Site cleanup and restoration',
        'Final documentation and reporting'
      ],
      deliverables: ['Restored shoreline', 'Replanted vegetation', 'Final water quality report', 'Clean site', 'Project completion report']
    }
  ];

  return (
    <div className="lake-dredging-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Lake Dredging Services</h1>
          <p>Professional lake dredging services to restore depth, improve water quality, and enhance the health and beauty of your lake. Our expert team uses advanced equipment and techniques for optimal results.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Dredging Quote</a>
            <Link to="/pond-services" className="secondary-button">View All Services</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2782.jpg" alt="Professional lake dredging services for water quality improvement" />
        </div>
      </section>

      {/* Dredging Services */}
      <section className="services-section">
        <div className="container">
          <h2>Our Lake Dredging Services</h2>
          <p>Comprehensive dredging solutions for all types of lakes and water bodies</p>
          <div className="services-grid">
            {dredgingServices.map((service, index) => (
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

      {/* Dredging Methods */}
      <section className="methods-section">
        <div className="container">
          <h2>Dredging Methods</h2>
          <p>We select the most appropriate dredging method for your specific lake conditions</p>
          <div className="methods-grid">
            {dredgingMethods.map((method, index) => (
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
                
                <div className="method-considerations">
                  <h4>Considerations:</h4>
                  <ul>
                    {method.considerations.map((consideration, considerationIndex) => (
                      <li key={considerationIndex}>{consideration}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lake Types */}
      <section className="lake-types-section">
        <div className="container">
          <h2>Lake Types We Serve</h2>
          <p>Specialized dredging solutions for different types of lakes and their unique challenges</p>
          <div className="lake-types-grid">
            {lakeTypes.map((lakeType, index) => (
              <div key={index} className="lake-type-card">
                <h3>{lakeType.type}</h3>
                <p className="lake-type-description">{lakeType.description}</p>
                
                <div className="lake-type-challenges">
                  <h4>Common Challenges:</h4>
                  <ul>
                    {lakeType.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="lake-type-solutions">
                  <h4>Our Solutions:</h4>
                  <ul>
                    {lakeType.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="phases-section">
        <div className="container">
          <h2>Dredging Project Phases</h2>
          <p>Our structured approach ensures successful project completion</p>
          <div className="phases-grid">
            {projectPhases.map((phase, index) => (
              <div key={index} className="phase-card">
                <div className="phase-header">
                  <h3>{phase.phase}</h3>
                  <span className="phase-duration">{phase.duration}</span>
                </div>
                
                <div className="phase-activities">
                  <h4>Key Activities:</h4>
                  <ul>
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex}>{activity}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="phase-deliverables">
                  <h4>Deliverables:</h4>
                  <ul>
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Dredging */}
      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Professional Lake Dredging</h2>
          <p>Why regular dredging is essential for your lake's health and functionality</p>
          <div className="benefits-grid">
            {dredgingBenefits.map((category, index) => (
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
          <h2>Why Choose Utah Water Gardens for Lake Dredging</h2>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-icon">🏗️</div>
              <h3>Expert Equipment</h3>
              <p>State-of-the-art dredging equipment for efficient and effective lake restoration</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">🔬</div>
              <h3>Environmental Expertise</h3>
              <p>Deep understanding of lake ecosystems and sustainable dredging practices</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">📋</div>
              <h3>Regulatory Compliance</h3>
              <p>Full compliance with environmental regulations and permit requirements</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">⏱️</div>
              <h3>Efficient Operations</h3>
              <p>Streamlined processes and experienced crews for timely project completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Ready to Restore Your Lake?</h2>
          <p>Contact us to schedule a consultation and get a customized dredging plan for your lake</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LakeDredgingPage;
