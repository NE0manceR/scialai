//=============== home slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ============ show mobile=menu

$('.header__mobile-btn, .mobile-menu__close').on('click', function () {
  toggle_menu();
})

$('.mobile-menu').on('click', function (e) {
  if (e.target.classList.contains('active')) {
    toggle_menu();
  }
})

function toggle_menu() {
  $('.mobile-menu').toggleClass('active');
  $('.header__mobile-btn').toggleClass('disactive');
}

// ============ fix header on scroll

let header = $('.header');
let header_position = window.scrollY;

window.addEventListener('scroll', function () {
  header.addClass('small');

  if (window.scrollY === 0) {
    header.removeClass('small');
  }
})

