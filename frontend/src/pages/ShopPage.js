// ShopPage.jsx (revamped)
// - Semantic/a11y improvements (nav, article, lists, ARIA labels)
// - Reusable components (FeaturedProductCard, ProductCard, CategorySection)
// - Lazy images + explicit sizes to reduce CLS
// - Phone links normalized to tel:+18015908516
// - JSON-LD for LocalBusiness + OfferCatalog
// - Data moved outside the component to avoid re-creation

import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.js';
import './ShopPage.css';

// ---------------------------------
// Data
// ---------------------------------

const FEATURED_PRODUCTS = [
  {
    name: 'Pond Liners',
    image: '/images/pond_liner_40mil.jpg',
    width: 1000,
    height: 600,
    description: 'High-quality EPDM and PVC pond liners - Essential for any pond project',
    price: 'Varies by size',
    badge: 'Most Popular',
    href: '/pond-supplies/liners',
  },
];

const PRODUCTS = [
  {
    id: 'aquatic-plants',
    category: 'Aquatic Plants',
    items: [
      {
        name: 'Water Lilies',
        image: '/images/waterLillies-topaz-enhance-4x.jpeg',
        width: 1000,
        height: 667,
        description: 'Winter hardy water lilies in various colors',
        price: '$15.99',
        path: '/plants-fish/water-lilies',
      },
      {
        name: 'Floating Plants',
        image: '/images/IMG_2775.jpg',
        width: 1000,
        height: 667,
        description: 'Water lettuce, water hyacinth, and duckweed for natural filtration',
        price: '$8.99',
        path: '/plants-fish/floating-plants',
      },
      {
        name: 'Marginal Plants',
        image: '/images/IMG_2779.jpg',
        width: 1000,
        height: 667,
        description: 'Cattails, rushes, and other edge plants for pond borders',
        price: '$12.99',
        path: '/plants-fish/marginal-plants',
      },
      {
        name: 'Submerged Plants',
        image: '/images/IMG_2770.jpg',
        width: 1000,
        height: 667,
        description: 'Anacharis, hornwort, and other oxygenating plants',
        price: '$9.99',
        path: '/plants-fish/aquatic-plants',
      },
    ],
  },
  {
    id: 'fish-koi',
    category: 'Fish & Koi',
    items: [
      {
        name: 'Koi Fish',
        image: '/images/koi-topaz-enhance-4x.jpeg',
        width: 1000,
        height: 667,
        description: 'Beautiful koi in various sizes and colors',
        price: 'Contact for pricing',
        path: '/plants-fish/koi-goldfish',
      },
      {
        name: 'Pond Pumps',
        image: '/images/pumpRepair.webp',
        width: 1000,
        height: 667,
        description: 'Energy-efficient pumps and aeration systems',
        price: 'Contact for pricing',
        path: '/pond-supplies/pumps-aeration',
      },
      {
        name: 'Goldfish Varieties',
        image: '/images/IMG_2780.jpg',
        width: 1000,
        height: 667,
        description: 'Comet, shubunkin, and fancy goldfish',
        price: 'Contact for pricing',
        path: '/plants-fish/koi-goldfish',
      },
    ],
  },
  {
    id: 'pond-supplies',
    category: 'Pond Supplies',
    items: [
      {
        name: 'Pond Liners',
        image: '/images/pond_liner_roll.jpg',
        width: 1000,
        height: 667,
        description: 'High-quality EPDM and PVC pond liners',
        price: 'Varies by size',
        path: '/pond-supplies/liners',
      },
      {
        name: 'Filtration Systems',
        image: '/images/IMG_2782.jpg',
        width: 1000,
        height: 667,
        description: 'Complete pond filtration and UV systems',
        price: 'Contact for pricing',
        path: '/pond-supplies/filtration',
      },
      {
        name: 'Pond Pumps',
        image: '/images/pumpRepair.webp',
        width: 1000,
        height: 667,
        description: 'Energy-efficient pond pumps in various sizes',
        price: 'Contact for pricing',
        path: '/pond-supplies/pumps-aeration',
      },
      {
        name: 'Water Treatments',
        image: '/images/IMG_2770.jpg',
        width: 1000,
        height: 667,
        description: 'Dechlorinator, beneficial bacteria, and algae control',
        price: 'Varies',
        path: '/pond-supplies/water-treatments',
      },
    ],
  },
  {
    id: 'seasonal-plants',
    category: 'Seasonal Plants',
    items: [
      {
        name: 'Spring Blooms',
        image: '/images/IMG_2775.jpg',
        width: 1000,
        height: 667,
        description: 'Early spring aquatic plants and flowers',
        price: '$10.99 - $18.99',
        path: '/plants-fish/aquatic-plants',
      },
      {
        name: 'Summer Collection',
        image: '/images/IMG_2779.jpg',
        width: 1000,
        height: 667,
        description: 'Heat-loving tropical plants and water features',
        price: '$12.99 - $24.99',
        path: '/plants-fish/aquatic-plants',
      },
      {
        name: 'Fall Preparations',
        image: '/images/IMG_2780.jpg',
        width: 1000,
        height: 667,
        description: 'Winter-hardy plants and fall maintenance supplies',
        price: '$8.99 - $15.99',
        path: '/plants-fish/aquatic-plants',
      },
    ],
  },
];

