// Analytics utility functions for tracking conversions

/**
 * Track phone link conversions for website traffic
 * This function should be called when users click on phone numbers or call buttons
 */
export const trackPhoneConversion = () => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {'send_to': 'AW-999606407/K5hLCLO84_ICEIeR09wD'});
  }
};

/**
 * Track lead form conversions
 * This function should be called when users submit lead generation forms
 */
export const trackLeadConversion = () => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {'send_to': 'AW-999606407/TjczCKS5u6wZEIeR09wD'});
  }
};

/**
 * Track custom events
 * @param {string} eventName - The name of the event to track
 * @param {object} parameters - Additional parameters for the event
 */
export const trackCustomEvent = (eventName, parameters = {}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, parameters);
  }
};

/**
 * Track page views
 * @param {string} pagePath - The path of the page being viewed
 * @param {string} pageTitle - The title of the page being viewed
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'AW-999606407', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};
