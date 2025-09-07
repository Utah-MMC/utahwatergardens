import React from 'react';
import { Link } from 'react-router-dom';
import './PondTipsTricksPage.css';

const PondTipsTricksPage = () => {
  const tipCategories = [
    {
      name: 'Water Quality Tips',
      image: '/images/IMG_2779.jpg',
      description: 'Expert tips for maintaining crystal clear, healthy pond water',
      tips: [
        'Test water weekly during the first month, then monthly',
        'Add beneficial bacteria after water changes',
        'Use a UV sterilizer to control algae blooms',
        'Maintain proper pH between 6.8-7.2',
        'Avoid overfeeding to prevent ammonia spikes',
        'Use a pond vacuum for bottom cleaning'
      ],
      icon: 'water'
    },
    {
      name: 'Fish Care Tips',
      image: '/images/IMG_2780.jpg',
      description: 'Professional tips for keeping your fish healthy and happy',
      tips: [
        'Feed fish only what they can eat in 5 minutes',
        'Quarantine new fish for 2-3 weeks',
        'Provide hiding places for fish security',
        'Monitor fish behavior daily for health signs',
        'Use a pond heater in winter for cold climates',
        'Gradually acclimate fish to temperature changes'
      ],
      icon: 'fish'
    },
    {
      name: 'Plant Care Tips',
      image: '/images/IMG_2776.jpg',
      description: 'Secrets to growing beautiful, thriving aquatic plants',
      tips: [
        'Plant in early spring for best establishment',
        'Use aquatic plant fertilizer tablets',
        'Prune dead leaves regularly',
        'Provide adequate lighting for plant growth',
        'Divide overgrown plants in spring',
        'Use plant baskets for easy maintenance'
      ],
      icon: 'plant'
    },
    {
      name: 'Equipment Tips',
      image: '/images/IMG_2770.jpg',
      description: 'Maintenance tips to keep your pond equipment running smoothly',
      tips: [
        'Clean pump intake screens weekly',
        'Check electrical connections monthly',
        'Replace UV bulbs annually',
        'Clean filters when flow decreases',
        'Use GFCI outlets for safety',
        'Store equipment properly in winter'
      ],
      icon: 'tools'
    },
    {
      name: 'Seasonal Tips',
      image: '/images/IMG_2782.jpg',
      description: 'Season-specific tips for year-round pond success',
      tips: [
        'Start feeding when water reaches 50°F',
        'Add shade in summer to prevent overheating',
        'Remove leaves in fall to prevent decay',
        'Install pond heater before first freeze',
        'Reduce feeding as temperature drops',
        'Plan spring maintenance in winter'
      ],
      icon: '🍂'
    },
    {
      name: 'Problem Prevention',
      image: '/images/IMG_2775.jpg',
      description: 'Proactive tips to prevent common pond problems',
      tips: [
        'Maintain proper fish-to-water ratio',
        'Use quality filtration system',
        'Avoid overcrowding plants',
        'Keep debris out of pond',
        'Monitor water parameters regularly',
        'Have backup equipment ready'
      ],
      icon: '🛡️'
    }
  ];

  const quickTricks = [
    {
      trick: 'Natural Algae Control',
      description: 'Use barley straw to naturally control algae growth',
      method: 'Place barley straw bales in pond - they release compounds that inhibit algae',
      effectiveness: 'High',
      cost: 'Low'
    },
    {
      trick: 'Homemade Fish Food',
      description: 'Create nutritious fish food using kitchen ingredients',
      method: 'Mix gelatin, fish meal, and vegetables for healthy homemade food',
      effectiveness: 'High',
      cost: 'Very Low'
    },
    {
      trick: 'Pond De-icer Alternative',
      description: 'Use a floating ball to keep hole in ice',
      method: 'Tennis ball or floating device prevents complete ice coverage',
      effectiveness: 'Medium',
      cost: 'Very Low'
    },
    {
      trick: 'Natural Water Clarifier',
      description: 'Use activated charcoal for water clarification',
      method: 'Place charcoal in filter media for natural water cleaning',
      effectiveness: 'Medium',
      cost: 'Low'
    },
    {
      trick: 'Plant Propagation',
      description: 'Easily propagate aquatic plants for more coverage',
      method: 'Cut healthy stems and plant in substrate for new growth',
      effectiveness: 'High',
      cost: 'Free'
    },
    {
      trick: 'Pond Depth Gauge',
      description: 'Create simple depth measurement tool',
      method: 'Use marked stick or rope to measure pond depth accurately',
      effectiveness: 'High',
      cost: 'Free'
    }
  ];

  const seasonalTricks = [
    {
      season: 'Spring',
      image: '/images/IMG_2782.jpg',
      tricks: [
        'Use pond vacuum for thorough spring cleaning',
        'Add beneficial bacteria to jumpstart biological filtration',
        'Check and repair any winter damage',
        'Start feeding gradually as temperature rises',
        'Divide and repot overgrown plants',
        'Test all equipment before heavy use'
      ],
      priority: 'High'
    },
    {
      season: 'Summer',
      image: '/images/IMG_2775.jpg',
      tricks: [
        'Add floating plants for natural shade',
        'Increase aeration during hot weather',
        'Feed fish early morning or evening',
        'Monitor water temperature daily',
        'Use pond net to catch debris',
        'Enjoy your pond with proper maintenance'
      ],
      priority: 'Medium'
    },
    {
      season: 'Fall',
      image: '/images/IMG_2779.jpg',
      tricks: [
        'Install pond net to catch falling leaves',
        'Reduce feeding as temperature drops',
        'Clean filters thoroughly before winter',
        'Remove tropical plants before frost',
        'Add cold water bacteria for winter',
        'Prepare equipment for winter storage'
      ],
      priority: 'High'
    },
    {
      season: 'Winter',
      image: '/images/IMG_2780.jpg',
      tricks: [
        'Keep small area of pond ice-free',
        'Use pond heater for fish survival',
        'Minimize disturbance during cold weather',
        'Check equipment periodically',
        'Plan spring improvements',
        'Order supplies for next season'
      ],
      priority: 'Low'
    }
  ];

  const expertSecrets = [
    {
      secret: 'The 10% Rule',
      description: 'Never change more than 10% of pond water at once',
      benefit: 'Prevents stress to fish and maintains biological balance',
      category: 'Water Management'
    },
    {
      secret: 'Temperature Matching',
      description: 'Always match new water temperature to pond water',
      benefit: 'Prevents temperature shock in fish and plants',
      category: 'Fish Care'
    },
    {
      secret: 'The 5-Minute Rule',
      description: 'Feed fish only what they can eat in 5 minutes',
      benefit: 'Prevents overfeeding and water quality issues',
      category: 'Feeding'
    },
    {
      secret: 'Quarantine Protocol',
      description: 'Always quarantine new fish for 2-3 weeks',
      benefit: 'Prevents disease introduction to established pond',
      category: 'Health'
    },
    {
      secret: 'The 1-Inch Rule',
      description: 'Stock 1 inch of fish per 10 gallons of water',
      benefit: 'Maintains proper fish-to-water ratio for health',
      category: 'Stocking'
    },
    {
      secret: 'The 3-Foot Rule',
      description: 'Keep pond at least 3 feet deep in cold climates',
      benefit: 'Prevents complete freezing and protects fish',
      category: 'Design'
    }
  ];

  const diyProjects = [
    {
      project: 'Homemade Pond Skimmer',
      image: '/images/IMG_2770.jpg',
      description: 'Create an effective pond skimmer using household items',
      materials: ['Plastic container', 'Mesh screen', 'PVC pipe', 'Pump'],
      difficulty: 'Easy',
      time: '2 hours',
      cost: '$15-25'
    },
    {
      project: 'DIY Plant Baskets',
      image: '/images/IMG_2776.jpg',
      description: 'Make your own aquatic plant baskets for better organization',
      materials: ['Plastic baskets', 'Aquatic soil', 'Gravel', 'Mesh'],
      difficulty: 'Easy',
      time: '1 hour',
      cost: '$10-15'
    },
    {
      project: 'Pond Waterfall',
      image: '/images/IMG_2775.jpg',
      description: 'Build a beautiful waterfall using natural stones',
      materials: ['Pond liner', 'Stones', 'Pump', 'PVC pipe'],
      difficulty: 'Medium',
      time: '1 day',
      cost: '$50-100'
    },
    {
      project: 'Floating Plant Islands',
      image: '/images/IMG_2779.jpg',
      description: 'Create floating platforms for marginal plants',
      materials: ['Styrofoam', 'Mesh', 'Plants', 'Anchors'],
      difficulty: 'Easy',
      time: '3 hours',
      cost: '$20-30'
    }
  ];

  const troubleshootingTricks = [
    {
      problem: 'Green Water',
      quickFix: 'Add UV sterilizer and reduce feeding',
      longTerm: 'Improve filtration and add more plants',
      prevention: 'Maintain proper nutrient balance'
    },
    {
      problem: 'Fish Jumping',
      quickFix: 'Check water quality and reduce stress',
      longTerm: 'Provide hiding places and proper depth',
      prevention: 'Maintain stable water conditions'
    },
    {
      problem: 'Pump Not Working',
      quickFix: 'Check power and clean intake',
      longTerm: 'Regular maintenance and backup pump',
      prevention: 'Weekly cleaning and inspection'
    },
    {
      problem: 'Plants Dying',
      quickFix: 'Check lighting and nutrients',
      longTerm: 'Proper plant selection and care',
      prevention: 'Match plants to pond conditions'
    }
  ];

  return (
    <div className="pond-tips-tricks-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Pond Tips & Tricks</h1>
          <p>Discover expert tips, clever tricks, and professional secrets to make your pond maintenance easier and more effective. From quick fixes to advanced techniques.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Expert Tips</a>
            <Link to="/resources" className="secondary-button">View All Resources</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2779.jpg" alt="Expert pond tips and tricks for better pond care" />
        </div>
      </section>

      {/* Tip Categories */}
      <section className="tips-section first-section-gradient">
        <div className="container">
          <h2>Expert Tips by Category</h2>
          <p>Professional tips organized by topic for easy reference</p>
          <div className="tips-grid">
            {tipCategories.map((category, index) => (
              <div key={index} className="tip-category-card">
                <div className="tip-category-header">
                  <div className="tip-category-icon">{category.icon}</div>
                  <h3>{category.name}</h3>
                </div>
                <div className="tip-category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="tip-category-info">
                  <p>{category.description}</p>
                  <div className="tip-category-tips">
                    <h4>Key Tips:</h4>
                    <ul>
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tricks */}
      <section className="tricks-section">
        <div className="container">
          <h2>Quick & Easy Tricks</h2>
          <p>Simple tricks that make a big difference in pond care</p>
          <div className="tricks-grid">
            {quickTricks.map((trick, index) => (
              <div key={index} className="trick-card">
                <h3>{trick.trick}</h3>
                <p>{trick.description}</p>
                <div className="trick-method">
                  <strong>Method:</strong> {trick.method}
                </div>
                <div className="trick-details">
                  <div className="trick-effectiveness">
                    <strong>Effectiveness:</strong> {trick.effectiveness}
                  </div>
                  <div className="trick-cost">
                    <strong>Cost:</strong> {trick.cost}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Tricks */}
      <section className="seasonal-section">
        <div className="container">
          <h2>Seasonal Tricks</h2>
          <p>Season-specific tricks for year-round pond success</p>
          <div className="seasonal-grid">
            {seasonalTricks.map((season, index) => (
              <div key={index} className="seasonal-card">
                <div className="seasonal-image">
                  <img src={season.image} alt={`${season.season} tricks`} />
                </div>
                <div className="seasonal-info">
                  <h3>{season.season} Tricks</h3>
                  <div className="seasonal-priority">
                    <strong>Priority:</strong> {season.priority}
                  </div>
                  <div className="seasonal-tricks">
                    <h4>Key Tricks:</h4>
                    <ul>
                      {season.tricks.map((trick, trickIndex) => (
                        <li key={trickIndex}>{trick}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Secrets */}
      <section className="secrets-section">
        <div className="container">
          <h2>Professional Secrets</h2>
          <p>Industry secrets that professionals use for optimal pond care</p>
          <div className="secrets-grid">
            {expertSecrets.map((secret, index) => (
              <div key={index} className="secret-card">
                <div className="secret-header">
                  <h3>{secret.secret}</h3>
                  <span className="secret-category">{secret.category}</span>
                </div>
                <p>{secret.description}</p>
                <div className="secret-benefit">
                  <strong>Benefit:</strong> {secret.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIY Projects */}
      <section className="diy-section">
        <div className="container">
          <h2>DIY Projects</h2>
          <p>Fun and practical DIY projects to enhance your pond</p>
          <div className="diy-grid">
            {diyProjects.map((project, index) => (
              <div key={index} className="diy-card">
                <div className="diy-image">
                  <img src={project.image} alt={project.project} />
                </div>
                <div className="diy-info">
                  <h3>{project.project}</h3>
                  <p>{project.description}</p>
                  <div className="diy-materials">
                    <h4>Materials Needed:</h4>
                    <ul>
                      {project.materials.map((material, materialIndex) => (
                        <li key={materialIndex}>{material}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="diy-details">
                    <div className="diy-difficulty">
                      <strong>Difficulty:</strong> {project.difficulty}
                    </div>
                    <div className="diy-time">
                      <strong>Time:</strong> {project.time}
                    </div>
                    <div className="diy-cost">
                      <strong>Cost:</strong> {project.cost}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Tricks */}
      <section className="troubleshooting-section">
        <div className="container">
          <h2>Quick Problem Fixes</h2>
          <p>Fast solutions to common pond problems</p>
          <div className="troubleshooting-grid">
            {troubleshootingTricks.map((item, index) => (
              <div key={index} className="troubleshooting-card">
                <h3>{item.problem}</h3>
                <div className="troubleshooting-solutions">
                  <div className="quick-fix">
                    <h4>Quick Fix:</h4>
                    <p>{item.quickFix}</p>
                  </div>
                  <div className="long-term">
                    <h4>Long-term Solution:</h4>
                    <p>{item.longTerm}</p>
                  </div>
                  <div className="prevention">
                    <h4>Prevention:</h4>
                    <p>{item.prevention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Tips Work */}
      <section className="why-choose-section gradient-wipe-up">
        <div className="container">
          <h2>Why These Tips Work</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#6C757D"/>
                </svg>
              </div>
              <h3>Science-Based</h3>
              <p>All tips are based on proven scientific principles and years of experience</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#FFD700"/>
                </svg>
              </div>
              <h3>Cost-Effective</h3>
              <p>Most tips use common household items or simple techniques</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#6C757D"/>
                </svg>
              </div>
              <h3>Time-Saving</h3>
              <p>These tricks help you maintain your pond more efficiently</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#007BFF"/>
  </svg>
              </div>
              <h3>Expert Backed</h3>
              <p>All tips come from professional pond care specialists</p>
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
          <h2>Need More Expert Tips?</h2>
          <p>Our specialists can provide personalized tips for your specific pond situation</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PondTipsTricksPage;
