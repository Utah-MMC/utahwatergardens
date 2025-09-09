import { useEffect, useRef, useCallback } from "react";

const WaterRipple = () => {
  const ripplePool = useRef([]);
  const activeRipples = useRef(new Set());

  // Pre-create ripple elements for better performance
  useEffect(() => {
    const poolSize = 5;
    for (let i = 0; i < poolSize; i++) {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.pointerEvents = "none";
      ripple.style.zIndex = "9999";
      ripple.style.borderRadius = "50%";
      ripple.style.border = "1px solid rgba(255, 255, 255, 0.2)";
      ripple.style.background = "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.transition = "all 0.6s ease-out";
      ripple.style.opacity = "0";
      ripple.style.visibility = "hidden";
      document.body.appendChild(ripple);
      ripplePool.current.push(ripple);
    }
  }, []);

  const handleClick = useCallback((e) => {
    // Get available ripple from pool
    const ripple = ripplePool.current.find(r => !activeRipples.current.has(r));
    if (!ripple) return;

    // Mark as active
    activeRipples.current.add(ripple);

    // Position and show ripple
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    ripple.style.width = "0px";
    ripple.style.height = "0px";
    ripple.style.opacity = "1";
    ripple.style.visibility = "visible";

    // Animate with requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      const maxSize = Math.min(window.innerWidth, window.innerHeight) * 0.8;
      ripple.style.width = maxSize + "px";
      ripple.style.height = maxSize + "px";
      ripple.style.opacity = "0";
    });

    // Clean up after animation
    setTimeout(() => {
      ripple.style.visibility = "hidden";
      activeRipples.current.delete(ripple);
    }, 600);
  }, []);

  useEffect(() => {
    // Throttle click events to prevent excessive ripple creation
    let throttleTimer = null;
    const throttledHandleClick = (e) => {
      if (throttleTimer) return;
      throttleTimer = setTimeout(() => {
        handleClick(e);
        throttleTimer = null;
      }, 100);
    };

    document.addEventListener("click", throttledHandleClick, { passive: true });
    
    return () => {
      document.removeEventListener("click", throttledHandleClick);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, [handleClick]);

  return null;
};

export default WaterRipple;