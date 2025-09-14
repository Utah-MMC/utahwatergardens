import React, { Suspense, lazy, Component } from 'react';

/**
 * Advanced Code Splitter Component
 * Provides intelligent code splitting with preloading and error boundaries
 */
class AdvancedCodeSplitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preloadedComponents: new Set(),
      loadingStates: new Map(),
      errorStates: new Map()
    };
  }

  // Preload components based on user behavior
  preloadComponent = (importPath) => {
    if (this.state.preloadedComponents.has(importPath)) {
      return Promise.resolve();
    }

    this.setState(prevState => ({
      loadingStates: new Map(prevState.loadingStates.set(importPath, true))
    }));

    return import(importPath)
      .then(() => {
        this.setState(prevState => {
          const newPreloaded = new Set(prevState.preloadedComponents);
          newPreloaded.add(importPath);
          const newLoadingStates = new Map(prevState.loadingStates);
          newLoadingStates.delete(importPath);
          return {
            preloadedComponents: newPreloaded,
            loadingStates: newLoadingStates
          };
        });
      })
      .catch((error) => {
        this.setState(prevState => {
          const newErrorStates = new Map(prevState.errorStates);
          newErrorStates.set(importPath, error);
          const newLoadingStates = new Map(prevState.loadingStates);
          newLoadingStates.delete(importPath);
          return {
            errorStates: newErrorStates,
            loadingStates: newLoadingStates
          };
        });
        throw error;
      });
  };

  // Preload components on hover/focus
  handlePreloadTrigger = (importPath) => {
    // Only preload if not already loaded or loading
    if (!this.state.preloadedComponents.has(importPath) && 
        !this.state.loadingStates.has(importPath)) {
      this.preloadComponent(importPath);
    }
  };

  render() {
    const { 
      importPath, 
      fallback = <DefaultLoadingFallback />,
      errorFallback = <DefaultErrorFallback />,
      preloadTrigger = 'hover',
      children,
      ...props 
    } = this.props;

    const LazyComponent = lazy(() => this.preloadComponent(importPath));

    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props}>
          {children}
        </LazyComponent>
      </Suspense>
    );
  }
}

/**
 * Smart Lazy Component with Preloading
 */
export const SmartLazyComponent = ({ 
  importPath, 
  fallback, 
  preloadOn = 'hover',
  preloadDelay = 100,
  children,
  ...props 
}) => {
  const [isPreloading, setIsPreloading] = React.useState(false);
  const timeoutRef = React.useRef(null);

  const handlePreload = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setIsPreloading(true);
      import(importPath).finally(() => setIsPreloading(false));
    }, preloadDelay);
  }, [importPath, preloadDelay]);

  const handleCancelPreload = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsPreloading(false);
  }, []);

  const eventHandlers = React.useMemo(() => {
    const handlers = {};
    
    if (preloadOn === 'hover') {
      handlers.onMouseEnter = handlePreload;
      handlers.onMouseLeave = handleCancelPreload;
    } else if (preloadOn === 'focus') {
      handlers.onFocus = handlePreload;
      handlers.onBlur = handleCancelPreload;
    } else if (preloadOn === 'intersection') {
      // Use Intersection Observer
      handlers.ref = (node) => {
        if (node) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  handlePreload();
                  observer.unobserve(node);
                }
              });
            },
            { rootMargin: '100px' }
          );
          observer.observe(node);
        }
      };
    }
    
    return handlers;
  }, [preloadOn, handlePreload, handleCancelPreload]);

  const LazyComponent = React.useMemo(() => 
    lazy(() => import(importPath)), 
    [importPath]
  );

    return (
      <div {...eventHandlers}>
        {isPreloading && <PreloadIndicator />}
        <Suspense fallback={fallback || <DefaultLoadingFallback />}>
          <LazyComponent {...props}>
            {children}
          </LazyComponent>
        </Suspense>
      </div>
    );
};

/**
 * Route-based Code Splitter
 */
