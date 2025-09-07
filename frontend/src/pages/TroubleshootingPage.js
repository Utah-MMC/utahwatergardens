import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TroubleshootingPage.css';

const TroubleshootingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const problemCategories = [
    {
      name: 'Water Quality Issues',
      icon: '💧',
      problems: [
        {
          problem: 'Green Water (Algae Bloom)',
          symptoms: 'Water appears green, reduced visibility, fish may be stressed',
          causes: ['Excess nutrients', 'Too much sunlight', 'Insufficient filtration', 'Overfeeding'],
          solutions: [
            'Add UV sterilizer to kill algae',
            'Increase beneficial bacteria',
            'Add more aquatic plants',
            'Reduce feeding amounts',
            'Improve filtration system',
            'Add pond dye to reduce sunlight'
          ],
          prevention: 'Maintain proper nutrient balance, adequate filtration, and plant coverage',
          urgency: 'Medium'
        },
        {
          problem: 'Cloudy Water',
          symptoms: 'Water appears milky or hazy, reduced clarity',
          causes: ['Bacterial bloom', 'Suspended particles', 'New pond syndrome', 'Overfeeding'],
          solutions: [
            'Add water clarifier',
            'Improve filtration',
            'Add beneficial bacteria',
            'Reduce feeding',
            'Clean pond bottom',
            'Check filter media'
          ],
          prevention: 'Proper filtration, regular maintenance, and balanced feeding',
          urgency: 'Low'
        },
        {
          problem: 'High Ammonia Levels',
          symptoms: 'Fish gasping at surface, red gills, lethargic behavior',
          causes: ['Overfeeding', 'Overstocking', 'Insufficient filtration', 'New pond'],
          solutions: [
            'Immediate water change (25-50%)',
            'Stop feeding fish',
            'Add ammonia neutralizer',
            'Improve filtration',
            'Reduce fish load',
            'Add beneficial bacteria'
          ],
          prevention: 'Proper stocking levels, adequate filtration, and controlled feeding',
          urgency: 'High'
        },
        {
          problem: 'Low pH (Acidic Water)',
          symptoms: 'Fish stress, poor plant growth, equipment corrosion',
          causes: ['Rainwater', 'Decomposing organic matter', 'Soft water source'],
          solutions: [
            'Add pH buffer (crushed coral)',
            'Partial water change',
            'Add limestone rocks',
            'Check water source',
            'Remove decaying matter'
          ],
          prevention: 'Regular pH testing and buffering materials',
          urgency: 'Medium'
        }
      ]
    },
    {
      name: 'Fish Health Issues',
      icon: '🐟',
      problems: [
        {
          problem: 'Fish Jumping Out of Pond',
          symptoms: 'Fish found outside pond, splashing at surface',
          causes: ['Poor water quality', 'Lack of hiding places', 'Predator stress', 'Overcrowding'],
          solutions: [
            'Test water quality immediately',
            'Add hiding places (plants, rocks)',
            'Reduce fish load',
            'Improve aeration',
            'Check for predators',
            'Add pond netting'
          ],
          prevention: 'Maintain water quality, provide adequate space and hiding places',
          urgency: 'High'
        },
        {
          problem: 'Fish Not Eating',
          symptoms: 'Fish ignore food, reduced activity, weight loss',
          causes: ['Water temperature too low', 'Poor water quality', 'Disease', 'Stress'],
          solutions: [
            'Check water temperature',
            'Test water quality',
            'Quarantine sick fish',
            'Improve water conditions',
            'Try different food types',
            'Consult fish health expert'
          ],
          prevention: 'Maintain optimal water conditions and proper feeding schedule',
          urgency: 'Medium'
        },
        {
          problem: 'White Spots on Fish (Ich)',
          symptoms: 'Small white spots on fish body and fins',
          causes: ['Parasitic infection', 'Stress', 'Poor water quality'],
          solutions: [
            'Increase water temperature gradually',
            'Add salt treatment',
            'Improve water quality',
            'Reduce stress factors',
            'Quarantine affected fish',
            'Use ich treatment medication'
          ],
          prevention: 'Maintain water quality, reduce stress, quarantine new fish',
          urgency: 'High'
        },
        {
          problem: 'Fish Gasping at Surface',
          symptoms: 'Fish at water surface, rapid gill movement',
          causes: ['Low oxygen levels', 'High ammonia', 'High temperature', 'Disease'],
          solutions: [
            'Increase aeration immediately',
            'Test water quality',
            'Add oxygenating plants',
            'Reduce water temperature',
            'Partial water change',
            'Check for disease'
          ],
          prevention: 'Adequate aeration, proper stocking, and water quality maintenance',
          urgency: 'High'
        }
      ]
    },
    {
      name: 'Equipment Problems',
      icon: '🔧',
      problems: [
        {
          problem: 'Pump Not Working',
          symptoms: 'No water flow, pump silent or making noise',
          causes: ['Power failure', 'Clogged intake', 'Burned out motor', 'Electrical issues'],
          solutions: [
            'Check power supply and connections',
            'Clean pump intake screen',
            'Check for debris blockage',
            'Test pump in clean water',
            'Replace if motor burned out',
            'Call electrician for wiring issues'
          ],
          prevention: 'Regular cleaning, proper installation, and surge protection',
          urgency: 'High'
        },
        {
          problem: 'Filter Not Working Properly',
          symptoms: 'Poor water quality, reduced flow, dirty water',
          causes: ['Clogged filter media', 'Insufficient flow', 'Wrong filter size', 'Poor maintenance'],
          solutions: [
            'Clean or replace filter media',
            'Check pump flow rate',
            'Increase filter size if needed',
            'Improve maintenance schedule',
            'Add pre-filter',
            'Check for leaks'
          ],
          prevention: 'Regular maintenance, proper sizing, and quality filter media',
          urgency: 'Medium'
        },
        {
          problem: 'UV Sterilizer Not Working',
          symptoms: 'Green water persists, no UV light visible',
          causes: ['Burned out bulb', 'Dirty quartz sleeve', 'Insufficient flow', 'Electrical issues'],
          solutions: [
            'Replace UV bulb (annually)',
            'Clean quartz sleeve',
            'Check flow rate',
            'Verify electrical connections',
            'Test with new bulb',
            'Check timer settings'
          ],
          prevention: 'Annual bulb replacement and regular sleeve cleaning',
          urgency: 'Medium'
        },
        {
          problem: 'Waterfall Not Flowing',
          symptoms: 'No water flow over waterfall, dry rocks',
          causes: ['Pump issues', 'Blocked tubing', 'Low water level', 'Clogged outlet'],
          solutions: [
            'Check pump operation',
            'Clear tubing of debris',
            'Adjust water level',
            'Clean waterfall outlet',
            'Check for leaks',
            'Adjust pump flow rate'
          ],
          prevention: 'Regular cleaning and proper pump maintenance',
          urgency: 'Low'
        }
      ]
    },
    {
      name: 'Plant Problems',
      icon: '🌱',
      problems: [
        {
          problem: 'Plants Not Growing',
          symptoms: 'Stunted growth, yellow leaves, poor root development',
          causes: ['Insufficient nutrients', 'Poor lighting', 'Wrong plant selection', 'Water quality issues'],
          solutions: [
            'Add aquatic plant fertilizer',
            'Improve lighting conditions',
            'Choose appropriate plants',
            'Test and improve water quality',
            'Repot in proper substrate',
            'Check for pests'
          ],
          prevention: 'Proper plant selection, adequate nutrients, and good water quality',
          urgency: 'Low'
        },
        {
          problem: 'Plants Dying',
          symptoms: 'Wilting, brown leaves, root rot, plant death',
          causes: ['Disease', 'Poor water quality', 'Insufficient nutrients', 'Wrong planting depth'],
          solutions: [
            'Remove dead plant material',
            'Improve water quality',
            'Add proper nutrients',
            'Adjust planting depth',
            'Treat for disease',
            'Replace with healthy plants'
          ],
          prevention: 'Proper planting, good water quality, and disease prevention',
          urgency: 'Medium'
        },
        {
          problem: 'Algae on Plants',
          symptoms: 'Green coating on plant leaves, reduced plant health',
          causes: ['Excess nutrients', 'Poor water circulation', 'Insufficient plant competition'],
          solutions: [
            'Improve water circulation',
            'Add more plants',
            'Reduce nutrient levels',
            'Manual algae removal',
            'Add algae-eating fish',
            'Use algaecide carefully'
          ],
          prevention: 'Balanced plant-to-water ratio and good circulation',
          urgency: 'Low'
        }
      ]
    },
    {
      name: 'Seasonal Issues',
      icon: '🍂',
      problems: [
        {
          problem: 'Pond Freezing Over',
          symptoms: 'Complete ice coverage, no open water, fish trapped',
          causes: ['Extreme cold', 'Shallow pond', 'No winter protection'],
          solutions: [
            'Use pond heater or de-icer',
            'Keep small area ice-free',
            'Add aeration for gas exchange',
            'Monitor fish health',
            'Check equipment regularly',
            'Have backup heating ready'
          ],
          prevention: 'Proper pond depth, winter equipment, and monitoring',
          urgency: 'High'
        },
        {
          problem: 'Summer Overheating',
          symptoms: 'High water temperature, fish stress, reduced oxygen',
          causes: ['Shallow pond', 'Direct sunlight', 'Insufficient aeration'],
          solutions: [
            'Add shade structures',
            'Increase aeration',
            'Add floating plants',
            'Use pond chiller if needed',
            'Partial water changes',
            'Monitor temperature daily'
          ],
          prevention: 'Adequate depth, natural shade, and proper aeration',
          urgency: 'Medium'
        },
        {
          problem: 'Fall Leaf Buildup',
          symptoms: 'Excessive leaves in pond, poor water quality',
          causes: ['Falling leaves', 'No pond net', 'Poor maintenance'],
          solutions: [
            'Install pond net immediately',
            'Remove leaves with net',
            'Use pond vacuum',
            'Improve filtration',
            'Add beneficial bacteria',
            'Regular maintenance'
          ],
          prevention: 'Pond net installation before leaf fall',
          urgency: 'Medium'
        }
      ]
    }
  ];

  const quickFixes = [
    {
      issue: 'Emergency Water Change',
      when: 'High ammonia, fish gasping, poor water quality',
      steps: [
        'Turn off pump',
        'Remove 25-50% of water',
        'Add dechlorinated water slowly',
        'Restart pump',
        'Monitor fish behavior'
      ],
      time: '30 minutes',
      difficulty: 'Easy'
    },
    {
      issue: 'Pump Emergency Check',
      when: 'No water flow, pump not working',
      steps: [
        'Check power supply',
        'Clean intake screen',
        'Remove debris blockage',
        'Test in clean water',
        'Check for leaks'
      ],
      time: '15 minutes',
      difficulty: 'Easy'
    },
    {
      issue: 'Oxygen Emergency',
      when: 'Fish gasping, low oxygen levels',
      steps: [
        'Increase aeration immediately',
        'Add oxygenating plants',
        'Reduce fish load if needed',
        'Check water temperature',
        'Monitor fish behavior'
      ],
      time: '10 minutes',
      difficulty: 'Easy'
    },
    {
      issue: 'Algae Quick Fix',
      when: 'Green water, algae bloom',
      steps: [
        'Add UV sterilizer if available',
        'Increase beneficial bacteria',
        'Reduce feeding',
        'Add pond dye',
        'Improve filtration'
      ],
      time: '1 hour',
      difficulty: 'Medium'
    }
  ];

  const diagnosticQuestions = [
    {
      question: 'What color is your pond water?',
      options: ['Clear', 'Green', 'Cloudy/Milky', 'Brown', 'Other'],
      followUp: 'Water color indicates different issues - green suggests algae, cloudy indicates bacterial bloom'
    },
    {
      question: 'How are your fish behaving?',
      options: ['Normal swimming', 'Gasping at surface', 'Not eating', 'Jumping out', 'Lethargic'],
      followUp: 'Fish behavior is a key indicator of water quality and health issues'
    },
    {
      question: 'Is your pump working?',
      options: ['Yes, normal flow', 'Yes, but reduced flow', 'No, not working', 'Making noise', 'Intermittent'],
      followUp: 'Pump issues affect water circulation and filtration effectiveness'
    },
    {
      question: 'When did the problem start?',
      options: ['Today', 'This week', 'This month', 'Gradually over time', 'After recent changes'],
      followUp: 'Timing helps identify the cause and urgency of the problem'
    }
  ];

  const preventionTips = [
    {
      category: 'Water Quality',
      tips: [
        'Test water weekly during first month, then monthly',
        'Maintain proper fish-to-water ratio',
        'Feed fish only what they can eat in 5 minutes',
        'Use quality filtration system',
        'Add beneficial bacteria regularly',
        'Keep debris out of pond'
      ]
    },
    {
      category: 'Equipment',
      tips: [
        'Clean pump intake screens weekly',
        'Replace UV bulbs annually',
        'Check electrical connections monthly',
        'Have backup equipment ready',
        'Use GFCI outlets for safety',
        'Store equipment properly in winter'
      ]
    },
    {
      category: 'Fish Health',
      tips: [
        'Quarantine new fish for 2-3 weeks',
        'Provide adequate hiding places',
        'Monitor fish behavior daily',
        'Maintain stable water conditions',
        'Avoid overcrowding',
        'Use quality fish food'
      ]
    },
    {
      category: 'Plants',
      tips: [
        'Choose appropriate plants for your climate',
        'Plant in proper depth and substrate',
        'Fertilize plants regularly',
        'Prune dead growth promptly',
        'Divide overgrown plants',
        'Monitor for pests and disease'
      ]
    }
  ];

  const filteredProblems = selectedCategory === 'all' 
    ? problemCategories 
    : problemCategories.filter(category => category.name === selectedCategory);

  return (
    <div className="troubleshooting-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Pond Troubleshooting</h1>
          <p>Quick solutions to common pond problems. Find answers to water quality issues, fish health problems, equipment failures, and more.</p>
          <div className="hero-buttons">
            <a href="tel:(801) 590-8516" className="cta-button">Call for Emergency Help</a>
            <Link to="/resources" className="secondary-button">View All Resources</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2780.jpg" alt="Pond troubleshooting guide for common problems" />
        </div>
      </section>

      {/* Quick Emergency Fixes */}
      <section className="emergency-section first-section-gradient">
        <div className="container">
          <h2>Emergency Quick Fixes</h2>
          <p>Immediate solutions for urgent pond problems</p>
          <div className="emergency-grid">
            {quickFixes.map((fix, index) => (
              <div key={index} className="emergency-card">
                <div className="emergency-header">
                  <h3>{fix.issue}</h3>
                  <div className="emergency-meta">
                    <span className="emergency-time">{fix.time}</span>
                    <span className={`emergency-difficulty ${fix.difficulty.toLowerCase()}`}>
                      {fix.difficulty}
                    </span>
                  </div>
                </div>
                <div className="emergency-when">
                  <strong>When to use:</strong> {fix.when}
                </div>
                <div className="emergency-steps">
                  <h4>Steps:</h4>
                  <ol>
                    {fix.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Categories Filter */}
      <section className="filter-section">
        <div className="container">
          <h2>Problem Categories</h2>
          <div className="category-filters">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Problems
            </button>
            {problemCategories.map((category, index) => (
              <button 
                key={index}
                className={`filter-btn ${selectedCategory === category.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Problems by Category */}
      <section className="problems-section">
        <div className="container">
          {filteredProblems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="category-section">
              <h2>{category.icon} {category.name}</h2>
              <div className="problems-grid">
                {category.problems.map((problem, problemIndex) => (
                  <div key={problemIndex} className="problem-card">
                    <div className="problem-header">
                      <h3>{problem.problem}</h3>
                      <span className={`urgency-badge ${problem.urgency.toLowerCase()}`}>
                        {problem.urgency} Priority
                      </span>
                    </div>
                    
                    <div className="problem-symptoms">
                      <h4>Symptoms:</h4>
                      <p>{problem.symptoms}</p>
                    </div>
                    
                    <div className="problem-causes">
                      <h4>Common Causes:</h4>
                      <ul>
                        {problem.causes.map((cause, causeIndex) => (
                          <li key={causeIndex}>{cause}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="problem-solutions">
                      <h4>Solutions:</h4>
                      <ol>
                        {problem.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex}>{solution}</li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="problem-prevention">
                      <h4>Prevention:</h4>
                      <p>{problem.prevention}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diagnostic Questions */}
      <section className="diagnostic-section">
        <div className="container">
          <h2>Quick Diagnostic</h2>
          <p>Answer these questions to help identify your pond problem</p>
          <div className="diagnostic-grid">
            {diagnosticQuestions.map((question, index) => (
              <div key={index} className="diagnostic-card">
                <h3>{question.question}</h3>
                <div className="diagnostic-options">
                  {question.options.map((option, optionIndex) => (
                    <button key={optionIndex} className="diagnostic-option">
                      {option}
                    </button>
                  ))}
                </div>
                <div className="diagnostic-followup">
                  <p>{question.followUp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="prevention-section">
        <div className="container">
          <h2>Prevention Tips</h2>
          <p>Prevent problems before they start with these proactive measures</p>
          <div className="prevention-grid">
            {preventionTips.map((category, index) => (
              <div key={index} className="prevention-card">
                <h3>{category.category}</h3>
                <ul>
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Call for Help */}
      <section className="help-section gradient-wipe-up">
        <div className="container">
          <h2>When to Call for Professional Help</h2>
          <div className="help-grid">
            <div className="help-card urgent">
              <h3>🚨 Call Immediately</h3>
              <ul>
                <li>Fish dying rapidly</li>
                <li>Complete pump failure in summer</li>
                <li>Pond completely frozen with fish</li>
                <li>Electrical issues with equipment</li>
                <li>Major water quality crisis</li>
              </ul>
            </div>
            <div className="help-card moderate">
              <h3>📞 Call Within 24 Hours</h3>
              <ul>
                <li>Persistent water quality issues</li>
                <li>Multiple fish showing signs of disease</li>
                <li>Equipment not working properly</li>
                <li>Plants dying despite care</li>
                <li>Recurring problems</li>
              </ul>
            </div>
            <div className="help-card routine">
              <h3>📅 Schedule Consultation</h3>
              <ul>
                <li>Pond design improvements</li>
                <li>Equipment upgrades</li>
                <li>Seasonal maintenance planning</li>
                <li>New pond installation</li>
                <li>General maintenance questions</li>
              </ul>
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
          <h2>Need Immediate Help?</h2>
          <p>Our experts are available to help solve your pond problems quickly and effectively</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TroubleshootingPage;
