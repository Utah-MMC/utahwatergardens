import React from 'react';
import SEO from '../components/SEO';

import { Link } from 'react-router-dom';
import './SeasonalCarePage.css';

const SeasonalCarePage = () => {
  const seasons = [
    {
      name: 'Spring',
      months: 'March - May',
      image: '/images/IMG_2782.jpg',
      description: 'Awaken your pond from winter dormancy with proper spring care',
      temperature: '50-70°F',
      priority: 'High',
      tasks: [
        'Remove winter covers and netting',
        'Clean debris from pond bottom',
        'Test water quality parameters',
        'Start feeding fish gradually',
        'Add beneficial bacteria',
        'Check and repair equipment',
        'Divide overgrown plants',
        'Begin regular maintenance routine'
      ],
      tips: [
        'Wait until water reaches 50°F before feeding',
        'Use pond vacuum for thorough cleaning',
        'Add plants to provide natural filtration',
        'Monitor fish for signs of stress',
        'Gradually increase feeding amounts',
        'Check for winter damage'
      ],
      warnings: [
        'Avoid major changes during temperature fluctuations',
        'Don\'t overfeed during early spring',
        'Watch for late frost damage',
        'Be cautious with new fish additions'
      ]
    },
    {
      name: 'Summer',
      months: 'June - August',
      image: '/images/IMG_2775.jpg',
      description: 'Maintain optimal conditions during peak growing season',
      temperature: '70-85°F',
      priority: 'Medium',
      tasks: [
        'Monitor water temperature daily',
        'Increase aeration during hot weather',
        'Feed fish 2-3 times daily',
        'Trim overgrown plants',
        'Clean filters more frequently',
        'Add shade if needed',
        'Monitor for algae blooms',
        'Enjoy your pond!'
      ],
      tips: [
        'Feed fish early morning or evening',
        'Use floating plants for natural shade',
        'Increase water circulation',
        'Monitor dissolved oxygen levels',
        'Keep pond net for debris',
        'Plan fall maintenance'
      ],
      warnings: [
        'Watch for overheating in shallow ponds',
        'Avoid overfeeding in hot weather',
        'Monitor for oxygen depletion',
        'Be prepared for algae blooms'
      ]
    },
    {
      name: 'Fall',
      months: 'September - November',
      image: '/images/IMG_2779.jpg',
      description: 'Prepare your pond for winter dormancy',
      temperature: '50-70°F',
      priority: 'High',
      tasks: [
        'Install pond net to catch leaves',
        'Reduce feeding as temperature drops',
        'Remove tropical plants',
        'Clean filters thoroughly',
        'Add cold water bacteria',
        'Prepare equipment for winter',
        'Trim back hardy plants',
        'Plan spring improvements'
      ],
      tips: [
        'Stop feeding when water drops below 50°F',
        'Use pond net before leaves fall',
        'Store equipment properly',
        'Add winterizing bacteria',
        'Check for leaks and repairs',
        'Order supplies for next season'
      ],
      warnings: [
        'Don\'t wait too long to winterize',
        'Avoid major changes in fall',
        'Watch for early frost',
        'Prepare for temperature drops'
      ]
    },
    {
      name: 'Winter',
      months: 'December - February',
      image: '/images/IMG_2780.jpg',
      description: 'Protect your pond during cold weather months',
      temperature: '32-50°F',
      priority: 'Low',
      tasks: [
        'Keep small area ice-free',
        'Monitor fish health',
        'Check equipment periodically',
        'Remove snow from pond',
        'Plan spring projects',
        'Order supplies',
        'Maintain minimal maintenance',
        'Enjoy planning next season'
      ],
      tips: [
        'Use pond heater or de-icer',
        'Keep hole in ice for gas exchange',
        'Minimize disturbance',
        'Monitor water level',
        'Check for ice damage',
        'Plan improvements for spring'
      ],
      warnings: [
        'Never break ice with force',
        'Don\'t feed fish in winter',
        'Watch for complete freezing',
        'Avoid unnecessary disturbance'
      ]
    }
  ];

  const seasonalChallenges = [
    {
      challenge: 'Spring Algae Blooms',
      season: 'Spring',
      cause: 'Increased sunlight and nutrients',
      solution: 'Add beneficial bacteria, increase plants, use UV sterilizer',
      prevention: 'Maintain proper nutrient balance year-round'
    },
    {
      challenge: 'Summer Overheating',
      season: 'Summer',
      cause: 'High temperatures and direct sunlight',
      solution: 'Add shade, increase aeration, use pond chiller',
      prevention: 'Design pond with adequate depth and shade'
    },
    {
      challenge: 'Fall Leaf Buildup',
      season: 'Fall',
      cause: 'Falling leaves and debris',
      solution: 'Install pond net, regular skimming, pond vacuum',
      prevention: 'Use pond net before leaves fall'
    },
    {
      challenge: 'Winter Freezing',
      season: 'Winter',
      cause: 'Extreme cold temperatures',
      solution: 'Pond heater, de-icer, adequate depth',
      prevention: 'Proper winterization and equipment'
    }
  ];

  const seasonalEquipment = [
    {
      season: 'Spring',
      essential: ['Pond vacuum', 'Water test kit', 'Beneficial bacteria', 'Plant fertilizer'],
      optional: ['UV sterilizer', 'Pond net', 'Aquatic plant baskets', 'Water treatments'],
      maintenance: ['Clean all equipment', 'Check electrical connections', 'Test pumps and filters']
    },
    {
      season: 'Summer',
      essential: ['Aeration system', 'Pond net', 'Water test kit', 'Fish food'],
      optional: ['Pond chiller', 'Shade structures', 'Floating plants', 'Water treatments'],
      maintenance: ['Clean filters weekly', 'Check pump intake', 'Monitor water temperature']
    },
    {
      season: 'Fall',
      essential: ['Pond net', 'Pond vacuum', 'Cold water bacteria', 'Storage containers'],
      optional: ['Pond cover', 'De-icer', 'Winterizing treatments', 'Equipment covers'],
      maintenance: ['Thorough equipment cleaning', 'Store seasonal items', 'Prepare for winter']
    },
    {
      season: 'Winter',
      essential: ['Pond heater', 'De-icer', 'Water test kit', 'Emergency supplies'],
      optional: ['Pond cover', 'Insulation materials', 'Backup equipment', 'Monitoring system'],
      maintenance: ['Minimal maintenance', 'Check equipment periodically', 'Monitor water level']
    }
  ];

  const seasonalFeeding = [
    {
      season: 'Spring',
      frequency: 'Once daily',
      amount: 'Small amounts',
      food: 'High-quality spring food',
      temperature: 'Start at 50°F',
      notes: 'Gradually increase as temperature rises'
    },
    {
      season: 'Summer',
      frequency: '2-3 times daily',
      amount: 'Normal amounts',
      food: 'High-protein summer food',
      temperature: 'Above 70°F',
      notes: 'Feed early morning or evening'
    },
    {
      season: 'Fall',
      frequency: 'Once daily',
      amount: 'Reduced amounts',
      food: 'Wheat germ food',
      temperature: '50-70°F',
      notes: 'Stop feeding below 50°F'
    },
    {
      season: 'Winter',
      frequency: 'None',
      amount: 'No feeding',
      food: 'No food',
      temperature: 'Below 50°F',
      notes: 'Fish are dormant, no feeding needed'
    }
  ];

  const seasonalPlantCare = [
    {
      season: 'Spring',
      tasks: ['Plant new aquatic plants', 'Divide overgrown plants', 'Add fertilizer tablets', 'Prune dead growth'],
      tips: ['Plant in early spring', 'Use aquatic plant baskets', 'Provide adequate lighting', 'Monitor growth']
    },
    {
      season: 'Summer',
      tasks: ['Trim overgrown plants', 'Add floating plants', 'Monitor plant health', 'Control invasive species'],
      tips: ['Use floating plants for shade', 'Prune regularly', 'Watch for nutrient deficiencies', 'Enjoy blooms']
    },
    {
      season: 'Fall',
      tasks: ['Remove tropical plants', 'Trim back hardy plants', 'Divide overgrown plants', 'Prepare for winter'],
      tips: ['Store tropicals indoors', 'Cut back to water level', 'Add winter protection', 'Plan next season']
    },
    {
      season: 'Winter',
      tasks: ['Monitor plant health', 'Check for ice damage', 'Plan spring planting', 'Order new plants'],
      tips: ['Most plants are dormant', 'Protect from freezing', 'Plan improvements', 'Research new varieties']
    }
  ];

  const emergencyProcedures = [
    {
      situation: 'Pond Freezing Over',
      season: 'Winter',
      immediate: 'Use pond heater or de-icer to create opening',
      followUp: 'Monitor fish health, check equipment',
      prevention: 'Proper winterization, adequate depth'
    },
    {
      situation: 'Fish Jumping Out',
      season: 'Summer',
      immediate: 'Check water quality, reduce stress',
      followUp: 'Improve aeration, add hiding places',
      prevention: 'Maintain stable water conditions'
    },
    {
      situation: 'Pump Failure',
      season: 'Any',
      immediate: 'Check power, clean intake, use backup',
      followUp: 'Repair or replace pump, improve maintenance',
      prevention: 'Regular maintenance, backup equipment'
    },
    {
      situation: 'Algae Bloom',
      season: 'Spring/Summer',
      immediate: 'Add beneficial bacteria, increase aeration',
      followUp: 'Improve filtration, add plants',
      prevention: 'Maintain nutrient balance, proper stocking'
    }
  ];
  return (
    <>
      <SEO 
        title="Seasonal Pond Care | Year-Round Pond Maintenance | Utah Water Gardens"
        description="Seasonal pond care guide for year-round maintenance. Spring, summer, fall, and winter pond care tips."
        keywords="seasonal pond care, year-round pond maintenance, spring pond care, winter pond care, seasonal pond tips"
        canonical="https://utahwatergardens.com/resources/seasonal-care"
        ogTitle="Seasonal Pond Care"
        ogDescription="Year-round pond maintenance guide"
        ogImage="/images/seasonal-care.jpg"
        twitterCard="summary_large_image"
      />
      <div className="easonalcarepage-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Seasonal Pond Care</h1>
          <p>Complete guide to caring for your pond throughout the year. Learn the essential tasks, tips, and timing for each season to keep your pond healthy and beautiful.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Seasonal Advice</a>
            <Link to="/resources" className="secondary-button">View All Resources</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2782.jpg" alt="Seasonal pond care guide for year-round pond health" />
        </div>
      </section>

      {/* Seasonal Overview */}
      <section className="seasons-section first-section-gradient">
        <div className="container">
          <h2>Seasonal Care Guide</h2>
          <p>Essential tasks and tips for each season</p>
          <div className="seasons-grid">
            {seasons.map((season, index) => (
              <div key={index} className="season-card">
                <div className="season-header">
                  <div className="season-info">
                    <h3>{season.name}</h3>
                    <div className="season-details">
                      <span className="season-months">{season.months}</span>
                      <span className="season-temp">{season.temperature}</span>
                      <span className={`season-priority ${season.priority.toLowerCase()}`}>
                        {season.priority} Priority
                      </span>
                    </div>
                  </div>
                  <div className="season-image">
                    <img src={season.image} alt={`${season.name} pond care`} />
                  </div>
                </div>
                <div className="season-content">
                  <p className="season-description">{season.description}</p>
                  
                  <div className="season-tasks">
                    <h4>Essential Tasks:</h4>
                    <ul>
                      {season.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>{task}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="season-tips">
                    <h4>Pro Tips:</h4>
                    <ul>
                      {season.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="season-warnings">
                    <h4>Important Warnings:</h4>
                    <ul>
                      {season.warnings.map((warning, warningIndex) => (
                        <li key={warningIndex}>{warning}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Challenges */}
      <section className="challenges-section">
        <div className="container">
          <h2>Seasonal Challenges & Solutions</h2>
          <p>Common problems and how to solve them</p>
          <div className="challenges-grid">
            {seasonalChallenges.map((challenge, index) => (
              <div key={index} className="challenge-card">
                <div className="challenge-header">
                  <h3>{challenge.challenge}</h3>
                  <span className="challenge-season">{challenge.season}</span>
                </div>
                <div className="challenge-content">
                  <div className="challenge-cause">
                    <strong>Cause:</strong> {challenge.cause}
                  </div>
                  <div className="challenge-solution">
                    <strong>Solution:</strong> {challenge.solution}
                  </div>
                  <div className="challenge-prevention">
                    <strong>Prevention:</strong> {challenge.prevention}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Equipment */}
      <section className="equipment-section">
        <div className="container">
          <h2>Seasonal Equipment Needs</h2>
          <p>Essential equipment for each season</p>
          <div className="equipment-grid">
            {seasonalEquipment.map((season, index) => (
              <div key={index} className="equipment-card">
                <h3>{season.season} Equipment</h3>
                <div className="equipment-lists">
                  <div className="equipment-essential">
                    <h4>Essential:</h4>
                    <ul>
                      {season.essential.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="equipment-optional">
                    <h4>Optional:</h4>
                    <ul>
                      {season.optional.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="equipment-maintenance">
                    <h4>Maintenance:</h4>
                    <ul>
                      {season.maintenance.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Feeding Guide */}
      <section className="feeding-section">
        <div className="container">
          <h2>Seasonal Feeding Guide</h2>
          <p>Proper feeding schedule for each season</p>
          <div className="feeding-grid">
            {seasonalFeeding.map((season, index) => (
              <div key={index} className="feeding-card">
                <h3>{season.season} Feeding</h3>
                <div className="feeding-details">
                  <div className="feeding-frequency">
                    <strong>Frequency:</strong> {season.frequency}
                  </div>
                  <div className="feeding-amount">
                    <strong>Amount:</strong> {season.amount}
                  </div>
                  <div className="feeding-food">
                    <strong>Food Type:</strong> {season.food}
                  </div>
                  <div className="feeding-temperature">
                    <strong>Temperature:</strong> {season.temperature}
                  </div>
                  <div className="feeding-notes">
                    <strong>Notes:</strong> {season.notes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Plant Care */}
      <section className="plant-care-section">
        <div className="container">
          <h2>Seasonal Plant Care</h2>
          <p>Plant care tasks for each season</p>
          <div className="plant-care-grid">
            {seasonalPlantCare.map((season, index) => (
              <div key={index} className="plant-care-card">
                <h3>{Object.keys(seasonalPlantCare)[index]} Plant Care</h3>
                <div className="plant-care-content">
                  <div className="plant-tasks">
                    <h4>Tasks:</h4>
                    <ul>
                      {season.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>{task}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="plant-tips">
                    <h4>Tips:</h4>
                    <ul>
                      {season.tips.map((tip, tipIndex) => (
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

      {/* Emergency Procedures */}
      <section className="emergency-section">
        <div className="container">
          <h2>Emergency Procedures</h2>
          <p>What to do in emergency situations</p>
          <div className="emergency-grid">
            {emergencyProcedures.map((emergency, index) => (
              <div key={index} className="emergency-card">
                <div className="emergency-header">
                  <h3>{emergency.situation}</h3>
                  <span className="emergency-season">{emergency.season}</span>
                </div>
                <div className="emergency-content">
                  <div className="emergency-immediate">
                    <h4>Immediate Action:</h4>
                    <p>{emergency.immediate}</p>
                  </div>
                  <div className="emergency-followup">
                    <h4>Follow-up:</h4>
                    <p>{emergency.followUp}</p>
                  </div>
                  <div className="emergency-prevention">
                    <h4>Prevention:</h4>
                    <p>{emergency.prevention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Seasonal Care Matters */}
      <section className="why-choose-section gradient-wipe-up">
        <div className="container">
          <h2>Why Seasonal Care Matters</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 6 17.25C7.12 17.25 8.25 16.75 9 16L17 8Z" fill="#32CD32"/>
  </svg>
              </div>
              <h3>Healthy Growth</h3>
              <p>Proper seasonal care ensures optimal plant and fish health throughout the year</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#FFD700"/>
                </svg>
              </div>
              <h3>Cost Savings</h3>
              <p>Preventive care reduces the need for expensive repairs and replacements</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#6C757D"/>
                </svg>
              </div>
              <h3>Time Efficiency</h3>
              <p>Following seasonal schedules makes pond maintenance more manageable</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#007BFF"/>
  </svg>
              </div>
              <h3>Expert Support</h3>
              <p>Our specialists provide seasonal guidance tailored to your specific pond</p>
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
          <h2>Need Seasonal Guidance?</h2>
          <p>Our specialists can provide personalized seasonal care advice for your pond</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        
      {/* Service Images */}
      <section className="service-images-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-images-grid">
            <div className="service-image-card">
              <img src="/images/IMG_2770.jpg" alt="Professional pond services and maintenance" />
              <h3>Expert Service</h3>
              <p>Professional pond care and maintenance</p>
            </div>
            <div className="service-image-card">
              <img src="/images/IMG_2775.jpg" alt="Quality pond equipment and supplies" />
              <h3>Quality Equipment</h3>
              <p>Only the best pond equipment and supplies</p>
            </div>
            <div className="service-image-card">
              <img src="/images/IMG_2779.jpg" alt="Custom pond design and installation" />
              <h3>Custom Design</h3>
              <p>Custom pond design and installation services</p>
            </div>
            <div className="service-image-card">
              <img src="/images/IMG_2780.jpg" alt="Ongoing pond maintenance and support" />
              <h3>Ongoing Support</h3>
              <p>Continuous maintenance and support services</p>
            </div>
          </div>
        </div>
      </section></div>
      </section>
    </div>
  );
};


// Internal Links for SEO


const InternalLinks = () => (


  <div style={{ display: 'none' }}>


    <Link to="/contact">utah water gardens</Link>


    <Link to="/plants-fish">utah water gardens</Link>


    <Link to="/pondsupplies">utah water gardens</Link>


    <Link to="/aquatic-plants">utah water gardens</Link>


    <Link to="/fish-koi">utah water gardens</Link>


    <Link to="/">utah water gardens</Link>


  
      </div>
    </>
  );
};

export default SeasonalCarePage;
