import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (scrollArrow) {
      scrollArrow.addEventListener('click', () => {
        const servicesSection = document.querySelector('.services-overview');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-background">
          <img 
            src="/images/IMG_2770.jpg" 
            alt="Beautiful water garden with lush aquatic plants and flowing water" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text-content">
            <div className="hero-badge">
              <span>Utah's Premier Water Garden Experts</span>
            </div>
            
            <h1 className="hero-title">
              Create Your Dream
              <span className="hero-title-highlight"> Water Garden</span>
            </h1>
            
            <p className="hero-subtitle">
              From stunning koi ponds to tranquil water features, we bring your aquatic vision to life with expert design, construction, and maintenance services.
            </p>
            
            <div className="hero-cta-section">
              <div className="hero-buttons">
                <a href="tel:(801) 590-8516" className="btn btn-primary btn-hero">
                  Call (801) 590-8516
                </a>
                <Link to="/pond-services" className="btn btn-secondary btn-hero">
                  View Our Services
                </Link>
              </div>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Ponds Built</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">11+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10000+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-features">
            <div className="feature-card">
              <h3>Largest Plant Selection</h3>
              <p>Utah's most comprehensive collection of aquatic plants</p>
            </div>
            <div className="feature-card">
              <h3>Complete Design & Build</h3>
              <p>From concept to completion, we handle everything</p>
            </div>
            <div className="feature-card">
              <h3>Expert Maintenance</h3>
              <p>Keep your water garden thriving year-round</p>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow">
            <span>↓</span>
          </div>
        </div>
      </section>

      <section className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive water garden solutions from design to maintenance</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="/images/pondMaintenance.webp" alt="Professional pond maintenance services" />
                <div className="service-overlay">
                  <span className="service-icon">🔧</span>
                </div>
              </div>
              <div className="service-content">
                <h3>Pond Maintenance</h3>
                <p>Keep your water garden thriving with our comprehensive maintenance program. We handle water quality testing, plant care, equipment maintenance, and seasonal preparation.</p>
                <ul className="service-features">
                  <li>Water quality testing & treatment</li>
                  <li>Plant trimming & fertilization</li>
                  <li>Equipment inspection & repair</li>
                  <li>Seasonal preparation</li>
                </ul>
                <Link to="/pond-services/maintenance" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-image">
                <img src="/images/pondCleanings.webp" alt="Professional pond cleaning services" />
                <div className="service-overlay">
                  <span className="service-icon">💧</span>
                </div>
              </div>
              <div className="service-content">
                <h3>Pond Cleaning</h3>
                <p>Restore your pond's beauty with our professional cleaning services. We remove debris, clean filters, and ensure optimal water clarity for your aquatic ecosystem.</p>
                <ul className="service-features">
                  <li>Debris removal & filtration</li>
                  <li>Filter cleaning & maintenance</li>
                  <li>Water clarity restoration</li>
                  <li>Ecosystem balance check</li>
                </ul>
                <Link to="/pond-services/cleaning" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-image">
                <img src="/images/pondConstruction1000x800.webp" alt="Custom pond construction services" />
                <div className="service-overlay">
                  <span className="service-icon">🏗️</span>
                </div>
              </div>
              <div className="service-content">
                <h3>Pond Construction</h3>
                <p>Transform your vision into reality with our custom pond design and construction services. From intimate water features to expansive koi ponds, we create stunning aquatic landscapes.</p>
                <ul className="service-features">
                  <li>Custom design & planning</li>
                  <li>Professional installation</li>
                  <li>Quality materials & equipment</li>
                  <li>Landscaping integration</li>
                </ul>
                <Link to="/pond-services/design-build" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-image">
                <img src="/images/pondConsultation1000x800.webp" alt="Pond consultation and design services" />
                <div className="service-overlay">
                  <span className="service-icon">📋</span>
                </div>
              </div>
              <div className="service-content">
                <h3>Consultation & Design</h3>
                <p>Get expert advice on your water garden project. Our experienced team provides personalized consultations, site analysis, and detailed design plans tailored to your property.</p>
                <ul className="service-features">
                  <li>Site analysis & assessment</li>
                  <li>Custom design concepts</li>
                  <li>Material & plant selection</li>
                  <li>Project planning & timeline</li>
                </ul>
                <Link to="/contact" className="btn btn-primary">Get Consultation</Link>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-image">
                <img src="/images/pondDredging.webp" alt="Pond dredging and restoration services" />
                <div className="service-overlay">
                  <span className="service-icon">🚜</span>
                </div>
              </div>
              <div className="service-content">
                <h3>Pond Dredging</h3>
                <p>Restore your pond's depth and functionality with our professional dredging services. We remove accumulated sediment and restore proper water circulation for healthy aquatic life.</p>
                <ul className="service-features">
                  <li>Sediment removal</li>
                  <li>Depth restoration</li>
                  <li>Water circulation improvement</li>
                  <li>Ecosystem rehabilitation</li>
                </ul>
                <Link to="/pond-services/pond-dredging" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-image">
                <img src="/images/equipmentRepair.webp" alt="Pond equipment repair services" />
                <div className="service-overlay">
                  <span className="service-icon">⚙️</span>
                </div>
              </div>
              <div className="service-content">
                <h3>Equipment Repair</h3>
                <p>Keep your pond running smoothly with our expert equipment repair and maintenance services. We service pumps, filters, lighting, and all pond equipment.</p>
                <ul className="service-features">
                  <li>Pump repair & maintenance</li>
                  <li>Filter system service</li>
                  <li>Lighting installation</li>
                  <li>Preventive maintenance</li>
                </ul>
                <Link to="/pond-services/repair" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
          
          <div className="services-cta">
            <div className="cta-content">
              <h3>Need a Custom Solution?</h3>
              <p>Every property is unique. Let us create a water feature that perfectly fits your space and lifestyle.</p>
              <div className="cta-buttons">
                <a href="tel:(801) 590-8516" className="btn btn-primary">Call for Quote</a>
                <Link to="/contact" className="btn btn-outline">Schedule Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Utah Water Gardens</h2>
              <p>Utah Water Gardens offers the largest variety of aquatic plants in Utah. We are your complete pond and water feature solution, handling everything from construction to maintenance.</p>
              <p>Our team has years of experience in creating and maintaining beautiful water features that enhance your landscape and provide a peaceful retreat in your own backyard.</p>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="about-image">
              <img 
                src="/images/IMG_2775.jpg" 
                alt="Serene water garden with floating aquatic plants" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="shop-preview">
        <div className="container">
          <h2>Shop Our Products</h2>
          <div className="shop-grid">
            <div className="shop-item">
              <img src="/images/waterLillies.webp" alt="Water lilies for ponds" />
              <h3>Water Lilies</h3>
              <p>Beautiful winter hardy water lilies in various colors for your pond.</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">Call for Availability</a>
            </div>
            <div className="shop-item">
              <img src="/images/IMG_2775.jpg" alt="Floating aquatic plants" />
              <h3>Floating Plants</h3>
              <p>Water lettuce, hyacinth, and duckweed for natural filtration.</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">Call for Stock</a>
            </div>
            <div className="shop-item">
              <img src="/images/IMG_2779.jpg" alt="Marginal pond plants" />
              <h3>Marginal Plants</h3>
              <p>Cattails, rushes, and edge plants for beautiful pond borders.</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">Call for Selection</a>
            </div>
            <div className="shop-item">
              <img src="/images/koi.webp" alt="Koi fish for ponds" />
              <h3>Fish & Koi</h3>
              <p>Healthy koi and other fish to bring life to your water feature.</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">Call for Fish</a>
            </div>
            <div className="shop-item">
              <img src="/images/IMG_2776.jpg" alt="Tropical fish varieties" />
              <h3>Tropical Fish</h3>
              <p>Colorful tropical varieties perfect for warm water ponds.</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">Call for Varieties</a>
            </div>
            <div className="shop-item">
              <img src="/images/Pond-Supplies.webp" alt="Pond supplies and equipment" />
              <h3>Pond Supplies</h3>
              <p>Everything you need to maintain and enhance your pond.</p>
              <a href="tel:(801) 590-8516" className="btn btn-outline">Call for Supplies</a>
            </div>
          </div>
          <div className="shop-cta">
            <p>Visit our store to see our complete selection of aquatic plants and fish!</p>
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a consultation or quote on your pond project.</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
