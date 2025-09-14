import React from 'react';
import { Link } from 'react-router-dom';
import { addScrollHandler } from '../utils/scrollUtils';

/**
 * Link component with automatic scroll behavior
 * @param {Object} props - Component props
 * @param {string} props.to - Route path
 * @param {string} props.scrollType - Type of scroll ('top', 'form', 'smart', or CSS selector)
 * @param {React.ReactNode} props.children - Link content
 * @param {string} props.className - CSS classes
 * @param {Object} props.style - Inline styles
 * @param {Function} props.onClick - Additional click handler
 * @param {Object} props... - Other link props
 */
const ScrollLink = ({ 
  to,
  scrollType = 'smart', 
  children, 
  className = '', 
  style = {}, 
  onClick,
  ...props 
}) => {
  const linkRef = React.useRef(null);

  React.useEffect(() => {
    if (linkRef.current) {
      const cleanup = addScrollHandler(linkRef.current, scrollType);
      return cleanup;
    }
  }, [scrollType]);

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Link
      ref={linkRef}
      to={to}
      className={className}
      style={style}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
