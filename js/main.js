document.addEventListener('DOMContentLoaded', init);
const log = console.log;
const warn = console.warn;

function init() {
  //dom ready
  registerSW();
}

function registerSW() {
  navigator.serviceWorker.register('/sw.js', { type: 'module' }).then((reg) => {
    console.log('service worker is registered');
  });
}
