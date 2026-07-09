// Prison Visitor Guide — service worker (offline support).
//
// Strategy, chosen for an accuracy-first reference site:
//   - Navigations (HTML pages): NETWORK-FIRST. Online visitors always get the
//     live page (and it's saved to the cache as a side effect). Only when the
//     network fails do we serve the saved copy, and only then the offline page.
//     This is what keeps families from acting on stale info while they have
//     signal; the page's own "confirm before traveling" note + the offline
//     banner cover the case where they don't.
//   - Static assets (Astro fingerprints these, so the URL changes when the
//     content changes): CACHE-FIRST, which is safe and fast.
//
// The cache is refreshed on every successful online navigation, so saved pages
// stay current as long as the person is sometimes online. Bump CACHE_VERSION to
// force a clean slate on a future change.

const CACHE_VERSION = 'v1';
const CACHE = `pvg-${CACHE_VERSION}`;

// A small "app shell" available offline once the worker installs, even for
// pages the person hasn't opened yet. Everything else is cached on first visit.
const PRECACHE_URLS = [
  '/', '/es/',
  '/guides/', '/es/guides/',
  '/guides/visiting-basics/', '/guides/first-visit/', '/guides/staying-in-touch/',
  '/guides/sending-money/', '/guides/the-cost-of-staying-in-touch/', '/guides/know-your-rights/',
  '/es/guides/visiting-basics/', '/es/guides/first-visit/', '/es/guides/staying-in-touch/',
  '/es/guides/sending-money/', '/es/guides/the-cost-of-staying-in-touch/', '/es/guides/know-your-rights/',
  '/glossary/', '/es/glossary/',
  '/states/', '/es/states/',
  '/facilities/', '/es/facilities/',
  '/about/', '/es/about/',
  '/offline.html',
  '/favicon.svg', '/manifest.webmanifest', '/icon-192.png', '/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      // Resilient: one missing URL must not fail the whole install.
      .then((cache) => Promise.allSettled(PRECACHE_URLS.map((url) => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // don't touch third-party requests

  // HTML navigations: network-first, then cache, then the offline page.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('/offline.html')))
    );
    return;
  }

  // Everything else (CSS/JS/images/fonts/icons): cache-first, then network.
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => cached);
    })
  );
});
