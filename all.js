$(document).ready(function () {
    //lightbox效果
    lightbox.option({
        'resizeDuration': 600,
        'wrapAround': true,
    })

    //swiper效果
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 800,
        effect: 'coverflow',
      
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
});