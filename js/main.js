$(()=>{
    $('a').click(function(e){
        e.preventDefault();
        console.log('clicked');
    });

    /* intro slide */
    var swiper = new Swiper("#intro-slide", {
        slidesPerView: "auto",
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.collection-text-box > .btn').mouseenter(function(e){
        $('.more-btn').attr('src', './img/icon-arrow-white.svg');
    }).mouseleave(function(e){
        $('.more-btn').attr('src', './img/icon-arrow.svg');
    });
});