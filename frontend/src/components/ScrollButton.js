import React from 'react';
import { addScrollHandler } from '../utils/scrollUtils';

/**
 * Button component with automatic scroll behavior
 * @param {Object} props - Component props
 * @param {string} props.scrollType - Type of scroll ('top', 'form', 'smart', or CSS selector)
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - CSS classes
 * @param {Object} props.style - Inline styles
 * @param {Function} props.onClick - Additional click handler
 * @param {Object} props... - Other button props
 */
const ScrollButton = ({ 
  scrollType = 'smart', 
  children, 
  className = '', 
  style = {}, 
  onClick,
  ...props 
}) => {
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    if (buttonRef.current) {
      const cleanup = addScrollHandler(buttonRef.current, scrollType);
      return cleanup;
    }
  }, [scrollType]);

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      ref={buttonRef}
      className={className}
      style={style}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default ScrollButton;
