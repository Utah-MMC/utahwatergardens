import React, { useEffect } from 'react';

/**
 * Mobile Hero Fix Component
 * Fixes hero section visibility issues on mobile devices
 */
const MobileHeroFix = () => {
  useEffect(() => {
    const fixMobileHero = () => {
      // Check if we're on mobile
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        // Find all hero sections
        const heroSections = document.querySelectorAll('.page-hero, .hero, .standard-hero');
        
        heroSections.forEach(hero => {
          // Ensure hero is visible
          hero.style.display = 'flex';
          hero.style.visibility = 'visible';
          hero.style.opacity = '1';
          
          // Fix positioning
          hero.style.position = 'relative';
          hero.style.top = '0';
          hero.style.left = '0';
          hero.style.right = '0';
          hero.style.width = '100vw';
          hero.style.height = '300px';
          hero.style.minHeight = '300px';
          hero.style.maxHeight = '300px';
          
          // Fix header clearance
          hero.style.marginTop = '60px';
          hero.style.paddingTop = '80px';
          
          // Ensure background is visible
          hero.style.background = '#f8fafc';
          hero.style.zIndex = '1';
          
          // Fix media elements
          const media = hero.querySelector('.page-hero-media, .hero-media, .standard-hero-media');
          if (media) {
            media.style.position = 'absolute';
            media.style.top = '0';
            media.style.left = '0';
            media.style.width = '100%';
            media.style.height = '100%';
            media.style.zIndex = '-1';
          }
          
          // Fix background images
          const bgImage = hero.querySelector('.page-hero-fallback, .hero-fallback, .standard-hero-fallback');
          if (bgImage) {
            bgImage.style.width = '100%';
            bgImage.style.height = '100%';
            bgImage.style.objectFit = 'cover';
            bgImage.style.objectPosition = 'center center';
          }
          
          // Fix content positioning
          const content = hero.querySelector('.page-hero-inner, .hero-inner, .standard-hero-inner');
          if (content) {
            content.style.position = 'relative';
            content.style.zIndex = '2';
            content.style.padding = '1rem';
            content.style.display = 'flex';
            content.style.flexDirection = 'column';
            content.style.justifyContent = 'center';
            content.style.alignItems = 'center';
            content.style.textAlign = 'center';
          }
        });
        
        // Fix gradient wrapper and wave effects
        const gradientWrapper = document.querySelector('.main-content-gradient');
        if (gradientWrapper) {
          gradientWrapper.style.minHeight = 'auto';
          gradientWrapper.style.background = 'transparent';
          gradientWrapper.style.marginTop = '-50px';
          gradientWrapper.style.paddingTop = '0';
        }
        
        // Hide wave effects
        const waveAttached = document.querySelector('.hero-wave-attached');
        if (waveAttached) {
          waveAttached.style.display = 'none';
          waveAttached.style.height = '0';
          waveAttached.style.margin = '0';
          waveAttached.style.padding = '0';
        }
        
        // Fix first section to connect to hero
        const firstSection = document.querySelector('.section:first-of-type');
        if (firstSection) {
          firstSection.style.marginTop = '-50px';
          firstSection.style.paddingTop = '2rem';
          firstSection.style.background = 'linear-gradient(to bottom, #87ceeb 0%, #b3e5fc 15%, #d1ecf1 30%, #e8f4f8 50%, #f0f8ff 70%, #f8fafc 85%, #ffffff 100%)';
        }
        
        console.log('Mobile hero fix applied to', heroSections.length, 'hero sections');
      }
    };

    // Apply fix immediately
    fixMobileHero();
    
    // Re-apply on resize
    window.addEventListener('resize', fixMobileHero);
    
    // Re-apply after a short delay to ensure DOM is ready
    setTimeout(fixMobileHero, 100);
    
    return () => {
      window.removeEventListener('resize', fixMobileHero);
    };
  }, []);

  return null;
};

export default MobileHeroFix;
