var cacheVersion = 1;
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};
const offlineUrl = 'index.html';

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache.offline).then(function (cache) {
      return cache.addAll([
        './img/favicon.ico',
        './img/android-chrome-192x192.png',
        './favicon.ico',
        './css/custom.css',
        './css/mermaid.css',
        './js/script.js',
        './js/custom.js',
        './js/mermaid.js',
        './manifest.json',
        './mmd/0-approval-1-task-serial.mmd',
        './mmd/0-approval-2-task-parallel.mmd',
        './mmd/0-approval-2-task-serial.mmd',
        './mmd/1-approval-1-task-serial.mmd',
        './mmd/1-approval-2-task-parallel.mmd',
        './mmd/1-approval-2-task-serial.mmd',
        './mmd/2-approval-1-task-serial.mmd',
        './mmd/2-approval-2-task-parallel.mmd',
        './mmd/2-approval-2-task-serial.mmd',
        './mmd/BusinessRuleOrderSequence.mmd',
        './mmd/BusinessRuleOrderTD.mmd',
        './mmd/certificate-integration.mmd',
        './mmd/event-intake.mmd',
        './mmd/gantt.mmd',
        './mmd/graphLR.mmd',
        './mmd/graphTD.mmd',
        './mmd/if-branch-pattern.mmd',
        './mmd/import-pattern.mmd',
        './mmd/intake.mmd',
        './mmd/intakev2.mmd',
        './mmd/integrate.mmd',
        './mmd/sequenceDiagram.mmd',
        './mmd/test.mmd',
        './mmd/transform-map-order.mmd',
        offlineUrl
      ]);
    })
  );
});

this.addEventListener('fetch', event => {
  // request.mode = navigate isn't supported in all browsers
  // so include a check for Accept: text/html header.
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request.url).catch(error => {
        // Return the offline page
        return caches.match(offlineUrl);
      })
    );
  } else {
    // Respond with everything else if we can
    event.respondWith(caches.match(event.request)
      .then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});