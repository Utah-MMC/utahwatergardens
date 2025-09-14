import React, { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Advanced Image Optimizer Component
 * Provides intelligent image loading, compression, and optimization
 */
const AdvancedImageOptimizer = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
  quality = 85,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  onLoad,
  onError,
  ...props 
}) => {
  const [imageState, setImageState] = useState({
    isLoading: true,
    isLoaded: false,
    hasError: false,
    currentSrc: placeholder
  });
  
  const imgRef = useRef(null);
  const observerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Generate optimized image URLs
  const generateOptimizedSrc = useCallback((originalSrc, width = null) => {
    if (!originalSrc) return placeholder;
    
    // If it's already an optimized URL or external, return as-is
    if (originalSrc.includes('vercel.app') || originalSrc.startsWith('http')) {
      return originalSrc;
    }
    
    // For local images, we'll use WebP with fallback
    const baseUrl = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
    const webpUrl = `${baseUrl}.webp`;
    
    return webpUrl;
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority]);

  // Load image when in view
  useEffect(() => {
    if (!isInView || imageState.isLoaded) return;

    const optimizedSrc = generateOptimizedSrc(src);
    
    setImageState(prev => ({ ...prev, isLoading: true, currentSrc: optimizedSrc }));

    const img = new Image();
    
    img.onload = () => {
      setImageState(prev => ({
        ...prev,
        isLoading: false,
        isLoaded: true,
        hasError: false,
        currentSrc: optimizedSrc
      }));
      onLoad?.();
    };

    img.onerror = () => {
      // Fallback to original src if optimized version fails
      if (optimizedSrc !== src) {
        setImageState(prev => ({
          ...prev,
          isLoading: true,
          currentSrc: src
        }));
        
        const fallbackImg = new Image();
        fallbackImg.onload = () => {
          setImageState(prev => ({
            ...prev,
            isLoading: false,
            isLoaded: true,
            hasError: false,
            currentSrc: src
          }));
          onLoad?.();
        };
        
        fallbackImg.onerror = () => {
          setImageState(prev => ({
            ...prev,
            isLoading: false,
            hasError: true,
            currentSrc: placeholder
          }));
          onError?.();
        };
        
        fallbackImg.src = src;
      } else {
        setImageState(prev => ({
          ...prev,
          isLoading: false,
          hasError: true,
          currentSrc: placeholder
        }));
        onError?.();
      }
    };

    img.src = optimizedSrc;
  }, [isInView, src, generateOptimizedSrc, onLoad, onError]);

  // Preload critical images
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = generateOptimizedSrc(src);
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src, generateOptimizedSrc]);

  return (
    <div 
      className={`image-optimizer ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f3f4f6',
        ...style
      }}
      ref={imgRef}
    >
      <img
        src={imageState.currentSrc}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.3s ease-in-out',
          opacity: imageState.isLoading ? 0.7 : 1,
          transform: 'translateZ(0)', // Hardware acceleration
          willChange: 'opacity'
        }}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes}
        {...props}
      />
      
      {/* Loading indicator */}
      {imageState.isLoading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '20px',
            height: '20px',
            border: '2px solid #e5e7eb',
            borderTop: '2px solid #3b82f6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}
        />
      )}
      
      {/* Error state */}
      {imageState.hasError && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#6b7280',
            fontSize: '14px',
            textAlign: 'center'
          }}
        >
          Image failed to load
        </div>
      )}
    </div>
  );
};

export default AdvancedImageOptimizer;
