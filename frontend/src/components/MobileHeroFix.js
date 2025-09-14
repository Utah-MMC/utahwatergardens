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
