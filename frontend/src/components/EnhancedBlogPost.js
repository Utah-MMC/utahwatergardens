import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import './EnhancedBlogPost.css';

const EnhancedBlogPost = ({ post, relatedPosts = [] }) => {
  if (!post) {
    return (
      <div className="blog-post-not-found">
        <div className="container">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="back-to-blog-btn">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(post.image)}&description=${encodeURIComponent(title)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  };

  return (
    <>
      <SEO
        title={`${post.title} | Utah Water Gardens Blog`}
        description={post.excerpt}
        keywords={post.tags ? post.tags.join(', ') : ''}
        canonical={`/blog/${post.slug}`}
      />
      
      <div className="enhanced-blog-post">
        {/* Hero Section */}
        <section className="post-hero">
          <div className="hero-background">
            <img src={post.image} alt={post.title} />
            <div className="hero-overlay"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <div className="post-meta">
                <span className="category-badge">{post.category}</span>
                <span className="read-time">{post.readTime}</span>
                <span className="publish-date">{formatDate(post.date)}</span>
              </div>
              <h1 className="post-title">{post.title}</h1>
              <p className="post-excerpt">{post.excerpt}</p>
              
              {/* Author Info */}
              <div className="author-info">
                <div className="author-avatar">
                  <img src={post.authorImage || '/images/team-photo.jpg'} alt={post.author} />
                </div>
                <div className="author-details">
                  <h4 className="author-name">{post.author}</h4>
                  <p className="author-bio">{post.authorBio || 'Our experienced team has been designing, building, and maintaining water gardens throughout Utah for over 15 years.'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Share Bar */}
        <div className="social-share-bar">
          <div className="container">
            <div className="share-controls">
              <span className="share-label">Share this article:</span>
              <div className="share-buttons">
                <button onClick={() => handleShare('facebook')} className="share-btn facebook" title="Share on Facebook">
                  📘
                </button>
                <button onClick={() => handleShare('twitter')} className="share-btn twitter" title="Share on Twitter">
                  🐦
                </button>
                <button onClick={() => handleShare('linkedin')} className="share-btn linkedin" title="Share on LinkedIn">
                  💼
                </button>
                <button onClick={() => handleShare('pinterest')} className="share-btn pinterest" title="Share on Pinterest">
                  📌
                </button>
                <button onClick={copyToClipboard} className="share-btn copy" title="Copy link">
                  🔗
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="post-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="main-content">
                <div 
                  className="post-body"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Call to Action */}
                <div className="post-cta">
                  <div className="cta-content">
                    <h3>Ready to Create Your Dream Water Garden?</h3>
                    <p>Let Utah Water Gardens help you design and build the perfect pond for your Utah home. Our experienced team provides expert consultation, professional installation, and ongoing maintenance services.</p>
                    <div className="cta-buttons">
                      <a href="tel:8015908516" className="cta-btn primary">Call (801) 590-8516</a>
                      <Link to="/contact" className="cta-btn secondary">Get Free Quote</Link>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="post-tags">
                    <h4>Tags:</h4>
                    <div className="tag-list">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="post-sidebar">
                {/* Table of Contents */}
                <div className="toc-widget">
                  <h4>Table of Contents</h4>
                  <div className="toc-content">
                    {/* This would be dynamically generated from the content */}
                    <ul>
                      <li><a href="#introduction">Introduction</a></li>
                      <li><a href="#planning">Planning Your Pond</a></li>
                      <li><a href="#construction">Construction Process</a></li>
                      <li><a href="#maintenance">Maintenance Tips</a></li>
                    </ul>
                  </div>
                </div>

                {/* Related Services */}
                <div className="related-services">
                  <h4>Our Services</h4>
                  <div className="service-links">
                    <Link to="/pond-construction" className="service-link">Pond Construction</Link>
                    <Link to="/pond-maintenance" className="service-link">Pond Maintenance</Link>
                    <Link to="/pond-cleaning" className="service-link">Pond Cleaning</Link>
                    <Link to="/pond-repair" className="service-link">Pond Repair</Link>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="contact-widget">
                  <h4>Need Help?</h4>
                  <p>Our experts are here to help with your water garden needs.</p>
                  <div className="contact-info">
                    <p><strong>Phone:</strong> <a href="tel:8015908516">(801) 590-8516</a></p>
                    <p><strong>Email:</strong> <a href="mailto:contact@utahwatergardens.com">contact@utahwatergardens.com</a></p>
                    <p><strong>Hours:</strong> Mon-Sat: 10:00AM-6PM</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <div className="container">
              <h3>Related Articles</h3>
              <div className="related-grid">
                {relatedPosts.map(relatedPost => (
                  <article key={relatedPost.id} className="related-post">
                    <div className="related-image">
                      <img src={relatedPost.image} alt={relatedPost.title} />
                    </div>
                    <div className="related-content">
                      <h4><Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link></h4>
                      <p>{relatedPost.excerpt}</p>
                      <div className="related-meta">
                        <span className="related-category">{relatedPost.category}</span>
                        <span className="related-date">{formatDate(relatedPost.date)}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <div className="back-to-blog">
          <div className="container">
            <Link to="/blog" className="back-btn">
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedBlogPost;
