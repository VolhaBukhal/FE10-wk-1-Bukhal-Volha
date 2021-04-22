$(document).ready(function(){
  $('.hamburger').click(function(event){
    $('.hamburger, .header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


