const version = 1;
const cacheName = `HelloMonday-${version}`;

const cacheList = ['/', '/index.html', '/css/main.css', '/js/main.js'];

self.addEventListener('install', (ev) => {
  //add all the files from cache list
});

self.addEventListener('activate', (ev) => {
  //remove old cache version files
});

self.addEventListener('fetch', (ev) => {
  //handle different file requests based on properties and online status
});

self.addEventListener('message', (ev) => {
  //receive messages from the JS files from the website
});
