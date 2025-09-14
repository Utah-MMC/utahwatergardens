import React, { useEffect } from 'react';

/**
 * Viewport Fix Component - Ensures proper mobile viewport scaling
 * Fixes the mobile scaling issue once and for all
 */
const ViewportFix = () => {
  useEffect(() => {
    const fixViewport = () => {
      // Remove all existing viewport meta tags
      const existingViewports = document.querySelectorAll('meta[name="viewport"]');
      existingViewports.forEach(vp => vp.remove());
      
      // Create new viewport meta tag with optimal settings
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover';
      
      // Insert at the very beginning of head
      document.head.insertBefore(viewport, document.head.firstChild);
      
      // Force CSS viewport units
      const style = document.createElement('style');
      style.textContent = `
        html {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          text-size-adjust: 100%;
        }
        
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }
        
        * {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Force proper mobile scaling */
        @media screen and (max-width: 768px) {
          html {
            font-size: 16px !important;
          }
          
          body {
            width: 100vw !important;
            max-width: 100vw !important;
            overflow-x: hidden !important;
          }
          
          #root {
            width: 100vw !important;
            max-width: 100vw !important;
            overflow-x: hidden !important;
          }
        }
      `;
      document.head.appendChild(style);
      
      console.log('Viewport fix applied - mobile scaling should now work correctly');
    };

    // Apply fix immediately
    fixViewport();
    
    // Re-apply on resize to ensure it sticks
    window.addEventListener('resize', fixViewport);
    
    // Also apply after a short delay to ensure DOM is ready
    setTimeout(fixViewport, 100);
    
    return () => {
      window.removeEventListener('resize', fixViewport);
    };
  }, []);

  return null;
};

export default ViewportFix;
