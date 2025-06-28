import { ComponentLoader } from './ComponentLoader.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Auto-discover approach - ComponentLoader will look for nav.html, nav.css, nav.js
  if (document.getElementById('header-nav')) {
    await ComponentLoader.loadComponent('header-nav', '/components/nav');
  }

  if (document.getElementById('footer-content')) {
    await ComponentLoader.loadComponent('footer-content', '/components/footer');
  }

  // You can still override if needed:
  // await ComponentLoader.loadComponent('header-nav', '/components/nav', {
  //   css: '/components/nav/custom-nav.css',  // Override CSS
  //   js: false,                             // Skip JS loading
  //   onLoad: () => console.log('Nav ready!')
  // });
});
