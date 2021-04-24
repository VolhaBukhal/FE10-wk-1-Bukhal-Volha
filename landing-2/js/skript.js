// $(document).ready(function(){
//     $('.works').slick({
//         dots: true,
//         infinite: true,
//         speed: 500,
//         fade: true,
//         cssEase: 'linear',
//         slidesToShow: 4,
//         responsive: [
//             {
//                 breakpoint: 800,
//                 settings: "unslick"
//             }
//         ]
//     });
//   });
// !!! Get code from stackoverflow Above code don't work.
var sliderElem = $(".works"),
    sliderBool = false,
    sliderBreakpoint = 768,
    sliderSettings = {
        arrows: true,
        dots: true,
        autoplaySpeed: 3000,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: sliderBreakpoint,
                settings: "unslick"
            }
        ]
    };
function sliderInit() {
    if (window.innerWidth <= sliderBreakpoint) {
        if (sliderBool == false) {
            sliderElem.slick(sliderSettings);
            sliderBool = true;
        }
    } else {
        sliderBool = false;
    }
}

// resize
$(window).resize(function () {
    sliderInit();
});

 

