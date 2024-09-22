// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../node_modules/jquery/dist/jquery.min.js";
import "./countdown/jquery.countdown.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


//
// Place any custom JS here
//

$(function () {
  $('#timer').countdown({
      date: '10/17/2024 17:00:00',
      offset: +5.5,
      day: 'Day',
      days: 'Days'
  }, function () {
  });
});

// // Create an example popover
// document.querySelectorAll('[data-bs-toggle="popover"]')
//   .forEach(popover => {
//     new bootstrap.Popover(popover)
//   })
