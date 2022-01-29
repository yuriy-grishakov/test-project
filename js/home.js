// slider (swiper)

var swiper = new Swiper("#mySwiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
  	nextEl: "#products-button-prev",
  	prevEl: "#products-button-next",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    414: {
      slidesPerView: 1,
      spaceBetween: 12,
      slidesPerGroup: 1,
    },
  },
});

var swiper2 = new Swiper("#mySwiper2", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: "#reviews-button-next",
    prevEl: "#reviews-button-prev",
  },
});