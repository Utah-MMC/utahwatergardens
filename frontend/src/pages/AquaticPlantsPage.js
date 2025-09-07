import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './AquaticPlantsPage.css';

const AquaticPlantsPage = () => {
  return (
    <div className="aquatic-plants-page">
      {/* Hero Section */}
      <PageHero 
        title="Aquatic Plants for Your Pond"
        subtitle="Transform your water garden with our premium selection of aquatic plants"
        backgroundImage="/images/IMG_2775.jpg"
        backgroundImageAlt="Beautiful floating aquatic plants in a serene pond"
      />

      {/* Plant Categories */}
      <section className="plant-categories first-section-gradient">
        <div className="container">
          <h2>Types of Aquatic Plants</h2>
          <div className="categories-grid">
            <div className="category-card">
              <img src="/images/uwg_image_4887.jpg" alt="Submerged plants" />
              <h3>Submerged Plants</h3>
              <p>Oxygenating plants that grow below the water surface, providing essential oxygen for fish and beneficial bacteria.</p>
              <ul>
                <li>Anacharis (Elodea)</li>
                <li>Hornwort</li>
                <li>Cabomba</li>
                <li>Vallisneria</li>
              </ul>
            </div>
            
            <div className="category-card">
              <img src="/images/uwg_image_6472.jpg" alt="Floating plants" />
              <h3>Floating Plants</h3>
              <p>Plants that float on the water surface, providing shade and natural filtration while adding beauty.</p>
              <ul>
                <li>Water Hyacinth</li>
                <li>Water Lettuce</li>
                <li>Duckweed</li>
                <li>Frogbit</li>
              </ul>
            </div>
            
            <div className="category-card">
              <img src="/images/uwg_image_1941-topaz-enhance-3.5x.jpeg" alt="Marginal plants" />
              <h3>Marginal Plants</h3>
              <p>Plants that grow in shallow water or along the pond edges, creating natural borders and habitat.</p>
              <ul>
                <li>Iris</li>
                <li>Cattails</li>
                <li>Rushes</li>
                <li>Pickerel Weed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Aquatic Plants Are Essential</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 6 17.25C7.12 17.25 8.25 16.75 9 16L17 8Z" fill="#32CD32"/>
                </svg>
              </div>
              <h3>Natural Filtration</h3>
              <p>Plants absorb excess nutrients and help maintain water clarity naturally.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#FF6B6B"/>
                </svg>
              </div>
              <h3>Fish Habitat</h3>
              <p>Provide shelter, spawning areas, and natural food sources for your fish.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#00BFFF"/>
                </svg>
              </div>
              <h3>Oxygen Production</h3>
              <p>Submerged plants release oxygen during photosynthesis, vital for fish health.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#FFD700" stroke="#B8860B" strokeWidth="1"/>
                </svg>
              </div>
              <h3>Visual Appeal</h3>
              <p>Add color, texture, and natural beauty to your water garden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Guide */}
      <section className="care-guide">
        <div className="container">
          <h2>Aquatic Plant Care Guide</h2>
          <div className="care-content">
            <div className="care-text">
              <h3>Planting Tips</h3>
              <ul>
                <li>Choose plants appropriate for your pond depth and climate</li>
                <li>Plant in early spring for best establishment</li>
                <li>Use aquatic planting soil and gravel for stability</li>
                <li>Space plants according to their mature size</li>
              </ul>
              
              <h3>Maintenance</h3>
              <ul>
                <li>Trim dead or overgrown foliage regularly</li>
                <li>Remove invasive species promptly</li>
                <li>Fertilize sparingly with aquatic plant food</li>
                <li>Monitor for pests and diseases</li>
              </ul>
            </div>
            <div className="care-image">
              <img src="/images/uwg_image_7117.jpg" alt="Proper aquatic plant care" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2>Featured Aquatic Plants</h2>
          <div className="products-grid">
            <div className="product-card">
              <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Water Lily" />
              <h3>Water Lily 'Colorado'</h3>
              <p>Hardy water lily with beautiful pink blooms, perfect for medium to large ponds.</p>
              <span className="price">$24.99</span>
            </div>
            <div className="product-card">
              <img src="/images/uwg_image_7185.jpg" alt="Anacharis" />
              <h3>Anacharis Bundle</h3>
              <p>Oxygenating plant bundle, great for water quality and fish health.</p>
              <span className="price">$12.99</span>
            </div>
            <div className="product-card">
              <img src="/images/uwg_image_4887.jpg" alt="Water Hyacinth" />
              <h3>Water Hyacinth</h3>
              <p>Beautiful floating plant with purple flowers, excellent for natural filtration.</p>
              <span className="price">$8.99</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Care */}
      <section className="seasonal-care gradient-wipe-up">
        <div className="container">
          <h2>Seasonal Care Calendar</h2>
          <div className="seasons-grid">
            <div className="season-card">
              <h3>Spring</h3>
              <p>Plant new specimens, divide overgrown plants, and fertilize established plants.</p>
            </div>
            <div className="season-card">
              <h3>Summer</h3>
              <p>Regular maintenance, deadheading flowers, and monitoring growth.</p>
            </div>
            <div className="season-card">
              <h3>Fall</h3>
              <p>Prepare hardy plants for winter, remove annuals, and clean up debris.</p>
            </div>
            <div className="season-card">
              <h3>Winter</h3>
              <p>Protect tender plants, monitor ice damage, and plan for spring.</p>
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
          <h2>Ready to Transform Your Pond?</h2>
          <p>Our aquatic plant experts are here to help you choose the perfect plants for your water garden.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">Schedule Consultation</Link>
            <Link to="/plants-fish" className="secondary-button">Browse All Plants</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AquaticPlantsPage;
