// RippleDemo.js
// Demo component showing different ripple effect configurations
// This can be used for testing and showcasing the water ripple effect

import React from 'react';
import WaterRipple from './WaterRipple.js';
import './RippleDemo.css';

const RippleDemo = () => {
  return (
    <div className="ripple-demo">
      <h2>Water Ripple Effect Demo</h2>
      <p>Click anywhere on the colored areas below to see different ripple effects:</p>
      
      <div className="demo-grid">
        {/* Default ripple */}
        <WaterRipple className="demo-card default" intensity="medium">
          <div className="demo-content">
            <h3>Default Ripple</h3>
            <p>Medium intensity, blue theme</p>
          </div>
        </WaterRipple>

        {/* Pond theme */}
        <WaterRipple className="demo-card pond" intensity="medium" theme="pond">
          <div className="demo-content">
            <h3>Pond Theme</h3>
            <p>Green ripples for pond/water garden feel</p>
          </div>
        </WaterRipple>

        {/* Ocean theme */}
        <WaterRipple className="demo-card ocean" intensity="high" theme="ocean">
          <div className="demo-content">
            <h3>Ocean Theme</h3>
            <p>High intensity, blue ocean ripples</p>
          </div>
        </WaterRipple>

        {/* Gold theme */}
        <WaterRipple className="demo-card gold" intensity="low" theme="gold">
          <div className="demo-content">
            <h3>Gold Theme</h3>
            <p>Low intensity, golden ripples</p>
          </div>
        </WaterRipple>

        {/* High intensity */}
        <WaterRipple className="demo-card high-intensity" intensity="high">
          <div className="demo-content">
            <h3>High Intensity</h3>
            <p>Multiple ripples with longer duration</p>
          </div>
        </WaterRipple>

        {/* Low intensity */}
        <WaterRipple className="demo-card low-intensity" intensity="low">
          <div className="demo-content">
            <h3>Low Intensity</h3>
            <p>Single, subtle ripple effect</p>
          </div>
        </WaterRipple>
      </div>

      <div className="demo-info">
        <h3>Features:</h3>
        <ul>
          <li>✓ Respects user's motion preferences</li>
          <li>✓ Multiple intensity levels (low, medium, high)</li>
          <li>✓ Different color themes (default, pond, ocean, gold)</li>
          <li>✓ Performance optimized with CSS transforms</li>
          <li>✓ Automatic cleanup after animation</li>
          <li>✓ Mobile and touch device optimized</li>
          <li>✓ Dark mode support</li>
        </ul>
      </div>
    </div>
  );
};

export default RippleDemo;
