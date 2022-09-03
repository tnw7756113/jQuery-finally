$(document).ready(function () {

    $('.menu2>ul>li>a').click(function (e) { 
      e.preventDefault();
      $(this).parent().siblings().find('ul').slideUp();
      $(this).parent().find('ul').slideToggle();

      $(this).addClass('border-green');
      $(this).parent().siblings().find('a').removeClass('border-green');
  });

    //lightbox效果
    lightbox.option({
        'resizeDuration': 600,
        'wrapAround': true,
    })

    //swiper效果設定
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 800,
        effect: 'slide',
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
    });

    $('.top a').click(function (e) { //top滑動效果
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      },600)
  });
});