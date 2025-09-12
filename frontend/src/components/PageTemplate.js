import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import './PageTemplate.css';

const PageTemplate = ({
  // SEO Props
  title,
  description,
  keywords,
  canonical,
  
  // Hero Props
  heroTitle,
  heroSubtitle,
  heroBackgroundImage = "/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg",
  heroBackgroundImageAlt = "Beautiful pond landscape with waterfall and rock features",
  showHeroButtons = true,
  primaryButtonText = "TALK TO EXPERT",
  primaryButtonLink = "tel:(801) 590-8516",
  secondaryButtonText = "POND SERVICES",
  secondaryButtonLink = "/pond-services",
  
  // Layout Props
  showWave = true,
  showGradient = true,
  className = "",
  children
}) => {
  return (
    <>
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
      />

      <main className={`page-template ${className}`} id="main">
        {/* HERO SECTION */}
        <section 
          className="page-hero mobile-hero-fix" 
          aria-label="Intro"
        >
          <div className="page-hero-media">
            <img 
              className="page-hero-fallback" 
              src={heroBackgroundImage} 
              alt={heroBackgroundImageAlt} 
              loading="eager" 
            />
          </div>
          <div className="page-hero-inner">
            {/* WEBSITE UNDER CONSTRUCTION BANNER */}
            <div className="construction-banner">
              <div className="construction-banner-content">
                <h2 className="construction-title">🚧 WEBSITE IS CURRENTLY UNDER CONSTRUCTION 🚧</h2>
                <p className="construction-subtitle">We're working hard to improve your experience. Please check back soon!</p>
              </div>
            </div>
            
            <h1 className="page-hero-title">{heroTitle}</h1>
            {heroSubtitle && <p className="page-hero-sub">{heroSubtitle}</p>}
            {showHeroButtons && (
              <div className="btn-row">
                <a href={primaryButtonLink} className="btn" data-variant="primary">
                  {primaryButtonText}
                </a>
                <Link to={secondaryButtonLink} className="btn" data-variant="outline">
                  {secondaryButtonText}
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* WAVY DIVIDER */}
        {showWave && (
          <div className="hero-wave-attached">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path className="wave-layer-1" d="M0,0L50,20C100,40,200,80,300,80C400,80,500,40,600,20C700,0,800,0,900,20C1000,40,1100,80,1150,100L1200,120V0Z" fill="#ffffff" opacity="0.1"></path>
              <path className="wave-layer-2" d="M0,0L50,15C100,30,200,60,300,60C400,60,500,30,600,15C700,0,800,0,900,15C1000,30,1100,60,1150,75L1200,90V0Z" fill="#ffffff" opacity="0.2"></path>
              <path className="wave-layer-3" d="M0,0L50,10C100,20,200,40,300,40C400,40,500,20,600,10C700,0,800,0,900,10C1000,20,1100,40,1150,50L1200,60V0Z" fill="#ffffff" opacity="0.3"></path>
            </svg>
          </div>
        )}

        {/* MAIN CONTENT WRAPPER WITH GRADIENT */}
        {showGradient ? (
          <div className="main-content-gradient">
            {children}
          </div>
        ) : (
          children
        )}
      </main>
    </>
  );
};

export default PageTemplate;
