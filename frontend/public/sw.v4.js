const CACHE_NAME = 'static-v6';
const urlsToCache = [
  // Only cache images, not HTML/JS/CSS to prevent white screen issues
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
  const KEEP = new Set(['static-v6']); // Only keep current cache
  
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
  
  // For HTML files (navigation requests), always try network first
  if (request.mode === 'navigate' || request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // If network succeeds, return the response
          return response;
        })
        .catch(() => {
          // If network fails, try cache
          return caches.match(request);
        })
        .catch(() => {
          // If both fail, return the main page
          return caches.match('/');
        })
    );
    return;
  }
  
  // For JavaScript and CSS files, always try network first to get fresh versions
  if (request.url.includes('.js') || request.url.includes('.css')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // If network succeeds, return the response
          return response;
        })
        .catch(() => {
          // If network fails, try cache
          return caches.match(request);
        })
    );
    return;
  }
  
  // For static assets (JS, CSS, images), try cache first, then network
  event.respondWith(
    caches.match(request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(request);
      })
      .catch(() => {
        // If both fail, return a basic response for images
        if (request.destination === 'image') {
          return new Response('', { status: 404 });
        }
      })
  );
});
