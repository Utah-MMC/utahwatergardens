import React, { useEffect } from 'react';

/**
 * Simple Mobile Optimizer - Lightweight performance optimization for mobile
 * Reduces complexity to prevent white screen issues
 */
const SimpleMobileOptimizer = () => {
  useEffect(() => {
    // Simple mobile optimizations only
    const optimizeForMobile = () => {
      // Enable hardware acceleration for smooth scrolling
      const style = document.createElement('style');
      style.textContent = `
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        body {
          -webkit-overflow-scrolling: touch;
        }
        
        img {
          max-width: 100%;
          height: auto;
        }
      `;
      document.head.appendChild(style);
    };

    // Add lazy loading to images
    const addLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img:not([loading])');
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.loading = 'lazy';
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    // Optimize viewport for mobile
    const optimizeViewport = () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 
          'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes'
        );
      }
    };

    // Run optimizations
    optimizeForMobile();
    addLazyLoading();
    optimizeViewport();

    // Cleanup
    return () => {
      // Minimal cleanup
    };
  }, []);

  return null;
};

export default SimpleMobileOptimizer;
