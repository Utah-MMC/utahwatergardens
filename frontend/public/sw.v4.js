const CACHE_NAME = 'static-v4';
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
  console.log('Service Worker v4 installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache v4');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker v4 activating...');
  const KEEP = new Set(['static-v4']); // Only keep current cache
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!KEEP.has(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - only handle same-origin requests
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Only handle same-origin requests, let browser handle everything else
  if (url.origin !== self.location.origin) {
    return; // Let browser handle 3rd-party requests (analytics, ads, etc.)
  }
  
  // Skip caching for API requests
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(fetch(request));
    return;
  }
  
  // For same-origin requests, try network first, fallback to cache
  event.respondWith(
    fetch(request)
      .catch(() => {
        // If network fails, try cache
        return caches.match(request);
      })
      .catch(() => {
        // If both fail and it's a navigation request, return offline page
        if (request.mode === 'navigate') {
          return caches.match('/');
        }
      })
  );
});
