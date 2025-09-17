// Image optimization utilities for better LCP performance

/**
 * Generate WebP image source with fallback
 * @param {string} src - Original image source
 * @param {string} fallback - Fallback format (default: 'jpeg')
 * @returns {Object} Object with WebP and fallback sources
 */
export const generateOptimizedImageSources = (src, fallback = 'jpeg') => {
  if (!src) return { webp: '', fallback: '' };
  
  // Replace extension with WebP
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return {
    webp: webpSrc,
    fallback: src
  };
};

/**
 * Generate responsive image sources for different screen sizes
 * @param {string} baseSrc - Base image source
 * @param {Array} sizes - Array of sizes (default: [400, 800, 1200, 1600])
 * @returns {Object} Object with srcSet and sizes
 */
export const generateResponsiveSources = (baseSrc, sizes = [400, 800, 1200, 1600]) => {
  if (!baseSrc) return { srcSet: '', sizes: '' };
  
  // Extract base name and extension
  const lastDot = baseSrc.lastIndexOf('.');
  const baseName = baseSrc.substring(0, lastDot);
  const extension = baseSrc.substring(lastDot);
  
  // Generate srcSet for different sizes
  const srcSet = sizes.map(size => `${baseName}-${size}w${extension} ${size}w`).join(', ');
  
  // Generate sizes attribute
  const sizesAttr = '(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw';
  
  return {
    srcSet,
    sizes: sizesAttr
  };
};

/**
 * Check if browser supports WebP
 * @returns {Promise<boolean>} Promise that resolves to WebP support status
 */
export const checkWebPSupport = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Get optimized image source based on browser support
 * @param {string} src - Original image source
 * @param {boolean} preferWebP - Whether to prefer WebP (default: true)
 * @returns {string} Optimized image source
 */
export const getOptimizedImageSource = async (src, preferWebP = true) => {
  if (!src) return '';
  
  if (preferWebP) {
    const supportsWebP = await checkWebPSupport();
    if (supportsWebP) {
      return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
  }
  
  return src;
};

/**
 * Preload critical images for better LCP
 * @param {Array} imageSources - Array of image sources to preload
 * @param {string} priority - Priority level ('high', 'low', 'auto')
 */
export const preloadImages = (imageSources, priority = 'high') => {
  imageSources.forEach(src => {
    if (src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = priority;
      document.head.appendChild(link);
    }
  });
};

/**
 * Lazy load non-critical images
 * @param {string} selector - CSS selector for images to lazy load
 */
export const initLazyLoading = (selector = 'img[data-src]') => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll(selector).forEach(img => {
      imageObserver.observe(img);
    });
  }
};
