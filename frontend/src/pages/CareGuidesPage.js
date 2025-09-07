import React from 'react';
import { Link } from 'react-router-dom';
import './CareGuidesPage.css';

const CareGuidesPage = () => {
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
      icon: '💧'
    },
    {
      category: 'Feeding',
      tip: 'Feed fish only what they can consume in 5 minutes, twice daily',
      icon: '🐟'
    },
    {
      category: 'Plants',
      tip: 'Remove dead or dying plant material promptly to prevent water quality issues',
      icon: '🌱'
    },
    {
      category: 'Equipment',
      tip: 'Clean filters monthly and check pump operation weekly',
      icon: '🔧'
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

      {/* Care Guides */}
      <section className="guides-section first-section-gradient">
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
                <div className="tip-icon">{tip.icon}</div>
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
              <div className="benefit-icon">📞</div>
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
  );
};

export default CareGuidesPage;
