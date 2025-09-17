import { useEffect } from 'react';

const PreloadHeroImage = ({ src, priority = false }) => {
  useEffect(() => {
    if (priority && src) {
      // Create preload link for critical hero images
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      
      // Add to head
      document.head.appendChild(link);
      
      // Cleanup function
      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [src, priority]);

  return null; // This component doesn't render anything
};

export default PreloadHeroImage;
