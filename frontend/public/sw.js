const CACHE_NAME = 'utah-water-gardens-v2';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/images/utahWaterGardensLogo500x463.png',
  '/images/IMG_2770.jpg',
  '/images/IMG_2775.jpg',
  '/images/IMG_2776.jpg',
  '/images/IMG_2782.jpg',
  '/images/pondMaintenance.webp',
  '/images/pondConstruction1000x800.webp',
  '/images/pondConsultation1000x800.webp',
  '/images/pondDredging.webp',
  '/images/pondMaint.webp',
  '/images/pondServices-2.png',
  '/images/pumpRepair.webp',
  '/images/vacServices.webp',
  '/images/waterLillies.webp',
  '/images/plants500x500.webp',
  '/images/Pond-Supplies.webp',
  '/images/koi.webp',
  '/images/cleaningBefore1000x750.webp',
  '/images/pondCleanings.webp',
  '/images/pondMaint-topaz-enhance-3.9x.jpeg',
  '/images/pondDredging-topaz-enhance-3.9x.jpeg',
  '/images/uwg_image_1941-topaz-enhance-3.5x.jpeg',
  '/images/IMG_2779-topaz-enhance-2x-sharpen.jpeg'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Skip caching for analytics and tracking requests
  if (url.hostname.includes('googletagmanager.com') || 
      url.hostname.includes('google-analytics.com') ||
      url.hostname.includes('analytics.ahrefs.com') ||
      url.hostname.includes('doubleclick.net') ||
      url.hostname.includes('googleadservices.com') ||
      url.pathname.includes('gtag') ||
      url.pathname.includes('analytics')) {
    // Always fetch from network for analytics
    event.respondWith(fetch(request));
    return;
  }
  
  // Skip caching for API requests
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(fetch(request));
    return;
  }
  
  // For other requests, try cache first, then network
  event.respondWith(
    caches.match(request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(request).catch(() => {
          // If network fails and no cache, return offline page for navigation requests
          if (request.mode === 'navigate') {
            return caches.match('/');
          }
        });
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
