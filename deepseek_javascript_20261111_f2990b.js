self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('azan-v1').then((cache) => cache.addAll(['./azan.html'])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});