// ---------------------------------
// UI Primitives
// ---------------------------------

const FeaturedProductCard = memo(function FeaturedProductCard({ product }) {
  return (
    <Link to={product.href} className="featured-product-card" aria-label={`View ${product.name}`}>
      {product.badge && <div className="product-badge" aria-hidden>{product.badge}</div>}
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={product.width}
          height={product.height}
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-price">{product.price}</div>
        <a href="tel:+18015908516" className="btn btn-primary" aria-label={`Call for ${product.name} details`}>
          Call for Details
        </a>
      </div>
    </Link>
  );
});

const ProductCard = memo(function ProductCard({ item }) {
  return (
    <Link to={item.path} className="product-card" aria-label={`View ${item.name}`}>
      <div className="product-image">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={item.width}
          height={item.height}
        />
      </div>
      <div className="product-info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="product-price">{item.price}</div>
        <a href="tel:+18015908516" className="btn btn-primary" aria-label={`Call about ${item.name}`}>
          Call for Details
        </a>
      </div>
    </Link>
  );
});

const CategorySection = memo(function CategorySection({ category }) {
  return (
    <section className="product-category" aria-labelledby={`${category.id}-heading`}>
      <h2 id={`${category.id}-heading`}>{category.category}</h2>
      <div className="products-grid" role="list">
        {category.items.map((item) => (
          <ProductCard key={`${category.id}-${item.name}`} item={item} />
        ))}
      </div>
    </section>
  );
});

// ---------------------------------
// Page
// ---------------------------------

