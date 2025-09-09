import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './PondSuppliesPage.css';

const PondSuppliesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Products Available', icon: 'Products' },
    { number: '50+', label: 'Brands Carried', icon: 'Brands' },
    { number: '15+', label: 'Years Experience', icon: 'Experience' },
    { number: '100%', label: 'Quality Guaranteed', icon: 'Quality' }
  ];

  const supplyCategories = [
    {
      name: 'Filtration Systems',
      path: '/pond-supplies/filtration',
      description: 'High-quality filtration systems for crystal clear water',
      image: '/images/IMG_2782.jpg',
      products: ['Biological Filters', 'Mechanical Filters', 'UV Sterilizers', 'Filter Media']
    },
    {
      name: 'Pumps & Aeration',
      path: '/pond-supplies/pumps-aeration',
      description: 'Reliable pumps and aeration systems for healthy ponds',
      image: '/images/pumpRepair.webp',
      products: ['Submersible Pumps', 'External Pumps', 'Air Pumps', 'Airstones', 'Diffusers']
    },
    {
      name: 'Pond Liners',
      path: '/pond-supplies/liners',
      description: 'Durable pond liners for water retention',
      image: '/images/IMG_2776.jpg',
      products: ['EPDM Liners', 'PVC Liners', 'Preformed Ponds', 'Underlayment']
    },
    {
      name: 'Water Treatments',
      path: '/pond-supplies/water-treatments',
      description: 'Safe and effective water treatment solutions',
      image: '/images/IMG_2770.jpg',
      products: ['Dechlorinators', 'pH Adjusters', 'Algae Control', 'Beneficial Bacteria']
    },
    {
      name: 'Pond Lighting',
      path: '/pond-supplies/lighting',
      description: 'Beautiful lighting to showcase your pond at night',
      image: '/images/IMG_2780.jpg',
      products: ['Submersible Lights', 'Floating Lights', 'Pathway Lights', 'LED Systems']
    },
    {
      name: 'Tools & Accessories',
      path: '/pond-supplies/tools',
      description: 'Essential tools and accessories for pond maintenance',
      image: '/images/IMG_2779.jpg',
      products: ['Nets', 'Pond Vacuums', 'Test Kits', 'Thermometers', 'Skimmers']
    }
  ];

  const featuredProducts = [
    {
      name: 'Premium Koi Food',
      category: 'Fish Care',
      image: '/images/koi-topaz-enhance-4x.jpeg'
    },
    {
      name: 'Water Lily Fertilizer',
      category: 'Plant Care',
      image: '/images/waterLillies-topaz-enhance-4x.jpeg'
    },
    {
      name: 'Pond Net Cover',
      category: 'Protection',
      image: '/images/IMG_2775.jpg'
    },
    {
      name: 'Digital Water Tester',
      category: 'Testing',
      image: '/images/IMG_2782.jpg'
    }
  ];

  return (
    <>
      <SEO 
        title="Pond Supplies - Everything You Need for Your Water Garden | Utah Water Gardens"
        description="Shop our complete selection of pond supplies including filtration systems, pumps, liners, water treatments, lighting, and tools. Quality products for all your pond needs."
        keywords="pond supplies, pond equipment, filtration systems, pond pumps, pond liners, water treatments, pond lighting, pond tools, utah pond supplies"
        canonical="https://utahwatergardens.com/pond-supplies"
      />
      <div className={`pond-supplies-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <section className="pond-supplies-hero">
          <div className="hero-background">
            <img 
              src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" 
              alt="Beautiful pond with supplies and equipment"
              className="hero-image"
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="hero-content">
            <div className="hero-text-content">
              <h1 className="hero-title">
                Pond 
                <span className="hero-title-highlight"> Supplies</span>
              </h1>
              
              <p className="hero-subtitle">
                Everything you need to build, maintain, and enhance your pond with quality products and expert advice.
              </p>
              
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
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
          {/* Main Content */}
          <section className="pond-supplies-main-content">
          <div className="container">
            <div className="page-intro">
              <h2>Complete Pond Supply Solutions</h2>
              <p>
                From filtration systems to water treatments, we carry everything you need to create and maintain 
                a beautiful, healthy pond. Our extensive inventory includes top-quality products from leading 
                manufacturers, backed by our expert knowledge and customer service.
              </p>
            </div>

            {/* Supply Categories */}
            <div className="supply-categories">
              <h2>Shop by Category</h2>
              <div className="categories-grid">
                {supplyCategories.map((category, index) => (
                  <Link key={index} to={category.path} className="category-card">
                    <div className="category-image">
                      <img src={category.image} alt={category.name} />
                      <div className="category-overlay">
                        <span className="category-icon">Shop</span>
                      </div>
                    </div>
                    <div className="category-content">
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                      <div className="category-products">
                        <h4>Popular Products:</h4>
                        <ul>
                          {category.products.slice(0, 3).map((product, productIndex) => (
                            <li key={productIndex}>{product}</li>
                          ))}
                          {category.products.length > 3 && (
                            <li>+{category.products.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                      <span className="category-link">Shop {category.name} →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured Products */}
            <div className="featured-products">
              <h2>Featured Products</h2>
              <div className="products-grid">
                {featuredProducts.map((product, index) => (
                  <div key={index} className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-content">
                      <div className="product-category">{product.category}</div>
                      <h3>{product.name}</h3>
                      <button className="product-btn">Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why Choose Our Pond Supplies?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">Quality</div>
                <h4>Premium Quality</h4>
                <p>We carry only the highest quality products from trusted manufacturers</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Expertise</div>
                <h4>Expert Advice</h4>
                <p>Our knowledgeable staff can help you choose the right products</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Selection</div>
                <h4>Wide Selection</h4>
                <p>Over 500 products from 50+ brands to meet all your needs</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Support</div>
                <h4>Ongoing Support</h4>
                <p>We're here to help with installation and maintenance advice</p>
              </div>
            </div>
          </div>
        </section>

        {/* Store Information */}
        <section className="store-info-section">
          <div className="container">
            <div className="store-info-content">
              <div className="store-info-text">
                <h2>Visit Our Store</h2>
                <p>
                  Come see our complete selection of pond supplies in person. Our knowledgeable staff 
                  can help you find exactly what you need for your pond project.
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
                <img src="/images/IMG_2770.jpg" alt="Our store with pond supplies and equipment" />
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* CTA Section */}
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
            <h2>Need Help Choosing the Right Supplies?</h2>
            <p>Our experts are here to help you find the perfect products for your pond.</p>
            <div className="cta-buttons">
              <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
              <Link to="/contact" className="btn btn-secondary">Get Expert Advice</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PondSuppliesPage;