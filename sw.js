const CACHE_NAME = 'mocw-v33';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/about.html',
  '/services.html',
  '/pricing.html',
  '/contact.html',
  '/faq.html',
  '/quiz.html',
  '/disclaimer.html',
  '/privacy-policy.html',
  '/sitemap.html',
  '/terms-and-conditions.html',
  '/sitemap.xml',
  '/mocw.css',
  '/manifest.webmanifest',
  '/favicon/apple-touch-icon.png',
  '/favicon/favicon-32x32.png',
  '/favicon/favicon-16x16.png'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Never cache, intercept, or override WordPress blog (/blog) hosted on SiteGround
  if (url.pathname.startsWith('/blog')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});