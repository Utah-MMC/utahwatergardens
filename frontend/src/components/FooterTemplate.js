import React from 'react';
import CTA from './CTA';
import Footer from './Footer';
import './FooterTemplate.css';

/**
 * FooterTemplate - Standardized footer section for all pages
 * 
 * This component ensures consistent CTA and Footer appearance across all pages
 * by providing strong CSS isolation and standardized styling.
 * 
 * Features:
 * - Consistent CTA section with pond background image
 * - Animated wavy divider
 * - Standardized footer with company info and links
 * - CSS isolation to prevent custom page styles from affecting footer
 * - Responsive design for all screen sizes
 */
const FooterTemplate = ({ showCTA = true }) => {
  return (
    <div className="footer-template-wrapper">
      {/* CTA Section - Optional */}
      {showCTA && <CTA />}
      
      {/* Footer Section - Always consistent */}
      <Footer />
    </div>
  );
};

export default FooterTemplate;

