import { useEffect, useRef, useCallback } from 'react';

const ScrollPerformanceFix = () => {
  const lastScrollY = useRef(0);
  const scrollDirection = useRef('down');
  const isScrolling = useRef(false);

  // Optimize scroll performance specifically for downward scrolling
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
    
    // Only optimize when scrolling down (where the lag occurs)
    if (direction === 'down' && !isScrolling.current) {
      isScrolling.current = true;
      
      // Use requestAnimationFrame for smooth performance
      requestAnimationFrame(() => {
        // Pre-load images that are about to come into view
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
          const rect = img.getBoundingClientRect();
          // If image is within 200px of viewport, load it
          if (rect.top < window.innerHeight + 200) {
            img.loading = 'eager';
          }
        });
        
        // Optimize carousel elements specifically
        const carouselElements = document.querySelectorAll('.crsl-track, .crsl-slide, .crsl-item, .crsl .item');
        carouselElements.forEach(el => {
          if (!el.style.transform.includes('translateZ')) {
            el.style.transform = 'translateZ(0)';
            el.style.willChange = 'transform';
            el.style.contain = 'layout';
          }
        });
        
        // Optimize carousel images specifically
        const carouselImages = document.querySelectorAll('.crsl .item img');
        carouselImages.forEach(img => {
          if (!img.style.transform.includes('translateZ')) {
            img.style.transform = 'translateZ(0)';
            img.style.backfaceVisibility = 'hidden';
            img.style.imageRendering = 'optimizeSpeed';
          }
        });
        
        isScrolling.current = false;
      });
    }
    
    lastScrollY.current = currentScrollY;
    scrollDirection.current = direction;
  }, []);

  useEffect(() => {
    // Throttle scroll events to prevent excessive calls
    let timeoutId;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Pre-optimize elements on mount
  useEffect(() => {
    const optimizeElements = () => {
      // Optimize all scroll-heavy elements
      const elements = document.querySelectorAll('.hero, .section, .card, .crsl, .crsl-track, .crsl-slide, .crsl-item');
      elements.forEach(el => {
        if (!el.style.transform.includes('translateZ')) {
          el.style.transform = 'translateZ(0)';
          el.style.willChange = 'transform';
        }
      });
    };

    // Run immediately and after content loads
    optimizeElements();
    const timeoutId = setTimeout(optimizeElements, 500);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return null;
};

export default ScrollPerformanceFix;
