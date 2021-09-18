'use strict'
var nav = document.getElementById('nav');
     window.onscroll = function () {
    if(window.pageYOffset > 100) { 
      nav.classList.add("shrink");
    }else{
            nav.classList.remove("shrink");
         }
      }

// const counters = document.querySelectorAll('autocount');
// const speed = 200;

// counters.forEach(counter => {
//     const updateCount = () => {
//         const target = +counter.getAttribute('data-target');
//         const count = +counter.innerText;

//         const inc = target / speed;

//         if(count < target) {
//             counter.innerText = count + inc;
//             setTimeout(updateCount, 1);
//         } else {
//             count.innerText = target;
//         }
//     }
// })
