import React from 'react';
import PageHero from '../components/PageHero.js';
import './ShopPage.css';

const ShopPage = () => {
  // Featured products section
  const featuredProducts = [
    {
      name: 'Pond Liners',
      image: '/images/IMG_2776.jpg',
      description: 'High-quality EPDM and PVC pond liners - Essential for any pond project',
      price: 'Varies by size',
      phone: '(801) 590-8516',
      featured: true,
      badge: 'Most Popular'
    },
    {
      name: 'Truxor T50 - NEW!',
      image: '/images/truxor-equipment-1.jpg',
      description: 'Revolutionary amphibious land and water tool for pond maintenance and cleaning',
      price: 'Contact for pricing',
      phone: '(801) 590-8516',
      featured: true,
      badge: 'New Equipment'
    }
  ];

  const products = [
    {
      id: 'aquatic-plants',
      category: 'Aquatic Plants',
      items: [
        {
          name: 'Water Lilies',
          image: '/images/waterLillies.webp',
          description: 'Winter hardy water lilies in various colors',
          price: '$15.99',
          phone: '(801) 590-8516'
        },
        {
          name: 'Floating Plants',
          image: '/images/IMG_2775.jpg',
          description: 'Water lettuce, water hyacinth, and duckweed for natural filtration',
          price: '$8.99',
          phone: '(801) 590-8516'
        },
        {
          name: 'Marginal Plants',
          image: '/images/IMG_2779.jpg',
          description: 'Cattails, rushes, and other edge plants for pond borders',
          price: '$12.99',
          phone: '(801) 590-8516'
        },
        {
          name: 'Submerged Plants',
          image: '/images/IMG_2770.jpg',
          description: 'Anacharis, hornwort, and other oxygenating plants',
          price: '$9.99',
          phone: '(801) 590-8516'
        }
      ]
    },
    {
      id: 'fish-koi',
      category: 'Fish & Koi',
      items: [
        {
          name: 'Koi Fish',
          image: '/images/koi.webp',
          description: 'Beautiful koi in various sizes and colors',
          price: 'Contact for pricing',
          phone: '(801) 590-8516'
        },
        {
          name: 'Pond Pumps',
          image: '/images/pumpRepair.webp',
          description: 'Energy-efficient pumps and aeration systems',
          price: 'Contact for pricing',
          phone: '(801) 590-8516'
        },
        {
          name: 'Goldfish Varieties',
          image: '/images/IMG_2780.jpg',
          description: 'Comet, shubunkin, and fancy goldfish',
          price: 'Contact for pricing',
          phone: '(801) 590-8516'
        }
      ]
    },
    {
      id: 'pond-supplies',
      category: 'Pond Supplies',
      items: [
        {
          name: 'Pond Liners',
          image: '/images/IMG_2776.jpg',
          description: 'High-quality EPDM and PVC pond liners',
          price: 'Varies by size',
          phone: '(801) 590-8516'
        },
        {
          name: 'Filtration Systems',
          image: '/images/IMG_2782.jpg',
          description: 'Complete pond filtration and UV systems',
          price: 'Contact for pricing',
          phone: '(801) 590-8516'
        },
        {
          name: 'Pond Pumps',
          image: '/images/pumpRepair.webp',
          description: 'Energy-efficient pond pumps in various sizes',
          price: 'Contact for pricing',
          phone: '(801) 590-8516'
        },
        {
          name: 'Water Treatments',
          image: '/images/IMG_2770.jpg',
          description: 'Dechlorinator, beneficial bacteria, and algae control',
          price: 'Varies',
          phone: '(801) 590-8516'
        }
      ]
    },
    {
      id: 'seasonal-plants',
      category: 'Seasonal Plants',
      items: [
        {
          name: 'Spring Blooms',
          image: '/images/IMG_2775.jpg',
          description: 'Early spring aquatic plants and flowers',
          price: '$10.99 - $18.99',
          phone: '(801) 590-8516'
        },
        {
          name: 'Summer Collection',
          image: '/images/IMG_2779.jpg',
          description: 'Heat-loving tropical plants and water features',
          price: '$12.99 - $24.99',
          phone: '(801) 590-8516'
        },
        {
          name: 'Fall Preparations',
          image: '/images/IMG_2780.jpg',
          description: 'Winter-hardy plants and fall maintenance supplies',
          price: '$8.99 - $15.99',
          phone: '(801) 590-8516'
        }
      ]
    }
  ];

  return (
    <div className="shop-page">
      <PageHero 
        title="Shop Our Products"
        subtitle="Largest variety of aquatic plants and pond supplies in Utah"
        backgroundImage="/images/IMG_2770.jpg"
        backgroundImageAlt="Utah Water Gardens retail store with aquatic plants and supplies"
      />
      
      <section className="shop-cta-section">
        <div className="container">
          <a href="tel:(801) 590-8516" className="hero-cta">Call (801) 590-8516 for Expert Advice</a>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <p>Our most popular items and newest equipment</p>
          <div className="featured-grid">
            {featuredProducts.map((product, index) => (
              <div key={index} className="featured-product-card">
                <div className="product-badge">{product.badge}</div>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-price">{product.price}</div>
                  <a href={`tel:${product.phone}`} className="btn btn-primary">Call for Details</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          {products.map((category) => (
            <div key={category.id} className="product-category">
              <h2>{category.category}</h2>
              <div className="products-grid">
                {category.items.map((product, index) => (
                  <div key={index} className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <div className="product-price">{product.price}</div>
                      <a href={`tel:${product.phone}`} className="btn btn-primary">Call for Details</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shop-info-section">
        <div className="container">
          <div className="shop-info-content">
            <div className="shop-info-text">
              <h2>Visit Our Store Today!</h2>
              <p><strong>See our Pond Liners and NEW Truxor T50 in person!</strong> Come visit our store to see our complete selection of aquatic plants, fish, and pond supplies. Our knowledgeable staff can help you choose the perfect plants and supplies for your pond.</p>
              <div className="shop-details">
                <div className="shop-detail">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>5911 S 1300 E, Salt Lake City, UT 84121</span>
                </div>
                <div className="shop-detail">
                  <i className="fas fa-phone"></i>
                  <span>(801) 590-8516</span>
                </div>
                <div className="shop-detail">
                  <i className="fas fa-clock"></i>
                  <span>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</span>
                </div>
              </div>
              <div className="shop-cta-buttons">
                <a href="tel:(801) 590-8516" className="btn btn-primary">Call Us Now</a>
                <a href="https://maps.google.com/maps?q=5911+S+1300+E,+Salt+Lake+City,+UT+84121" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Get Directions</a>
              </div>
            </div>
            <div className="shop-info-image">
              <img 
                src="/images/IMG_2770.jpg" 
                alt="Our store and pond maintenance services" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="shop-cta">
        <div className="container">
          <h2>Need Help Choosing?</h2>
          <p>Our experts can help you select the perfect plants and supplies for your pond project.</p>
          <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516 for Assistance</a>
        </div>
      </section>

      <section className="retail-highlights">
        <div className="container">
          <h2>What Makes Our Retail Location Special</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <img src="/images/IMG_2775.jpg" alt="Expert plant selection" />
              <h3>Expert Plant Selection</h3>
              <p>Our staff hand-picks the healthiest and most beautiful plants for your pond</p>
              <a href="tel:(801) 590-8516" className="highlight-cta">Call for Plant Advice</a>
            </div>
            <div className="highlight-card">
              <img src="/images/IMG_2779.jpg" alt="Seasonal availability" />
              <h3>Seasonal Availability</h3>
              <p>We stock plants that are appropriate for each season and Utah's climate</p>
              <a href="tel:(801) 590-8516" className="highlight-cta">Check Current Stock</a>
            </div>
            <div className="highlight-card">
              <img src="/images/IMG_2780.jpg" alt="Local expertise" />
              <h3>Local Expertise</h3>
              <p>We know what works in Utah's unique environment and can guide your choices</p>
              <a href="tel:(801) 590-8516" className="highlight-cta">Get Local Advice</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
