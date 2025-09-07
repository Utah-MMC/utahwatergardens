import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './ResourcesPage.css';

const ResourcesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '50+', label: 'Helpful Articles', icon: 'Articles' },
    { number: '6', label: 'Resource Categories', icon: 'Categories' },
    { number: '15+', label: 'Years of Knowledge', icon: 'Experience' },
    { number: '100%', label: 'Free Resources', icon: 'Free' }
  ];

  const resourceCategories = [
    {
      name: 'Care Guides',
      path: '/resources/care-guides',
      description: 'Comprehensive guides for pond and aquatic life care',
      icon: 'Guides',
      articles: ['Pond Maintenance Basics', 'Fish Care Guide', 'Plant Care Tips', 'Seasonal Pond Care']
    },
    {
      name: 'Pond Tips & Tricks',
      path: '/resources/tips-tricks',
      description: 'Expert tips to keep your pond healthy and beautiful',
      icon: 'Tips',
      articles: ['Water Quality Management', 'Algae Control Methods', 'Pond Aeration Tips', 'Winter Pond Preparation']
    },
    {
      name: 'Seasonal Care',
      path: '/resources/seasonal-care',
      description: 'Season-specific care instructions for your pond',
      icon: 'Seasonal',
      articles: ['Spring Pond Opening', 'Summer Pond Maintenance', 'Fall Pond Cleanup', 'Winter Pond Care']
    },
    {
      name: 'Troubleshooting',
      path: '/resources/troubleshooting',
      description: 'Solutions to common pond problems',
      icon: 'Troubleshoot',
      articles: ['Finding a Leak in Your Pond', 'Pond Water Loss Issues', 'Fish Health Problems', 'Plant Disease Solutions']
    },
    {
      name: 'Video Tutorials',
      path: '/resources/video-tutorials',
      description: 'Step-by-step video guides for pond care',
      icon: 'Videos',
      articles: ['Pond Cleaning Tutorial', 'Filter Maintenance', 'Plant Installation', 'Fish Feeding Guide']
    },
    {
      name: 'FAQ',
      path: '/resources/faq',
      description: 'Answers to frequently asked questions',
      icon: 'FAQ',
      articles: ['Common Pond Questions', 'Equipment FAQs', 'Plant & Fish FAQs', 'Maintenance FAQs']
    }
  ];

  const featuredArticles = [
    {
      title: 'Finding a Leak in Your Pond',
      path: '/resources/finding-a-leak-in-your-pond',
      excerpt: 'Learn how to identify and fix common pond leaks with our step-by-step guide.',
      category: 'Troubleshooting',
      readTime: '5 min read',
      image: '/images/IMG_2770.jpg'
    },
    {
      title: 'Pond Water Loss Issues',
      path: '/resources/pondwaterloss',
      excerpt: 'Understanding and solving water loss problems in your pond.',
      category: 'Troubleshooting',
      readTime: '4 min read',
      image: '/images/IMG_2782.jpg'
    },
    {
      title: 'Pond Maintenance Guide',
      path: '/pond-maintenance',
      excerpt: 'Essential maintenance tips for keeping your pond healthy year-round.',
      category: 'Care Guides',
      readTime: '8 min read',
      image: '/images/pondMaintenance-topaz-denoise-enhance-3.9x.jpeg'
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
    <>
      <SEO 
        title="Pond Resources - Expert Guides, Tips & Tutorials | Utah Water Gardens"
        description="Access our comprehensive library of pond resources including care guides, troubleshooting tips, seasonal care instructions, and video tutorials. Free expert advice for all your pond needs."
        keywords="pond resources, pond guides, pond tips, pond troubleshooting, seasonal pond care, pond maintenance guide, water garden resources"
        canonical="https://utahwatergardens.com/resources"
      />
      <div className={`resources-page ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <section className="resources-hero">
          <div className="hero-background">
            <img 
              src="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg" 
              alt="Beautiful pond resources and educational content"
              className="hero-image"
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="hero-content">
            <div className="hero-text-content">
              <h1 className="hero-title">
                Pond 
                <span className="hero-title-highlight"> Resources</span>
              </h1>
              
              <p className="hero-subtitle">
                Expert guides, tips, and tutorials to help you create and maintain beautiful water features.
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

        {/* Main Content */}
        <section className="resources-main-content">
          <div className="container">
            <div className="page-intro">
              <h2>Your Complete Pond Resource Library</h2>
              <p>
                Whether you're a beginner or an experienced pond owner, our comprehensive resource library 
                provides expert guidance on every aspect of pond care. From basic maintenance to advanced 
                troubleshooting, we've got you covered with free, professional advice.
              </p>
            </div>

            {/* Resource Categories */}
            <div className="resource-categories">
              <h2>Browse by Category</h2>
              <div className="categories-grid">
                {resourceCategories.map((category, index) => (
                  <Link key={index} to={category.path} className="category-card">
                    <div className="category-header">
                      <div className="category-icon">{category.icon}</div>
                      <h3>{category.name}</h3>
                    </div>
                    <p className="category-description">{category.description}</p>
                    <div className="category-articles">
                      <h4>Popular Articles:</h4>
                      <ul>
                        {category.articles.slice(0, 3).map((article, articleIndex) => (
                          <li key={articleIndex}>{article}</li>
                        ))}
                        {category.articles.length > 3 && (
                          <li>+{category.articles.length - 3} more</li>
                        )}
                      </ul>
                    </div>
                    <span className="category-link">Explore {category.name} →</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured Articles */}
            <div className="featured-articles">
              <h2>Featured Articles</h2>
              <div className="articles-grid">
                {featuredArticles.map((article, index) => (
                  <Link key={index} to={article.path} className="article-card">
                    <div className="article-image">
                      <img src={article.image} alt={article.title} />
                      <div className="article-category-badge">{article.category}</div>
                    </div>
                    <div className="article-content">
                      <h3>{article.title}</h3>
                      <p>{article.excerpt}</p>
                      <div className="article-meta">
                        <span className="read-time">{article.readTime}</span>
                        <span className="read-more">Read More →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="quick-links-section">
              <h2>Quick Links</h2>
              <p>Jump to specific topics and services</p>
              <div className="quick-links-grid">
                {quickLinks.map((link, index) => (
                  <Link key={index} to={link.path} className="quick-link-item">
                    <span className="link-icon">Link</span>
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Use Our Resources */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why Use Our Resources?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">Expert</div>
                <h4>Expert Knowledge</h4>
                <p>15+ years of professional pond experience in every guide</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Free</div>
                <h4>Completely Free</h4>
                <p>All resources are free to access with no hidden costs</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Practical</div>
                <h4>Practical Advice</h4>
                <p>Real-world solutions that actually work in Utah's climate</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">Updated</div>
                <h4>Regularly Updated</h4>
                <p>Content is regularly reviewed and updated with latest information</p>
              </div>
            </div>
          </div>
        </section>

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
            <h2>Need More Help?</h2>
            <p>Can't find what you're looking for? Our experts are here to help with personalized advice.</p>
            <div className="cta-buttons">
              <a href="tel:(801) 590-8516" className="btn btn-primary">Call (801) 590-8516</a>
              <Link to="/contact" className="btn btn-secondary">Ask a Question</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResourcesPage;