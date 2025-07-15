document.addEventListener("DOMContentLoaded", function () {
    const aboutCopmanySlider = new Swiper('.about-company_slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 100,

        pagination: {
            el: '.about-company_slider-pagination',
        },
        autoplay: {
            delay: 3000, // 3 секунды
            disableOnInteraction: false,
        },
    })
});