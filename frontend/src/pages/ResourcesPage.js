// ResourcesPage.jsx (revamped)
// - Semantic structure & a11y
// - JSON-LD for CollectionPage + ItemList (featured)
// - Small, reusable components
// - Lazy images, explicit sizes
// - Tel links normalized

import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.js';
import './ResourcesPage.css';

// -----------------------------
// Data (moved outside component)
// -----------------------------

const RESOURCE_CATEGORIES = [
  {
    name: 'Care Guides',
    path: '/resources/care-guides',
    description: 'Comprehensive guides for pond and aquatic life care',
    icon: '📚',
    articles: ['Pond Maintenance Basics', 'Fish Care Guide', 'Plant Care Tips', 'Seasonal Pond Care'],
  },
  {
    name: 'Pond Tips & Tricks',
    path: '/resources/tips-tricks',
    description: 'Expert tips to keep your pond healthy and beautiful',
    icon: '💡',
    articles: ['Water Quality Management', 'Algae Control Methods', 'Pond Aeration Tips', 'Winter Pond Preparation'],
  },
  {
    name: 'Seasonal Care',
    path: '/resources/seasonal-care',
    description: 'Season-specific care instructions for your pond',
    icon: '🌱',
    articles: ['Spring Pond Opening', 'Summer Pond Maintenance', 'Fall Pond Cleanup', 'Winter Pond Care'],
  },
  {
    name: 'Troubleshooting',
    path: '/resources/troubleshooting',
    description: 'Solutions to common pond problems',
    icon: '🔧',
    articles: ['Finding a Leak in Your Pond', 'Pond Water Loss Issues', 'Fish Health Problems', 'Plant Disease Solutions'],
  },
  {
    name: 'Video Tutorials',
    path: '/resources/video-tutorials',
    description: 'Step-by-step video guides for pond care',
    icon: '🎥',
    articles: ['Pond Cleaning Tutorial', 'Filter Maintenance', 'Plant Installation', 'Fish Feeding Guide'],
  },
  {
    name: 'FAQ',
    path: '/resources/faq',
    description: 'Answers to frequently asked questions',
    icon: '❓',
    articles: ['Common Pond Questions', 'Equipment FAQs', 'Plant & Fish FAQs', 'Maintenance FAQs'],
  },
];

const FEATURED_ARTICLES = [
  {
    title: 'Finding a Leak in Your Pond',
    path: '/resources/finding-a-leak-in-your-pond',
    excerpt: 'Learn how to identify and fix common pond leaks',
    category: 'Troubleshooting',
    readTime: '5 min read',
  },
  {
    title: 'Pond Water Loss Issues',
    path: '/resources/pondwaterloss',
    excerpt: 'Understanding and solving water loss problems',
    category: 'Troubleshooting',
    readTime: '4 min read',
  },
  {
    title: 'Pond Maintenance Guide',
    path: '/pond-maintenance',
    excerpt: 'Essential maintenance tips for healthy ponds',
    category: 'Care Guides',
    readTime: '8 min read',
  },
];

const QUICK_LINKS = [
  { name: 'Pond Filters', path: '/pond-filters' },
  { name: 'Pond Pumps', path: '/pumps' },
  { name: 'Pond Maintenance', path: '/pond-maintenance' },
  { name: 'Pond Dredging', path: '/pond-and-lake-dredging' },
  { name: 'Pond Construction', path: '/pond-construction' },
  { name: 'Pond Repair', path: '/pond-repair-and-rebuild' },
];

// -----------------------------
// UI primitives
// -----------------------------

const CategoryCard = memo(function CategoryCard({ category }) {
  return (
    <article className="category-card" itemScope itemType="https://schema.org/CollectionPage">
      <div className="category-header">
        <div className="category-icon" aria-hidden>{category.icon}</div>
        <h3 itemProp="name">{category.name}</h3>
      </div>
      <p itemProp="description">{category.description}</p>
      {category.articles?.length > 0 && (
        <ul className="article-list">
          {category.articles.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      )}
      <Link to={category.path} className="btn btn-primary" aria-label={`View ${category.name}`}>
        View {category.name}
      </Link>
    </article>
  );
});

const ArticleCard = memo(function ArticleCard({ article }) {
  return (
    <article className="article-card" itemScope itemType="https://schema.org/Article">
      <header className="article-header">
        <span className="article-category">{article.category}</span>
        <span className="read-time" aria-label="Estimated read time">{article.readTime}</span>
      </header>
      <h3 itemProp="headline">{article.title}</h3>
      <p itemProp="description">{article.excerpt}</p>
      <Link to={article.path} className="btn btn-outline" aria-label={`Read ${article.title}`}>
        Read More
      </Link>
    </article>
  );
});

const QuickLink = memo(function QuickLink({ link }) {
  return (
    <li>
      <Link to={link.path} className="quick-link">{link.name}</Link>
    </li>
  );
});

const DownloadItem = memo(function DownloadItem({ icon, title, desc, href = '#' }) {
  return (
    <article className="download-item">
      <div className="download-icon" aria-hidden>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <a className="btn btn-primary" href={href} download>
        Download PDF
      </a>
    </article>
  );
});

const ExpertiseItem = memo(function ExpertiseItem({ img, alt, title, desc, telLabel }) {
  return (
    <article className="expertise-item">
      <img src={img} alt={alt} loading="lazy" width={640} height={427} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href="tel:+18015908516" className="expertise-cta" aria-label={telLabel}>
        {telLabel}
      </a>
    </article>
  );
});

const NewsletterForm = memo(function NewsletterForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    // hook your newsletter logic here
  };
  return (
    <form className="signup-form" onSubmit={onSubmit} noValidate>
      <label htmlFor="email" className="sr-only">Email address</label>
      <input id="email" type="email" placeholder="Enter your email address" className="email-input" required />
      <button className="btn btn-primary" type="submit">Subscribe</button>
    </form>
  );
});

