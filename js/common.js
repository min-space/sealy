$(document).ready(function () { //시작

  // 모바일메뉴
  $(".ham").click(function () {
    $(".dim").fadeIn();
    $(".mgnb_wrap").animate({
        "right": "0"
    });
  });

  $(".mgnb_close").click(function () {
      $(".mgnb_wrap").animate({
          right: "-100%"
      });
      $(".dim").fadeOut();
  });

  // 검색
  $(".btn_search").click(function () {
    $(".search").fadeIn();
  });
  $(".search_close").click(function () {
      $(".search").fadeOut();
  });

  // 2차메뉴
  $(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().fadeToggle();
  });


  const visual_list = new Swiper(".visual_list", {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
  });


  const about_txt_list = new Swiper(".about_txt_list", {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
  });

  const about_img_list = new Swiper(".about_img_list", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });

  about_txt_list.controller.control = about_img_list;
  about_img_list.controller.control = about_txt_list;


  const prd_list = new Swiper(".prd_list", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".prd-next",
        prevEl: ".prd-prev",
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
    },
  });


  $(".collection ul li").hover(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

}); //끝