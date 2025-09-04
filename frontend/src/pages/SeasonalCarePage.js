import React from 'react';
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
    <div className="seasonal-care-page">
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
      <section className="seasons-section">
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
      <section className="why-choose-section">
        <div className="container">
          <h2>Why Seasonal Care Matters</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🌱</div>
              <h3>Healthy Growth</h3>
              <p>Proper seasonal care ensures optimal plant and fish health throughout the year</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3>Cost Savings</h3>
              <p>Preventive care reduces the need for expensive repairs and replacements</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⏰</div>
              <h3>Time Efficiency</h3>
              <p>Following seasonal schedules makes pond maintenance more manageable</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📞</div>
              <h3>Expert Support</h3>
              <p>Our specialists provide seasonal guidance tailored to your specific pond</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Need Seasonal Guidance?</h2>
          <p>Our specialists can provide personalized seasonal care advice for your pond</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeasonalCarePage;
