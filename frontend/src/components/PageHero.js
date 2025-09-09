import React, { useState, useEffect, useRef } from 'react';
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
  const waveRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse interaction for wave effect (copied from Footer)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (waveRef.current) {
        const rect = waveRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate wave intensity based on mouse position
        const intensity = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        const maxIntensity = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
        const normalizedIntensity = Math.min(intensity / maxIntensity, 1);
        
        // Apply wave animation
        const waveElements = waveRef.current.querySelectorAll('path');
        waveElements.forEach((path, index) => {
          const delay = index * 0.1;
          // Front wave (index 2) gets half the amplitude
          const baseAmplitude = index === 2 ? 5 : 10;
          const amplitude = baseAmplitude + (normalizedIntensity * (index === 2 ? 10 : 20));
          const frequency = 0.02 + (normalizedIntensity * 0.01);
          
          path.style.transform = `translateY(${Math.sin(Date.now() * frequency + delay) * amplitude}px)`;
          path.style.transition = 'transform 0.1s ease-out';
        });
      }
    };

    const handleMouseLeave = () => {
      if (waveRef.current) {
        const waveElements = waveRef.current.querySelectorAll('path');
        waveElements.forEach((path) => {
          path.style.transform = 'translateY(0px)';
          path.style.transition = 'transform 0.5s ease-out';
        });
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    const currentWaveRef = waveRef.current;
    if (currentWaveRef) {
      currentWaveRef.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (currentWaveRef) {
        currentWaveRef.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
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
        
        {/* Wavy Divider - Copied from Footer */}
        <div className="page-hero-wave" ref={waveRef}>
          <svg viewBox="0 0 1200 200" preserveAspectRatio="none">
            <path className="wave-layer-1" d="M0,0V100.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,86.43,512.34,107.67,583,126.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,79,1113,39.71,1200,106.47V0Z" opacity=".25" fill="#3b82f6"></path>
            <path className="wave-layer-2" d="M0,0V69.81C13,90.92,27.64,110.86,47.69,126.05,99.41,165.27,165,165,224.58,145.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#1e40af"></path>
            <path className="wave-layer-3" d="M0,0V59.63C149.93,113,314.09,125.32,475.83,96.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,131.22,886,149.24,951.2,144c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#1e40af"></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default PageHero;