// Scroll utility functions for consistent scroll behavior across the app

/**
 * Scroll to the top of the page
 * @param {boolean} smooth - Whether to use smooth scrolling (default: true)
 */
export const scrollToTop = (smooth = true) => {
  window.scrollTo({ 
    top: 0, 
    behavior: smooth ? 'smooth' : 'instant' 
  });
};

/**
 * Scroll to a specific element
 * @param {string} selector - CSS selector for the target element
 * @param {boolean} smooth - Whether to use smooth scrolling (default: true)
 * @param {string} block - Vertical alignment (default: 'start')
 */
export const scrollToElement = (selector, smooth = true, block = 'start') => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ 
      behavior: smooth ? 'smooth' : 'instant', 
      block: block,
      inline: 'nearest'
    });
  }
};

/**
 * Scroll to form on form pages
 * @param {boolean} smooth - Whether to use smooth scrolling (default: true)
 */
export const scrollToForm = (smooth = true) => {
  const formSelectors = [
    'form',
    '.contact-form',
    '.estimate-form', 
    '.consultation-form',
    '.schedule-form',
    '.form-section',
    '.contact-section'
  ];
  
  for (const selector of formSelectors) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ 
        behavior: smooth ? 'smooth' : 'instant', 
        block: 'start',
        inline: 'nearest'
      });
      return;
    }
  }
  
  // Fallback to top if no form found
  scrollToTop(smooth);
};

/**
 * Check if current page is a form page
 * @returns {boolean}
 */
export const isFormPage = () => {
  const formPages = ['/contact', '/free-estimate', '/schedule', '/pond-consultations'];
  return formPages.some(path => window.location.pathname.includes(path));
};

/**
 * Get appropriate scroll target for current page
 * @returns {string} CSS selector for scroll target
 */
export const getScrollTarget = () => {
  const currentPath = window.location.pathname;
  
  if (currentPath.includes('/contact')) return 'form, .contact-form, .contact-section';
  if (currentPath.includes('/free-estimate')) return 'form, .estimate-form, .estimate-section';
  if (currentPath.includes('/schedule')) return 'form, .schedule-form, .schedule-section';
  if (currentPath.includes('/pond-consultations')) return 'form, .consultation-form, .consultation-section';
  
  return 'top';
};

/**
 * Smart scroll - automatically determines where to scroll based on page type
 * @param {boolean} smooth - Whether to use smooth scrolling (default: true)
 */
export const smartScroll = (smooth = true) => {
  const target = getScrollTarget();
  
  if (target === 'top') {
    scrollToTop(smooth);
  } else {
    scrollToElement(target, smooth);
  }
};

/**
 * Add click handler to element for scroll behavior
 * @param {HTMLElement} element - Element to add click handler to
 * @param {string} scrollType - Type of scroll ('top', 'form', 'smart', or CSS selector)
 */
export const addScrollHandler = (element, scrollType = 'smart') => {
  if (!element) return;
  
  const handleClick = (event) => {
    // Prevent default if it's a link to avoid navigation conflicts
    if (element.tagName === 'A') {
      event.preventDefault();
    }
    
    setTimeout(() => {
      switch (scrollType) {
        case 'top':
          scrollToTop();
          break;
        case 'form':
          scrollToForm();
          break;
        case 'smart':
          smartScroll();
          break;
        default:
          scrollToElement(scrollType);
      }
    }, 50);
  };
  
  element.addEventListener('click', handleClick);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('click', handleClick);
  };
};

export default {
  scrollToTop,
  scrollToElement,
  scrollToForm,
  isFormPage,
  getScrollTarget,
  smartScroll,
  addScrollHandler
};
