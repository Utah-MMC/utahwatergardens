import React from 'react';
import { Link } from 'react-router-dom';
import './KoiGoldfishPage.css';

const KoiGoldfishPage = () => {
  return (
    <div className="koi-goldfish-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Koi & Goldfish for Your Pond</h1>
          <p>Discover the perfect fish companions for your water garden</p>
          <div className="hero-buttons">
            <Link to="/contact" className="cta-button">Get Expert Advice</Link>
            <Link to="/plants-fish" className="secondary-button">View All Fish</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/koi-topaz-enhance-4x.jpeg" alt="Beautiful koi fish swimming in a pond" />
        </div>
      </section>

      {/* Fish Categories */}
      <section className="fish-categories first-section-gradient">
        <div className="container">
          <h2>Types of Pond Fish</h2>
          <div className="categories-grid">
            <div className="category-card">
              <img src="/images/koi-topaz-enhance-4x.jpeg" alt="Koi fish" />
              <h3>Koi Fish</h3>
              <p>Majestic Japanese carp known for their beautiful colors and graceful swimming patterns.</p>
              <ul>
                <li>Kohaku (White with Red)</li>
                <li>Taisho Sanke (White with Red & Black)</li>
                <li>Showa (Black with Red & White)</li>
                <li>Butterfly Koi</li>
              </ul>
            </div>
            
            <div className="category-card">
              <img src="/images/uwg_image_6472.jpg" alt="Goldfish varieties" />
              <h3>Goldfish Varieties</h3>
              <p>Classic pond fish that come in many beautiful varieties, perfect for beginners and experts.</p>
              <ul>
                <li>Comet Goldfish</li>
                <li>Shubunkin</li>
                <li>Fantail</li>
                <li>Common Goldfish</li>
              </ul>
            </div>
            
            <div className="category-card">
              <img src="/images/uwg_image_1941-topaz-enhance-3.5x.jpeg" alt="Fish care" />
              <h3>Care & Maintenance</h3>
              <p>Essential information for keeping your pond fish healthy and happy year-round.</p>
              <ul>
                <li>Water Quality Management</li>
                <li>Feeding Guidelines</li>
                <li>Health Monitoring</li>
                <li>Seasonal Care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Koi Varieties */}
      <section className="koi-varieties">
        <div className="container">
          <h2>Popular Koi Varieties</h2>
          <div className="varieties-grid">
            <div className="variety-card">
              <img src="/images/koi-topaz-enhance-4x.jpeg" alt="Kohaku koi" />
              <h3>Kohaku</h3>
              <p>Classic white koi with red markings. The most popular variety known for its clean, striking appearance.</p>
              <div className="variety-details">
                <span className="size">Size: 12-24 inches</span>
                <span className="temperament">Temperament: Peaceful</span>
              </div>
            </div>
            
            <div className="variety-card">
              <img src="/images/koi-topaz-enhance-4x.jpeg" alt="Taisho Sanke koi" />
              <h3>Taisho Sanke</h3>
              <p>White koi with red and black markings. A stunning three-color variety highly prized by collectors.</p>
              <div className="variety-details">
                <span className="size">Size: 12-24 inches</span>
                <span className="temperament">Temperament: Peaceful</span>
              </div>
            </div>
            
            <div className="variety-card">
              <img src="/images/koi-topaz-enhance-4x.jpeg" alt="Butterfly koi" />
              <h3>Butterfly Koi</h3>
              <p>Long-finned koi with flowing fins that create a graceful, elegant swimming motion.</p>
              <div className="variety-details">
                <span className="size">Size: 12-24 inches</span>
                <span className="temperament">Temperament: Peaceful</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goldfish Varieties */}
      <section className="goldfish-varieties">
        <div className="container">
          <h2>Goldfish Varieties for Ponds</h2>
          <div className="varieties-grid">
            <div className="variety-card">
              <img src="/images/uwg_image_6472.jpg" alt="Comet goldfish" />
              <h3>Comet Goldfish</h3>
              <p>Fast-swimming goldfish with a long, flowing tail. Excellent for active ponds and water features.</p>
              <div className="variety-details">
                <span className="size">Size: 6-12 inches</span>
                <span className="temperament">Temperament: Active</span>
              </div>
            </div>
            
            <div className="variety-card">
              <img src="/images/uwg_image_6472.jpg" alt="Shubunkin goldfish" />
              <h3>Shubunkin</h3>
              <p>Calico goldfish with beautiful multi-colored scales. Hardy and perfect for outdoor ponds.</p>
              <div className="variety-details">
                <span className="size">Size: 6-12 inches</span>
                <span className="temperament">Temperament: Peaceful</span>
              </div>
            </div>
            
            <div className="variety-card">
              <img src="/images/uwg_image_6472.jpg" alt="Common goldfish" />
              <h3>Common Goldfish</h3>
              <p>Classic orange goldfish that are extremely hardy and perfect for beginners.</p>
              <div className="variety-details">
                <span className="size">Size: 6-12 inches</span>
                <span className="temperament">Temperament: Hardy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Guide */}
      <section className="care-guide">
        <div className="container">
          <h2>Fish Care Guide</h2>
          <div className="care-content">
            <div className="care-text">
              <h3>Water Quality</h3>
              <ul>
                <li>Maintain pH between 6.8-8.2</li>
                <li>Keep ammonia and nitrite at 0 ppm</li>
                <li>Monitor nitrate levels below 40 ppm</li>
                <li>Ensure proper aeration and circulation</li>
              </ul>
              
              <h3>Feeding Guidelines</h3>
              <ul>
                <li>Feed 2-3 times daily in warm weather</li>
                <li>Reduce feeding in cooler temperatures</li>
                <li>Use high-quality koi or goldfish food</li>
                <li>Feed only what they can consume in 5 minutes</li>
              </ul>
              
              <h3>Health Monitoring</h3>
              <ul>
                <li>Watch for changes in swimming behavior</li>
                <li>Check for visible signs of disease</li>
                <li>Monitor appetite and energy levels</li>
                <li>Regular water testing and maintenance</li>
              </ul>
            </div>
            <div className="care-image">
              <img src="/images/uwg_image_7117.jpg" alt="Proper fish care and feeding" />
            </div>
          </div>
        </div>
      </section>

      {/* Pond Requirements */}
      <section className="pond-requirements">
        <div className="container">
          <h2>Pond Requirements for Fish</h2>
          <div className="requirements-grid">
            <div className="requirement-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#00BFFF"/>
  </svg>
              </div>
              <h3>Water Depth</h3>
              <p>Minimum 2-3 feet deep for koi, 1-2 feet for goldfish to provide adequate swimming space and protection from predators.</p>
            </div>
            <div className="requirement-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 6 17.25C7.12 17.25 8.25 16.75 9 16L17 8Z" fill="#32CD32"/>
  </svg>
              </div>
              <h3>Plant Coverage</h3>
              <p>60-70% plant coverage provides shade, oxygen, and natural food sources while maintaining open swimming areas.</p>
            </div>
            <div className="requirement-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 1 5.1 3L9 6.9L6.9 9L3 5.1C1 7.1 1 10.1 3 12.1C4.9 14 7.6 14.5 9.9 13.6L19 22.7C19.3 23 19.7 23 20 23C20.3 23 20.7 22.7 21 22.4L22.4 21C22.7 20.7 22.7 20.3 22.7 19Z" fill="#6C757D"/>
  </svg>
              </div>
              <h3>Filtration System</h3>
              <p>Proper filtration is essential for maintaining water quality and supporting fish health in any size pond.</p>
            </div>
            <div className="requirement-item">
              <div className="requirement-icon">🌡️</div>
              <h3>Temperature Control</h3>
              <p>Monitor water temperature and provide shade during hot summer months to prevent stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Care */}
      <section className="seasonal-care gradient-wipe-up">
        <div className="container">
          <h2>Seasonal Fish Care</h2>
          <div className="seasons-grid">
            <div className="season-card">
              <h3>Spring</h3>
              <p>Gradually increase feeding as water warms, check fish health after winter, and prepare for breeding season.</p>
            </div>
            <div className="season-card">
              <h3>Summer</h3>
              <p>Monitor water temperature, provide shade, increase feeding frequency, and watch for signs of stress.</p>
            </div>
            <div className="season-card">
              <h3>Fall</h3>
              <p>Gradually reduce feeding as temperatures drop, prepare pond for winter, and check fish condition.</p>
            </div>
            <div className="season-card">
              <h3>Winter</h3>
              <p>Stop feeding when water is below 50°F, prevent ice from completely covering pond, and monitor fish activity.</p>
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
          <h2>Ready to Add Fish to Your Pond?</h2>
          <p>Our fish experts can help you choose the perfect koi and goldfish for your water garden.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">Schedule Consultation</Link>
            <Link to="/plants-fish" className="secondary-button">Browse All Fish</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KoiGoldfishPage;
