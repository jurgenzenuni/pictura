const CACHE_NAME = 'pictura-cache-v1';
const STATIC_ASSETS = [
  '/',
  'index.html',
  'manifest.json',
  'logo192.png',
  'logo512.png',
  // Add other static assets like CSS, JavaScript, and images here
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

