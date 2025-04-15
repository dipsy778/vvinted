
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('stockx-receipt').then(function(cache) {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'stockxlogo.png',
        'checkmark.png',
        'hanken.woff2',
        'nimbus.woff2'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
