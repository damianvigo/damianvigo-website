const CACHE_NAME = 'v1_cache_damian_vigo',
urlsToCache = [
  '../index.html',
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css" />',
  '<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700;900&display=swap" rel="stylesheet" />',
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css" />',
  '../assets/styles/styles.css',
  '../assets/styles/tablet.css',
  '../assets/styles/desktop.css',
  '../js/index.js',
  '../assets/icon/programming_64.png',
  '../assets/favicon/favicon.ico'
]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(urlsToCache)
      .then(() => self.skipWaiting())
    })
    .catch(err => console.log('Fallo registro de cache', err))
  )
});


self.addEventListener('activate', e => {
  const cacheWhitelist = [ CACHE_NAME ]

  e.waitUntil(
    caches.keys()
    .then(cachesNames => {
      cachesNames.map(cacheName => {
        if (cacheWhitelist.indexOf(cacheName) === -1) {
          return caches.delete(cacheName)
        }
      })
    })
    .then(() => self.clients.claim())
  )
});

self.addEventListener('fetch', e => {
  e.responseWith(
    caches.match(e.request)
    .then(res => {
      if (res) {
        // recupero del cache
        return res
      }
      // recupero la peticion url
      return fetch(e.request)
    })
  )
});
