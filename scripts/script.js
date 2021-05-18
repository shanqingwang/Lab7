// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;
var entries;

// Make sure you register your service worker here too

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      let i = 1;
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        newPost.num = i;
        i += 1;
        console.log(newPost, newPost.num);
        document.querySelector('main').appendChild(newPost);
      });
    });
    entries = document.querySelectorAll('journal-entry');
    console.log(entries);

    entries.forEach(el => el.addEventListener('click', () => {
      console.log("clicked")
    }));

});

 
