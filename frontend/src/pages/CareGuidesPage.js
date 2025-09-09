import React from 'react';
import { Link } from 'react-router-dom';
import './CareGuidesPage.css';

const CareGuidesPage = () => {
  const renderIcon = (iconType) => {
    const iconProps = { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" };
    
    switch (iconType) {
      case 'water':
        return (
          <svg {...iconProps}>
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#1e40af"/>
          </svg>
        );
      case 'fish':
        return (
          <svg {...iconProps}>
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#1e40af"/>
          </svg>
        );
      case 'plants':
        return (
          <svg {...iconProps}>
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#1e40af"/>
          </svg>
        );
      case 'tools':
        return (
          <svg {...iconProps}>
            <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3L9 6.9L6.9 9L3 5.1C1 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 23C20.3 23 20.7 22.7 21 22.4L22.4 21C22.7 20.7 22.7 20.3 22.7 19Z" fill="#1e40af"/>
          </svg>
        );
      default:
        return null;
    }
  };
  const careGuides = [
    {
      name: 'Pond Setup & Installation',
      image: '/images/IMG_2775.jpg',
      description: 'Complete guide to planning, designing, and installing your new pond',
      topics: ['Site selection', 'Design planning', 'Excavation', 'Liner installation', 'Equipment setup', 'Initial cycling'],
      difficulty: 'Beginner to Intermediate',
      duration: '2-4 weeks',
      price: 'Free Guide'
    },
    {
      name: 'Water Quality Management',
      image: '/images/IMG_2779.jpg',
      description: 'Essential guide to maintaining optimal water quality for healthy fish and plants',
      topics: ['pH balance', 'Ammonia control', 'Nitrogen cycle', 'Water testing', 'Treatment options', 'Preventive care'],
      difficulty: 'All Levels',
      duration: 'Ongoing',
      price: 'Free Guide'
    },
    {
      name: 'Fish Care & Health',
      image: '/images/IMG_2780.jpg',
      description: 'Comprehensive guide to keeping your pond fish healthy and thriving',
      topics: ['Fish selection', 'Feeding schedules', 'Health monitoring', 'Disease prevention', 'Breeding basics', 'Seasonal care'],
      difficulty: 'All Levels',
      duration: 'Ongoing',
      price: 'Free Guide'
    },
    {
      name: 'Aquatic Plant Care',
      image: '/images/IMG_2776.jpg',
      description: 'Complete guide to growing and maintaining beautiful aquatic plants',
      topics: ['Plant selection', 'Planting techniques', 'Fertilization', 'Pruning', 'Seasonal care', 'Pest control'],
      difficulty: 'Beginner to Advanced',
      duration: 'Seasonal',
      price: 'Free Guide'
    },
    {
      name: 'Seasonal Pond Maintenance',
      image: '/images/IMG_2782.jpg',
      description: 'Year-round maintenance guide for optimal pond health through all seasons',
      topics: ['Spring startup', 'Summer care', 'Fall preparation', 'Winter protection', 'Seasonal tasks', 'Weather considerations'],
      difficulty: 'All Levels',
      duration: 'Year-round',
      price: 'Free Guide'
    },
    {
      name: 'Equipment Maintenance',
      image: '/images/IMG_2770.jpg',
      description: 'Professional guide to maintaining and troubleshooting pond equipment',
      topics: ['Pump maintenance', 'Filter cleaning', 'UV sterilizer care', 'Lighting maintenance', 'Troubleshooting', 'Preventive care'],
      difficulty: 'Intermediate to Advanced',
      duration: 'Monthly',
      price: 'Free Guide'
    }
  ];

  const quickTips = [
    {
      category: 'Water Quality',
      tip: 'Test your water weekly during the first month, then monthly thereafter',
      icon: 'water'
    },
    {
      category: 'Feeding',
      tip: 'Feed fish only what they can consume in 5 minutes, twice daily',
      icon: 'fish'
    },
    {
      category: 'Plants',
      tip: 'Remove dead or dying plant material promptly to prevent water quality issues',
      icon: 'plants'
    },
    {
      category: 'Equipment',
      tip: 'Clean filters monthly and check pump operation weekly',
      icon: 'tools'
    },
    {
      category: 'Seasonal',
      tip: 'Reduce feeding in fall and stop feeding when water temperature drops below 50°F',
      icon: '🍂'
    },
    {
      category: 'Safety',
      tip: 'Always use a GFCI outlet for electrical equipment near water',
      icon: '⚡'
    }
  ];

  const troubleshootingGuides = [
    {
      problem: 'Green Water',
      image: '/images/IMG_2779.jpg',
      description: 'Cloudy green water caused by algae blooms',
      causes: ['Excess nutrients', 'Too much sunlight', 'Inadequate filtration', 'Overfeeding'],
      solutions: ['UV sterilizer', 'Reduce feeding', 'Add shade', 'Improve filtration', 'Water treatments'],
      prevention: ['Proper filtration', 'Balanced feeding', 'Adequate plant coverage', 'Regular maintenance']
    },
    {
      problem: 'Fish Health Issues',
      image: '/images/IMG_2780.jpg',
      description: 'Common fish health problems and their solutions',
      causes: ['Poor water quality', 'Stress', 'Overcrowding', 'Disease introduction'],
      solutions: ['Water testing', 'Quarantine new fish', 'Improve water quality', 'Reduce stress', 'Medication if needed'],
      prevention: ['Regular water testing', 'Proper stocking levels', 'Quarantine procedures', 'Stress reduction']
    },
    {
      problem: 'Pump Problems',
      image: '/images/IMG_2770.jpg',
      description: 'Common pump issues and troubleshooting steps',
      causes: ['Clogged intake', 'Air lock', 'Electrical issues', 'Wear and tear'],
      solutions: ['Clean intake', 'Prime pump', 'Check electrical connections', 'Replace worn parts'],
      prevention: ['Regular cleaning', 'Proper installation', 'Protective measures', 'Scheduled maintenance']
    },
    {
      problem: 'Plant Problems',
      image: '/images/IMG_2776.jpg',
      description: 'Aquatic plant issues and care solutions',
      causes: ['Nutrient deficiency', 'Poor lighting', 'Water quality issues', 'Pest damage'],
      solutions: ['Fertilization', 'Adjust lighting', 'Improve water quality', 'Pest control'],
      prevention: ['Proper nutrition', 'Adequate lighting', 'Good water quality', 'Regular monitoring']
    }
  ];

  const seasonalGuides = [
    {
      season: 'Spring',
      image: '/images/IMG_2782.jpg',
      description: 'Spring pond startup and preparation guide',
      tasks: ['Remove winter covers', 'Clean filters and equipment', 'Test water quality', 'Start feeding gradually', 'Plant new vegetation', 'Check for damage'],
      timeline: 'March - May',
      priority: 'High'
    },
    {
      season: 'Summer',
      image: '/images/IMG_2775.jpg',
      description: 'Summer maintenance and care guide',
      tasks: ['Monitor water temperature', 'Increase feeding', 'Maintain filtration', 'Control algae', 'Enjoy your pond', 'Regular maintenance'],
      timeline: 'June - August',
      priority: 'Medium'
    },
    {
      season: 'Fall',
      image: '/images/IMG_2779.jpg',
      description: 'Fall preparation and winterization guide',
      tasks: ['Reduce feeding', 'Clean pond thoroughly', 'Prepare for winter', 'Install covers', 'Store equipment', 'Final maintenance'],
      timeline: 'September - November',
      priority: 'High'
    },
    {
      season: 'Winter',
      image: '/images/IMG_2780.jpg',
      description: 'Winter care and protection guide',
      tasks: ['Monitor ice formation', 'Maintain hole in ice', 'Check equipment', 'Protect from freezing', 'Minimal maintenance', 'Plan for spring'],
      timeline: 'December - February',
      priority: 'Low'
    }
  ];

  const advancedTopics = [
    {
      topic: 'Breeding Programs',
      image: '/images/IMG_2776.jpg',
      description: 'Advanced guide to breeding koi and goldfish',
      content: ['Breeding setup', 'Parent selection', 'Spawning process', 'Fry care', 'Genetics basics', 'Record keeping']
    },
    {
      topic: 'Water Chemistry',
      image: '/images/IMG_2782.jpg',
      description: 'In-depth guide to pond water chemistry and balance',
      content: ['Chemical parameters', 'Testing methods', 'Adjustment techniques', 'Buffer systems', 'Advanced treatments', 'Monitoring protocols']
    },
    {
      topic: 'Disease Management',
      image: '/images/IMG_2770.jpg',
      description: 'Professional guide to fish disease identification and treatment',
      content: ['Disease identification', 'Quarantine procedures', 'Treatment options', 'Prevention strategies', 'Veterinary care', 'Recovery protocols']
    },
    {
      topic: 'Advanced Filtration',
      image: '/images/IMG_2775.jpg',
      description: 'Expert guide to advanced filtration systems and techniques',
      content: ['System design', 'Media selection', 'Flow optimization', 'Maintenance schedules', 'Performance monitoring', 'Upgrade options']
    }
  ];

  return (
    <div className="care-guides-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Pond Care Guides</h1>
          <p>Comprehensive guides to help you create and maintain a beautiful, healthy pond. From beginner basics to advanced techniques, we have everything you need to succeed.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Expert Advice</a>
            <Link to="/resources" className="secondary-button">View All Resources</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2775.jpg" alt="Comprehensive pond care guides and resources" />
        </div>
      </section>

      {/* Wavy Divider - Attached to Hero with Blue Gradient */}
      <div className="hero-wave-attached">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path className="wave-layer-1" d="M0,0L50,20C100,40,200,80,300,80C400,80,500,40,600,20C700,0,800,0,900,20C1000,40,1100,80,1150,100L1200,120V0Z" fill="#ffffff" opacity="0.1"></path>
          <path className="wave-layer-2" d="M0,0L50,15C100,30,200,60,300,60C400,60,500,30,600,15C700,0,800,0,900,15C1000,30,1100,60,1150,75L1200,90V0Z" fill="#ffffff" opacity="0.2"></path>
          <path className="wave-layer-3" d="M0,0L50,10C100,20,200,40,300,40C400,40,500,20,600,10C700,0,800,0,900,10C1000,20,1100,40,1150,50L1200,60V0Z" fill="#ffffff" opacity="0.3"></path>
        </svg>
      </div>

      {/* Main Content Wrapper with Single Gradient */}
      <div className="main-content-gradient">
        {/* Care Guides */}
        <section className="guides-section">
        <div className="container">
          <h2>Complete Care Guides</h2>
          <p>Step-by-step guides covering all aspects of pond care and maintenance</p>
          <div className="guides-grid">
            {careGuides.map((guide, index) => (
              <div key={index} className="guide-card">
                <div className="guide-image">
                  <img src={guide.image} alt={guide.name} />
                </div>
                <div className="guide-info">
                  <h3>{guide.name}</h3>
                  <p>{guide.description}</p>
                  <div className="guide-topics">
                    <h4>Topics Covered:</h4>
                    <ul>
                      {guide.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="guide-details">
                    <div className="guide-difficulty">
                      <strong>Difficulty:</strong> {guide.difficulty}
                    </div>
                    <div className="guide-duration">
                      <strong>Duration:</strong> {guide.duration}
                    </div>
                    <div className="guide-price">{guide.price}</div>
                  </div>
                  <a href="tel:(801) 590-8516" className="guide-cta">Get Your Free Guide</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="tips-section">
        <div className="container">
          <h2>Quick Care Tips</h2>
          <p>Essential tips for successful pond care</p>
          <div className="tips-grid">
            {quickTips.map((tip, index) => (
              <div key={index} className="tip-card">
                <div className="tip-icon">{renderIcon(tip.icon)}</div>
                <div className="tip-content">
                  <h3>{tip.category}</h3>
                  <p>{tip.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Guides */}
      <section className="troubleshooting-section">
        <div className="container">
          <h2>Problem Solving Guides</h2>
          <p>Solutions to common pond problems and issues</p>
          <div className="troubleshooting-grid">
            {troubleshootingGuides.map((guide, index) => (
              <div key={index} className="troubleshooting-card">
                <div className="troubleshooting-image">
                  <img src={guide.image} alt={guide.problem} />
                </div>
                <div className="troubleshooting-info">
                  <h3>{guide.problem}</h3>
                  <p>{guide.description}</p>
                  <div className="troubleshooting-causes">
                    <h4>Common Causes:</h4>
                    <ul>
                      {guide.causes.map((cause, causeIndex) => (
                        <li key={causeIndex}>{cause}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="troubleshooting-solutions">
                    <h4>Solutions:</h4>
                    <ul>
                      {guide.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="troubleshooting-prevention">
                    <h4>Prevention:</h4>
                    <ul>
                      {guide.prevention.map((prevention, preventionIndex) => (
                        <li key={preventionIndex}>{prevention}</li>
                      ))}
                    </ul>
                  </div>
                  <a href="tel:(801) 590-8516" className="troubleshooting-cta">Get Expert Help</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guides */}
      <section className="seasonal-section">
        <div className="container">
          <h2>Seasonal Care Guides</h2>
          <p>Year-round care schedules and seasonal maintenance tasks</p>
          <div className="seasonal-grid">
            {seasonalGuides.map((season, index) => (
              <div key={index} className="seasonal-card">
                <div className="seasonal-image">
                  <img src={season.image} alt={`${season.season} care`} />
                </div>
                <div className="seasonal-info">
                  <h3>{season.season} Care</h3>
                  <p>{season.description}</p>
                  <div className="seasonal-timeline">
                    <strong>Timeline:</strong> {season.timeline}
                  </div>
                  <div className="seasonal-priority">
                    <strong>Priority:</strong> {season.priority}
                  </div>
                  <div className="seasonal-tasks">
                    <h4>Key Tasks:</h4>
                    <ul>
                      {season.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>{task}</li>
                      ))}
                    </ul>
                  </div>
                  <a href="tel:(801) 590-8516" className="seasonal-cta">Get {season.season} Guide</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Topics */}
      <section className="advanced-section">
        <div className="container">
          <h2>Advanced Topics</h2>
          <p>Expert-level guides for serious pond enthusiasts</p>
          <div className="advanced-grid">
            {advancedTopics.map((topic, index) => (
              <div key={index} className="advanced-card">
                <div className="advanced-image">
                  <img src={topic.image} alt={topic.topic} />
                </div>
                <div className="advanced-info">
                  <h3>{topic.topic}</h3>
                  <p>{topic.description}</p>
                  <div className="advanced-content">
                    <h4>Content Includes:</h4>
                    <ul>
                      {topic.content.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <a href="tel:(801) 590-8516" className="advanced-cta">Get Advanced Guide</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Guides */}
      <section className="why-choose-section gradient-wipe-up">
        <div className="container">
          <h2>Why Choose Our Care Guides?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">📚</div>
              <h3>Comprehensive</h3>
              <p>Our guides cover every aspect of pond care from basic setup to advanced techniques</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">👨‍🔬</div>
              <h3>Expert Written</h3>
              <p>All guides are written by experienced pond professionals with years of hands-on experience</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🆓</div>
              <h3>Free Resources</h3>
              <p>All our care guides are completely free to help you succeed with your pond</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#007BFF"/>
  </svg>
              </div>
              <h3>Expert Support</h3>
              <p>Get personalized help and advice from our pond care specialists</p>
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
          <h2>Need Personalized Pond Care Advice?</h2>
          <p>Our experts can provide customized guidance for your specific pond and situation</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default CareGuidesPage;
