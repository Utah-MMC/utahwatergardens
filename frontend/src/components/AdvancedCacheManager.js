import React, { useEffect, useRef, useState } from 'react';

/**
 * Advanced Cache Manager Component
 * Provides intelligent caching, preloading, and resource management
 */
const AdvancedCacheManager = ({ 
  enabled = true,
  cacheStrategy = 'aggressive', // 'aggressive', 'conservative', 'smart'
  preloadStrategy = 'intersection', // 'immediate', 'intersection', 'hover'
  maxCacheSize = 50 * 1024 * 1024, // 50MB
  enableServiceWorker = true,
  enableMemoryCache = true,
  enableDiskCache = true,
  enablePreloading = true
}) => {
  const cacheRef = useRef({
    memory: new Map(),
    disk: new Map(),
    preloaded: new Set(),
    stats: {
      hits: 0,
      misses: 0,
      size: 0,
      lastCleanup: Date.now()
    }
  });
  
  const [cacheStats, setCacheStats] = useState({});
  const observerRef = useRef(null);

  // Initialize cache management
  useEffect(() => {
    if (!enabled) return;

    // Initialize IndexedDB for disk cache
    if (enableDiskCache && 'indexedDB' in window) {
      initializeIndexedDBCache();
    }

    // Initialize memory cache cleanup
    if (enableMemoryCache) {
      const cleanupInterval = setInterval(cleanupMemoryCache, 30000); // Every 30 seconds
      return () => clearInterval(cleanupInterval);
    }
  }, [enabled, enableDiskCache, enableMemoryCache]);

  // Initialize IndexedDB cache
  const initializeIndexedDBCache = async () => {
    try {
      const request = indexedDB.open('UtahWaterGardensCache', 1);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('resources')) {
          const store = db.createObjectStore('resources', { keyPath: 'url' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
          store.createIndex('size', 'size', { unique: false });
        }
      };
      
      request.onsuccess = (event) => {
        cacheRef.current.db = event.target.result;
        loadCacheFromDisk();
      };
    } catch (error) {
      console.warn('IndexedDB not available:', error);
    }
  };

  // Load cache from disk
  const loadCacheFromDisk = async () => {
    if (!cacheRef.current.db) return;

    try {
      const transaction = cacheRef.current.db.transaction(['resources'], 'readonly');
      const store = transaction.objectStore('resources');
      const request = store.getAll();

      request.onsuccess = () => {
        request.result.forEach(item => {
          cacheRef.current.disk.set(item.url, item);
        });
        updateCacheStats();
      };
    } catch (error) {
      console.warn('Failed to load cache from disk:', error);
    }
  };

  // Cache resource
  const cacheResource = async (url, data, options = {}) => {
    const { 
      ttl = 3600000, // 1 hour default
      priority = 'normal',
      type = 'unknown'
    } = options;

    const cacheItem = {
      url,
      data,
      timestamp: Date.now(),
      ttl,
      priority,
      type,
      size: JSON.stringify(data).length,
      accessCount: 0,
      lastAccessed: Date.now()
    };

    // Memory cache
    if (enableMemoryCache) {
      cacheRef.current.memory.set(url, cacheItem);
      cacheRef.current.stats.size += cacheItem.size;
    }

    // Disk cache
    if (enableDiskCache && cacheRef.current.db) {
      try {
        const transaction = cacheRef.current.db.transaction(['resources'], 'readwrite');
        const store = transaction.objectStore('resources');
        store.put(cacheItem);
      } catch (error) {
        console.warn('Failed to cache to disk:', error);
      }
    }

    updateCacheStats();
  };

  // Get cached resource
  const getCachedResource = (url) => {
    // Check memory cache first
    if (enableMemoryCache && cacheRef.current.memory.has(url)) {
      const item = cacheRef.current.memory.get(url);
      if (isCacheItemValid(item)) {
        item.accessCount++;
        item.lastAccessed = Date.now();
        cacheRef.current.stats.hits++;
        return item.data;
      } else {
        cacheRef.current.memory.delete(url);
      }
    }

    // Check disk cache
    if (enableDiskCache && cacheRef.current.disk.has(url)) {
      const item = cacheRef.current.disk.get(url);
      if (isCacheItemValid(item)) {
        item.accessCount++;
        item.lastAccessed = Date.now();
        cacheRef.current.stats.hits++;
        
        // Move to memory cache for faster access
        if (enableMemoryCache) {
          cacheRef.current.memory.set(url, item);
        }
        
        return item.data;
      }
    }

    cacheRef.current.stats.misses++;
    return null;
  };

  // Check if cache item is still valid
  const isCacheItemValid = (item) => {
    return item && (Date.now() - item.timestamp) < item.ttl;
  };

  // Cleanup memory cache
  const cleanupMemoryCache = () => {
    const now = Date.now();
    const memoryCache = cacheRef.current.memory;
    
    // Remove expired items
    for (const [url, item] of memoryCache.entries()) {
      if (!isCacheItemValid(item)) {
        memoryCache.delete(url);
        cacheRef.current.stats.size -= item.size;
      }
    }

    // Remove least recently used items if cache is too large
    if (cacheRef.current.stats.size > maxCacheSize) {
      const sortedItems = Array.from(memoryCache.entries())
        .sort((a, b) => a[1].lastAccessed - b[1].lastAccessed);
      
      const itemsToRemove = Math.floor(sortedItems.length * 0.2); // Remove 20%
      for (let i = 0; i < itemsToRemove; i++) {
        const [url, item] = sortedItems[i];
        memoryCache.delete(url);
        cacheRef.current.stats.size -= item.size;
      }
    }

    cacheRef.current.stats.lastCleanup = now;
    updateCacheStats();
  };

  // Preload resources
  const preloadResource = async (url, options = {}) => {
    if (cacheRef.current.preloaded.has(url)) return;

    const { 
      priority = 'low',
      type = 'fetch'
    } = options;

    cacheRef.current.preloaded.add(url);

    try {
      let data;
      
      if (type === 'image') {
        data = await preloadImage(url);
      } else if (type === 'script') {
        data = await preloadScript(url);
      } else if (type === 'style') {
        data = await preloadStyle(url);
      } else {
        data = await fetch(url).then(response => response.json());
      }

      await cacheResource(url, data, { priority, type });
    } catch (error) {
      console.warn(`Failed to preload ${url}:`, error);
      cacheRef.current.preloaded.delete(url);
    }
  };

  // Preload image
  const preloadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve({ url, loaded: true });
      img.onerror = reject;
      img.src = url;
    });
  };

  // Preload script
  const preloadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => resolve({ url, loaded: true });
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  // Preload style
  const preloadStyle = (url) => {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = url;
      link.onload = () => {
        link.rel = 'stylesheet';
        resolve({ url, loaded: true });
      };
      link.onerror = reject;
      document.head.appendChild(link);
    });
  };

  // Intersection Observer for preloading
  useEffect(() => {
    if (!enablePreloading || preloadStrategy !== 'intersection') return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const preloadUrls = element.dataset.preload?.split(',') || [];
            
            preloadUrls.forEach(url => {
              if (url.trim()) {
                preloadResource(url.trim(), { 
                  priority: 'high',
                  type: element.dataset.preloadType || 'fetch'
                });
              }
            });
          }
        });
      },
      { rootMargin: '100px' }
    );

    // Observe elements with preload attributes
    const preloadElements = document.querySelectorAll('[data-preload]');
    preloadElements.forEach(element => {
      observerRef.current.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enablePreloading, preloadStrategy]);

  // Update cache statistics
  const updateCacheStats = () => {
    const stats = {
      ...cacheRef.current.stats,
      memoryItems: cacheRef.current.memory.size,
      diskItems: cacheRef.current.disk.size,
      preloadedItems: cacheRef.current.preloaded.size,
      hitRate: cacheRef.current.stats.hits / (cacheRef.current.stats.hits + cacheRef.current.stats.misses) * 100
    };
    
    setCacheStats(stats);
  };

  // Service Worker integration
  useEffect(() => {
    if (!enableServiceWorker || !enabled) return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        // Send cache configuration to service worker
        registration.active?.postMessage({
          type: 'CACHE_CONFIG',
          config: {
            strategy: cacheStrategy,
            maxSize: maxCacheSize,
            ttl: 3600000
          }
        });
      });
    }
  }, [enableServiceWorker, enabled, cacheStrategy, maxCacheSize]);

  // Preload critical resources
  useEffect(() => {
    if (!enablePreloading || preloadStrategy !== 'immediate') return;

    const criticalResources = [
      '/images/logo.png',
      '/images/hero-bg.jpg',
      '/styles/critical.css'
    ];

    criticalResources.forEach(url => {
      preloadResource(url, { priority: 'high' });
    });
  }, [enablePreloading, preloadStrategy]);

  // Cache API for external use
  useEffect(() => {
    if (enabled) {
      window.cacheManager = {
        cache: cacheResource,
        get: getCachedResource,
        preload: preloadResource,
        clear: () => {
          cacheRef.current.memory.clear();
          cacheRef.current.disk.clear();
          cacheRef.current.preloaded.clear();
          cacheRef.current.stats = {
            hits: 0,
            misses: 0,
            size: 0,
            lastCleanup: Date.now()
          };
          updateCacheStats();
        },
        getStats: () => cacheStats,
        cleanup: cleanupMemoryCache
      };
    }
  }, [enabled, cacheStats]);

  // Performance monitoring
  useEffect(() => {
    if (!enabled) return;

    const interval = setInterval(() => {
      updateCacheStats();
    }, 5000);

    return () => clearInterval(interval);
  }, [enabled]);

  return null; // This component doesn't render anything
};

export default AdvancedCacheManager;
