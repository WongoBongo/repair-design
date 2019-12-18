/* document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector('.modal');
  // получаем все кнопки, которые имею атрибут data-toggle равный modal (кнопки которые должны открывать модальное окно)
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');

  const closeBtn = document.querySelector('.modal__close');

  // функция переключение модального окна
  const switchModal = () => {
    modal.classList.toggle('modal_visible');
  }
  // функция закрытия модального окна
  const removeModal = () => {
    modal.classList.remove('modal_visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  // закрытие на крестик
  closeBtn.addEventListener('click', switchModal);
  // закрытие на кнопку Esc
  document.addEventListener('keydown', function (e) {
    if (e.code == "Escape") removeModal();
  });
  // закрытие на клик вне модального окна
  document.addEventListener('click', (e) => {
    if (e.target == modal) removeModal();
  });
});  */

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      modalRemove = function () {
        modal.toggleClass('modal_visible');
      };
      
  modalBtn.on('click', function (e) {
    modal.toggleClass('modal_visible');
  });
  closeBtn.on('click', function(e) {
    modal.toggleClass('modal_visible');
  });

  $(document).on('click', function (e) {
    if (modal.is(e.target)) {
      modal.toggleClass('modal_visible');
    }
  });
  onkeydown = function (e) {
    if (e.which == "27") modalRemove();
  };

  var mySwiper = new Swiper('.swiper-container_projects', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 30 + bullets.width()+ 30);
  bullets.css('left',prev.width()+27 );

  var twoSwiper = new Swiper('.swiper-container_steps', {
    loop: true,
    pagination: {
      el: 'swiper-pagination_steps',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next_steps',
      prevEl: '.swiper-button-prev_steps',
    },
  });
  var next = $('.swiper-button-next_steps');
  var prev = $('.swiper-button-prev_steps');
  var bullets = $('.swiper-pagination_steps');

  next.css('left', prev.width() + 30 + bullets.width() + 30);
  bullets.css('left', prev.width() + 27);
 
  

});




// появление кнопки наверх , если спустились вниз на 80px
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
}); 
// плавная прокрутка 
$('#up').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
}); 


  