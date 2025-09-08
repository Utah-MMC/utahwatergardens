import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getAllPlants, createPlantSlug } from '../data/plantData';
import './HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentResourceSlide, setCurrentResourceSlide] = useState(0);
  const [currentPlantSlide, setCurrentPlantSlide] = useState(0);
  
  // All products from the shop page
  const allProducts = [
    { name: 'Water Lilies', image: '/images/waterLillies.webp', category: 'Aquatic Plants' },
    { name: 'Floating Plants', image: '/images/IMG_2775.jpg', category: 'Aquatic Plants' },
    { name: 'Marginal Plants', image: '/images/IMG_2779.jpg', category: 'Aquatic Plants' },
    { name: 'Submerged Plants', image: '/images/IMG_2770.jpg', category: 'Aquatic Plants' },
    { name: 'Koi Fish', image: '/images/koi.webp', category: 'Fish & Koi' },
    { name: 'Pond Pumps', image: '/images/pumpRepair.webp', category: 'Pond Supplies' },
    { name: 'Goldfish Varieties', image: '/images/IMG_2780.jpg', category: 'Fish & Koi' },
    { name: 'Pond Liners', image: '/images/IMG_2776.jpg', category: 'Pond Supplies' },
    { name: 'Filtration Systems', image: '/images/IMG_2782.jpg', category: 'Pond Supplies' },
    { name: 'Pond Accessories', image: '/images/IMG_2782.jpg', category: 'Pond Supplies' },
    { name: 'Water Treatments', image: '/images/IMG_2770.jpg', category: 'Pond Supplies' },
    { name: 'Spring Blooms', image: '/images/IMG_2775.jpg', category: 'Seasonal Plants' },
    { name: 'Summer Collection', image: '/images/IMG_2779.jpg', category: 'Seasonal Plants' },
    { name: 'Fall Preparations', image: '/images/IMG_2780.jpg', category: 'Seasonal Plants' }
  ];

  // All resources from the resources page
  const allResources = [
    { name: 'Care Guides', image: '/images/IMG_2775.jpg', path: '/resources/care-guides', description: 'Comprehensive guides for pond and aquatic life care' },
    { name: 'Pond Tips & Tricks', image: '/images/IMG_2779.jpg', path: '/resources/tips-tricks', description: 'Expert tips to keep your pond healthy and beautiful' },
    { name: 'Seasonal Care', image: '/images/IMG_2780.jpg', path: '/resources/seasonal-care', description: 'Season-specific care instructions for your pond' },
    { name: 'Troubleshooting', image: '/images/IMG_2776.jpg', path: '/resources/troubleshooting', description: 'Solutions to common pond problems' },
    { name: 'Video Tutorials', image: '/images/IMG_2782.jpg', path: '/resources/video-tutorials', description: 'Step-by-step video guides for pond care' },
    { name: 'FAQ', image: '/images/IMG_2770.jpg', path: '/resources/faq', description: 'Answers to frequently asked questions' }
  ];

  // All plants from the plant data
  const allPlants = getAllPlants();

  const productsPerSlide = 4;
  const totalSlides = Math.ceil(allProducts.length / productsPerSlide);
  
  const resourcesPerSlide = 3;
  const totalResourceSlides = Math.ceil(allResources.length / resourcesPerSlide);

  const plantsPerSlide = 4;
  const totalPlantSlides = Math.ceil(allPlants.length / plantsPerSlide);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const nextResourceSlide = () => {
    setCurrentResourceSlide((prev) => (prev + 1) % totalResourceSlides);
  };

  const prevResourceSlide = () => {
    setCurrentResourceSlide((prev) => (prev - 1 + totalResourceSlides) % totalResourceSlides);
  };

  const nextPlantSlide = useCallback(() => {
    setCurrentPlantSlide((prev) => (prev + 1) % totalPlantSlides);
  }, [totalPlantSlides]);

  const prevPlantSlide = useCallback(() => {
    setCurrentPlantSlide((prev) => (prev - 1 + totalPlantSlides) % totalPlantSlides);
  }, [totalPlantSlides]);


  const getCurrentResources = () => {
    const startIndex = currentResourceSlide * resourcesPerSlide;
    return allResources.slice(startIndex, startIndex + resourcesPerSlide);
  };

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

  // Add touch/swipe and click-and-drag support for carousel
  useEffect(() => {
    const carousel = document.querySelector('.shop-grid');
    if (!carousel) return;

    let startX = 0;
    let endX = 0;
    let isDragging = false;
    let isMouseDown = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      carousel.classList.add('dragging');
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      if (!isDragging) return;
      endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;
      const threshold = 50; // Minimum swipe distance

      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          // Swipe left - next slide
          nextSlide();
        } else {
          // Swipe right - previous slide
          prevSlide();
        }
      }
      carousel.classList.remove('dragging');
      isDragging = false;
    };

    const handleMouseDown = (e) => {
      startX = e.clientX;
      isMouseDown = true;
      isDragging = true;
      carousel.classList.add('dragging');
      e.preventDefault();
    };

    const handleMouseMove = (e) => {
      if (!isMouseDown || !isDragging) return;
      e.preventDefault();
    };

    const handleMouseUp = (e) => {
      if (!isMouseDown || !isDragging) return;
      endX = e.clientX;
      const diffX = startX - endX;
      const threshold = 50; // Minimum drag distance

      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          // Drag left - next slide
          nextSlide();
        } else {
          // Drag right - previous slide
          prevSlide();
        }
      }
      carousel.classList.remove('dragging');
      isMouseDown = false;
      isDragging = false;
    };

    const handleMouseLeave = () => {
      carousel.classList.remove('dragging');
      isMouseDown = false;
      isDragging = false;
    };

    // Touch events
    carousel.addEventListener('touchstart', handleTouchStart, { passive: false });
    carousel.addEventListener('touchmove', handleTouchMove, { passive: false });
    carousel.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Mouse events for click and drag
    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mousemove', handleMouseMove);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchmove', handleTouchMove);
      carousel.removeEventListener('touchend', handleTouchEnd);
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mousemove', handleMouseMove);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [currentSlide, nextSlide, prevSlide]);

  return (
    <>
      <SEO 
        title="Complete Pond & Water Feature Solutions"
        description="Utah's premier pond and water feature specialists. We design, build, and maintain beautiful custom ponds, waterfalls, and aquatic plant features throughout Utah."
        keywords="pond maintenance, pond cleaning, pond construction, pond dredging, aquatic plants, koi fish, pond supplies, utah water gardens, salt lake city pond services"
        canonical="https://utahwatergardens.com"
      />
      <div className="home-page">
      <section className="hero">
        <div className="hero-background">
          <img 
            src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" 
            alt="Beautiful pond landscape with waterfall and rock features"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text-content">
            <h1 className="hero-title">
              Create Your Dream
              <span className="hero-title-highlight"> Water Garden</span>
            </h1>
            
            <p className="hero-subtitle">
              From stunning koi ponds to tranquil water features, we bring your aquatic vision to life with expert design, construction, and maintenance services.
            </p>
            
            {/* Mobile-only simplified subtitle */}
            <p className="hero-subtitle-mobile">
              Expert pond design, construction, and maintenance services.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">Experience</div>
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">Projects</div>
                <div className="stat-number">2500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item desktop-only">
                <div className="stat-icon">Customers</div>
                <div className="stat-number">2500+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item desktop-only">
                <div className="stat-icon">Plants</div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Plant Varieties</div>
              </div>
            </div>
            
            <div className="hero-buttons">
              <Link to="/plants-fish" className="btn btn-secondary btn-large desktop-only">
                View Plants & Fish →
              </Link>
              <Link to="/pond-services" className="btn btn-secondary btn-large">
                Our Services →
              </Link>
              <Link to="/free-estimate" className="btn btn-primary btn-large">
                Get a Free Estimate →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-overview first-section-gradient">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Your full-service pond business offering complete water garden solutions from design to maintenance</p>
          </div>
          <div className="services-grid">
            <Link to="/pond-services/design-build" className="service-card">
              <div className="service-image">
                <img src="/images/pondConstruction1000x800.webp" alt="Custom pond construction services" />
              </div>
              <div className="service-content">
                <h3>Pond Design & Construction</h3>
                <p>Transform your vision into reality with our custom pond design and construction services. From intimate water features to expansive koi ponds, we create stunning aquatic landscapes.</p>
                <p className="service-description-mobile">Custom pond design and construction services for your dream water feature.</p>
                <ul className="service-features desktop-only">
                  <li>Custom design & planning</li>
                  <li>Professional installation</li>
                  <li>Quality materials & equipment</li>
                  <li>Landscaping integration</li>
                </ul>
                <div className="service-buttons">
                  <span className="btn btn-primary">Learn More</span>
                  <a href="tel:(801) 590-8516" className="btn btn-secondary" onClick={(e) => e.stopPropagation()}>Get Quote</a>
                </div>
              </div>
            </Link>
            
            <Link to="/pond-services/maintenance" className="service-card">
              <div className="service-image">
                <img src="/images/pondMaintenance.webp" alt="Professional pond maintenance services" />
              </div>
              <div className="service-content">
                <h3>Pond Maintenance & Care</h3>
                <p>Keep your water garden thriving with our comprehensive maintenance program. We handle water quality testing, plant care, equipment maintenance, and seasonal preparation.</p>
                <p className="service-description-mobile">Complete maintenance program to keep your water garden healthy and beautiful.</p>
                <ul className="service-features desktop-only">
                  <li>Water quality testing & treatment</li>
                  <li>Plant trimming & fertilization</li>
                  <li>Equipment inspection & repair</li>
                  <li>Seasonal preparation</li>
                </ul>
                <div className="service-buttons">
                  <span className="btn btn-primary">Learn More</span>
                  <a href="tel:(801) 590-8516" className="btn btn-secondary" onClick={(e) => e.stopPropagation()}>Schedule Service</a>
                </div>
              </div>
            </Link>
            
            <Link to="/pond-and-lake-dredging" className="service-card">
              <div className="service-image">
                <img src="/images/pondDredging-topaz-enhance-3.9x.jpeg" alt="Pond dredging and restoration services" />
              </div>
              <div className="service-content">
                <h3>Lake & Pond Dredging</h3>
                <p>Restore your pond's depth and functionality with our professional dredging services. We remove accumulated sediment and restore proper water circulation for healthy aquatic life.</p>
                <p className="service-description-mobile">Professional dredging services to restore your pond's depth and health.</p>
                <ul className="service-features desktop-only">
                  <li>Sediment removal</li>
                  <li>Depth restoration</li>
                  <li>Water circulation improvement</li>
                  <li>Ecosystem rehabilitation</li>
                </ul>
                <div className="service-buttons">
                  <span className="btn btn-primary">Learn More</span>
                  <a href="tel:(801) 590-8516" className="btn btn-secondary" onClick={(e) => e.stopPropagation()}>Get Estimate</a>
                </div>
              </div>
            </Link>
            
            <Link to="/plants-fish" className="service-card">
              <div className="service-image">
                <img src="/images/koi.webp" alt="Koi and fish stocking services" />
              </div>
              <div className="service-content">
                <h3>Plants & Fish Stocking</h3>
                <p>Complete your water garden with our extensive selection of aquatic plants and fish. We offer the largest variety of aquatic plants in Utah and healthy koi for your pond.</p>
                <p className="service-description-mobile">Largest selection of aquatic plants and fish in Utah for your water garden.</p>
                <ul className="service-features desktop-only">
                  <li>Water lilies & aquatic plants</li>
                  <li>Koi & goldfish selection</li>
                  <li>Floating & marginal plants</li>
                  <li>Expert planting & care</li>
                </ul>
                <div className="service-buttons">
                  <span className="btn btn-primary">View Selection</span>
                  <a href="tel:(801) 590-8516" className="btn btn-secondary" onClick={(e) => e.stopPropagation()}>Call for Stock</a>
                </div>
              </div>
            </Link>
          </div>
          
        </div>
      </section>

      {/* Full Width CTA Section */}
      <section className="custom-solution-cta">
        <div className="cta-background">
          <div className="cta-content">
            <h3>Need a Custom Solution?</h3>
            <p>Every property is unique. Let us create a water feature that perfectly fits your space and lifestyle.</p>
            <div className="cta-buttons">
              <a href="tel:(801) 590-8516" className="btn btn-primary btn-large">Call for Quote</a>
              <Link to="/contact" className="btn btn-secondary btn-large">Schedule Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="company-highlight">
        <div className="container">
          <div className="highlight-content">
            <div className="highlight-text">
              <h3 className="highlight-label">UTAH WATER GARDENS</h3>
              <p className="highlight-description">
                Utah Water Gardens maintenance services are customized to your specific location. Through expert design and comprehensive care, we deliver precise solutions to bring your water feature to its full, thriving potential.
              </p>
              <div className="store-visit-cta">
                <h4>Visit Our Retail Store</h4>
                <p>See our complete selection of aquatic plants, fish, and pond supplies in person. Our knowledgeable staff is ready to help you choose the perfect additions for your water garden.</p>
                <div className="store-info">
                  <div className="store-address">
                    <strong>Utah Water Gardens</strong><br />
                    5911 S 1300 E<br />
                    Salt Lake City, UT 84121
                  </div>
                  <div className="store-hours">
                    <strong>Store Hours:</strong><br />
                    Mon-Sat: 10:00AM-6PM<br />
                    Sunday: Closed
                  </div>
                </div>
                <a href="https://maps.google.com/maps?q=5911+S+1300+E,+Salt+Lake+City,+UT+84121" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-store">
                  Get Directions →
                </a>
              </div>
            </div>
            <div className="highlight-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="feature-text">Expert Design</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                    <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
                  </svg>
                </div>
                <span className="feature-text">Largest Plant Selection</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                    <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                    <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                    <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                  </svg>
                </div>
                <span className="feature-text">Licensed & Insured</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <span className="feature-text">Complete Care</span>
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
                src="/images/IMG_1398-topaz-sharpen-textai.jpeg" 
                alt="Beautiful water feature with natural rocks and clear turquoise water" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="shop-preview">
        <div className="container">
          <div className="shop-header">
            <div className="shop-title-section">
              <h2>Shop</h2>
              <p>Browse our selection of do-it-yourself aquatic management products, as well as live fish and plant life. If you get in too deep and need a hand, check out our science-driven <strong>pond & water feature management</strong> services.</p>
            </div>
            <div className="shop-navigation">
              <Link to="/shop" className="shop-link">Visit the Shop</Link>
              <div className="shop-arrows">
                <button className="arrow-btn" onClick={prevSlide} aria-label="Previous items">←</button>
                <button className="arrow-btn" onClick={nextSlide} aria-label="Next items">→</button>
              </div>
            </div>
          </div>
          
          <div className="shop-carousel">
            <div className="shop-grid" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="shop-slide">
                  {allProducts.slice(slideIndex * productsPerSlide, (slideIndex + 1) * productsPerSlide).map((product, index) => (
                    <Link key={index} to="/shop" className="shop-item">
                      <div className="shop-item-image">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <h3>{product.name}</h3>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="plants-preview">
        <div className="container">
          <div className="plants-header">
            <div className="plants-title-section">
              <h2>Our Plant Collection</h2>
              <p>Explore our extensive collection of aquatic plants, from beautiful water lilies to hardy marginal plants. Each plant is carefully selected for Utah's climate and comes with detailed care instructions.</p>
            </div>
            <div className="plants-navigation">
              <Link to="/plants-fish" className="plants-link">View All Plants</Link>
              <div className="plants-arrows">
                <button className="arrow-btn" onClick={prevPlantSlide} aria-label="Previous plants">←</button>
                <button className="arrow-btn" onClick={nextPlantSlide} aria-label="Next plants">→</button>
              </div>
            </div>
          </div>
          
          <div className="plants-carousel">
            <div className="plants-grid" style={{ transform: `translateX(-${currentPlantSlide * 100}%)` }}>
              {Array.from({ length: totalPlantSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="plants-slide">
                  {allPlants.slice(slideIndex * plantsPerSlide, (slideIndex + 1) * plantsPerSlide).map((plant, index) => (
                    <Link key={index} to={`/plant/${createPlantSlug(plant.name)}`} className="plant-item">
                      <div className="plant-item-image">
                        <img src={plant.image} alt={plant.name} />
                      </div>
                      <div className="plant-item-content">
                        <h3>{plant.name}</h3>
                        <p className="plant-category">{plant.category}</p>
                        <p className="plant-description">{plant.description}</p>
                        <div className="plant-price">
                          {plant.price && <span className="price">${plant.price}</span>}
                          {plant.availability && <span className="availability">{plant.availability}</span>}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {Array.from({ length: totalPlantSlides }, (_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentPlantSlide ? 'active' : ''}`}
                  onClick={() => setCurrentPlantSlide(index)}
                  aria-label={`Go to plant slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="resources-preview gradient-wipe-up">
        <div className="container">
          <div className="resources-header">
            <div className="resources-title-section">
              <h2>Resources</h2>
              <p>Access our comprehensive library of pond care guides, expert tips, and troubleshooting solutions. Learn from our years of experience to keep your water garden healthy and beautiful year-round.</p>
            </div>
            <div className="resources-navigation">
              <Link to="/resources" className="resources-link">View All Resources</Link>
              <div className="resources-arrows">
                <button className="arrow-btn" onClick={prevResourceSlide} aria-label="Previous resources">←</button>
                <button className="arrow-btn" onClick={nextResourceSlide} aria-label="Next resources">→</button>
              </div>
            </div>
          </div>
          
          <div className="resources-carousel">
            <div className="resources-grid">
              {getCurrentResources().map((resource, index) => (
                <Link key={index} to={resource.path} className="resource-item">
                  <div className="resource-item-image">
                    <img src={resource.image} alt={resource.name} />
                  </div>
                  <div className="resource-item-content">
                    <h3>{resource.name}</h3>
                    <p>{resource.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="carousel-indicators">
              {Array.from({ length: totalResourceSlides }, (_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentResourceSlide ? 'active' : ''}`}
                  onClick={() => setCurrentResourceSlide(index)}
                  aria-label={`Go to resource slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

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
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a consultation or quote on your pond project.</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
            <Link to="/contact" className="btn btn-secondary">Send Message</Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;