const ShopPage = () => {
  const businessSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Utah Water Gardens',
    url: 'https://www.utahwatergardens.com/shop',
    telephone: '+1-801-590-8516',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5911 S 1300 E',
      addressLocality: 'Salt Lake City',
      addressRegion: 'UT',
      postalCode: '84121',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '16:00' },
    ],
  }), []);

  const catalogSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Pond Products Catalog',
    itemListElement: PRODUCTS.map((cat) => ({
      '@type': 'OfferCatalog',
      name: cat.category,
      itemListElement: cat.items.map((item) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: item.name, description: item.description },
        url: `https://www.utahwatergardens.com${item.path}`,
      })),
    })),
  }), []);

  return (
    <div className="shop-page">
      <PageHero
        title="Pond Supplies"
        subtitle="Everything you need to build, maintain, and enhance your pond"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Beautiful pond landscape with waterfall and rock features"
      />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }} />

      <section className="shop-cta-section first-section-gradient" aria-labelledby="phone-cta">
        <div className="container">
          <a id="phone-cta" href="tel:+18015908516" className="hero-cta" aria-label="Call Utah Water Gardens at (801) 590-8516">
            Call (801) 590-8516 for Expert Advice
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products" aria-labelledby="featured-heading">
        <div className="container">
          <h2 id="featured-heading">Featured Products</h2>
          <p>Our most popular items</p>
          <div className="featured-grid" role="list">
            {FEATURED_PRODUCTS.map((p) => (
              <FeaturedProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="products-section" aria-labelledby="products-heading">
        <div className="container">
          <h2 id="products-heading" className="sr-only">Product Categories</h2>
          {PRODUCTS.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Store Info */}
      <section className="shop-info-section" aria-labelledby="visit-heading">
        <div className="container">
          <div className="shop-info-content">
            <div className="shop-info-text">
              <h2 id="visit-heading">Visit Our Store Today!</h2>
              <p>
                <strong>See our Pond Liners and complete selection in person!</strong> Come visit our store to see our
                complete selection of aquatic plants, fish, and pond supplies. We also offer delivery and scheduled pickup
                options for your convenience. Our knowledgeable staff can help you choose the perfect plants and supplies for your pond.
              </p>
              <div className="shop-details" itemScope itemType="https://schema.org/LocalBusiness">
                <div className="shop-detail">
                  <i className="fas fa-map-marker-alt" aria-hidden></i>
                  <span itemProp="address">5911 S 1300 E, Salt Lake City, UT 84121</span>
                </div>
                <div className="shop-detail">
                  <i className="fas fa-phone" aria-hidden></i>
                  <a href="tel:+18015908516">(801) 590-8516</a>
                </div>
                <div className="shop-detail">
                  <i className="fas fa-clock" aria-hidden></i>
                  <span>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</span>
                </div>
              </div>
              <div className="shop-cta-buttons">
                <a href="tel:+18015908516" className="btn btn-primary">Call Us Now</a>
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
            <div className="shop-info-image">
              <img src="/images/IMG_2770.jpg" alt="Our store and pond maintenance services" loading="lazy" width={1000} height={667} />
            </div>
          </div>
        </div>
      </section>

      {/* Phone CTA */}
      <section className="shop-cta" aria-labelledby="help-heading">
        <div className="container">
          <h2 id="help-heading">Need Help Choosing?</h2>
          <p>Our experts can help you select the perfect plants and supplies for your pond project.</p>
          <a href="tel:+18015908516" className="btn btn-primary" aria-label="Call for assistance">
            Call (801) 590-8516 for Assistance
          </a>
        </div>
      </section>

      {/* Retail Highlights */}
      <section className="retail-highlights gradient-wipe-up" aria-labelledby="highlights-heading">
        <div className="container">
          <h2 id="highlights-heading">What Makes Our Retail Location Special</h2>
          <div className="highlights-grid" role="list">
            <Link to="/plants-fish/aquatic-plants" className="highlight-card" aria-label="Expert plant selection">
              <img src="/images/IMG_2775.jpg" alt="Expert plant selection" loading="lazy" width={1000} height={667} />
              <h3>Expert Plant Selection</h3>
              <p>Our staff hand-picks the healthiest and most beautiful plants for your pond</p>
              <a href="tel:+18015908516" className="highlight-cta">Call for Plant Advice</a>
            </Link>
            <Link to="/plants-fish/aquatic-plants" className="highlight-card" aria-label="Seasonal availability">
              <img src="/images/IMG_2779.jpg" alt="Seasonal availability" loading="lazy" width={1000} height={667} />
              <h3>Seasonal Availability</h3>
              <p>We stock plants that are appropriate for each season and Utah's climate</p>
              <a href="tel:+18015908516" className="highlight-cta">Check Current Stock</a>
            </Link>
            <Link to="/contact" className="highlight-card" aria-label="Local expertise">
              <img src="/images/IMG_2780.jpg" alt="Local expertise" loading="lazy" width={1000} height={667} />
              <h3>Local Expertise</h3>
              <p>We know what works in Utah's unique environment and can guide your choices</p>
              <a href="tel:+18015908516" className="highlight-cta">Get Local Advice</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
