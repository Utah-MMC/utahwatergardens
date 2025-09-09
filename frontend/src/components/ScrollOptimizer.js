import { useEffect, useCallback } from 'react';

const ScrollOptimizer = () => {
  // Throttle scroll events for better performance
  const throttle = useCallback((func, delay) => {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }, []);

  // Optimize scroll performance - run once on mount instead of on every scroll
  useEffect(() => {
    // Enable hardware acceleration for scroll-heavy elements once
    const optimizeElements = () => {
      const scrollElements = document.querySelectorAll('.hero, .section, .card, .crsl-track, .crsl-slide');
      scrollElements.forEach(el => {
        if (!el.style.transform.includes('translateZ')) {
          el.style.transform = 'translateZ(0)';
          el.style.willChange = 'transform';
        }
      });
    };

    // Run immediately and after a short delay to catch dynamically loaded content
    optimizeElements();
    const timeoutId = setTimeout(optimizeElements, 1000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Optimize image loading for better scroll performance
  useEffect(() => {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window && images.length > 0) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '100px 0px', // Increased margin for earlier loading
        threshold: 0.01
      });

      images.forEach(img => imageObserver.observe(img));
      
      return () => {
        images.forEach(img => imageObserver.unobserve(img));
      };
    }
  }, []);

  return null;
};

export default ScrollOptimizer;
