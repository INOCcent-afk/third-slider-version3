var mySwiper = new Swiper(".swiper-container", {
  speed: 400,
  slidesPerView: 1.1,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.5,
    },
    800: {
      slidesPerView: 2.2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