// -----------------------------
// Page
// -----------------------------

const ResourcesPage = () => {
  const featuredListSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: FEATURED_ARTICLES.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Article',
        headline: a.title,
        url: `https://www.utahwatergardens.com${a.path}`,
        about: a.category,
        description: a.excerpt,
      },
    })),
  }), []);

  const collectionSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Pond Care Resources',
    url: 'https://www.utahwatergardens.com/resources',
    hasPart: RESOURCE_CATEGORIES.map((c) => ({ '@type': 'CollectionPage', name: c.name, url: `https://www.utahwatergardens.com${c.path}` })),
  }), []);

  return (
    <div className="resources-page">
      <PageHero
        title="Resources"
        subtitle="Expert knowledge and guides to help you maintain a beautiful, healthy pond"
        backgroundImage="/images/IMG_3266-topaz-enhance-2x-faceai.jpeg"
        backgroundImageAlt="Comprehensive pond care resources and guides"
      />

      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featuredListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <div className="container">
        {/* Resource Categories */}
        <section className="resource-categories" aria-labelledby="browse-heading">
          <h2 id="browse-heading">Browse Resources</h2>
          <div className="categories-grid" role="list">
            {RESOURCE_CATEGORIES.map((category) => (
              <CategoryCard key={category.path} category={category} />
            ))}
          </div>
        </section>

        {/* Featured Articles */}
        <section className="featured-articles" aria-labelledby="featured-heading">
          <h2 id="featured-heading">Featured Articles</h2>
          <div className="articles-grid" role="list">
            {FEATURED_ARTICLES.map((article) => (
              <ArticleCard key={article.path} article={article} />
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="quick-links" aria-labelledby="quick-links-heading">
          <h2 id="quick-links-heading">Quick Links</h2>
          <nav aria-label="Quick links">
            <ul className="links-grid">
              {QUICK_LINKS.map((link) => (
                <QuickLink key={link.path} link={link} />
              ))}
            </ul>
          </nav>
        </section>

        {/* Downloadable Resources */}
        <section className="downloadable-resources" aria-labelledby="downloads-heading">
          <h2 id="downloads-heading">Downloadable Resources</h2>
          <div className="downloads-grid">
            <DownloadItem icon="📋" title="Pond Maintenance Checklist" desc="Monthly and seasonal maintenance tasks" />
            <DownloadItem icon="🐟" title="Fish Care Guide" desc="Complete guide to fish health and care" />
            <DownloadItem icon="🌿" title="Plant Care Manual" desc="Guide to aquatic plant maintenance" />
          </div>
        </section>

        {/* Expert Advice */}
        <section className="expert-advice" aria-labelledby="advice-heading">
          <h2 id="advice-heading">Get Expert Advice</h2>
          <div className="advice-content">
            <div className="advice-text">
              <h3>Need Personalized Help?</h3>
              <p>
                Our team of pond experts is here to help you with any questions or concerns about your pond. Whether you're
                dealing with a specific issue or just want to improve your pond's health, we're here to guide you.
              </p>
              <ul className="advice-features">
                <li>Free consultation calls</li>
                <li>Expert troubleshooting</li>
                <li>Custom care plans</li>
                <li>Ongoing support</li>
              </ul>
            </div>
            <div className="advice-cta">
              <a href="tel:+18015908516" className="btn btn-primary" aria-label="Call Utah Water Gardens at (801) 590-8516">
                Call (801) 590-8516
              </a>
              <Link to="/contact" className="btn btn-secondary">Send Message</Link>
            </div>
          </div>
        </section>

        {/* Retail Expertise */}
        <section className="retail-expertise-section" aria-labelledby="retail-heading">
          <h2 id="retail-heading">Visit Our Store for Expert Guidance</h2>
          <p>Our knowledgeable staff can help you choose the perfect plants, fish, and supplies for your pond</p>
          <div className="expertise-grid">
            <ExpertiseItem
              img="/images/IMG_2775.jpg"
              alt="Aquatic plant expertise"
              title="Plant Selection"
              desc="Get expert advice on choosing the right aquatic plants for your pond's conditions"
              telLabel="Call for Plant Advice"
            />
            <ExpertiseItem
              img="/images/IMG_2776.jpg"
              alt="Fish selection expertise"
              title="Fish Care"
              desc="Learn about fish compatibility, feeding, and health from our experienced staff"
              telLabel="Call for Fish Advice"
            />
            <ExpertiseItem
              img="/images/IMG_2782.jpg"
              alt="Equipment expertise"
              title="Equipment Help"
              desc="Get guidance on choosing and maintaining the right equipment for your pond"
              telLabel="Call for Equipment Help"
            />
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="newsletter-signup" aria-labelledby="newsletter-heading">
          <div className="newsletter-background">
            <img 
              src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" 
              alt="Beautiful pond with flowing water and natural rocks"
              className="newsletter-bg-image"
            />
            <div className="newsletter-overlay"></div>
          </div>
          <div className="newsletter-content">
            <h2 id="newsletter-heading">Stay Updated</h2>
            <p>Get the latest pond care tips and seasonal advice delivered to your inbox</p>
            <NewsletterForm />
            <p className="signup-note">
              Or call us directly for immediate assistance: <a href="tel:+18015908516">(801) 590-8516</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourcesPage;
