import React, { useState, useEffect } from 'react';
import { generateResponsiveSources, getOptimizedImageSource } from '../utils/imageOptimization';

const OptimizedHeroImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  priority = false,
  sizes = "100vw",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setIsError] = useState(false);

  // Generate responsive image sources using utility
  const { srcSet, sizes: responsiveSizes } = generateResponsiveSources(src);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
  };

  // Preload critical hero images
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src]);

  return (
    <div 
      className={`optimized-hero-image-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        ...style
      }}
    >
      {/* Placeholder with better styling */}
      {!isLoaded && !hasError && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#1e40af', // Match site's blue theme
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1rem',
            fontWeight: '500'
          }}
        >
          Loading...
        </div>
      )}
      
      {/* Optimized Image */}
      <img
        src={src}
        srcSet={srcSet}
        sizes={responsiveSizes}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          ...style
        }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        {...props}
      />
    </div>
  );
};

export default OptimizedHeroImage;
