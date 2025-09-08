import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero.js';
import './BlogPage.css';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    // Blog posts data - extracted from the HTML files
    const posts = [
      {
        id: 'pond-maintenance-guide',
        title: 'Complete Pond Maintenance Guide for Utah: Year-Round Care (2025)',
        excerpt: 'Complete pond maintenance guide for Utah\'s unique climate. Learn seasonal care, water quality management, equipment maintenance, and troubleshooting for healthy water gardens.',
        slug: 'pond-maintenance-guide',
        date: today,
        category: 'Maintenance',
        readTime: '12 min read',
        image: '/images/pondMaintenance.webp',
        author: 'Utah Water Gardens Team',
        featured: true
      },
      {
        id: 'how-to-build-pond-utah-guide',
        title: 'How to Build a Pond in Utah: Complete Step-by-Step Guide (2025)',
        excerpt: 'Learn how to build a pond in Utah with our comprehensive guide. From planning and permits to construction and finishing touches, we cover everything you need to know.',
        slug: 'how-to-build-pond-utah-guide',
        date: today,
        category: 'Construction',
        readTime: '15 min read',
        image: '/images/pondConstruction1000x800.webp',
        author: 'Utah Water Gardens Team',
        featured: true
      },
      {
        id: 'pond-design-guide',
        title: 'Pond Design Guide: Creating Beautiful Water Gardens in Utah',
        excerpt: 'Discover the art of pond design for Utah\'s unique landscape. Learn about different styles, materials, and design principles to create stunning water features.',
        slug: 'pond-design-guide',
        date: today,
        category: 'Design',
        readTime: '10 min read',
        image: '/images/pondServices-2.png',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'aquatic-plants-guide',
        title: 'Aquatic Plants Guide: Best Plants for Utah Ponds & Water Gardens',
        excerpt: 'Complete guide to aquatic plants perfect for Utah\'s climate. Learn about water lilies, marginal plants, floating plants, and submerged vegetation.',
        slug: 'aquatic-plants-guide',
        date: today,
        category: 'Plants',
        readTime: '8 min read',
        image: '/images/plants500x500.webp',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'fish-care-guide',
        title: 'Fish Care Guide: Koi & Goldfish for Utah Ponds',
        excerpt: 'Essential guide to caring for koi and goldfish in Utah ponds. Learn about feeding, health, winter care, and creating the perfect environment.',
        slug: 'fish-care-guide',
        date: today,
        category: 'Fish Care',
        readTime: '9 min read',
        image: '/images/koi.webp',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'utah-climate-guide',
        title: 'Utah Climate Guide: Building Ponds for Mountain Weather',
        excerpt: 'Understanding Utah\'s unique climate and how it affects pond design, maintenance, and seasonal care. Essential knowledge for successful water gardens.',
        slug: 'utah-climate-guide',
        date: today,
        category: 'Climate',
        readTime: '7 min read',
        image: '/images/hero-background.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'pond-liners-utah-guide',
        title: 'Pond Liners Utah Guide: Choosing the Right Liner for Your Climate',
        excerpt: 'Complete guide to pond liners for Utah\'s challenging climate. Learn about EPDM, PVC, and other liner options for durability and performance.',
        slug: 'pond-liners-utah-guide',
        date: today,
        category: 'Supplies',
        readTime: '6 min read',
        image: '/images/pond_liner_40mil.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'water-features-guide',
        title: 'Water Features Guide: Fountains, Waterfalls & More for Utah',
        excerpt: 'Explore different water features perfect for Utah landscapes. From fountains to waterfalls, learn how to add movement and sound to your water garden.',
        slug: 'water-features-guide',
        date: today,
        category: 'Features',
        readTime: '8 min read',
        image: '/images/waterLillies.webp',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'small-backyard-pond-ideas-utah',
        title: 'Small Backyard Pond Ideas for Utah: Maximizing Small Spaces',
        excerpt: 'Creative ideas for small backyard ponds in Utah. Learn how to create stunning water features even in limited spaces with smart design solutions.',
        slug: 'small-backyard-pond-ideas-utah',
        date: today,
        category: 'Design',
        readTime: '7 min read',
        image: '/images/IMG_2779.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'natural-vs-liner-ponds-utah-guide',
        title: 'Natural vs Liner Ponds in Utah: Which is Right for You?',
        excerpt: 'Compare natural and liner ponds for Utah conditions. Learn the pros and cons of each approach and make the best choice for your property.',
        slug: 'natural-vs-liner-ponds-utah-guide',
        date: today,
        category: 'Construction',
        readTime: '9 min read',
        image: '/images/pond_liner_roll.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'clay-soil-ponds-utah-guide',
        title: 'Clay Soil Ponds Utah Guide: Building Ponds in Challenging Soil',
        excerpt: 'Learn how to build successful ponds in Utah\'s challenging clay soil conditions. Expert tips for excavation, liner installation, and long-term stability.',
        slug: 'clay-soil-ponds-utah-guide',
        date: today,
        category: 'Construction',
        readTime: '8 min read',
        image: '/images/pondConstruction1000x800.webp',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'pond-depth-utah-guide',
        title: 'Pond Depth Utah Guide: Optimal Depths for Utah Climate',
        excerpt: 'Discover the ideal pond depths for Utah\'s climate conditions. Learn how depth affects fish survival, plant growth, and maintenance requirements.',
        slug: 'pond-depth-utah-guide',
        date: today,
        category: 'Design',
        readTime: '6 min read',
        image: '/images/IMG_2770.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'utah-pond-building-permits-guide',
        title: 'Utah Pond Building Permits Guide: Legal Requirements & Process',
        excerpt: 'Complete guide to Utah pond building permits and regulations. Learn what permits you need, how to apply, and avoid costly mistakes.',
        slug: 'utah-pond-building-permits-guide',
        date: today,
        category: 'Legal',
        readTime: '7 min read',
        image: '/images/pondServices-2.png',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'diy-pond-cost-utah',
        title: 'DIY Pond Cost Utah: Budget Planning for Your Water Garden',
        excerpt: 'Complete cost breakdown for DIY pond projects in Utah. Learn about material costs, equipment prices, and budget planning tips.',
        slug: 'diy-pond-cost-utah',
        date: today,
        category: 'Planning',
        readTime: '10 min read',
        image: '/images/IMG_2779.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'complete-seo-strategy-guide-2025',
        title: 'Complete SEO Strategy Guide 2025: Boost Your Pond Business',
        excerpt: 'Comprehensive SEO guide for pond and water feature businesses. Learn modern SEO strategies to attract more customers in 2025.',
        slug: 'complete-seo-strategy-guide-2025',
        date: today,
        category: 'Business',
        readTime: '15 min read',
        image: '/images/hero-background.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'content-marketing-seo-success-2025',
        title: 'Content Marketing SEO Success 2025: Drive More Leads',
        excerpt: 'Learn how to use content marketing and SEO to drive more leads for your pond business. Proven strategies for 2025 success.',
        slug: 'content-marketing-seo-success-2025',
        date: today,
        category: 'Business',
        readTime: '12 min read',
        image: '/images/pondMaintenance.webp',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'local-seo-strategies-small-businesses-2025',
        title: 'Local SEO Strategies for Small Businesses 2025',
        excerpt: 'Master local SEO strategies to dominate your local market. Essential tactics for small pond and water feature businesses.',
        slug: 'local-seo-strategies-small-businesses-2025',
        date: today,
        category: 'Business',
        readTime: '11 min read',
        image: '/images/IMG_2782.jpg',
        author: 'Utah Water Gardens Team',
        featured: false
      },
      {
        id: 'technical-seo-checklist-2025',
        title: 'Technical SEO Checklist 2025: Complete Website Optimization',
        excerpt: 'Comprehensive technical SEO checklist for 2025. Ensure your website is fully optimized for search engines and user experience.',
        slug: 'technical-seo-checklist-2025',
        date: today,
        category: 'Business',
        readTime: '13 min read',
        image: '/images/waterLillies.webp',
        author: 'Utah Water Gardens Team',
        featured: false
      }
    ];

    setBlogPosts(posts);
    setLoading(false);
  }, []);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => {
    if (activeFilter === 'all') return !post.featured;
    return !post.featured && post.category.toLowerCase() === activeFilter;
  });

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  const categories = [...new Set(blogPosts.map(post => post.category))];

  if (loading) {
    return (
      <div className="blog-page">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <SEO 
        title="Blog | Utah Water Gardens - Pond & Water Feature Insights"
        description="Utah Water Gardens Blog - Expert insights on pond design, water features, aquatic plants, fish care, and creating beautiful water gardens in Utah's unique climate."
        keywords="water gardens, pond design, Utah ponds, water features, aquatic plants, koi fish, pond maintenance, water garden blog"
        canonical="https://utahwatergardens.com/blog"
      />

      <PageHero 
        title="Utah Water Gardens Blog"
        subtitle="Expert insights on pond design, water features, aquatic plants, fish care, and creating beautiful water gardens in Utah's unique climate"
        backgroundImage="/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg"
        backgroundImageAlt="Beautiful Utah water garden with pond and water lilies"
        showStats={true}
        stats={[
          { number: blogPosts.length, label: "Expert Articles", icon: "📝" },
          { number: categories.length, label: "Categories", icon: "📂" },
          { number: "2025", label: "Updated Content", icon: "📅" }
        ]}
      />

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="featured-posts first-section-gradient">
          <div className="container">
            <h2>Featured Articles</h2>
            <div className="featured-grid">
              {featuredPosts.map(post => (
                <article key={post.id} className="featured-post">
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                    <div className="post-category">{post.category}</div>
                  </div>
                  <div className="post-content">
                    <h3>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-meta">
                      <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="read-more-btn">
                      Read Article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="all-posts">
        <div className="container">
          <div className="posts-header">
            <h2>All Articles</h2>
            <div className="category-filter">
              <button 
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterChange('all')}
              >
                All
              </button>
              {categories.map(category => (
                <button 
                  key={category} 
                  className={`filter-btn ${activeFilter === category.toLowerCase() ? 'active' : ''}`}
                  onClick={() => handleFilterChange(category.toLowerCase())}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="posts-grid">
            {regularPosts.map(post => (
              <article key={post.id} className="post-card" data-category={post.category.toLowerCase()}>
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="post-category">{post.category}</div>
                </div>
                <div className="post-content">
                  <h3>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Get the latest pond and water garden tips delivered to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe</button>
            </form>
            <p className="newsletter-note">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
