import React from 'react';
import { Link } from 'react-router-dom';
import './WaterLiliesPage.css';

const WaterLiliesPage = () => {
  return (
    <div className="water-lilies-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Water Lilies for Your Pond</h1>
          <p>Transform your water garden with the timeless beauty and elegance of water lilies</p>
          <div className="hero-buttons">
            <Link to="/contact" className="cta-button">Get Expert Advice</Link>
            <Link to="/plants-fish" className="secondary-button">View All Plants</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Beautiful water lilies in bloom" />
        </div>
      </section>

      {/* Water Lily Types */}
      <section className="lily-types first-section-gradient">
        <div className="container">
          <h2>Types of Water Lilies</h2>
          <div className="types-grid">
            <div className="type-card">
              <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Hardy water lilies" />
              <h3>Hardy Water Lilies</h3>
              <p>Cold-tolerant lilies that survive freezing temperatures and return year after year.</p>
              <ul>
                <li>Survive freezing temperatures</li>
                <li>Return each spring</li>
                <li>Wide range of colors</li>
                <li>Perfect for Utah climate</li>
              </ul>
            </div>
            
            <div className="type-card">
              <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Tropical water lilies" />
              <h3>Tropical Water Lilies</h3>
              <p>Exotic lilies with vibrant colors and larger blooms, perfect for warm summer months.</p>
              <ul>
                <li>Vibrant, exotic colors</li>
                <li>Larger, more dramatic blooms</li>
                <li>Night-blooming varieties</li>
                <li>Fragrant flowers</li>
              </ul>
            </div>
            
            <div className="type-card">
              <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Dwarf water lilies" />
              <h3>Dwarf Water Lilies</h3>
              <p>Compact lilies perfect for small ponds and container water gardens.</p>
              <ul>
                <li>Compact growth habit</li>
                <li>Perfect for small ponds</li>
                <li>Container-friendly</li>
                <li>Easy to maintain</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Varieties */}
      <section className="popular-varieties">
        <div className="container">
          <h2>Popular Water Lily Varieties</h2>
          <div className="varieties-grid">
            <div className="variety-card">
              <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Colorado water lily" />
              <h3>Colorado</h3>
              <p>Hardy variety with beautiful pink blooms that change color throughout the day.</p>
              <div className="variety-details">
                <span>Bloom Color: Pink</span>
                <span>Spread: 4-6 feet</span>
                <span>Hardiness: Zone 3-11</span>
              </div>
            </div>
            
            <div className="variety-card">
              <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Chromatella water lily" />
              <h3>Chromatella</h3>
              <p>Stunning yellow lily with large, fragrant blooms and beautiful mottled leaves.</p>
              <div className="variety-details">
                <span>Bloom Color: Yellow</span>
                <span>Spread: 3-5 feet</span>
                <span>Hardiness: Zone 3-11</span>
              </div>
            </div>
            
            <div className="variety-card">
              <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Pink Grapefruit water lily" />
              <h3>Pink Grapefruit</h3>
              <p>Exotic tropical lily with large, fragrant pink blooms and stunning foliage.</p>
              <div className="variety-details">
                <span>Bloom Color: Pink</span>
                <span>Spread: 5-8 feet</span>
                <span>Hardiness: Zone 9-11</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planting Guide */}
      <section className="planting-guide">
        <div className="container">
          <h2>Water Lily Planting Guide</h2>
          <div className="guide-content">
            <div className="guide-text">
              <h3>Planting Depth</h3>
              <ul>
                <li>Hardy lilies: 12-18 inches deep</li>
                <li>Tropical lilies: 18-24 inches deep</li>
                <li>Dwarf lilies: 6-12 inches deep</li>
                <li>Measure from water surface to pot top</li>
              </ul>
              
              <h3>Planting Steps</h3>
              <ul>
                <li>Use aquatic planting soil and gravel</li>
                <li>Plant in early spring for hardy varieties</li>
                <li>Plant after last frost for tropical varieties</li>
                <li>Fertilize with aquatic plant food</li>
              </ul>
              
              <h3>Container Requirements</h3>
              <ul>
                <li>Use wide, shallow containers</li>
                <li>Ensure adequate drainage holes</li>
                <li>Fill with aquatic planting soil</li>
                <li>Top with gravel to prevent soil loss</li>
              </ul>
            </div>
            <div className="guide-image">
              <img src="/images/IMG_2775.jpg" alt="Water lily planting guide" />
            </div>
          </div>
        </div>
      </section>

      {/* Care & Maintenance */}
      <section className="care-maintenance">
        <div className="container">
          <h2>Care & Maintenance</h2>
          <div className="care-grid">
            <div className="care-item">
              <div className="care-icon">🌱</div>
              <h3>Fertilization</h3>
              <p>Fertilize monthly during growing season with aquatic plant food tablets.</p>
            </div>
            <div className="care-item">
              <div className="care-icon">✂️</div>
              <h3>Pruning</h3>
              <p>Remove dead leaves and spent flowers regularly to maintain plant health.</p>
            </div>
            <div className="care-item">
              <div className="care-icon">🌡️</div>
              <h3>Temperature</h3>
              <p>Hardy lilies tolerate cold, tropical lilies need warm water (70°F+).</p>
            </div>
            <div className="care-item">
              <div className="care-icon">💧</div>
              <h3>Water Quality</h3>
              <p>Maintain clear water and proper pH (6.5-7.5) for optimal growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Care */}
      <section className="seasonal-care">
        <div className="container">
          <h2>Seasonal Water Lily Care</h2>
          <div className="seasons-grid">
            <div className="season-card">
              <h3>Spring</h3>
              <p>Plant new lilies, divide overgrown plants, and begin fertilization schedule.</p>
            </div>
            <div className="season-card">
              <h3>Summer</h3>
              <p>Regular fertilization, deadheading spent blooms, and monitoring for pests.</p>
            </div>
            <div className="season-card">
              <h3>Fall</h3>
              <p>Reduce fertilization, prepare hardy lilies for winter, remove tropical varieties.</p>
            </div>
            <div className="season-card">
              <h3>Winter</h3>
              <p>Protect hardy lilies from ice damage, store tropical lilies indoors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits">
        <div className="container">
          <h2>Benefits of Water Lilies</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🎨</div>
              <h3>Visual Appeal</h3>
              <p>Add stunning color and beauty to your pond throughout the growing season.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🌿</div>
              <h3>Natural Filtration</h3>
              <p>Help filter water and reduce algae growth by absorbing excess nutrients.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🐟</div>
              <h3>Fish Habitat</h3>
              <p>Provide shade, shelter, and spawning areas for pond fish.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🦋</div>
              <h3>Wildlife Attraction</h3>
              <p>Attract beneficial insects, birds, and other wildlife to your garden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products gradient-wipe-up">
        <div className="container">
          <h2>Featured Water Lilies</h2>
          <div className="products-grid">
            <div className="product-card">
              <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Colorado water lily" />
              <h3>Colorado Hardy Water Lily</h3>
              <p>Beautiful pink blooms that change color throughout the day.</p>
              <span className="price">$29.99</span>
            </div>
            <div className="product-card">
              <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Chromatella water lily" />
              <h3>Chromatella Hardy Water Lily</h3>
              <p>Stunning yellow blooms with fragrant flowers.</p>
              <span className="price">$34.99</span>
            </div>
            <div className="product-card">
              <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Pink Grapefruit water lily" />
              <h3>Pink Grapefruit Tropical Lily</h3>
              <p>Exotic tropical variety with large, fragrant pink blooms.</p>
              <span className="price">$39.99</span>
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
          <h2>Ready to Add Water Lilies to Your Pond?</h2>
          <p>Our water lily experts can help you choose the perfect varieties for your water garden.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">Schedule Consultation</Link>
            <Link to="/plants-fish" className="secondary-button">Browse All Plants</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterLiliesPage;
