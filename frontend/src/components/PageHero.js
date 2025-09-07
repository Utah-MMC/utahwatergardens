import React, { useState, useEffect } from 'react';
import './PageHero.css';

const PageHero = ({
  title,
  subtitle,
  backgroundImage,
  backgroundImageAlt,
  backgroundVideo,
  showBackgroundImage = true,
  showStats = false,
  stats = [],
  showCTA = false,
  ctaButtons = []
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Curated selection of pond images for variety
  const pondImages = [
    {
      src: '/images/IMG_2770.jpg',
      alt: 'Beautiful backyard pond with stone bridge and aquatic plants'
    },
    {
      src: '/images/IMG_2775.jpg',
      alt: 'Serene pond with floating water lilies and natural landscaping'
    },
    {
      src: '/images/IMG_2776.jpg',
      alt: 'Tranquil water garden with koi fish and lush vegetation'
    },
    {
      src: '/images/IMG_2779.jpg',
      alt: 'Elegant pond design with marginal plants and stone edging'
    },
    {
      src: '/images/IMG_2780.jpg',
      alt: 'Professional pond construction with modern design elements'
    },
    {
      src: '/images/IMG_2782.jpg',
      alt: 'Natural pond ecosystem with diverse aquatic life'
    },
    {
      src: '/images/IMG_8910-rotated.webp',
      alt: 'Stunning pond landscape with waterfall and rock features'
    },
    {
      src: '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
      alt: 'Beautiful pond landscape with waterfall and rock features'
    },
    {
      src: '/images/koi-topaz-enhance-4x.jpeg',
      alt: 'Vibrant koi pond with colorful fish and crystal clear water'
    },
    {
      src: '/images/pondConstruction1000x800.webp',
      alt: 'Professional pond construction and design services'
    },
    {
      src: '/images/pondMaintenance-topaz-denoise-enhance-3.9x.jpeg',
      alt: 'Well-maintained pond with healthy aquatic plants'
    },
    {
      src: '/images/pondCleanings-topaz-enhance-3.9x.jpeg',
      alt: 'Clean and clear pond water with natural filtration'
    },
    {
      src: '/images/waterLillies-topaz-enhance-4x.jpeg',
      alt: 'Beautiful water lilies blooming on pond surface'
    },
    {
      src: '/images/plants500x500.webp',
      alt: 'Lush aquatic plants creating natural pond habitat'
    }
  ];

  // Get default image if no specific image is provided
  const getDefaultImage = () => {
    if (backgroundImage) {
      return {
        src: backgroundImage,
        alt: backgroundImageAlt || 'Beautiful water garden'
      };
    }
    // Use the main background image for all pages
    return {
      src: '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
      alt: 'Beautiful pond landscape with waterfall and rock features'
    };
  };

  const selectedImage = getDefaultImage();

  return (
    <div className={`page-hero-wrapper ${isVisible ? 'visible' : ''}`}>
      <section className="page-hero">
        {showBackgroundImage && (
          <div className="page-hero-background">
            {backgroundVideo ? (
              <>
                <video 
                  className="page-hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={selectedImage.src}
                >
                  <source src={backgroundVideo} type="video/mp4" />
                  <source src={backgroundVideo} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="page-hero-image page-hero-fallback"
                />
              </>
            ) : (
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="page-hero-image"
              />
            )}
            <div className="page-hero-overlay"></div>
          </div>
        )}
        
        <div className="page-hero-content">
          <div className="container">
            <div className="page-hero-text-content">
              <h1 className="page-hero-title">
                {title}
              </h1>
              {subtitle && (
                <p className="page-hero-subtitle">{subtitle}</p>
              )}
              
              {/* Stats Section */}
              {showStats && stats.length > 0 && (
                <div className="page-hero-stats">
                  {stats.map((stat, index) => (
                    <div key={index} className="page-hero-stat-item">
                      <div className="page-hero-stat-icon">{stat.icon}</div>
                      <div className="page-hero-stat-number">{stat.number}</div>
                      <div className="page-hero-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* CTA Buttons */}
              {showCTA && ctaButtons.length > 0 && (
                <div className="page-hero-cta">
                  {ctaButtons.map((button, index) => (
                    <a
                      key={index}
                      href={button.href}
                      className={`page-hero-btn ${button.type || 'primary'}`}
                      target={button.target || '_self'}
                      rel={button.rel || ''}
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageHero;