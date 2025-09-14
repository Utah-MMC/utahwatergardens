import React, { useState, useEffect, useRef } from 'react';

/**
 * Performance Dashboard Component
 * Provides real-time performance monitoring and optimization insights
 */
const PerformanceDashboard = ({ 
  enabled = true,
  showDashboard = false,
  position = 'bottom-right', // 'top-left', 'top-right', 'bottom-left', 'bottom-right'
  refreshInterval = 5000,
  enableAlerts = true,
  onPerformanceAlert = null
}) => {
  const [metrics, setMetrics] = useState({
    performance: {},
    vitals: {},
    resources: {},
    cache: {},
    bundle: {},
    alerts: []
  });
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(showDashboard);
  const intervalRef = useRef(null);

  // Update metrics from performance APIs
  useEffect(() => {
    if (!enabled || !isVisible) return;

    const updateMetrics = () => {
      const newMetrics = {
        performance: getPerformanceMetrics(),
        vitals: getWebVitalsMetrics(),
        resources: getResourceMetrics(),
        cache: getCacheMetrics(),
        bundle: getBundleMetrics(),
        alerts: []
      };

      // Check for performance alerts
      if (enableAlerts) {
        newMetrics.alerts = checkPerformanceAlerts(newMetrics);
      }

      setMetrics(newMetrics);

      // Trigger alert callbacks
      if (newMetrics.alerts.length > 0 && onPerformanceAlert) {
        newMetrics.alerts.forEach(alert => onPerformanceAlert(alert));
      }
    };

    // Initial update
    updateMetrics();

    // Set up interval
    intervalRef.current = setInterval(updateMetrics, refreshInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [enabled, isVisible, refreshInterval, enableAlerts, onPerformanceAlert]);

  // Get performance metrics
  const getPerformanceMetrics = () => {
    const navigation = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');
    
    return {
      loadTime: navigation ? navigation.loadEventEnd - navigation.fetchStart : 0,
      domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
      firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
      memory: performance.memory ? {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit
      } : null
    };
  };

  // Get Web Vitals metrics
  const getWebVitalsMetrics = () => {
    // These would typically come from the PerformanceAnalytics component
    return window.performanceMetrics?.getVitals() || {};
  };

  // Get resource metrics
  const getResourceMetrics = () => {
    const resources = performance.getEntriesByType('resource');
    const totalSize = resources.reduce((sum, r) => sum + (r.transferSize || 0), 0);
    const slowResources = resources.filter(r => r.duration > 1000);
    
    return {
      totalResources: resources.length,
      totalSize,
      slowResources: slowResources.length,
      averageLoadTime: resources.reduce((sum, r) => sum + r.duration, 0) / resources.length
    };
  };

  // Get cache metrics
  const getCacheMetrics = () => {
    return window.cacheManager?.getStats() || {};
  };

  // Get bundle metrics
  const getBundleMetrics = () => {
    return window.bundleOptimizer?.getAnalysis() || {};
  };

  // Check for performance alerts
  const checkPerformanceAlerts = (metrics) => {
    const alerts = [];

    // Bundle size alert
    if (metrics.bundle.bundleSize > 1000 * 1024) { // 1MB
      alerts.push({
        type: 'bundle_size',
        severity: 'warning',
        message: 'Bundle size is large',
        value: `${(metrics.bundle.bundleSize / 1024).toFixed(1)}KB`
      });
    }

    // Load time alert
    if (metrics.performance.loadTime > 3000) { // 3 seconds
      alerts.push({
        type: 'load_time',
        severity: 'error',
        message: 'Page load time is slow',
        value: `${(metrics.performance.loadTime / 1000).toFixed(1)}s`
      });
    }

    // Memory usage alert
    if (metrics.performance.memory && 
        metrics.performance.memory.used / metrics.performance.memory.total > 0.8) {
      alerts.push({
        type: 'memory_usage',
        severity: 'warning',
        message: 'High memory usage',
        value: `${((metrics.performance.memory.used / metrics.performance.memory.total) * 100).toFixed(1)}%`
      });
    }

    // Slow resources alert
    if (metrics.resources.slowResources > 5) {
      alerts.push({
        type: 'slow_resources',
        severity: 'warning',
        message: 'Multiple slow resources detected',
        value: `${metrics.resources.slowResources} resources`
      });
    }

    // Core Web Vitals alerts
    if (metrics.vitals.lcp > 4000) {
      alerts.push({
        type: 'lcp',
        severity: 'error',
        message: 'LCP is poor',
        value: `${(metrics.vitals.lcp / 1000).toFixed(1)}s`
      });
    }

    if (metrics.vitals.fid > 300) {
      alerts.push({
        type: 'fid',
        severity: 'error',
        message: 'FID is poor',
        value: `${metrics.vitals.fid}ms`
      });
    }

    if (metrics.vitals.cls > 0.25) {
      alerts.push({
        type: 'cls',
        severity: 'error',
        message: 'CLS is poor',
        value: metrics.vitals.cls.toFixed(3)
      });
    }

    return alerts;
  };

  // Toggle dashboard visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Toggle expanded state
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Get performance score
  const getPerformanceScore = () => {
    let score = 100;
    
    // Deduct points for various issues
    if (metrics.performance.loadTime > 3000) score -= 30;
    if (metrics.vitals.lcp > 4000) score -= 25;
    if (metrics.vitals.fid > 300) score -= 20;
    if (metrics.vitals.cls > 0.25) score -= 15;
    if (metrics.resources.slowResources > 5) score -= 10;
    
    return Math.max(0, score);
  };

  // Get score color
  const getScoreColor = (score) => {
    if (score >= 90) return '#10b981'; // green
    if (score >= 70) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  if (!enabled || !isVisible) return null;

  const score = getPerformanceScore();
  const scoreColor = getScoreColor(score);

  return (
    <div
      style={{
        position: 'fixed',
        ...getPositionStyles(position),
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        borderRadius: '8px',
        padding: isExpanded ? '16px' : '8px',
        fontSize: '12px',
        fontFamily: 'monospace',
        border: '1px solid #333',
        minWidth: isExpanded ? '300px' : '120px',
        maxWidth: '400px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: isExpanded ? '12px' : '4px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: scoreColor
            }}
          />
          <span style={{ fontWeight: 'bold' }}>
            {isExpanded ? 'Performance Dashboard' : 'Perf'}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <button
            onClick={toggleExpanded}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '10px'
            }}
          >
            {isExpanded ? '−' : '+'}
          </button>
          <button
            onClick={toggleVisibility}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '10px'
            }}
          >
            ×
          </button>
        </div>
      </div>

      {/* Performance Score */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: isExpanded ? '12px' : '4px'
        }}
      >
        <div style={{ fontSize: isExpanded ? '24px' : '16px', fontWeight: 'bold', color: scoreColor }}>
          {score}
        </div>
        {isExpanded && <div style={{ fontSize: '10px', opacity: 0.7 }}>Performance Score</div>}
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div>
          {/* Load Time */}
          <div style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Load Time:</span>
              <span style={{ color: metrics.performance.loadTime > 3000 ? '#ef4444' : '#10b981' }}>
                {(metrics.performance.loadTime / 1000).toFixed(1)}s
              </span>
            </div>
          </div>

          {/* Memory Usage */}
          {metrics.performance.memory && (
            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Memory:</span>
                <span>
                  {(metrics.performance.memory.used / 1024 / 1024).toFixed(1)}MB
                </span>
              </div>
            </div>
          )}

          {/* Web Vitals */}
          {Object.keys(metrics.vitals).length > 0 && (
            <div style={{ marginBottom: '8px' }}>
              <div style={{ fontSize: '10px', opacity: 0.7, marginBottom: '4px' }}>Core Web Vitals</div>
              {metrics.vitals.lcp && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                  <span>LCP:</span>
                  <span style={{ color: metrics.vitals.lcp > 4000 ? '#ef4444' : '#10b981' }}>
                    {(metrics.vitals.lcp / 1000).toFixed(1)}s
                  </span>
                </div>
              )}
              {metrics.vitals.fid && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                  <span>FID:</span>
                  <span style={{ color: metrics.vitals.fid > 300 ? '#ef4444' : '#10b981' }}>
                    {metrics.vitals.fid}ms
                  </span>
                </div>
              )}
              {metrics.vitals.cls && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                  <span>CLS:</span>
                  <span style={{ color: metrics.vitals.cls > 0.25 ? '#ef4444' : '#10b981' }}>
                    {metrics.vitals.cls.toFixed(3)}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Resources */}
          <div style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Resources:</span>
              <span>{metrics.resources.totalResources}</span>
            </div>
            {metrics.resources.slowResources > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                <span>Slow:</span>
                <span style={{ color: '#ef4444' }}>{metrics.resources.slowResources}</span>
              </div>
            )}
          </div>

          {/* Alerts */}
          {metrics.alerts.length > 0 && (
            <div style={{ marginTop: '12px' }}>
              <div style={{ fontSize: '10px', opacity: 0.7, marginBottom: '4px' }}>Alerts</div>
              {metrics.alerts.slice(0, 3).map((alert, index) => (
                <div
                  key={index}
                  style={{
                    fontSize: '10px',
                    color: alert.severity === 'error' ? '#ef4444' : '#f59e0b',
                    marginBottom: '2px'
                  }}
                >
                  {alert.message}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Helper function to get position styles
const getPositionStyles = (position) => {
  const styles = {};
  
  switch (position) {
    case 'top-left':
      styles.top = '20px';
      styles.left = '20px';
      break;
    case 'top-right':
      styles.top = '20px';
      styles.right = '20px';
      break;
    case 'bottom-left':
      styles.bottom = '20px';
      styles.left = '20px';
      break;
    case 'bottom-right':
    default:
      styles.bottom = '20px';
      styles.right = '20px';
      break;
  }
  
  return styles;
};

export default PerformanceDashboard;
