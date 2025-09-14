import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Define form pages that should scroll to form instead of top
    const formPages = ['/contact', '/free-estimate', '/schedule', '/pond-consultations'];
    const isFormPage = formPages.some(formPath => pathname.includes(formPath));
    
    if (isFormPage) {
      // For form pages, scroll to form after a short delay
      setTimeout(() => {
        const formElement = document.querySelector('form, .contact-form, .estimate-form, .consultation-form, .schedule-form');
        if (formElement) {
          formElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        } else {
          // Fallback to top if no form found
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      }, 100);
    } else {
      // For all other pages, scroll to top immediately
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
