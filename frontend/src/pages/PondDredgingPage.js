import React from 'react';
import { Link } from 'react-router-dom';
import './PondDredgingPage.css';

const PondDredgingPage = () => {
  const dredgingServices = [
    {
      name: 'Sediment & Debris Removal',
      description: 'Complete removal of accumulated sediment, leaves, and debris from pond bottoms',
      image: '/images/IMG_2780.jpg',
      benefits: [
        'Restores original pond depth and volume',
        'Improves water circulation and quality',
        'Prevents flooding and drainage issues',
        'Enhances fish habitat and health',
        'Maintains proper ecosystem balance'
      ],
      process: [
        'Pond depth and sediment analysis',
        'Strategic dredging plan development',
        'Sediment removal and disposal',
        'Water quality monitoring',
        'Post-dredging restoration'
      ],
      equipment: ['Dredging equipment', 'Sediment pumps', 'Collection systems', 'Water quality monitors', 'Safety equipment']
    },
    {
      name: 'Aquatic Plant Management',
      description: 'Control and removal of excessive aquatic vegetation that impacts pond health',
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
      name: 'Pond Bottom Restoration',
      description: 'Restoration and leveling of pond bottoms for optimal water flow and fish habitat',
      image: '/images/IMG_2779.jpg',
      benefits: [
        'Creates optimal water flow patterns',
        'Improves fish habitat and spawning areas',
        'Prevents stagnant water issues',
        'Enhances aesthetic appeal',
        'Maintains proper pond functionality'
      ],
      process: [
        'Bottom contour assessment',
        'Restoration planning and design',
        'Bottom leveling and shaping',
        'Habitat feature creation',
        'Final testing and verification'
      ],
      equipment: ['Excavation equipment', 'Leveling tools', 'Habitat materials', 'Testing equipment', 'Safety gear']
    }
  ];

  const dredgingMethods = [
    {
      method: 'Mechanical Dredging',
      description: 'Use of specialized equipment to remove sediment and debris from pond bottoms',
      bestFor: 'Large ponds, heavy sediment buildup, commercial operations',
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
      method: 'Manual Dredging',
      description: 'Hand-operated dredging for small ponds or sensitive areas',
      bestFor: 'Small ponds, delicate ecosystems, limited access areas',
      advantages: ['Minimal disruption', 'Precise control', 'Low environmental impact', 'Cost-effective for small areas', 'No heavy equipment needed'],
      considerations: ['Labor intensive', 'Time consuming', 'Limited to small areas', 'May require multiple sessions', 'Physical labor required']
    }
  ];

  const pondTypes = [
    {
      type: 'Residential Ponds',
      description: 'Private ponds serving residential properties and gardens',
      challenges: ['Limited access', 'Aesthetic considerations', 'Noise restrictions', 'Timing constraints', 'Resident coordination'],
      solutions: ['Coordinated scheduling', 'Minimal disruption approach', 'Aesthetic restoration', 'Community communication', 'Flexible timing']
    },
    {
      type: 'Koi Ponds',
      description: 'Specialized ponds designed for koi fish and ornamental purposes',
      challenges: ['Fish safety', 'Water quality maintenance', 'Aesthetic preservation', 'Equipment sensitivity', 'Biological balance'],
      solutions: ['Fish-safe methods', 'Water quality monitoring', 'Aesthetic preservation', 'Gentle equipment use', 'Biological balance maintenance']
    },
    {
      type: 'Garden Ponds',
      description: 'Decorative ponds integrated with landscaping and gardens',
      challenges: ['Plant protection', 'Landscape integration', 'Seasonal timing', 'Aesthetic requirements', 'Ecosystem balance'],
      solutions: ['Plant protection measures', 'Landscape coordination', 'Seasonal planning', 'Aesthetic restoration', 'Ecosystem balance maintenance']
    },
    {
      type: 'Commercial Ponds',
      description: 'Ponds serving commercial properties, resorts, and businesses',
      challenges: ['Business operations', 'Customer impact', 'Revenue considerations', 'Safety requirements', 'Regulatory compliance'],
      solutions: ['Off-peak scheduling', 'Safety protocols', 'Business coordination', 'Regulatory management', 'Minimal disruption']
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
        'Restores natural pond depth and volume',
        'Improves fish and wildlife habitat',
        'Maintains biodiversity balance',
        'Prevents invasive species dominance',
        'Supports native vegetation growth'
      ]
    },
    {
      category: 'Aesthetic Appeal',
      benefits: [
        'Maintains clean and attractive appearance',
        'Prevents unsightly buildup',
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

  const projectPhases = [
    {
      phase: 'Phase 1: Assessment & Planning',
      duration: '3-5 days',
      activities: [
        'Pond depth and sediment analysis',
        'Water quality testing',
        'Environmental impact assessment',
        'Dredging plan development',
        'Cost estimates and timeline'
      ],
      deliverables: ['Comprehensive assessment report', 'Dredging plan', 'Cost estimates', 'Timeline schedule', 'Permit requirements']
    },
    {
      phase: 'Phase 2: Preparation & Setup',
      duration: '2-3 days',
      activities: [
        'Equipment mobilization and setup',
        'Access preparation',
        'Safety protocol implementation',
        'Environmental monitoring setup',
        'Stakeholder communication'
      ],
      deliverables: ['Equipment ready', 'Safety protocols in place', 'Monitoring systems active', 'Communication plan executed']
    },
    {
      phase: 'Phase 3: Dredging Operations',
      duration: '1-3 weeks',
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
      duration: '2-4 days',
      activities: [
        'Pond bottom restoration',
        'Habitat feature creation',
        'Final water quality testing',
        'Site cleanup and restoration',
        'Final documentation and reporting'
      ],
      deliverables: ['Restored pond bottom', 'Habitat features created', 'Final water quality report', 'Clean site', 'Project completion report']
    }
  ];

  return (
    <div className="pond-dredging-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Pond Dredging Services</h1>
          <p>Professional pond dredging services to restore depth, improve water quality, and enhance the health and beauty of your pond. Our expert team uses advanced equipment and techniques for optimal results.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Dredging Quote</a>
            <Link to="/pond-services" className="secondary-button">View All Services</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2782.jpg" alt="Professional pond dredging services for water quality improvement" />
        </div>
      </section>

      {/* Dredging Services */}
      <section className="services-section">
        <div className="container">
          <h2>Our Pond Dredging Services</h2>
          <p>Comprehensive dredging solutions for all types of ponds and water features</p>
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
          <p>We select the most appropriate dredging method for your specific pond conditions</p>
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

      {/* Pond Types */}
      <section className="pond-types-section">
        <div className="container">
          <h2>Pond Types We Serve</h2>
          <p>Specialized dredging solutions for different types of ponds and their unique challenges</p>
          <div className="pond-types-grid">
            {pondTypes.map((pondType, index) => (
              <div key={index} className="pond-type-card">
                <h3>{pondType.type}</h3>
                <p className="pond-type-description">{pondType.description}</p>
                
                <div className="pond-type-challenges">
                  <h4>Common Challenges:</h4>
                  <ul>
                    {pondType.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="pond-type-solutions">
                  <h4>Our Solutions:</h4>
                  <ul>
                    {pondType.solutions.map((solution, solutionIndex) => (
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
          <h2>Benefits of Professional Pond Dredging</h2>
          <p>Why regular dredging is essential for your pond's health and functionality</p>
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
          <h2>Why Choose Utah Water Gardens for Pond Dredging</h2>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-icon">🏗️</div>
              <h3>Expert Equipment</h3>
              <p>State-of-the-art dredging equipment for efficient and effective pond restoration</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">🔬</div>
              <h3>Environmental Expertise</h3>
              <p>Deep understanding of pond ecosystems and sustainable dredging practices</p>
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
          <h2>Ready to Restore Your Pond?</h2>
          <p>Contact us to schedule a consultation and get a customized dredging plan for your pond</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PondDredgingPage;
