AOS.init();
$(()=>{
    $('a').click(function(e){
        e.preventDefault();
    });
    /* header scroll fixed */
    $(window).scroll(function(e){
        console.log($(window).scrollTop());
        if($(window).scrollTop() > 0) {
            $('header').addClass('fixed');
            $('.search-btn > a > img').attr('src', './img/icon-search.svg');
            $('.cart-btn > a > img').attr('src', './img/icon-cart.svg');
            $('.login-btn > a > img').attr('src', './img/icon-login.svg');
        }else{
            $('header').removeClass('fixed');
            $('.search-btn > a > img').attr('src', './img/icon-search-white.svg');
            $('.cart-btn > a > img').attr('src', './img/icon-cart-white.svg');
            $('.login-btn > a > img').attr('src', './img/icon-login-white.svg');
        }
    });

    /* search btn click event */
    $('.search-btn').click(function(e){
        $('.search-wrap').toggleClass('show');
    });

    $(window).click(function(e){
        // console.log(e.target);
        if($(e.target).is('.search-wrap')){
            $('.search-wrap').removeClass('show');
        }else{
            /* console.log('검색할거 없으면 배경을 클릭하세요.'); */
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

    /* notice accordion */
    // faq-q를 클릭 했을 때 자식요소인 faq-a가 아래로 슬라이드 되어서 보여져야 함
    // faq-q에 show가 있으면 faq-a 슬라이드
    // faq-q 클릭 시 해당요소에만 show 추가, 다른 faq-q들은 show 삭제
    $('.faq-q').click(function(e){
        $(this).toggleClass('show');
        $(this).siblings().removeClass('show');
        if($(this).hasClass('show')){
            $(this).find('.faq-a').stop().slideDown(400);
            $('.faq-q').not($(this)).find('.faq-a').stop().slideUp(400);
        }else{
            $(this).find('.faq-a').stop().slideUp(400);
        }
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
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
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