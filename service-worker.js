

self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('tinyPWA').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html'
        ]);
      })
    );
   });
   self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(responseFromCache) {
        if(responseFromCache === undefined) {
          return fetch(event.request)
        } else {
          return responseFromCache
        }
      })
    );
  });
  self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request).then(response => {
      if (response) return response;
      const request = event.request.clone();
      return fetch(request).then(response => {
        if (!response || response.status !== 200) { 
          return response;
        }
        const responseToCache = response.clone();
        caches.open('aio-dynamic-cache').then(cache => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    }));
  });
  self.addEventListener('activate', event => {
    const cacheWhitelist = ['aio-static-cache-v2'];
  
    event.waitUntil(
      caches.keys().then(cacheNames => Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName === -1)) {
            return caches.delete(cacheName);
          }
        })
      ));
    );
  })