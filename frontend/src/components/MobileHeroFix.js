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
          // FORCE hero to be visible
          hero.style.display = 'flex';
          hero.style.visibility = 'visible';
          hero.style.opacity = '1';
          
          // Fix positioning - REMOVE margins that push it down
          hero.style.position = 'relative';
          hero.style.top = '0';
          hero.style.left = '0';
          hero.style.right = '0';
          hero.style.width = '100vw';
          hero.style.height = '400px';
          hero.style.minHeight = '400px';
          hero.style.maxHeight = '400px';
          
          // Remove problematic margins and padding
          hero.style.marginTop = '0';
          hero.style.marginBottom = '0';
          hero.style.paddingTop = '80px';
          hero.style.marginLeft = 'calc(-50vw + 50%)';
          hero.style.marginRight = 'calc(-50vw + 50%)';
          
          // FORCE background - use gradient instead of relying on image
          hero.style.background = 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)';
          hero.style.zIndex = '1';
          
          // FORCE media elements to be visible
          const media = hero.querySelector('.page-hero-media, .hero-media, .standard-hero-media');
          if (media) {
            media.style.position = 'absolute';
            media.style.top = '0';
            media.style.left = '0';
            media.style.width = '100%';
            media.style.height = '100%';
            media.style.zIndex = '-1';
            media.style.display = 'block';
            media.style.visibility = 'visible';
            media.style.opacity = '1';
          }
          
          // FORCE background images to load
          const bgImage = hero.querySelector('.page-hero-fallback, .hero-fallback, .standard-hero-fallback');
          if (bgImage) {
            bgImage.style.width = '100%';
            bgImage.style.height = '100%';
            bgImage.style.objectFit = 'cover';
            bgImage.style.objectPosition = 'center center';
            bgImage.style.display = 'block';
            bgImage.style.visibility = 'visible';
            bgImage.style.opacity = '1';
            bgImage.style.position = 'absolute';
            bgImage.style.top = '0';
            bgImage.style.left = '0';
            bgImage.style.zIndex = '-1';
          }
          
          // FORCE content to be visible
          const content = hero.querySelector('.page-hero-inner, .hero-inner, .standard-hero-inner');
          if (content) {
            content.style.position = 'relative';
            content.style.zIndex = '10';
            content.style.padding = '1rem';
            content.style.display = 'flex';
            content.style.flexDirection = 'column';
            content.style.justifyContent = 'center';
            content.style.alignItems = 'center';
            content.style.textAlign = 'center';
            content.style.visibility = 'visible';
            content.style.opacity = '1';
            content.style.color = 'white';
          }
          
          // FORCE titles to be visible
          const title = hero.querySelector('.page-hero-title, .hero-title, .standard-hero-title');
          if (title) {
            title.style.fontSize = '2rem';
            title.style.color = 'white';
            title.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
            title.style.visibility = 'visible';
            title.style.opacity = '1';
            title.style.display = 'block';
            title.style.fontWeight = '800';
          }
          
          // FORCE subtitles to be visible
          const subtitle = hero.querySelector('.page-hero-sub, .hero-sub, .standard-hero-sub');
          if (subtitle) {
            subtitle.style.display = 'block';
            subtitle.style.color = 'white';
            subtitle.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.5)';
            subtitle.style.visibility = 'visible';
            subtitle.style.opacity = '0.9';
          }
          
          // FORCE buttons to be visible
          const buttons = hero.querySelectorAll('.btn');
          buttons.forEach(btn => {
            btn.style.display = 'inline-block';
            btn.style.visibility = 'visible';
            btn.style.opacity = '1';
            if (btn.getAttribute('data-variant') === 'primary') {
              btn.style.background = '#dc2626';
              btn.style.color = 'white';
            } else {
              btn.style.background = 'transparent';
              btn.style.color = 'white';
              btn.style.border = '2px solid white';
            }
          });
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
