document.addEventListener("DOMContentLoaded", function () {
  const sliderReviews = new Swiper('.reviews_slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 100,
    navigation: {
      nextEl: '.reviews_swiper-button-next',
      prevEl: '.reviews_swiper-button-prev',
    },

    pagination: {
      el: '.reviews_pagination ',
    },
  });
});