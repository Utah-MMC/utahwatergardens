import React from 'react';
import { Link } from 'react-router-dom';
import './PondSuppliesPage.css';

const PondSuppliesPage = () => {
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
      price: '$24.99',
      image: '/images/koi-topaz-enhance-4x.jpeg'
    },
    {
      name: 'Water Lily Fertilizer',
      category: 'Plant Care',
      price: '$19.99',
      image: '/images/waterLillies-topaz-enhance-4x.jpeg'
    },
    {
      name: 'Pond Net Cover',
      category: 'Protection',
      price: '$34.99',
      image: '/images/IMG_2775.jpg'
    },
    {
      name: 'Digital Water Tester',
      category: 'Testing',
      price: '$89.99',
      image: '/images/IMG_2782.jpg'
    }
  ];

  return (
    <div className="pond-supplies-page">
      <div className="hero-section">
        <div className="hero-video">
          <div 
            className="hero-image-bg"
            style={{
              backgroundImage: `url('/images/Pond-Supplies.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <h1>Pond Supplies</h1>
            <p>Everything you need to build, maintain, and enhance your pond</p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Supply Categories */}
        <section className="supply-categories first-section-gradient">
          <h2>Shop by Category</h2>
          <div className="categories-grid">
            {supplyCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <ul className="product-list">
                    {category.products.map((product, productIndex) => (
                      <li key={productIndex}>{product}</li>
                    ))}
                  </ul>
                  <Link to={category.path} className="btn btn-primary">
                    Browse {category.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-content">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="product-price">{product.price}</div>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Shop With Us */}
        <section className="why-shop-with-us">
          <h2>Why Shop With Utah Water Gardens?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🚚</div>
              <h3>Fast Shipping</h3>
              <p>Quick delivery to your doorstep</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💯</div>
              <h3>Quality Guaranteed</h3>
              <p>Premium products from trusted brands</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 6 12 6S18 8.69 18 12 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z" fill="#FF6B6B"/>
  </svg>
              </div>
              <h3>Expert Advice</h3>
              <p>Get help choosing the right products</p>
            </div>
            <div className="benefit-item">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8H20C21.1 8 22 8.9 22 10V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V10C2 8.9 2.9 8 4 8H6V6C6 3.79 7.79 2 10 2H14C16.21 2 18 3.79 18 6V8ZM16 8V6C16 4.9 15.1 4 14 4H10C8.9 4 8 4.9 8 6V8H16ZM4 10V20H20V10H4Z" fill="#28A745"/>
  </svg>
              </div>
              <h3>Secure Shopping</h3>
              <p>Safe and protected transactions</p>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="special-offers gradient-wipe-up">
          <h2>Special Offers</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <h3>New Customer Discount</h3>
              <p>Get 10% off your first order</p>
              <span className="offer-code">Code: NEW10</span>
            </div>
            <div className="offer-card">
              <h3>Free Shipping</h3>
              <p>Free shipping on orders over $100</p>
              <span className="offer-code">Code: FREESHIP</span>
            </div>
            <div className="offer-card">
              <h3>Bundle Savings</h3>
              <p>Save 15% on pond starter kits</p>
              <span className="offer-code">Code: BUNDLE15</span>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section 
          className="contact-cta"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h2>Need Help Choosing?</h2>
          <p>Our experts can help you select the perfect supplies for your pond</p>
          <div className="cta-buttons">
            <a href="tel:(801) 590-8516" className="btn btn-primary">
              Call (801) 590-8516
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Send Message
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PondSuppliesPage;
