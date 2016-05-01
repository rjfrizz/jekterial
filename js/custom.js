
$( document ).ready(function() {
  //initialize mobile menu
  $(".button-collapse").sideNav();

  //pushpin sidebar
  $('.sidebar').pushpin({ top: $('.sidebar').offset().top });
});
