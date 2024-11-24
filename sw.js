const VERSION = '_-v.0.0.1';

// Install Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(VERSION).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/logo.svg',
      ]);
    })
  );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== VERSION) {
            return caches.delete(cacheName); // Clean up old caches
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch assets (serve from cache or network)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if available, otherwise fetch from network
      return cachedResponse || fetch(event.request);
    })
  );
});