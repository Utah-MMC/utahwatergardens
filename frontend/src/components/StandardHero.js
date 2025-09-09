import React from 'react';
import { Link } from 'react-router-dom';
import './StandardHero.css';

const StandardHero = ({
  title,
  subtitle,
  backgroundImage = "/images/IMG_8910-rotated-topaz-enhance-2.1x.jpeg",
  backgroundImageAlt = "Beautiful pond landscape with waterfall and rock features",
  showButtons = true,
  primaryButtonText = "TALK TO EXPERT",
  primaryButtonLink = "tel:(801) 590-8516",
  secondaryButtonText = "POND SERVICE",
  secondaryButtonLink = "/pond-services",
  className = ""
}) => {
  return (
    <>
      {/* MOBILE FIX STYLES - Same as HomePage */}
      <style>{`
        @media screen and (max-width: 768px) {
          .standard-hero {
            height: 250px !important;
            min-height: 250px !important;
            max-height: 250px !important;
            position: relative !important;
            width: 100vw !important;
            margin-left: 0 !important;
            left: 0 !important;
            right: 0 !important;
            top: 0 !important;
            background: #f8fafc !important;
            z-index: 1 !important;
            overflow: visible !important;
            padding-top: 100px !important;
            box-sizing: border-box !important;
          }
          .standard-hero-sub {
            display: none !important;
          }
          .standard-hero::before {
            display: block !important;
            bottom: -40px !important;
            height: 80px !important;
          }
          .section:first-of-type {
            margin-top: 0 !important;
            padding-top: 1rem !important;
          }
        }
      `}</style>
      
      {/* HERO */}
      <section 
        className={`standard-hero mobile-hero-fix ${className}`}
        aria-label="Intro"
      >
        <div className="standard-hero-media">
          <img 
            className="standard-hero-fallback" 
            src={backgroundImage} 
            alt={backgroundImageAlt} 
            loading="eager" 
          />
        </div>
        <div className="standard-hero-inner">
          <h1 className="standard-hero-title">{title}</h1>
          {subtitle && <p className="standard-hero-sub">{subtitle}</p>}
          {showButtons && (
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
    </>
  );
};

export default StandardHero;
