import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../components/PageTemplate';
import CTA from '../components/CTA';
import './ResourcesPage.css';

const ResourcesPage = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  const stats = [
    { number: '50+', label: 'Helpful Articles', icon: '📚' },
    { number: '6', label: 'Resource Categories', icon: '📂' },
    { number: '15+', label: 'Years of Knowledge', icon: '⭐' },
    { number: '100%', label: 'Free Resources', icon: '💯' }
  ];

  const resourceCategories = [
    {
      name: 'Care Guides',
      path: '/resources/care-guides',
      description: 'Comprehensive guides for pond and aquatic life care',
      icon: '📖',
      articles: ['Pond Maintenance Basics', 'Fish Care Guide', 'Plant Care Tips', 'Seasonal Pond Care'],
      image: '/images/144b4c20031b8d5bdb573f8c9aea03a3-enhance-4x.jpeg'
    },
    {
      name: 'Pond Tips & Tricks',
      path: '/resources/tips-tricks',
      description: 'Expert tips to keep your pond healthy and beautiful',
      icon: '💡',
      articles: ['Water Quality Management', 'Algae Control Methods', 'Pond Aeration Tips', 'Winter Pond Preparation'],
      image: '/images/19765b123d1521ca46ded746c375eeef-enhance-4x.jpeg'
    },
    {
      name: 'Seasonal Care',
      path: '/resources/seasonal-care',
      description: 'Season-specific care instructions for your pond',
      icon: '🍂',
      articles: ['Spring Pond Opening', 'Summer Pond Maintenance', 'Fall Pond Cleanup', 'Winter Pond Care'],
      image: '/images/1a558e9d94802fd824b157129ebe0e1d-enhance-4x.jpeg'
    },
    {
      name: 'Troubleshooting',
      path: '/resources/troubleshooting',
      description: 'Solutions to common pond problems',
      icon: '🔧',
      articles: ['Finding a Leak in Your Pond', 'Pond Water Loss Issues', 'Fish Health Problems', 'Plant Disease Solutions'],
      image: '/images/1a9b7904c3461d26b8b9b177164f11c4-denoise.jpeg'
    },
    {
      name: 'Video Tutorials',
      path: '/resources/video-tutorials',
      description: 'Step-by-step video guides for pond care',
      icon: '🎥',
      articles: ['Pond Cleaning Tutorial', 'Filter Maintenance', 'Plant Installation', 'Fish Feeding Guide'],
      image: '/images/1c7c15865a8fd7d198a5c69c3087e91c-enhance-4x.jpeg'
    },
    {
      name: 'FAQ',
      path: '/resources/faq',
      description: 'Answers to frequently asked questions',
      icon: '❓',
      articles: ['Common Pond Questions', 'Equipment FAQs', 'Plant & Fish FAQs', 'Maintenance FAQs'],
      image: '/images/1df1ecf8852a8a526517efdf414917a7-denoise-enhance-4x.jpeg'
    }
  ];

  const featuredArticles = [
    {
      title: 'Finding a Leak in Your Pond',
      path: '/resources/finding-a-leak-in-your-pond',
      excerpt: 'Learn how to identify and fix common pond leaks with our step-by-step guide.',
      category: 'Troubleshooting',
      readTime: '5 min read',
      image: '/images/2b1a14d52ea7e62a36a62f1a2da7203a-enhance-4x.jpeg'
    },
    {
      title: 'Pond Water Loss Issues',
      path: '/resources/pondwaterloss',
      excerpt: 'Understanding and solving water loss problems in your pond.',
      category: 'Troubleshooting',
      readTime: '4 min read',
      image: '/images/2d38a8065acb69433f4ac7658de69f6c-enhance-4x.jpeg'
    },
    {
      title: 'Pond Maintenance Guide',
      path: '/pond-maintenance',
      excerpt: 'Essential maintenance tips for keeping your pond healthy year-round.',
      category: 'Care Guides',
      readTime: '8 min read',
      image: '/images/2f5160e87ccdc3259c69ecd3d8776206-denoise.jpeg'
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
    <PageTemplate
      title="Pond Resources & Expert Guides | Utah Water Gardens"
      description="Comprehensive pond care resources, guides, tips, and troubleshooting. Expert advice for maintaining healthy ponds and water features in Utah."
      keywords="pond resources, pond guides, pond tips, pond troubleshooting, pond care, water garden resources, Utah pond maintenance"
      canonical="https://utahwatergardens.com/resources"
      heroTitle="Pond Resources & Expert Guides"
      heroSubtitle="Everything you need to know about pond care, maintenance, and troubleshooting. Expert tips, guides, and solutions for healthy water features."
      heroBackgroundImage="/images/19765b123d1521ca46ded746c375eeef-enhance-4x.jpeg"
      heroBackgroundImageAlt="Pond resources and expert guides"
      primaryButtonText="GET EXPERT HELP"
      primaryButtonLink="tel:+18015908516"
      secondaryButtonText="VIEW TIPS & TRICKS"
      secondaryButtonLink="/resources/tips-tricks"
      className="resources"
    >
      {/* Stats Section */}
      <section className="section" aria-labelledby="stats-h">
        <div className="container">
          <header className="section-head">
            <h2 id="stats-h">Our Resource Library</h2>
            <p>Comprehensive pond care knowledge at your fingertips</p>
          </header>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section alt" aria-labelledby="categories-h">
        <div className="container">
          <header className="section-head">
            <h2 id="categories-h">Resource Categories</h2>
            <p>Explore our comprehensive collection of pond care resources</p>
          </header>
          <div className="categories-grid">
            {resourceCategories.map((category, index) => (
              <Link key={index} to={category.path} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} loading="lazy" />
                  <div className="category-overlay">
                    <div className="category-icon">{category.icon}</div>
                  </div>
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <div className="category-articles">
                    <h4>Featured Articles:</h4>
                    <ul>
                      {category.articles.slice(0, 3).map((article, articleIndex) => (
                        <li key={articleIndex}>{article}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="category-link">
                    <span>Explore {category.name} →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section" aria-labelledby="featured-h">
        <div className="container">
          <header className="section-head">
            <h2 id="featured-h">Featured Articles</h2>
            <p>Most popular and helpful resources from our experts</p>
          </header>
          <div className="articles-grid">
            {featuredArticles.map((article, index) => (
              <Link key={index} to={article.path} className="article-card">
                <div className="article-image">
                  <img src={article.image} alt={article.title} loading="lazy" />
                  <div className="article-category">{article.category}</div>
                </div>
                <div className="article-content">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-meta">
                    <span className="read-time">{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section alt" aria-labelledby="quick-links-h">
        <div className="container">
          <header className="section-head">
            <h2 id="quick-links-h">Quick Links</h2>
            <p>Popular services and information pages</p>
          </header>
          <div className="quick-links-grid">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path} className="quick-link-card">
                <div className="quick-link-icon">🔗</div>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Resources */}
      <section className="section" aria-labelledby="why-choose-h">
        <div className="container">
          <header className="section-head">
            <h2 id="why-choose-h">Why Choose Our Resources?</h2>
            <p>Expert knowledge backed by years of experience</p>
          </header>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Expert Knowledge</h3>
              <p>All resources are created by certified pond care specialists with 15+ years of experience.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🆓</div>
              <h3>100% Free</h3>
              <p>Access all our guides, tips, and tutorials completely free of charge.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3>Utah-Specific</h3>
              <p>Tailored advice for Utah's unique climate and water conditions.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📱</div>
              <h3>Always Updated</h3>
              <p>Regularly updated content with the latest pond care techniques and solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </PageTemplate>
  );
};

export default ResourcesPage;