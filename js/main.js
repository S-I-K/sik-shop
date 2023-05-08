$(()=>{
    $('a').click(function(e){
        e.preventDefault();
        console.log('clicked');
    });

    /* header scroll fixed */
    $(window).scroll(function(e){
        console.log($(window).scrollTop());
        if($(window).scrollTop() > 0) {
            $('header').addClass('fixed');
        }else{
            $('header').removeClass('fixed');
        }
    });

    /* looks code */
    let tabs = $('.tab');
    let contents = $('.content');
    // tabs을 클릭 했을 때 해당 요소 번째의 인덱스를 참조해 contents[i] 
    tabs.click(function(e){
        let tabI = $(this).index();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        contents.removeClass('active');
        contents.eq(tabI).addClass('active');
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

    /* performers slide */
    var swiper = new Swiper("#performers", {
        loop: true,
        loopedSlides: 1,
        loopAdditionalSlides : 1,
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1000,
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