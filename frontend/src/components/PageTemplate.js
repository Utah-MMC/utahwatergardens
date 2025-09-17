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

        {/* Wavy divider removed to eliminate dead space */}

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
