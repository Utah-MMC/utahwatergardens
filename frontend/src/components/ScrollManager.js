import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Define form pages that should scroll to form
    const formPages = [
      '/contact',
      '/free-estimate',
      '/schedule',
      '/pond-consultations'
    ];

    // Check if current page is a form page
    const isFormPage = formPages.some(formPath => pathname.includes(formPath));

    if (isFormPage) {
      // Scroll to form section on form pages
      setTimeout(() => {
        const formElement = document.querySelector('form, .contact-form, .estimate-form, .consultation-form');
        if (formElement) {
          formElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        } else {
          // Fallback: scroll to top if no form found
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure page is rendered
    } else {
      // Scroll to top for all other pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  useEffect(() => {
    // Add click listeners to all buttons and links for scroll to top
    const handleClick = (event) => {
      const target = event.target;
      const isButton = target.tagName === 'BUTTON' || target.classList.contains('btn');
      const isLink = target.tagName === 'A' || target.closest('a');
      const isFormPage = ['/contact', '/free-estimate', '/schedule', '/pond-consultations'].some(path => 
        window.location.pathname.includes(path)
      );

      // Don't scroll if it's a form page and clicking on form elements
      if (isFormPage && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT')) {
        return;
      }

      // Don't scroll for external links or mailto/tel links
      if (isLink) {
        const link = target.closest('a');
        if (link) {
          const href = link.getAttribute('href');
          if (href && (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:'))) {
            return;
          }
        }
      }

      // Scroll to top for buttons and internal links
      if (isButton || isLink) {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
      }
    };

    // Add event listener to document
    document.addEventListener('click', handleClick, true);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return null;
};

export default ScrollManager;
