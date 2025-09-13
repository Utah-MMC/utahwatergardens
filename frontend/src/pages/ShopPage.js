import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getAllPlants, createPlantSlug } from '../data/plantData';
import './ShopPage.css';

const ShopPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPlantSlide, setCurrentPlantSlide] = useState(0);
  
  // All products from the shop - LIMITED FOR PERFORMANCE
  const allProducts = [
    { name: 'Water Lilies', image: '/images/waterLillies-topaz-enhance-4x.jpeg', category: 'Aquatic Plants', path: '/plants-fish/water-lilies' },
    { name: 'Floating Plants', image: '/images/5f4fbb5840c1b554060a09ace9f579e0-denoise-enhance-4x.jpeg', category: 'Aquatic Plants', path: '/plants-fish/floating-plants' },
    { name: 'Marginal Plants', image: '/images/3e8c02a910ecc02bd046359713860a2c-denoise-enhance-4x.jpeg', category: 'Aquatic Plants', path: '/plants-fish/marginal-plants' },
    { name: 'Submerged Plants', image: '/images/0b89a8b10a3cdccda885b1d037df7b2d-denoise-enhance-4x.jpeg', category: 'Aquatic Plants', path: '/plants-fish/aquatic-plants' },
    { name: 'Koi Fish', image: '/images/koi-topaz-enhance-4x.jpeg', category: 'Fish & Koi', path: '/plants-fish/koi-goldfish' },
    { name: 'Pond Pumps', image: '/images/pumpRepair.webp', category: 'Pond Supplies', path: '/pond-supplies/pumps-aeration' },
    { name: 'Goldfish Varieties', image: '/images/2b1a14d52ea7e62a36a62f1a2da7203a-enhance-4x.jpeg', category: 'Fish & Koi', path: '/plants-fish/koi-goldfish' },
    { name: 'Pond Liners', image: '/images/1c7c15865a8fd7d198a5c69c3087e91c-enhance-4x.jpeg', category: 'Pond Supplies', path: '/pond-supplies/liners' }
  ]; // Limited to 8 items for better performance

  // All plants from the plant data - LIMITED FOR PERFORMANCE
  const allPlants = getAllPlants().slice(0, 12); // Limit to 12 plants for better performance

  const productsPerSlide = 4;
  const totalSlides = Math.ceil(allProducts.length / productsPerSlide);

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

  const nextPlantSlide = useCallback(() => {
    setCurrentPlantSlide((prev) => (prev + 1) % totalPlantSlides);
  }, [totalPlantSlides]);

  const prevPlantSlide = useCallback(() => {
    setCurrentPlantSlide((prev) => (prev - 1 + totalPlantSlides) % totalPlantSlides);
  }, [totalPlantSlides]);

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
      const threshold = 50;

      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          nextSlide();
        } else {
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
      const threshold = 50;

      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          nextSlide();
        } else {
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

    carousel.addEventListener('touchstart', handleTouchStart, { passive: false });
    carousel.addEventListener('touchmove', handleTouchMove, { passive: false });
    carousel.addEventListener('touchend', handleTouchEnd, { passive: true });
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
        title="Pond Supplies & Aquatic Plants - Utah Water Gardens"
        description="Shop our complete selection of pond supplies, aquatic plants, koi fish, and water garden accessories. Utah's largest variety of aquatic plants and pond equipment."
        keywords="pond supplies, aquatic plants, koi fish, pond liners, pond pumps, water treatments, pond accessories, utah water gardens"
        canonical="https://utahwatergardens.com/shop"
      />
      <div className="shop-page">
        {/* Hero Section */}
        <section className="shop-hero">
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
                Pond Supplies & 
                <span className="hero-title-highlight"> Aquatic Plants</span>
              </h1>
              
              <p className="hero-subtitle">
                Everything you need to build, maintain, and enhance your pond. From beautiful aquatic plants to professional-grade equipment, we have Utah's largest selection.
              </p>
              
              <div className="hero-buttons">
                <a href="tel:(801) 590-8516" className="btn btn-primary btn-large">
                  Call (801) 590-8516
                </a>
                <Link to="/plants-fish" className="btn btn-secondary btn-large">
                  View Plants & Fish →
    </Link>
      </div>
      </div>
      </div>
    </section>

      {/* Wavy Divider - Attached to Hero */}
      <div className="hero-wave-attached">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path className="wave-layer-1" d="M0,0L50,20C100,40,200,80,300,80C400,80,500,40,600,20C700,0,800,0,900,20C1000,40,1100,80,1150,100L1200,120V0Z" fill="#ffffff" opacity="0.1"></path>
          <path className="wave-layer-2" d="M0,0L50,15C100,30,200,60,300,60C400,60,500,30,600,15C700,0,800,0,900,15C1000,30,1100,60,1150,75L1200,90V0Z" fill="#ffffff" opacity="0.2"></path>
          <path className="wave-layer-3" d="M0,0L50,10C100,20,200,40,300,40C400,40,500,20,600,10C700,0,800,0,900,10C1000,20,1100,40,1150,50L1200,60V0Z" fill="#ffffff" opacity="0.3"></path>
        </svg>
      </div>

        {/* Main Content Wrapper with Single Gradient */}
        <div className="main-content-gradient">
          {/* Phone CTA Section */}
          <section className="shop-cta-section">
        <div className="container">
            <a href="tel:(801) 590-8516" className="hero-cta">
            Call (801) 590-8516 for Expert Advice
          </a>
        </div>
      </section>

      {/* Shop Introduction */}
        <section className="shop-intro">
        <div className="container">
            <div className="intro-content">
              <h2>Utah's Premier Pond Supply Store</h2>
              <p>
                Welcome to Utah Water Gardens, your one-stop destination for all pond and water garden supplies. 
                With over 15 years of experience serving Utah's pond enthusiasts, we've built the most comprehensive 
                selection of aquatic plants, pond equipment, and water garden accessories in the region.
              </p>
              <p>
                Our knowledgeable staff understands the unique challenges of maintaining ponds in Utah's climate, 
                from our hot summers to cold winters. We carefully select every product in our inventory to ensure 
                it meets our high standards for quality, durability, and effectiveness in local conditions.
              </p>
              
              <div className="intro-images">
                <img src="/images/waterLillies-topaz-enhance-4x.jpeg" alt="Beautiful water lilies in bloom" className="intro-image" />
                <img src="/images/koi-topaz-enhance-4x.jpeg" alt="Colorful koi fish swimming" className="intro-image" />
                <img src="/images/3e8c02a910ecc02bd046359713860a2c (1)-denoise-enhance-4x.jpeg" alt="High-quality pond liner material" className="intro-image" />
              </div>
            </div>
        </div>
      </section>

      {/* Product Categories Overview */}
        <section className="product-categories">
        <div className="container">
            <h2>Our Product Categories</h2>
            <div className="categories-grid">
              <div className="category-item">
                <h3>Aquatic Plants</h3>
                <p>From water lilies to marginal plants, we carry the largest selection of aquatic plants in Utah. All plants are locally grown and adapted to our climate.</p>
                <ul>
                  <li>Water Lilies (Hardy & Tropical)</li>
                  <li>Marginal Plants</li>
                  <li>Floating Plants</li>
                  <li>Submerged Plants</li>
                  <li>Bog Plants</li>
                </ul>
              </div>
              <div className="category-item">
                <h3>Pond Equipment</h3>
                <p>Professional-grade pumps, filters, and aeration systems to keep your pond healthy and beautiful year-round.</p>
                <ul>
                  <li>Pond Pumps</li>
                  <li>Filtration Systems</li>
                  <li>Aeration Equipment</li>
                  <li>UV Sterilizers</li>
                  <li>Skimmers & Drains</li>
                </ul>
              </div>
              <div className="category-item">
                <h3>Pond Liners & Materials</h3>
                <p>High-quality EPDM and PVC liners, underlayment, and construction materials for building or repairing your pond.</p>
                <ul>
                  <li>EPDM Pond Liners</li>
                  <li>PVC Liners</li>
                  <li>Underlayment</li>
                  <li>Adhesives & Sealants</li>
                  <li>Edge Materials</li>
                </ul>
              </div>
              <div className="category-item">
                <h3>Water Treatments</h3>
                <p>Safe and effective treatments to maintain crystal-clear water and healthy aquatic life in your pond.</p>
                <ul>
                  <li>Beneficial Bacteria</li>
                  <li>Algae Control</li>
                  <li>Water Clarifiers</li>
                  <li>pH Balancers</li>
                  <li>Dechlorinators</li>
                </ul>
              </div>
            </div>
        </div>
      </section>

      {/* Featured Products */}
        <section className="featured-products">
        <div className="container">
            <div className="section-header">
              <h2>Featured Products</h2>
              <p>Our most popular items and best sellers</p>
            </div>
            <div className="featured-grid">
              <Link to="/pond-supplies/liners" className="featured-card">
                <div className="featured-image">
                  <img src="/images/3f524798b831b933a60d3f6d15f38e3b-denoise-enhance-4x.jpeg" alt="High-quality pond liners" />
                  <div className="featured-badge">Most Popular</div>
                </div>
                <div className="featured-content">
                  <h3>Pond Liners</h3>
                  <p>High-quality EPDM and PVC pond liners - Essential for any pond project</p>
                  <a href="tel:(801) 590-8516" className="btn btn-primary" onClick={(e) => e.stopPropagation()}>
                    Call for Details
                  </a>
                </div>
              </Link>
              
              <Link to="/plants-fish/water-lilies" className="featured-card">
                <div className="featured-image">
                  <img src="/images/412a45870a56bf675379c3bde8e2ff95-enhance-4x.jpeg" alt="Beautiful water lilies" />
                  <div className="featured-badge">Best Seller</div>
                </div>
                <div className="featured-content">
                  <h3>Water Lilies</h3>
                  <p>Winter hardy water lilies in various colors for your pond</p>
                  <a href="tel:(801) 590-8516" className="btn btn-primary" onClick={(e) => e.stopPropagation()}>
                    Call for Stock
                  </a>
                </div>
              </Link>
              
              <Link to="/pond-supplies/pumps-aeration" className="featured-card">
                <div className="featured-image">
                  <img src="/images/4150c9ec3a4ae862ff09fb4edab8a105-denoise-enhance-4x.jpeg" alt="Energy-efficient pond pumps" />
                  <div className="featured-badge">Professional Grade</div>
                </div>
                <div className="featured-content">
                  <h3>Pond Pumps</h3>
                  <p>Energy-efficient pumps and aeration systems for healthy ponds</p>
                  <a href="tel:(801) 590-8516" className="btn btn-primary" onClick={(e) => e.stopPropagation()}>
                    Get Quote
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Shop Categories */}
        <section className="shop-categories">
          <div className="container">
            <div className="shop-header">
              <div className="shop-title-section">
                <h2>Shop by Category</h2>
                <p>Browse our complete selection of pond supplies, aquatic plants, and fish. Everything you need for your water garden in one place.</p>
              </div>
              <div className="shop-navigation">
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
                      <Link key={index} to={product.path} className="shop-item">
                        <div className="shop-item-image">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            loading="lazy"
                            decoding="async"
                            style={{ 
                              transform: 'translateZ(0)',
                              backfaceVisibility: 'hidden',
                              willChange: 'auto'
                            }}
                          />
                        </div>
                        <div className="shop-item-content">
                          <h3>{product.name}</h3>
                          <p className="shop-category">{product.category}</p>
                        </div>
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

        {/* Plants Collection */}
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
                          <img 
                            src={plant.image} 
                            alt={plant.name}
                            loading="lazy"
                            decoding="async"
                            style={{ 
                              transform: 'translateZ(0)',
                              backfaceVisibility: 'hidden',
                              willChange: 'auto'
                            }}
                          />
                        </div>
                        <div className="plant-item-content">
                          <h3>{plant.name}</h3>
                          <p className="plant-category">{plant.category}</p>
                          <p className="plant-description">{plant.description}</p>
                          <div className="plant-availability">
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

      {/* Store Info */}
        <section className="store-info-section">
        <div className="container">
            <div className="store-info-content">
              <div className="store-info-text">
                <h2>Visit Our Store Today!</h2>
                <p>
                  <strong>See our complete selection in person!</strong> Come visit our store to see our
                complete selection of aquatic plants, fish, and pond supplies. We also offer delivery and scheduled pickup
                options for your convenience. Our knowledgeable staff can help you choose the perfect plants and supplies for your pond.
              </p>
                <div className="store-details">
                  <div className="store-detail">
                  <i className="fas fa-map-marker-alt" aria-hidden></i>
                    <span>5911 S 1300 E, Salt Lake City, UT 84121</span>
                </div>
                  <div className="store-detail">
                  <i className="fas fa-phone" aria-hidden></i>
                    <a href="tel:(801) 590-8516">(801) 590-8516</a>
                </div>
                  <div className="store-detail">
                  <i className="fas fa-clock" aria-hidden></i>
                  <span>Monday - Friday: 10:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</span>
                </div>
              </div>
                <div className="store-cta-buttons">
                  <a href="tel:(801) 590-8516" className="btn btn-primary">Call Us Now</a>
                <a
                  href="https://maps.google.com/maps?q=5911+S+1300+E,+Salt+Lake+City,+UT+84121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Get Directions
                </a>
              </div>
            </div>
              <div className="store-info-image">
                <img src="/images/41bc4bcb74c80d5770a1168c8373dd89-sharpen.jpeg" alt="Our store and pond maintenance services" />
              </div>
          </div>
        </div>
      </section>

        {/* Help CTA */}
        <section className="help-cta">
        <div className="container">
            <h2>Need Help Choosing?</h2>
          <p>Our experts can help you select the perfect plants and supplies for your pond project.</p>
            <a href="tel:(801) 590-8516" className="btn btn-primary">
            Call (801) 590-8516 for Assistance
          </a>
        </div>
      </section>

      {/* Retail Highlights */}
        <section className="retail-highlights gradient-wipe-up">
        <div className="container">
            <h2>What Makes Our Retail Location Special</h2>
            <div className="highlights-grid">
              <Link to="/plants-fish/aquatic-plants" className="highlight-card">
                <img src="/images/443bd1b5cddc4d945e924f40dfbcba96-enhance-4x.jpeg" alt="Expert plant selection" />
              <h3>Expert Plant Selection</h3>
              <p>Our staff hand-picks the healthiest and most beautiful plants for your pond</p>
                <a href="tel:(801) 590-8516" className="highlight-cta" onClick={(e) => e.stopPropagation()}>
                  Call for Plant Advice
                </a>
            </Link>
              <Link to="/plants-fish/aquatic-plants" className="highlight-card">
                <img src="/images/50b7c5b5336aff2aeaf6690696e3e42f-denoise-enhance-4x.jpeg" alt="Seasonal availability" />
              <h3>Seasonal Availability</h3>
              <p>We stock plants that are appropriate for each season and Utah's climate</p>
                <a href="tel:(801) 590-8516" className="highlight-cta" onClick={(e) => e.stopPropagation()}>
                  Check Current Stock
                </a>
            </Link>
              <Link to="/contact" className="highlight-card">
                <img src="/images/65f25c8086c8955b83251f79c1f77da1-enhance-4x.jpeg" alt="Local expertise" />
              <h3>Local Expertise</h3>
              <p>We know what works in Utah's unique environment and can guide your choices</p>
                <a href="tel:(801) 590-8516" className="highlight-cta" onClick={(e) => e.stopPropagation()}>
                  Get Local Advice
                </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
    </>
  );
};


// Internal Links for SEO


const InternalLinks = () => (


  <div style={{ display: 'none' }}>


    <Link to="/contact">utah water gardens</Link>


    <Link to="/plants-fish">utah water gardens</Link>


    <Link to="/pondsupplies">utah water gardens</Link>


    <Link to="/aquatic-plants">utah water gardens</Link>


    <Link to="/fish-koi">utah water gardens</Link>


    <Link to="/">utah water gardens</Link>


  </div>


);



export default ShopPage;