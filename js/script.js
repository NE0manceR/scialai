//=============== home slider


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
let kitchen_img = $('.kitchen__img-position');
let kitchen_block = $('.kitchen__text')

window.addEventListener('scroll', function () {
  header.addClass('small');

  if (this.window.innerWidth > 1100) {
    kitchen_img.addClass('active');
    kitchen_block.addClass('active');
  }

  if (window.scrollY === 0) {
    header.removeClass('small');
    kitchen_img.removeClass('active');
    kitchen_block.removeClass('active');
  }
})


