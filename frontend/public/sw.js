/**
 * Advanced Service Worker for Utah Water Gardens
 * Provides offline functionality, caching, and performance optimization
 */

const CACHE_NAME = 'utah-water-gardens-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
const IMAGE_CACHE = 'images-v1';

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
  NETWORK_ONLY: 'network-only',
  CACHE_ONLY: 'cache-only'
};

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json',
  '/favicon.ico'
];

// Images and assets to cache
const IMAGE_RESOURCES = [
  '/images/logo.png',
  '/images/hero-bg.jpg',
  '/images/favicon.ico'
];

// Install event - cache critical resources
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache critical resources
      caches.open(STATIC_CACHE).then(cache => {
        return cache.addAll(CRITICAL_RESOURCES);
      }),
      // Cache images
      caches.open(IMAGE_CACHE).then(cache => {
        return cache.addAll(IMAGE_RESOURCES);
      })
    ]).then(() => {
      console.log('Service Worker installed successfully');
      self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== IMAGE_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker activated');
      self.clients.claim();
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Determine cache strategy based on request type
  const strategy = getCacheStrategy(request);
  
  event.respondWith(
    handleRequest(request, strategy)
  );
});

// Determine cache strategy for different types of requests
function getCacheStrategy(request) {
  const url = new URL(request.url);
  
  // Static assets (JS, CSS, images)
  if (url.pathname.includes('/static/') || 
      url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|webp|ico)$/)) {
    return CACHE_STRATEGIES.CACHE_FIRST;
  }
  
  // API requests
  if (url.pathname.startsWith('/api/')) {
    return CACHE_STRATEGIES.NETWORK_FIRST;
  }
  
  // HTML pages
  if (request.headers.get('accept').includes('text/html')) {
    return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE;
  }
  
  // Default strategy
  return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE;
}

// Handle requests based on cache strategy
async function handleRequest(request, strategy) {
  const cacheName = getCacheName(request);
  
  try {
    switch (strategy) {
      case CACHE_STRATEGIES.CACHE_FIRST:
        return await cacheFirst(request, cacheName);
      
      case CACHE_STRATEGIES.NETWORK_FIRST:
        return await networkFirst(request, cacheName);
      
      case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
        return await staleWhileRevalidate(request, cacheName);
      
      case CACHE_STRATEGIES.NETWORK_ONLY:
        return await fetch(request);
      
      case CACHE_STRATEGIES.CACHE_ONLY:
        return await caches.match(request);
      
      default:
        return await staleWhileRevalidate(request, cacheName);
    }
  } catch (error) {
    console.error('Request handling failed:', error);
    
    // Fallback to offline page for HTML requests
    if (request.headers.get('accept').includes('text/html')) {
      const offlinePage = await caches.match('/offline.html');
      if (offlinePage) {
        return offlinePage;
      }
    }
    
    throw error;
  }
}

// Cache first strategy
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  
  if (networkResponse.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Network first strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    // Network failed, return cached response if available
    return cachedResponse;
  });
  
  // Return cached response immediately, then update cache
  return cachedResponse || fetchPromise;
}

// Get appropriate cache name for request
function getCacheName(request) {
  const url = new URL(request.url);
  
  if (url.pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico)$/)) {
    return IMAGE_CACHE;
  }
  
  if (url.pathname.includes('/static/')) {
    return STATIC_CACHE;
  }
  
  return DYNAMIC_CACHE;
}

// Background sync for offline form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(handleBackgroundSync());
  }
});

// Handle background sync
async function handleBackgroundSync() {
  try {
    // Get pending sync data from IndexedDB or localStorage
    const pendingData = await getPendingSyncData();
    
    for (const data of pendingData) {
      try {
        await fetch(data.url, {
          method: data.method || 'POST',
          headers: data.headers || {},
          body: data.body
        });
        
        // Remove from pending data
        await removePendingSyncData(data.id);
      } catch (error) {
        console.error('Background sync failed for:', data.id, error);
      }
    }
  } catch (error) {
    console.error('Background sync error:', error);
  }
}

// Get pending sync data
async function getPendingSyncData() {
  // This would typically use IndexedDB
  // For now, return empty array
  return [];
}

// Remove pending sync data
async function removePendingSyncData(id) {
  // This would typically use IndexedDB
  console.log('Removing pending sync data:', id);
}

// Push notification handling
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: data.icon || '/images/icon-192x192.png',
      badge: data.badge || '/images/badge-72x72.png',
      tag: data.tag,
      data: data.data,
      actions: data.actions,
      requireInteraction: data.requireInteraction || false
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action) {
    // Handle specific action
    handleNotificationAction(event.action, event.notification.data);
  } else {
    // Default action - open app
    event.waitUntil(
      clients.openWindow(event.notification.data?.url || '/')
    );
  }
});

// Handle notification actions
function handleNotificationAction(action, data) {
  switch (action) {
    case 'view':
      clients.openWindow(data?.url || '/');
      break;
    case 'dismiss':
      // Just close the notification
      break;
    default:
      console.log('Unknown notification action:', action);
  }
}

// Message handling from main thread
self.addEventListener('message', event => {
  const { type, data } = event.data;
  
  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
    
    case 'CACHE_CONFIG':
      // Update cache configuration
      console.log('Cache config updated:', data);
      break;
    
    case 'CLEAR_CACHE':
      clearAllCaches();
      break;
    
    case 'PRELOAD_RESOURCES':
      preloadResources(data.urls);
      break;
    
    default:
      console.log('Unknown message type:', type);
  }
});

// Clear all caches
async function clearAllCaches() {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames.map(cacheName => caches.delete(cacheName))
  );
  console.log('All caches cleared');
}

// Preload resources
async function preloadResources(urls) {
  const cache = await caches.open(DYNAMIC_CACHE);
  
  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        cache.put(url, response);
      }
    } catch (error) {
      console.error('Failed to preload:', url, error);
    }
  }
}

// Periodic cache cleanup
setInterval(async () => {
  await cleanupOldCaches();
}, 24 * 60 * 60 * 1000); // Daily cleanup

// Clean up old cache entries
async function cleanupOldCaches() {
  const cacheNames = await caches.keys();
  
  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const requests = await cache.keys();
    
    for (const request of requests) {
      const response = await cache.match(request);
      if (response) {
        const dateHeader = response.headers.get('date');
        if (dateHeader) {
          const responseDate = new Date(dateHeader);
          const age = Date.now() - responseDate.getTime();
          
          // Remove entries older than 7 days
          if (age > 7 * 24 * 60 * 60 * 1000) {
            await cache.delete(request);
          }
        }
      }
    }
  }
}

console.log('Advanced Service Worker loaded successfully');