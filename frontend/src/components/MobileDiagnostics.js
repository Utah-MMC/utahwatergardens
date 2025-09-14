import React, { useEffect, useState } from 'react';

/**
 * Mobile Diagnostics Component
 * Helps diagnose mobile-specific issues
 */
const MobileDiagnostics = ({ enabled = false }) => {
  const [diagnostics, setDiagnostics] = useState({
    userAgent: '',
    viewport: '',
    touchSupport: false,
    orientation: '',
    connection: '',
    memory: null,
    errors: []
  });

  useEffect(() => {
    if (!enabled) return;

    const runDiagnostics = () => {
      const newDiagnostics = {
        userAgent: navigator.userAgent,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        touchSupport: 'ontouchstart' in window,
        orientation: window.screen.orientation ? window.screen.orientation.type : 'unknown',
        connection: navigator.connection ? navigator.connection.effectiveType : 'unknown',
        memory: navigator.deviceMemory || 'unknown',
        errors: []
      };

      // Check for common mobile issues
      if (window.innerWidth < 768) {
        newDiagnostics.errors.push('Mobile viewport detected');
      }

      if (!('IntersectionObserver' in window)) {
        newDiagnostics.errors.push('IntersectionObserver not supported');
      }

      if (!('serviceWorker' in navigator)) {
        newDiagnostics.errors.push('Service Worker not supported');
      }

      setDiagnostics(newDiagnostics);
      
      // Log to console for debugging
      console.log('Mobile Diagnostics:', newDiagnostics);
    };

    runDiagnostics();
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      left: '10px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      fontFamily: 'monospace',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <div><strong>Mobile Diagnostics</strong></div>
      <div>Viewport: {diagnostics.viewport}</div>
      <div>Touch: {diagnostics.touchSupport ? 'Yes' : 'No'}</div>
      <div>Orientation: {diagnostics.orientation}</div>
      <div>Connection: {diagnostics.connection}</div>
      <div>Memory: {diagnostics.memory}</div>
      {diagnostics.errors.length > 0 && (
        <div style={{ color: '#ff6b6b' }}>
          Issues: {diagnostics.errors.join(', ')}
        </div>
      )}
    </div>
  );
};

export default MobileDiagnostics;
