import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { smartScroll, scrollToTop, scrollToForm, isFormPage } from '../utils/scrollUtils';

/**
 * Custom hook for managing scroll behavior
 * @param {Object} options - Configuration options
 * @param {boolean} options.autoScroll - Whether to auto-scroll on route change (default: true)
 * @param {string} options.scrollType - Type of scroll ('smart', 'top', 'form') (default: 'smart')
 * @param {number} options.delay - Delay before scrolling in ms (default: 100)
 */
export const useScrollBehavior = (options = {}) => {
  const {
    autoScroll = true,
    scrollType = 'smart',
    delay = 100
  } = options;
  
  const location = useLocation();

  // Auto-scroll on route change
  useEffect(() => {
    if (!autoScroll) return;
    
    const timeoutId = setTimeout(() => {
      switch (scrollType) {
        case 'top':
          scrollToTop();
          break;
        case 'form':
          scrollToForm();
          break;
        case 'smart':
        default:
          smartScroll();
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, autoScroll, scrollType, delay]);

  // Manual scroll functions
  const scrollToTopManual = useCallback(() => {
    scrollToTop();
  }, []);

  const scrollToFormManual = useCallback(() => {
    scrollToForm();
  }, []);

  const smartScrollManual = useCallback(() => {
    smartScroll();
  }, []);

  const isCurrentPageForm = useCallback(() => {
    return isFormPage();
  }, []);

  return {
    scrollToTop: scrollToTopManual,
    scrollToForm: scrollToFormManual,
    smartScroll: smartScrollManual,
    isFormPage: isCurrentPageForm
  };
};

export default useScrollBehavior;