export const RouteSplitter = ({ 
  routes = [],
  defaultFallback,
  preloadStrategy = 'aggressive' // 'aggressive', 'conservative', 'smart'
}) => {
  const [preloadedRoutes, setPreloadedRoutes] = React.useState(new Set());

  // Preload routes based on strategy
  React.useEffect(() => {
    if (preloadStrategy === 'aggressive') {
      // Preload all routes immediately
      routes.forEach(route => {
        import(route.component).catch(console.error);
      });
    } else if (preloadStrategy === 'smart') {
      // Preload routes on user interaction
      const handleMouseMove = (e) => {
        // Preload routes when user moves mouse toward navigation
        const navElement = document.querySelector('nav, .navigation, .menu');
        if (navElement) {
          const navRect = navElement.getBoundingClientRect();
          const distance = Math.sqrt(
            Math.pow(e.clientX - (navRect.left + navRect.width / 2), 2) +
            Math.pow(e.clientY - (navRect.top + navRect.height / 2), 2)
          );
          
          if (distance < 200) {
            routes.forEach(route => {
              if (!preloadedRoutes.has(route.path)) {
                import(route.component).then(() => {
                  setPreloadedRoutes(prev => new Set([...prev, route.path]));
                });
              }
            });
          }
        }
      };

      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [routes, preloadStrategy, preloadedRoutes]);

    return routes.map(route => {
      const LazyComponent = lazy(() => import(route.component));
      
      return (
        <Suspense key={route.path} fallback={route.fallback || defaultFallback || <DefaultLoadingFallback />}>
          <LazyComponent {...route.props} />
        </Suspense>
      );
    });
};

/**
 * Component-based Code Splitter for heavy components
 */
export const ComponentSplitter = ({ 
  components = [],
  maxConcurrentLoads = 3,
  loadOnDemand = true 
}) => {
  const [loadedComponents, setLoadedComponents] = React.useState(new Map());
  const [loadingQueue, setLoadingQueue] = React.useState([]);
  const [activeLoads, setActiveLoads] = React.useState(0);

  const loadComponent = React.useCallback(async (componentPath) => {
    if (loadedComponents.has(componentPath)) {
      return loadedComponents.get(componentPath);
    }

    if (activeLoads >= maxConcurrentLoads) {
      // Add to queue
      setLoadingQueue(prev => [...prev, componentPath]);
      return new Promise((resolve) => {
        const checkQueue = () => {
          if (activeLoads < maxConcurrentLoads) {
            setLoadingQueue(prev => prev.filter(path => path !== componentPath));
            loadComponent(componentPath).then(resolve);
          } else {
            setTimeout(checkQueue, 100);
          }
        };
        checkQueue();
      });
    }

    setActiveLoads(prev => prev + 1);
    
    try {
      const component = await import(componentPath);
      setLoadedComponents(prev => new Map(prev.set(componentPath, component.default)));
      return component.default;
    } finally {
      setActiveLoads(prev => prev - 1);
    }
  }, [loadedComponents, activeLoads, maxConcurrentLoads]);

  // Preload critical components
  React.useEffect(() => {
    if (loadOnDemand) return;

    components.forEach(component => {
      if (component.critical) {
        loadComponent(component.path);
      }
    });
  }, [components, loadComponent, loadOnDemand]);

  return {
    loadComponent,
    loadedComponents,
    isLoading: activeLoads > 0 || loadingQueue.length > 0
  };
};

// Loading and Error Fallback Components
const DefaultLoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
  </div>
);

const DefaultErrorFallback = ({ error, resetErrorBoundary }) => (
  <div style={{
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#fee',
    border: '1px solid #fcc',
    borderRadius: '4px',
    margin: '20px 0'
  }}>
    <h3>Something went wrong loading this component</h3>
    <details style={{ marginTop: '10px' }}>
      <summary>Error details</summary>
      <pre style={{ textAlign: 'left', fontSize: '12px' }}>
        {error && error.toString()}
      </pre>
    </details>
    <button 
      onClick={resetErrorBoundary}
      style={{
        marginTop: '10px',
        padding: '8px 16px',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Try again
    </button>
  </div>
);

const PreloadIndicator = () => (
  <div style={{
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '20px',
    height: '20px',
    backgroundColor: '#3498db',
    borderRadius: '50%',
    opacity: 0.7,
    animation: 'pulse 1s infinite'
  }} />
);

// CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }
`;
document.head.appendChild(style);

export default AdvancedCodeSplitter;
