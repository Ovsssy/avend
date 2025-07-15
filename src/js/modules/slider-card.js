document.addEventListener("DOMContentLoaded", function () {
  const swiperThumb2 = new Swiper(".swiperTumb2", {
    spaceBetween: 15,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {

      991:{
        spaceBetween: 4,
      }
    }
  });

  const mainSwiperTumb = new Swiper(".swiperTumb", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiperThumb2,
    },
  });

  const swiperTumbSlides = document.querySelectorAll('.swiperTumb2 .swiper-slide');
  if (swiperTumbSlides) {
    if (swiperTumbSlides.length <= 1) {
      let swiperTumb2 = document.querySelector('.swiperTumb2');
      if (swiperTumb2) {
        swiperTumb2.style.display = 'none';
      }
    }
  }
});
