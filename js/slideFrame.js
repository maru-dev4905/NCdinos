const swiper = new Swiper('.swiper-container', {
    allowTouchMove: false,  
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
});