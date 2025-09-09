import { useEffect, useRef, useCallback } from 'react';

const CarouselOptimizer = () => {
  const observerRef = useRef(null);
  const optimizedCarousels = useRef(new Set());

  // Optimize carousel performance when it comes into view
  const optimizeCarousel = useCallback((carousel) => {
    if (optimizedCarousels.current.has(carousel)) return;
    
    // Mark as optimized
    optimizedCarousels.current.add(carousel);
    
    // Enable hardware acceleration for all carousel elements
    const elements = carousel.querySelectorAll('.crsl-track, .crsl-slide, .crsl-item, img');
    elements.forEach(el => {
      el.style.transform = 'translateZ(0)';
      el.style.willChange = 'transform';
    });
    
    // Optimize images specifically
    const images = carousel.querySelectorAll('img');
    images.forEach(img => {
      img.loading = 'lazy';
      img.decoding = 'async';
      img.style.transform = 'translateZ(0)';
    });
    
    // Pre-load first slide images
    const firstSlide = carousel.querySelector('.crsl-slide:first-child');
    if (firstSlide) {
      const firstImages = firstSlide.querySelectorAll('img');
      firstImages.forEach(img => {
        img.loading = 'eager';
      });
    }
  }, []);

  useEffect(() => {
    // Create intersection observer for carousels
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            optimizeCarousel(entry.target);
          }
        });
      },
      {
        rootMargin: '100px 0px', // Start optimizing before carousel is visible
        threshold: 0.1
      }
    );

    // Observe all carousels
    const carousels = document.querySelectorAll('.crsl');
    carousels.forEach(carousel => {
      observerRef.current.observe(carousel);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [optimizeCarousel]);

  // Re-observe when new carousels are added
  useEffect(() => {
    const checkForNewCarousels = () => {
      const carousels = document.querySelectorAll('.crsl');
      carousels.forEach(carousel => {
        if (!optimizedCarousels.current.has(carousel) && observerRef.current) {
          observerRef.current.observe(carousel);
        }
      });
    };

    // Check periodically for new carousels
    const interval = setInterval(checkForNewCarousels, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default CarouselOptimizer;
