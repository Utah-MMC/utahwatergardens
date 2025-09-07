import React, { useEffect } from "react";

const WaterRipple = () => {
  useEffect(() => {
    const handleClick = (e) => {
      // Create ripple element
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      ripple.style.width = "0px";
      ripple.style.height = "0px";
      ripple.style.borderRadius = "50%";
      ripple.style.border = "2px solid rgba(255, 255, 255, 0.6)";
      ripple.style.background = "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)";
      ripple.style.pointerEvents = "none";
      ripple.style.zIndex = "9999";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.transition = "all 0.8s ease-out";
      
      document.body.appendChild(ripple);
      
      // Animate the ripple
      setTimeout(() => {
        const maxSize = Math.max(window.innerWidth, window.innerHeight) * 1.5;
        ripple.style.width = maxSize + "px";
        ripple.style.height = maxSize + "px";
        ripple.style.opacity = "0";
      }, 10);
      
      // Remove ripple after animation
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 1000);
    };

    // Add click listener to document
    document.addEventListener("click", handleClick);
    
    // Cleanup
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default WaterRipple;