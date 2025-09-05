import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.js';
import './ResourcesPage.css';

const ResourcesPage = () => {
  const resourceCategories = [
    {
      name: 'Care Guides',
      path: '/resources/care-guides',
      description: 'Comprehensive guides for pond and aquatic life care',
      icon: '📚',
      articles: [
        'Pond Maintenance Basics',
        'Fish Care Guide',
        'Plant Care Tips',
        'Seasonal Pond Care'
      ]
    },
    {
      name: 'Pond Tips & Tricks',
      path: '/resources/tips-tricks',
      description: 'Expert tips to keep your pond healthy and beautiful',
      icon: '💡',
      articles: [
        'Water Quality Management',
        'Algae Control Methods',
        'Pond Aeration Tips',
        'Winter Pond Preparation'
      ]
    },
    {
      name: 'Seasonal Care',
      path: '/resources/seasonal-care',
      description: 'Season-specific care instructions for your pond',
      icon: '🌱',
      articles: [
        'Spring Pond Opening',
        'Summer Pond Maintenance',
        'Fall Pond Cleanup',
        'Winter Pond Care'
      ]
    },
    {
      name: 'Troubleshooting',
      path: '/resources/troubleshooting',
      description: 'Solutions to common pond problems',
      icon: '🔧',
      articles: [
        'Finding a Leak in Your Pond',
        'Pond Water Loss Issues',
        'Fish Health Problems',
        'Plant Disease Solutions'
      ]
    },
    {
      name: 'Video Tutorials',
      path: '/resources/video-tutorials',
      description: 'Step-by-step video guides for pond care',
      icon: '🎥',
      articles: [
        'Pond Cleaning Tutorial',
        'Filter Maintenance',
        'Plant Installation',
        'Fish Feeding Guide'
      ]
    },
    {
      name: 'FAQ',
      path: '/resources/faq',
      description: 'Answers to frequently asked questions',
      icon: '❓',
      articles: [
        'Common Pond Questions',
        'Equipment FAQs',
        'Plant & Fish FAQs',
        'Maintenance FAQs'
      ]
    }
  ];

  const featuredArticles = [
    {
      title: 'Finding a Leak in Your Pond',
      path: '/resources/finding-a-leak-in-your-pond',
      excerpt: 'Learn how to identify and fix common pond leaks',
      category: 'Troubleshooting',
      readTime: '5 min read'
    },
    {
      title: 'Pond Water Loss Issues',
      path: '/resources/pondwaterloss',
      excerpt: 'Understanding and solving water loss problems',
      category: 'Troubleshooting',
      readTime: '4 min read'
    },
    {
      title: 'Pond Maintenance Guide',
      path: '/pond-maintenance',
      excerpt: 'Essential maintenance tips for healthy ponds',
      category: 'Care Guides',
      readTime: '8 min read'
    }
  ];

  const quickLinks = [
    { name: 'Pond Filters', path: '/pond-filters' },
    { name: 'Pond Pumps', path: '/pumps' },
    { name: 'Pond Maintenance', path: '/pond-maintenance' },
    { name: 'Pond Dredging', path: '/pond-and-lake-dredging' },
    { name: 'Pond Construction', path: '/pond-construction' },
    { name: 'Pond Repair', path: '/pond-repair-and-rebuild' }
  ];

  return (
    <div className="resources-page">
      <PageHero 
        title="Resources"
        subtitle="Expert knowledge and guides to help you maintain a beautiful, healthy pond"
        backgroundImage="/images/pondDredging-topaz-enhance-3.9x.jpeg"
        backgroundImageAlt="Comprehensive pond care resources and guides"
      />

      <div className="container">
        {/* Resource Categories */}
        <section className="resource-categories">
          <h2>Browse Resources</h2>
          <div className="categories-grid">
            {resourceCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.name}</h3>
                </div>
                <p>{category.description}</p>
                <ul className="article-list">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>{article}</li>
                  ))}
                </ul>
                <Link to={category.path} className="btn btn-primary">
                  View {category.name}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Articles */}
        <section className="featured-articles">
          <h2>Featured Articles</h2>
          <div className="articles-grid">
            {featuredArticles.map((article, index) => (
              <div key={index} className="article-card">
                <div className="article-header">
                  <span className="article-category">{article.category}</span>
                  <span className="read-time">{article.readTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <Link to={article.path} className="btn btn-outline">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="quick-links">
          <h2>Quick Links</h2>
          <div className="links-grid">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path} className="quick-link">
                {link.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="downloadable-resources">
          <h2>Downloadable Resources</h2>
          <div className="downloads-grid">
            <div className="download-item">
              <div className="download-icon">📋</div>
              <h3>Pond Maintenance Checklist</h3>
              <p>Monthly and seasonal maintenance tasks</p>
              <button className="btn btn-primary">Download PDF</button>
            </div>
            <div className="download-item">
              <div className="download-icon">🐟</div>
              <h3>Fish Care Guide</h3>
              <p>Complete guide to fish health and care</p>
              <button className="btn btn-primary">Download PDF</button>
            </div>
            <div className="download-item">
              <div className="download-icon">🌿</div>
              <h3>Plant Care Manual</h3>
              <p>Guide to aquatic plant maintenance</p>
              <button className="btn btn-primary">Download PDF</button>
            </div>
          </div>
        </section>

        {/* Expert Advice */}
        <section className="expert-advice">
          <h2>Get Expert Advice</h2>
          <div className="advice-content">
            <div className="advice-text">
              <h3>Need Personalized Help?</h3>
              <p>Our team of pond experts is here to help you with any questions or concerns about your pond. Whether you're dealing with a specific issue or just want to improve your pond's health, we're here to guide you.</p>
              <ul className="advice-features">
                <li>Free consultation calls</li>
                <li>Expert troubleshooting</li>
                <li>Custom care plans</li>
                <li>Ongoing support</li>
              </ul>
            </div>
            <div className="advice-cta">
              <a href="tel:(801) 590-8516" className="btn btn-primary">
                Call (801) 590-8516
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Send Message
              </Link>
            </div>
          </div>
        </section>

        {/* Retail Expertise */}
        <section className="retail-expertise-section">
          <h2>Visit Our Store for Expert Guidance</h2>
          <p>Our knowledgeable staff can help you choose the perfect plants, fish, and supplies for your pond</p>
          <div className="expertise-grid">
            <div className="expertise-item">
              <img src="/images/IMG_2775.jpg" alt="Aquatic plant expertise" />
              <h3>Plant Selection</h3>
              <p>Get expert advice on choosing the right aquatic plants for your pond's conditions</p>
              <a href="tel:(801) 590-8516" className="expertise-cta">Call for Plant Advice</a>
            </div>
            <div className="expertise-item">
              <img src="/images/IMG_2776.jpg" alt="Fish selection expertise" />
              <h3>Fish Care</h3>
              <p>Learn about fish compatibility, feeding, and health from our experienced staff</p>
              <a href="tel:(801) 590-8516" className="expertise-cta">Call for Fish Advice</a>
            </div>
            <div className="expertise-item">
              <img src="/images/IMG_2782.jpg" alt="Equipment expertise" />
              <h3>Equipment Help</h3>
              <p>Get guidance on choosing and maintaining the right equipment for your pond</p>
              <a href="tel:(801) 590-8516" className="expertise-cta">Call for Equipment Help</a>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="newsletter-signup">
          <h2>Stay Updated</h2>
          <p>Get the latest pond care tips and seasonal advice delivered to your inbox</p>
          <div className="signup-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="email-input"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
          <p className="signup-note">Or call us directly for immediate assistance: <a href="tel:(801) 590-8516">(801) 590-8516</a></p>
        </section>
      </div>
    </div>
  );
};

export default ResourcesPage;
