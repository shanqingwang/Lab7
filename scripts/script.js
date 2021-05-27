// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here

const header = document.querySelector('header > h1');
const settings = document.querySelector('header > img');

// Make sure you register your service worker here too

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach((entry, i) => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
 
        newPost.addEventListener("click", () =>{
          router.setState("single-entry", false, i+1, newPost.entry);
        });
        document.querySelector('main').appendChild(newPost);
        
      });
    })
});

header.addEventListener('click', () =>{
  router.setState('homepage', false);
});

settings.addEventListener('click', ()=>{
  router.setState('settings', false)
});

window.addEventListener('popstate', event => {
  router.setState(event.state, true);
});


