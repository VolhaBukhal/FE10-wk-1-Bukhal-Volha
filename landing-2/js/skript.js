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
      $('.feeedback-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
      });
    });




    
    


