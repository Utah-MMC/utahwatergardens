import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
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
        title="Pond Supplies - Premium Water Garden Equipment & Products | Utah Water Gardens"
        description="Shop our comprehensive selection of 500+ pond supplies including filtration systems, pumps, liners, water treatments, lighting, and tools. Professional-grade equipment from 50+ top brands. Serving Salt Lake County, Davis County, and surrounding areas with expert advice and quality guaranteed."
        keywords="pond supplies, pond equipment, filtration systems, pond pumps, pond liners, water treatments, pond lighting, pond tools, utah pond supplies, salt lake county pond supplies, davis county pond equipment, pond maintenance supplies, koi pond supplies, water garden equipment, pond accessories"
        canonical="https://utahwatergardens.com/pond-supplies"
      />
      <div className={`pond-supplies-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <PageHero
          title="Pond Supplies"
          subtitle="Everything you need to build, maintain, and enhance your pond with quality products and expert advice."
          backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
          stats={stats}
        />

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
              
              <div className="intro-images">
                <img src="/images/IMG_2782.jpg" alt="Professional pond filtration systems and equipment" className="intro-image" />
                <img src="/images/pumpRepair.webp" alt="High-quality pond pumps and aeration equipment" className="intro-image" />
              </div>
              
              <div className="supplies-overview">
                <h3>Premium Pond Equipment & Supplies</h3>
                <p>
                  At Utah Water Gardens, we stock over 500 products from 50+ leading manufacturers to meet all your 
                  water garden needs. Our comprehensive selection includes everything from basic maintenance supplies 
                  to professional-grade equipment used by pond contractors. Whether you're building a new pond, 
                  upgrading existing equipment, or maintaining your current water feature, we have the products 
                  and expertise to help you succeed.
                </p>
                <p>
                  Our knowledgeable staff has over 15 years of experience in pond care and can provide expert 
                  advice on product selection, installation, and maintenance. We understand Utah's unique climate 
                  challenges and can recommend products specifically suited for our region. From energy-efficient 
                  pumps to UV sterilizers that combat algae in our intense sunlight, we carry products that 
                  perform reliably in Utah conditions.
                </p>
              </div>
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

        {/* Product Selection Process */}
        <section className="product-selection-section">
          <div className="container">
            <h2>How to Choose the Right Pond Supplies</h2>
            <div className="selection-steps">
              <div className="selection-step">
                <div className="step-number">1</div>
                <h3>Assess Your Needs</h3>
                <p>Determine your pond size, type (koi, water garden, or natural), and specific requirements for filtration, circulation, and maintenance.</p>
              </div>
              <div className="selection-step">
                <div className="step-number">2</div>
                <h3>Consult Our Experts</h3>
                <p>Our knowledgeable staff can help you select the right products based on your specific situation, budget, and goals.</p>
              </div>
              <div className="selection-step">
                <div className="step-number">3</div>
                <h3>Quality Products</h3>
                <p>Choose from our selection of premium products from trusted manufacturers, all backed by our quality guarantee.</p>
              </div>
              <div className="selection-step">
                <div className="step-number">4</div>
                <h3>Ongoing Support</h3>
                <p>We provide installation guidance, maintenance tips, and ongoing support to ensure your equipment performs optimally.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brands & Manufacturers */}
        <section className="brands-section">
          <div className="container">
            <h2>Trusted Brands & Manufacturers</h2>
            <div className="brands-content">
              <div className="brands-text">
                <p>
                  We partner with over 50 leading manufacturers to bring you the highest quality pond supplies available. 
                  Our carefully curated selection includes products from industry leaders like Tetra, Pondmaster, Laguna, 
                  Aquascape, and many more. Each brand is chosen for their commitment to quality, innovation, and 
                  reliability in pond care applications.
                </p>
                <p>
                  Our relationships with these manufacturers allow us to offer competitive pricing, access to the latest 
                  products, and comprehensive warranties. We stay current with new product releases and can recommend 
                  the most advanced solutions for your specific needs. Whether you need basic maintenance supplies or 
                  cutting-edge filtration technology, we have the right products from trusted brands.
                </p>
              </div>
              <div className="brands-images">
                <img src="/images/IMG_2776.jpg" alt="Premium pond liner materials and construction supplies" className="brands-image" />
                <img src="/images/IMG_2780.jpg" alt="Professional pond lighting and electrical equipment" className="brands-image" />
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

        {/* Service Areas */}
        <section className="service-areas-section">
          <div className="container">
            <h2>Areas We Serve</h2>
            <p className="service-areas-intro">
              We proudly serve the greater Salt Lake City area and surrounding communities with our comprehensive 
              pond supply services. Our store is conveniently located and we offer expert advice to customers throughout Utah.
            </p>
            
            <div className="service-areas-grid">
              <div className="service-area-group">
                <h3>Salt Lake County</h3>
                <div className="cities-list">
                  <span>Salt Lake City</span>
                  <span>West Jordan</span>
                  <span>Murray</span>
                  <span>Sandy</span>
                  <span>West Valley City</span>
                  <span>Draper</span>
                  <span>Cottonwood Heights</span>
                  <span>Holladay</span>
                </div>
              </div>
              
              <div className="service-area-group">
                <h3>Davis County</h3>
                <div className="cities-list">
                  <span>Layton</span>
                  <span>Bountiful</span>
                  <span>Farmington</span>
                  <span>Centerville</span>
                  <span>Kaysville</span>
                  <span>Clearfield</span>
                  <span>Clinton</span>
                  <span>Syracuse</span>
                </div>
              </div>
              
              <div className="service-area-group">
                <h3>Utah County</h3>
                <div className="cities-list">
                  <span>Provo</span>
                  <span>Orem</span>
                  <span>American Fork</span>
                  <span>Lehi</span>
                  <span>Pleasant Grove</span>
                  <span>Spanish Fork</span>
                  <span>Springville</span>
                  <span>Alpine</span>
                </div>
              </div>
              
              <div className="service-area-group">
                <h3>Weber County</h3>
                <div className="cities-list">
                  <span>Ogden</span>
                  <span>Roy</span>
                  <span>Clearfield</span>
                  <span>South Ogden</span>
                  <span>North Ogden</span>
                  <span>Riverdale</span>
                  <span>Washington Terrace</span>
                  <span>Farr West</span>
                </div>
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