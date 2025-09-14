import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AdvancedScrollManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Define pages and their scroll targets
    const pageScrollTargets = {
      // Form pages - scroll to form
      '/contact': 'form, .contact-form, .contact-section',
      '/free-estimate': 'form, .estimate-form, .estimate-section',
      '/schedule': 'form, .schedule-form, .schedule-section',
      '/pond-consultations': 'form, .consultation-form, .consultation-section',
      
      // Service pages - scroll to top
      '/pond-services': 'top',
      '/pond-supplies': 'top',
      '/plants-fish': 'top',
      '/resources': 'top',
      '/pond-gallery': 'top',
      
      // Default - scroll to top
      'default': 'top'
    };

    // Find the appropriate scroll target for current page
    let scrollTarget = 'top';
    for (const [page, target] of Object.entries(pageScrollTargets)) {
      if (pathname.includes(page)) {
        scrollTarget = target;
        break;
      }
    }

    // Execute scroll after a short delay to ensure page is rendered
    setTimeout(() => {
      if (scrollTarget === 'top') {
        // Use instant scroll to prevent conflicts
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        // Try to find the target element
        const targetElement = document.querySelector(scrollTarget);
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        } else {
          // Fallback to top if target not found
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
    }, 50);

  }, [pathname]);

  useEffect(() => {
    // Enhanced click handler for navigation links only
    const handleClick = (event) => {
      const target = event.target;
      const isLink = target.tagName === 'A' || target.closest('a');
      
      // Only handle internal navigation links
      if (isLink) {
        const link = target.closest('a');
        if (link) {
          const href = link.getAttribute('href');
          
          // Skip external links, mailto, tel, and anchor links
          if (href && (
            href.startsWith('http') || 
            href.startsWith('mailto:') || 
            href.startsWith('tel:') ||
            href.startsWith('#')
          )) {
            return;
          }
          
          // Only handle internal navigation (React Router links)
          if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#')) {
            // Prevent default browser behavior and let React Router handle navigation
            // The route change will trigger the scroll to top in the first useEffect
            return;
          }
        }
      }
    };

    // Add event listener with capture to catch events early
    document.addEventListener('click', handleClick, true);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return null;
};

export default AdvancedScrollManager;
