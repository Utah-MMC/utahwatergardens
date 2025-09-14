import React, { useEffect, useRef, useState } from 'react';

/**
 * Advanced Performance Analytics Component
 * Monitors and reports comprehensive performance metrics
 */
const PerformanceAnalytics = ({ 
  enabled = true, 
  reportInterval = 30000, // 30 seconds
  enableRealUserMonitoring = true,
  enableCoreWebVitals = true,
  enableResourceMonitoring = true,
  enableCustomMetrics = true,
  onMetricsUpdate = null
}) => {
  const metricsRef = useRef({
    navigation: null,
    paint: {},
    vitals: {},
    resources: [],
    custom: {},
    errors: []
  });
  
  const [currentMetrics, setCurrentMetrics] = useState({});
  const reportTimeoutRef = useRef(null);

  // Core Web Vitals Monitoring
  useEffect(() => {
    if (!enableCoreWebVitals || !enabled) return;

    const measureWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        const vitals = {};
        
        getCLS((metric) => {
          vitals.cls = metric.value;
          updateMetrics('vitals', { cls: metric.value });
        });
        
        getFID((metric) => {
          vitals.fid = metric.value;
          updateMetrics('vitals', { fid: metric.value });
        });
        
        getFCP((metric) => {
          vitals.fcp = metric.value;
          updateMetrics('vitals', { fcp: metric.value });
        });
        
        getLCP((metric) => {
          vitals.lcp = metric.value;
          updateMetrics('vitals', { lcp: metric.value });
        });
        
        getTTFB((metric) => {
          vitals.ttfb = metric.value;
          updateMetrics('vitals', { ttfb: metric.value });
        });
        
        // Store vitals for reporting
        metricsRef.current.vitals = vitals;
      } catch (error) {
        console.warn('Web Vitals not available:', error);
      }
    };

    measureWebVitals();
  }, [enableCoreWebVitals, enabled]);

  // Navigation Timing
  useEffect(() => {
    if (!enabled) return;

    const measureNavigationTiming = () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        const navMetrics = {
          dns: navigation.domainLookupEnd - navigation.domainLookupStart,
          tcp: navigation.connectEnd - navigation.connectStart,
          ssl: navigation.secureConnectionStart > 0 ? navigation.connectEnd - navigation.secureConnectionStart : 0,
          ttfb: navigation.responseStart - navigation.requestStart,
          download: navigation.responseEnd - navigation.responseStart,
          domProcessing: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalTime: navigation.loadEventEnd - navigation.fetchStart
        };
        
        metricsRef.current.navigation = navMetrics;
        updateMetrics('navigation', navMetrics);
      }
    };

    // Measure immediately and after load
    measureNavigationTiming();
    
    const handleLoad = () => {
      setTimeout(measureNavigationTiming, 100);
    };
    
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [enabled]);

  // Paint Timing
  useEffect(() => {
    if (!enabled) return;

    const measurePaintTiming = () => {
      const paintEntries = performance.getEntriesByType('paint');
      const paintMetrics = {};
      
      paintEntries.forEach(entry => {
        paintMetrics[entry.name] = entry.startTime;
      });
      
      metricsRef.current.paint = paintMetrics;
      updateMetrics('paint', paintMetrics);
    };

    // Measure paint timing after load
    const handleLoad = () => {
      setTimeout(measurePaintTiming, 100);
    };
    
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [enabled]);

  // Resource Monitoring
  useEffect(() => {
    if (!enableResourceMonitoring || !enabled) return;

    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        const resourceMetrics = {
          name: entry.name,
          duration: entry.duration,
          size: entry.transferSize,
          type: entry.initiatorType,
          startTime: entry.startTime,
          endTime: entry.startTime + entry.duration,
          cached: entry.transferSize === 0 && entry.decodedBodySize > 0
        };
        
        metricsRef.current.resources.push(resourceMetrics);
        
        // Log slow resources
        if (entry.duration > 1000) {
          console.warn('Slow resource detected:', resourceMetrics);
        }
      });
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    return () => resourceObserver.disconnect();
  }, [enableResourceMonitoring, enabled]);

  // Custom Metrics
  useEffect(() => {
    if (!enableCustomMetrics || !enabled) return;

    // Memory usage (if available)
    if ('memory' in performance) {
      const measureMemory = () => {
        const memory = performance.memory;
        const memoryMetrics = {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit,
          memoryUsage: (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100
        };
        
        updateMetrics('custom', { memory: memoryMetrics });
      };
      
      measureMemory();
      const interval = setInterval(measureMemory, 10000); // Every 10 seconds
      
      return () => clearInterval(interval);
    }

    // Connection information
    if ('connection' in navigator) {
      const connection = navigator.connection;
      const connectionMetrics = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      };
      
      updateMetrics('custom', { connection: connectionMetrics });
    }

    // Device information
    const deviceMetrics = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      hardwareConcurrency: navigator.hardwareConcurrency || 'unknown'
    };
    
    updateMetrics('custom', { device: deviceMetrics });
  }, [enableCustomMetrics, enabled]);

  // Error Monitoring
  useEffect(() => {
    if (!enabled) return;

    const handleError = (event) => {
      const errorMetrics = {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.stack,
        timestamp: Date.now()
      };
      
      metricsRef.current.errors.push(errorMetrics);
      updateMetrics('errors', errorMetrics);
    };

    const handleUnhandledRejection = (event) => {
      const errorMetrics = {
        message: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        timestamp: Date.now()
      };
      
      metricsRef.current.errors.push(errorMetrics);
      updateMetrics('errors', errorMetrics);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [enabled]);

  // Update metrics and trigger callbacks
  const updateMetrics = (category, data) => {
    setCurrentMetrics(prev => ({
      ...prev,
      [category]: { ...prev[category], ...data }
    }));

    if (onMetricsUpdate) {
      onMetricsUpdate(category, data, metricsRef.current);
    }
  };

  // Periodic reporting
  useEffect(() => {
    if (!enabled || reportInterval <= 0) return;

    const reportMetrics = () => {
      const report = {
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        ...metricsRef.current
      };

      // Send to analytics service (implement your own)
      if (window.gtag) {
        window.gtag('event', 'performance_metrics', {
          custom_parameters: report
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Report:', report);
      }
    };

    reportTimeoutRef.current = setInterval(reportMetrics, reportInterval);

    return () => {
      if (reportTimeoutRef.current) {
        clearInterval(reportTimeoutRef.current);
      }
    };
  }, [enabled, reportInterval]);

  // Performance Score Calculation
  const calculatePerformanceScore = () => {
    const vitals = metricsRef.current.vitals;
    const navigation = metricsRef.current.navigation;
    
    let score = 100;
    
    // LCP scoring
    if (vitals.lcp) {
      if (vitals.lcp > 4000) score -= 30;
      else if (vitals.lcp > 2500) score -= 20;
      else if (vitals.lcp > 2000) score -= 10;
    }
    
    // FID scoring
    if (vitals.fid) {
      if (vitals.fid > 300) score -= 25;
      else if (vitals.fid > 100) score -= 15;
    }
    
    // CLS scoring
    if (vitals.cls) {
      if (vitals.cls > 0.25) score -= 25;
      else if (vitals.cls > 0.1) score -= 15;
    }
    
    // TTFB scoring
    if (vitals.ttfb) {
      if (vitals.ttfb > 800) score -= 10;
      else if (vitals.ttfb > 600) score -= 5;
    }
    
    return Math.max(0, score);
  };

  // Real User Monitoring
  useEffect(() => {
    if (!enableRealUserMonitoring || !enabled) return;

    // Track page views
    const trackPageView = () => {
      const metrics = {
        page: window.location.pathname,
        referrer: document.referrer,
        timestamp: Date.now(),
        loadTime: metricsRef.current.navigation?.totalTime || 0
      };

      // Send to analytics
      if (window.gtag) {
        window.gtag('event', 'page_view', metrics);
      }
    };

    trackPageView();
  }, [enableRealUserMonitoring, enabled]);

  // Expose metrics for external access
  useEffect(() => {
    if (enabled) {
      window.performanceMetrics = {
        getCurrentMetrics: () => metricsRef.current,
        getPerformanceScore: calculatePerformanceScore,
        getVitals: () => metricsRef.current.vitals,
        getNavigation: () => metricsRef.current.navigation,
        getResources: () => metricsRef.current.resources,
        getErrors: () => metricsRef.current.errors
      };
    }
  }, [enabled]);

  return null; // This component doesn't render anything
};

export default PerformanceAnalytics;
