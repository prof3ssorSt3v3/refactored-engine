document.addEventListener('DOMContentLoaded', init);
const log = console.log;
const warn = console.warn;
const APP = {
  isStandalone: false,
};

function init() {
  //dom ready
  registerSW();
  // document.getElementById('submitButton').click();
  // document.querySelector('video').play();
  document.querySelector('footer>a').addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log('Thanks for clicking');
  });

  if (navigator.standalone) {
    console.log('Launched: Installed (iOS)');
    APP.isStandalone = true;
  } else if (matchMedia('(display-mode: standalone)').matches) {
    console.log('Launched: Installed');
    APP.isStandalone = true;
  } else {
    console.log('Launched: Browser Tab');
    APP.isStandalone = false;
  }
}

function registerSW() {
  navigator.serviceWorker.register('./sw.js', { type: 'module' }).then((reg) => {
    console.log('service worker is registered');
  });
}
