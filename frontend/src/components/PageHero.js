import React from 'react';
import './PageHero.css';

const PageHero = ({
  title,
  subtitle,
  backgroundImage,
  backgroundImageAlt,
  showBackgroundImage = true
}) => {
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
      src: '/images/koi.webp',
      alt: 'Vibrant koi pond with colorful fish and crystal clear water'
    },
    {
      src: '/images/pondConstruction1000x800.webp',
      alt: 'Professional pond construction and design services'
    },
    {
      src: '/images/pondMaintenance.webp',
      alt: 'Well-maintained pond with healthy aquatic plants'
    },
    {
      src: '/images/pondCleanings.webp',
      alt: 'Clean and clear pond water with natural filtration'
    },
    {
      src: '/images/waterLillies.webp',
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
    // Use the specified default hero image
    return {
      src: '/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg',
      alt: 'Beautiful pond landscape with waterfall and rock features'
    };
  };

  const selectedImage = getDefaultImage();

  return (
    <div className="page-hero-wrapper">
      <section className="page-hero">
        {showBackgroundImage && (
          <div className="page-hero-background">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="page-hero-image"
            />
            <div className="page-hero-overlay"></div>
          </div>
        )}
        
        <div className="page-hero-content">
          <div className="container">
            <div className="page-hero-text-content">
              <h1 className="page-hero-title">{title}</h1>
              {subtitle && (
                <p className="page-hero-subtitle">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageHero;
