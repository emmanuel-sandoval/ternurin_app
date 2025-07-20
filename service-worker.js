self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mi-pwa-cache').then(cache => {
      return cache.addAll([
        '/',
        '/hola_mundo.html'
      ]);
    })
  );
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(respuesta => respuesta || fetch(event.request))
  );
});
