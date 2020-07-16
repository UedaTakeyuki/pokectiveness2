const staticCacheName = 'site-static-v1';
const assets = [
  '/',
  '/index.html',
  '/assets/*.png',
  '/assets/*.svg',
  '/assets/images/background-home.jpg',
  'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  'https://fonts.googleapis.com/css?family=Material+Icons',
  'https://fonts.googleapis.com/css?family=Parisienne',
  'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  '',
  '',
];
// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});