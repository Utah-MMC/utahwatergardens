import React from 'react';
import { Link } from 'react-router-dom';
import './FloatingPlantsPage.css';

const FloatingPlantsPage = () => {
  return (
    <div className="floating-plants-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Floating Plants for Your Pond</h1>
          <p>Add natural beauty and filtration to your water garden with our selection of floating aquatic plants</p>
          <div className="hero-buttons">
            <Link to="/contact" className="cta-button">Get Expert Advice</Link>
            <Link to="/plants-fish" className="secondary-button">View All Plants</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2775.jpg" alt="Beautiful floating aquatic plants in a pond" />
        </div>
      </section>

      {/* Plant Types */}
      <section className="plant-types first-section-gradient">
        <div className="container">
          <h2>Types of Floating Plants</h2>
          <div className="types-grid">
            <div className="type-card">
              <img src="/images/IMG_2775.jpg" alt="Water hyacinth" />
              <h3>Water Hyacinth</h3>
              <p>Beautiful floating plants with purple flowers and thick, spongy leaves that provide excellent filtration.</p>
              <ul>
                <li>Purple flower spikes</li>
                <li>Excellent water filtration</li>
                <li>Fast growing</li>
                <li>Provides fish shade</li>
              </ul>
            </div>
            
            <div className="type-card">
              <img src="/images/IMG_2775.jpg" alt="Water lettuce" />
              <h3>Water Lettuce</h3>
              <p>Rosette-forming plants with velvety leaves that create natural floating islands in your pond.</p>
              <ul>
                <li>Velvety green leaves</li>
                <li>Rosette formation</li>
                <li>Natural filtration</li>
                <li>Fish habitat</li>
              </ul>
            </div>
            
            <div className="type-card">
              <img src="/images/IMG_2775.jpg" alt="Duckweed" />
              <h3>Duckweed</h3>
              <p>Tiny floating plants that multiply quickly, providing excellent surface coverage and food for fish.</p>
              <ul>
                <li>Tiny floating leaves</li>
                <li>Rapid multiplication</li>
                <li>Fish food source</li>
                <li>Surface coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Benefits of Floating Plants</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🌿</div>
              <h3>Natural Filtration</h3>
              <p>Absorb excess nutrients like nitrogen and phosphorus, helping to control algae growth naturally.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🐟</div>
              <h3>Fish Protection</h3>
              <p>Provide shade and shelter for fish, helping to reduce stress and create natural spawning areas.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💧</div>
              <h3>Water Quality</h3>
              <p>Help maintain clear water by filtering out impurities and reducing water temperature fluctuations.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🦋</div>
              <h3>Wildlife Habitat</h3>
              <p>Attract beneficial insects, frogs, and other wildlife to create a balanced ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Guide */}
      <section className="care-guide">
        <div className="container">
          <h2>Floating Plant Care Guide</h2>
          <div className="guide-content">
            <div className="guide-text">
              <h3>Planting & Placement</h3>
              <ul>
                <li>Simply place plants on water surface</li>
                <li>Allow 30-40% surface coverage</li>
                <li>Provide adequate light exposure</li>
                <li>Ensure good water circulation</li>
              </ul>
              
              <h3>Maintenance</h3>
              <ul>
                <li>Remove excess growth regularly</li>
                <li>Trim dead or yellowing leaves</li>
                <li>Control invasive species</li>
                <li>Monitor for pests and diseases</li>
              </ul>
              
              <h3>Seasonal Care</h3>
              <ul>
                <li>Spring: Introduce new plants</li>
                <li>Summer: Regular maintenance</li>
                <li>Fall: Remove tropical varieties</li>
                <li>Winter: Protect hardy species</li>
              </ul>
            </div>
            <div className="guide-image">
              <img src="/images/IMG_2775.jpg" alt="Floating plant care guide" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Varieties */}
      <section className="popular-varieties">
        <div className="container">
          <h2>Popular Floating Plant Varieties</h2>
          <div className="varieties-grid">
            <div className="variety-card">
              <img src="/images/IMG_2775.jpg" alt="Water Hyacinth" />
              <h3>Water Hyacinth</h3>
              <p>Fast-growing plant with beautiful purple flowers and excellent filtration properties.</p>
              <div className="variety-details">
                <span>Growth Rate: Fast</span>
                <span>Flower Color: Purple</span>
                <span>Hardiness: Tropical</span>
              </div>
            </div>
            
            <div className="variety-card">
              <img src="/images/IMG_2775.jpg" alt="Water Lettuce" />
              <h3>Water Lettuce</h3>
              <p>Rosette-forming plant with velvety leaves that create natural floating islands.</p>
              <div className="variety-details">
                <span>Growth Rate: Medium</span>
                <span>Leaf Color: Green</span>
                <span>Hardiness: Tropical</span>
              </div>
            </div>
            
            <div className="variety-card">
              <img src="/images/IMG_2775.jpg" alt="Duckweed" />
              <h3>Duckweed</h3>
              <p>Tiny floating plants that provide excellent surface coverage and fish food.</p>
              <div className="variety-details">
                <span>Growth Rate: Very Fast</span>
                <span>Size: Tiny</span>
                <span>Hardiness: Hardy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Control */}
      <section className="growth-control">
        <div className="container">
          <h2>Managing Plant Growth</h2>
          <div className="control-grid">
            <div className="control-item">
              <div className="control-icon">✂️</div>
              <h3>Regular Trimming</h3>
              <p>Remove excess growth to maintain 30-40% surface coverage for optimal pond health.</p>
            </div>
            <div className="control-item">
              <div className="control-icon">🚫</div>
              <h3>Invasive Control</h3>
              <p>Monitor and control aggressive growers to prevent them from taking over your pond.</p>
            </div>
            <div className="control-item">
              <div className="control-icon">🌡️</div>
              <h3>Seasonal Management</h3>
              <p>Remove tropical varieties before frost and protect hardy species during winter.</p>
            </div>
            <div className="control-item">
              <div className="control-icon">🔄</div>
              <h3>Rotation System</h3>
              <p>Rotate different plant varieties to maintain biodiversity and prevent overgrowth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="troubleshooting">
        <div className="container">
          <h2>Common Issues & Solutions</h2>
          <div className="troubleshooting-grid">
            <div className="issue-card">
              <h3>Yellowing Leaves</h3>
              <p><strong>Cause:</strong> Nutrient deficiency or poor water quality</p>
              <p><strong>Solution:</strong> Test water parameters and add aquatic fertilizer if needed</p>
            </div>
            <div className="issue-card">
              <h3>Excessive Growth</h3>
              <p><strong>Cause:</strong> Too many nutrients or warm water</p>
              <p><strong>Solution:</strong> Remove excess plants and maintain proper coverage</p>
            </div>
            <div className="issue-card">
              <h3>Plant Die-off</h3>
              <p><strong>Cause:</strong> Cold temperatures or poor water conditions</p>
              <p><strong>Solution:</strong> Check water quality and protect from extreme cold</p>
            </div>
            <div className="issue-card">
              <h3>Pest Infestation</h3>
              <p><strong>Cause:</strong> Aphids, snails, or other pests</p>
              <p><strong>Solution:</strong> Remove affected plants and introduce natural predators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products gradient-wipe-up">
        <div className="container">
          <h2>Featured Floating Plants</h2>
          <div className="products-grid">
            <div className="product-card">
              <img src="/images/IMG_2775.jpg" alt="Water Hyacinth Bundle" />
              <h3>Water Hyacinth Bundle</h3>
              <p>Beautiful purple-flowered plants perfect for natural filtration.</p>
              <span className="price">$12.99</span>
            </div>
            <div className="product-card">
              <img src="/images/IMG_2775.jpg" alt="Water Lettuce Pack" />
              <h3>Water Lettuce Pack</h3>
              <p>Velvety green plants that create natural floating islands.</p>
              <span className="price">$9.99</span>
            </div>
            <div className="product-card">
              <img src="/images/IMG_2775.jpg" alt="Duckweed Starter" />
              <h3>Duckweed Starter</h3>
              <p>Tiny floating plants for rapid surface coverage and fish food.</p>
              <span className="price">$6.99</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="cta-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <h2>Ready to Add Floating Plants to Your Pond?</h2>
          <p>Our aquatic plant experts can help you choose the perfect floating plants for your water garden.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">Schedule Consultation</Link>
            <Link to="/plants-fish" className="secondary-button">Browse All Plants</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FloatingPlantsPage;
