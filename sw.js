const version = 6;
const cacheName = `HelloMonday-${version}`;

const cacheList = [
  '/',
  '/index.html',
  '/css/main.css',
  '/js/main.js',
  '/manifest.json',
  '/img/apple-touch-icon.png',
  '/img/favicon-96x96.png',
  '/img/favicon.ico',
  '/img/favicon.svg',
  '/img/web-app-manifest-192x192.png',
  '/img/web-app-manifest-512x512.png',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap',
];

self.addEventListener('install', (ev) => {
  //add all the files from cache list
  //trigger a new download and saving to the cache of these cacheList files
  caches.open(cacheName).then((cache) => {
    cache.addAll(cacheList).catch((err) => {
      console.log(err, 'while saving all the cacheList');
    });
  });
});

self.addEventListener('activate', (ev) => {
  //remove old cache version files
  caches.keys().then((keys) => {
    //keys needs to be the array of things we WANT to delete
    keys
      .filter((key) => key != cacheName)
      .forEach((key) => {
        //for each cache name that is still in the array... delete
        caches.delete(key);
      });
  });
});

// self.addEventListener('fetch', (ev) => {
//   //handle different file requests based on properties and online status
//   //This fetch listener is the LAST thing that you want to build in your project
//   // ev.respondWith(new Response(null, { status: 404 }));
//   ev.respondWith(fetch(ev.request));
//   //this is just a pass-thru to ask for the file that the browser asked for
// });

self.addEventListener('message', (ev) => {
  //receive messages from the JS files from the website
});
