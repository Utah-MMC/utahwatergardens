import React from 'react';
import { Link } from 'react-router-dom';
import './TropicalFishPage.css';

const TropicalFishPage = () => {
  return (
    <div className="tropical-fish-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Tropical Fish for Your Pond</h1>
          <p>Add vibrant colors and exotic beauty to your water garden with our selection of tropical fish</p>
          <div className="hero-buttons">
            <Link to="/contact" className="cta-button">Get Expert Advice</Link>
            <Link to="/plants-fish" className="secondary-button">View All Fish</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/IMG_2776.jpg" alt="Beautiful tropical fish in a pond" />
        </div>
      </section>

      {/* Fish Varieties */}
      <section className="fish-varieties">
        <div className="container">
          <h2>Popular Tropical Fish Varieties</h2>
          <div className="varieties-grid">
            <div className="variety-card">
              <img src="/images/IMG_2776.jpg" alt="Guppies" />
              <h3>Guppies</h3>
              <p>Colorful, hardy fish perfect for beginners. Known for their vibrant tails and peaceful nature.</p>
              <ul>
                <li>Size: 1-2 inches</li>
                <li>Temperament: Peaceful</li>
                <li>Water Temp: 72-82°F</li>
                <li>Care Level: Easy</li>
              </ul>
            </div>
            
            <div className="variety-card">
              <img src="/images/IMG_2776.jpg" alt="Platies" />
              <h3>Platies</h3>
              <p>Active, colorful fish that come in many color variations. Great for community ponds.</p>
              <ul>
                <li>Size: 2-3 inches</li>
                <li>Temperament: Peaceful</li>
                <li>Water Temp: 70-80°F</li>
                <li>Care Level: Easy</li>
              </ul>
            </div>
            
            <div className="variety-card">
              <img src="/images/IMG_2776.jpg" alt="Swordtails" />
              <h3>Swordtails</h3>
              <p>Distinctive fish with elongated tail fins. Available in various colors and patterns.</p>
              <ul>
                <li>Size: 3-4 inches</li>
                <li>Temperament: Peaceful</li>
                <li>Water Temp: 72-82°F</li>
                <li>Care Level: Easy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Care Requirements */}
      <section className="care-requirements">
        <div className="container">
          <h2>Tropical Fish Care Requirements</h2>
          <div className="requirements-grid">
            <div className="requirement-item">
              <div className="requirement-icon">🌡️</div>
              <h3>Water Temperature</h3>
              <p>Most tropical fish require water temperatures between 72-82°F. Consider a heater for cooler months.</p>
            </div>
            <div className="requirement-item">
              <div className="requirement-icon">💧</div>
              <h3>Water Quality</h3>
              <p>Maintain pH between 6.8-7.8 and ensure proper filtration for optimal fish health.</p>
            </div>
            <div className="requirement-item">
              <div className="requirement-icon">🌿</div>
              <h3>Plant Coverage</h3>
              <p>Provide 60-70% plant coverage for shelter, spawning areas, and natural food sources.</p>
            </div>
            <div className="requirement-item">
              <div className="requirement-icon">🍽️</div>
              <h3>Feeding</h3>
              <p>Feed 2-3 times daily with high-quality tropical fish food appropriate for your species.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Considerations */}
      <section className="seasonal-considerations">
        <div className="container">
          <h2>Seasonal Care for Tropical Fish</h2>
          <div className="seasons-grid">
            <div className="season-card">
              <h3>Spring</h3>
              <p>Gradually increase feeding as water warms. Check fish health and prepare for breeding season.</p>
            </div>
            <div className="season-card">
              <h3>Summer</h3>
              <p>Monitor water temperature closely. Provide shade and increase feeding frequency.</p>
            </div>
            <div className="season-card">
              <h3>Fall</h3>
              <p>Begin reducing feeding as temperatures drop. Prepare pond for winter conditions.</p>
            </div>
            <div className="season-card">
              <h3>Winter</h3>
              <p>Consider moving tropical fish indoors or provide heated pond environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility Guide */}
      <section className="compatibility-guide">
        <div className="container">
          <h2>Fish Compatibility Guide</h2>
          <div className="compatibility-content">
            <div className="compatibility-text">
              <h3>Peaceful Community Fish</h3>
              <ul>
                <li>Guppies, Platies, and Swordtails work well together</li>
                <li>Mollies and Endlers are excellent companions</li>
                <li>Small tetras can be added for variety</li>
                <li>Avoid aggressive species like cichlids</li>
              </ul>
              
              <h3>Stocking Guidelines</h3>
              <ul>
                <li>Allow 1 inch of fish per 2-3 gallons of water</li>
                <li>Maintain proper male-to-female ratios</li>
                <li>Provide adequate swimming space</li>
                <li>Consider adult fish sizes when planning</li>
              </ul>
            </div>
            <div className="compatibility-image">
              <img src="/images/IMG_2776.jpg" alt="Tropical fish compatibility guide" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2>Featured Tropical Fish</h2>
          <div className="products-grid">
            <div className="product-card">
              <img src="/images/IMG_2776.jpg" alt="Fancy Guppies" />
              <h3>Fancy Guppy Trio</h3>
              <p>Beautiful male and female guppies with vibrant colors and flowing fins.</p>
              <span className="price">$19.99</span>
            </div>
            <div className="product-card">
              <img src="/images/IMG_2776.jpg" alt="Red Platies" />
              <h3>Red Platy Pair</h3>
              <p>Stunning red platies perfect for adding color to your pond.</p>
              <span className="price">$14.99</span>
            </div>
            <div className="product-card">
              <img src="/images/IMG_2776.jpg" alt="Swordtail Variety" />
              <h3>Swordtail Variety Pack</h3>
              <p>Mixed colors of swordtails for a diverse and colorful pond.</p>
              <span className="price">$24.99</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Add Tropical Fish to Your Pond?</h2>
          <p>Our tropical fish experts can help you choose the perfect species for your water garden.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">Schedule Consultation</Link>
            <Link to="/plants-fish" className="secondary-button">Browse All Fish</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TropicalFishPage;
