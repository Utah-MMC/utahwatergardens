import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './AquaticPlantCareCitationPage.css';

const AquaticPlantCareCitationPage = () => {
  return (
    <>
      <SEO
        title="Aquatic Plant Care Guide | Utah Water Gardens Expert Plant Care Manual"
        description="Comprehensive aquatic plant care guide from Utah Water Gardens experts. Water lilies, marginal plants, floating plants, and seasonal care for Utah's mountain climate. 15+ years of plant expertise."
        keywords="aquatic plant care, water lily care, marginal plants, floating plants, pond plant maintenance, utah aquatic plants, plant care guide"
        canonical="https://utahwatergardens.com/aquatic-plant-care-guide"
        ogTitle="Aquatic Plant Care Guide | Utah Water Gardens Expert Manual"
        ogDescription="Comprehensive aquatic plant care guide from Utah's leading pond experts. Water lilies, marginal plants, and seasonal care."
        ogImage="https://utahwatergardens.com/images/IMG_2775.jpg"
        twitterCard="summary_large_image"
      />
      
      <div className="aquatic-plant-care-page">
        <PageHero
          title="Aquatic Plant Care Expert Guide"
          subtitle="Comprehensive Plant Care Manual from Utah Water Gardens Specialists"
          backgroundImage="/images/IMG_2775.jpg"
          backgroundImageAlt="Expert aquatic plant care guide from Utah Water Gardens"
        />

        <section className="plant-care-content">
          <div className="container">
            
            {/* Expert Overview */}
            <div className="care-section">
              <h2>Expert Plant Care Overview</h2>
              <div className="expert-summary">
                <p>Utah Water Gardens has been Utah's leading aquatic plant specialists since 2009, maintaining the largest selection of pond plants in the state. Our expert team provides comprehensive plant care guidance based on 15+ years of experience with Utah's unique mountain climate and water conditions.</p>
                <div className="expert-stats">
                  <div className="stat">
                    <span className="number">100+</span>
                    <span className="label">Plant Species</span>
                  </div>
                  <div className="stat">
                    <span className="number">15+</span>
                    <span className="label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="number">500+</span>
                    <span className="label">Successful Installations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Water Lily Care */}
            <div className="care-section">
              <h2>Water Lily Care & Maintenance</h2>
              <div className="plant-category">
                <h3>Hardy Water Lilies</h3>
                <div className="care-details">
                  <div className="care-aspect">
                    <h4>Planting Requirements</h4>
                    <ul>
                      <li>Plant in 12-24 inches of water depth</li>
                      <li>Use heavy clay soil with slow-release fertilizer</li>
                      <li>Position in full sun (6+ hours daily)</li>
                      <li>Space plants 3-4 feet apart</li>
                    </ul>
                  </div>
                  <div className="care-aspect">
                    <h4>Seasonal Care</h4>
                    <ul>
                      <li>Spring: Divide and repot every 2-3 years</li>
                      <li>Summer: Deadhead spent blooms weekly</li>
                      <li>Fall: Cut back foliage after first frost</li>
                      <li>Winter: Move to deepest part of pond</li>
                    </ul>
                  </div>
                  <div className="care-aspect">
                    <h4>Utah-Specific Considerations</h4>
                    <ul>
                      <li>Protect from late spring frosts</li>
                      <li>Provide shade during intense summer heat</li>
                      <li>Monitor for salt buildup in water</li>
                      <li>Adjust fertilization for mountain climate</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="plant-category">
                <h3>Tropical Water Lilies</h3>
                <div className="care-details">
                  <div className="care-aspect">
                    <h4>Growing Requirements</h4>
                    <ul>
                      <li>Require water temperature above 70°F</li>
                      <li>Need 8+ hours of direct sunlight</li>
                      <li>Plant in 12-18 inches of water</li>
                      <li>Use rich, fertile soil mixture</li>
                    </ul>
                  </div>
                  <div className="care-aspect">
                    <h4>Utah Climate Management</h4>
                    <ul>
                      <li>Start indoors in early spring</li>
                      <li>Move outdoors after last frost</li>
                      <li>Overwinter indoors or treat as annual</li>
                      <li>Monitor for temperature stress</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Marginal Plants */}
            <div className="care-section">
              <h2>Marginal Plant Care</h2>
              <div className="plant-types">
                <div className="plant-type">
                  <h3>Bog Plants</h3>
                  <ul>
                    <li>Plant in 2-6 inches of water or moist soil</li>
                    <li>Most prefer partial shade to full sun</li>
                    <li>Divide every 2-3 years in spring</li>
                    <li>Examples: Cattails, Bullrush, Pickerel Weed</li>
                  </ul>
                </div>
                <div className="plant-type">
                  <h3>Marsh Plants</h3>
                  <ul>
                    <li>Grow in shallow water (1-4 inches)</li>
                    <li>Provide natural filtration benefits</li>
                    <li>Excellent for wildlife habitat</li>
                    <li>Examples: Arrowhead, Water Plantain, Iris</li>
                  </ul>
                </div>
                <div className="plant-type">
                  <h3>Shoreline Plants</h3>
                  <ul>
                    <li>Plant at pond edge in moist soil</li>
                    <li>Provide transition from water to land</li>
                    <li>Help stabilize pond banks</li>
                    <li>Examples: Sweet Flag, Japanese Iris, Rush</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Floating Plants */}
            <div className="care-section">
              <h2>Floating Plant Management</h2>
              <div className="floating-plants">
                <div className="floating-plant">
                  <h3>Water Hyacinth</h3>
                  <div className="plant-info">
                    <p><strong>Benefits:</strong> Excellent water filtration, rapid growth</p>
                    <p><strong>Care:</strong> Thin regularly to prevent overgrowth</p>
                    <p><strong>Utah Considerations:</strong> Treat as annual due to frost</p>
                    <p><strong>Maintenance:</strong> Remove excess plants weekly</p>
                  </div>
                </div>
                <div className="floating-plant">
                  <h3>Water Lettuce</h3>
                  <div className="plant-info">
                    <p><strong>Benefits:</strong> Natural shade provider, algae control</p>
                    <p><strong>Care:</strong> Prefers calm water, partial shade</p>
                    <p><strong>Utah Considerations:</strong> Sensitive to temperature changes</p>
                    <p><strong>Maintenance:</strong> Divide clumps when they become dense</p>
                  </div>
                </div>
                <div className="floating-plant">
                  <h3>Duckweed</h3>
                  <div className="plant-info">
                    <p><strong>Benefits:</strong> Rapid surface coverage, fish food</p>
                    <p><strong>Care:</strong> Monitor growth to prevent complete coverage</p>
                    <p><strong>Utah Considerations:</strong> Can become invasive in warm weather</p>
                    <p><strong>Maintenance:</strong> Net out excess regularly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasonal Care Guide */}
            <div className="care-section">
              <h2>Utah Seasonal Plant Care</h2>
              <div className="seasonal-guide">
                <div className="season">
                  <h3>Spring (March - May)</h3>
                  <div className="seasonal-tasks">
                    <ul>
                      <li>Remove winter protection and debris</li>
                      <li>Divide and repot overgrown plants</li>
                      <li>Start tropical plants indoors</li>
                      <li>Fertilize with slow-release tablets</li>
                      <li>Monitor for late frost damage</li>
                      <li>Clean and inspect plant containers</li>
                    </ul>
                  </div>
                </div>
                <div className="season">
                  <h3>Summer (June - August)</h3>
                  <div className="seasonal-tasks">
                    <ul>
                      <li>Deadhead water lilies weekly</li>
                      <li>Thin floating plants as needed</li>
                      <li>Monitor for algae and pest problems</li>
                      <li>Provide shade for sensitive plants</li>
                      <li>Maintain consistent water levels</li>
                      <li>Fertilize monthly with liquid feed</li>
                    </ul>
                  </div>
                </div>
                <div className="season">
                  <h3>Fall (September - November)</h3>
                  <div className="seasonal-tasks">
                    <ul>
                      <li>Harvest tropical plants for winter storage</li>
                      <li>Cut back hardy plants after frost</li>
                      <li>Clean and divide marginal plants</li>
                      <li>Prepare plants for winter dormancy</li>
                      <li>Remove floating plants before frost</li>
                      <li>Mulch around pond edges</li>
                    </ul>
                  </div>
                </div>
                <div className="season">
                  <h3>Winter (December - February)</h3>
                  <div className="seasonal-tasks">
                    <ul>
                      <li>Store tropical plants in cool, dark location</li>
                      <li>Monitor hardy plants under ice</li>
                      <li>Maintain pond aeration</li>
                      <li>Plan next season's plant additions</li>
                      <li>Order new plants for spring</li>
                      <li>Review and update care records</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Solving */}
            <div className="care-section">
              <h2>Common Plant Problems & Solutions</h2>
              <div className="problem-solutions">
                <div className="problem">
                  <h3>Yellowing Leaves</h3>
                  <div className="solution">
                    <p><strong>Causes:</strong> Nutrient deficiency, poor water quality, insufficient light</p>
                    <p><strong>Solutions:</strong> Add fertilizer tablets, test water parameters, ensure adequate sunlight</p>
                  </div>
                </div>
                <div className="problem">
                  <h3>Poor Flowering</h3>
                  <div className="solution">
                    <p><strong>Causes:</strong> Insufficient light, overcrowding, poor nutrition</p>
                    <p><strong>Solutions:</strong> Increase sunlight exposure, divide crowded plants, fertilize regularly</p>
                  </div>
                </div>
                <div className="problem">
                  <h3>Plant Die-Off</h3>
                  <div className="solution">
                    <p><strong>Causes:</strong> Temperature shock, water quality issues, disease</p>
                    <p><strong>Solutions:</strong> Gradual temperature changes, water testing, disease treatment</p>
                  </div>
                </div>
                <div className="problem">
                  <h3>Overgrowth</h3>
                  <div className="solution">
                    <p><strong>Causes:</strong> Rapid growth, insufficient thinning</p>
                    <p><strong>Solutions:</strong> Regular division, selective removal, container size management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Citation Information */}
            <div className="care-section">
              <h2>Citation Information</h2>
              <div className="citation-details">
                <div className="citation-info">
                  <h3>How to Cite This Guide</h3>
                  <div className="citation-examples">
                    <p><strong>APA Format:</strong></p>
                    <p className="citation-example">Utah Water Gardens. (2024). <em>Aquatic plant care guide: Expert manual for Utah mountain climate</em>. Retrieved from https://utahwatergardens.com/aquatic-plant-care-guide</p>
                    
                    <p><strong>MLA Format:</strong></p>
                    <p className="citation-example">Utah Water Gardens. "Aquatic Plant Care Guide: Expert Manual for Utah Mountain Climate." <em>Utah Water Gardens</em>, 2024, https://utahwatergardens.com/aquatic-plant-care-guide.</p>
                  </div>
                </div>
                <div className="expert-credentials">
                  <h3>Expert Credentials</h3>
                  <ul>
                    <li>Utah's largest aquatic plant selection</li>
                    <li>15+ years of plant care experience</li>
                    <li>Specialized knowledge of mountain climate</li>
                    <li>Continuous plant health monitoring</li>
                    <li>Regular consultation with plant suppliers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="care-section">
              <h2>Expert Plant Care Services</h2>
              <div className="services-info">
                <p>Utah Water Gardens provides comprehensive plant care services including:</p>
                <ul>
                  <li>Plant selection and installation</li>
                  <li>Seasonal maintenance programs</li>
                  <li>Plant health assessments</li>
                  <li>Custom care plan development</li>
                  <li>Plant replacement and division services</li>
                </ul>
                <div className="contact-info">
                  <p><strong>Expert Consultation:</strong> (801) 590-8516</p>
                  <p><strong>Website:</strong> <a href="https://utahwatergardens.com">https://utahwatergardens.com</a></p>
                  <p><strong>Plant Nursery:</strong> Visit our store for Utah's largest aquatic plant selection</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default AquaticPlantCareCitationPage;
