'use strict'
var nav = document.getElementById('nav');
     window.onscroll = function () {
    if(window.pageYOffset > 100) { 
      nav.classList.add("shrink");
    }else{
            nav.classList.remove("shrink");
         }
      }

      $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar-fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > 100);
        });
      });

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
















// var count = 0; // declaring "count" here makes the variable globally available

// function lemath()
// {    
//     // count++;
//     var stuff = document.getElementById('stuff');
//     stuff.innerHTML = count;
// }

// function begin()
// {
//     lemath();
//     setTimeout(begin, 1000, window);
// }

// document.addEventListener('DOMContentLoaded', function () {    
//     begin();
// });