// Слайдер не вызывается при загрузке страницы, только при запуске через prepros


// function mobileOnlySlider() {
    // $('.works').slick({
    //     arrows: true,
    //     dots: true,
    //     autoplay: false,
    //     speed: 1000,
    //     autoplaySpeed: 5000
    // });
    // }
    // if(window.innerWidth < 768) {
    // mobileOnlySlider();
    // }
    
    // $(window).resize(function(e){
    //     if(window.innerWidth < 768) {
    //         if(!$('.works').hasClass('slick-initialized')){
    //             mobileOnlySlider();
    //         }
    
    //     }else{
    //         if($('.works').hasClass('slick-initialized')){
    //             $('.works').slick('unslick');
    //         }
    //     }
    // });

    // $(document).ready(function(){
    //     $('.feeedback-slider').slick({
    //         arrows: false,
    //         dots: true,
    //         infinite: true,
    //         rows: 1
          
    //     });
    //   });

$(document).ready(function(){

  //fixing the header
  let header = $('#header');
  let firstscreen = $('#firstscreen');
   
  // getting scrall position
  let scrollPos = $(window).scrollTop();
//scroll load resize - делаем проверку при прокрутке, изменении размеров, загрузке
  $(window).on("scroll load resize", function(){

    //getting the height of section firstscreen withot padding
    let firstscreenHeight = firstscreen.innerHeight();
    scrollPos = $(this).scrollTop();
    if( scrollPos > firstscreenHeight){
     
      header.addClass("fixed"); //adding class .fixed

    } else {

      header.removeClass("fixed"); //removing class .fixed

    }
  });

  //burger initializing
  $('.burger').click(function(event){
    $('.burger, .header-nav__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

 //slick slider initializing  https://kenwheeler.github.io/slick/
  $('.feeedback-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});




    
    


