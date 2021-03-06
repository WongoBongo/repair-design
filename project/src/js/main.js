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

  var mySwiper = new Swiper('.swiper-container__projects', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next__projects',
      prevEl: '.swiper-button-prev__projects',
    },
  });
  var next = $('.swiper-button-next__projects');
  var prev = $('.swiper-button-prev__projects');
  var bullets = $('.swiper-pagination__projects');

  next.css('left', prev.width() + 30 + bullets.width()+ 30);
  bullets.css('left',prev.width()+27 );

  var twoSwiper = new Swiper('.swiper-container_steps', {
    loop: true,
    pagination: {
      el: '.swiper-pagination_steps',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next_steps',
      prevEl: '.swiper-button-prev_steps',
    },
  });
  var left= $('.swiper-button-next_steps');
  var right = $('.swiper-button-prev_steps');
  var bullet = $('.swiper-pagination_steps');

  left.css('left', right.width()  + bullet.width() + 30);
  bullet.css('left', right.width() + 10);
 
  /* let changeActive = function (i) {
    if (i === -1) {
      i = items.length - 1
    } else if (i === items.length) {
      i = 0
    }
    item = items[i];
    items.forEach((el) => {
      el.classlist.remove('item--active');
    })
    item.classlist.add('item--active');

    stepsSlider.forEach((el) => {
      el.slideTO(i + 1);
    });
    stepsSlider(0).on('slideChange', () => {
      changeActive(stepsSlider[0].activeIndex = 1);
    });

    items.forEach((item, i) => {
      item.addEventListener('click', () => {
        changeActive(i);
      });
    });
  }; */
  //иницилизация библиботеки wow js
  new WOW().init();
  // скрипт запуска анимации
  var block_show = false;
  var block_right = false;

  function scrollTracking() {
    if (block_show,block_right) {
      return false;
    }

    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.container_projects').offset().top;
    var eh = $('.container_projects').outerHeight();
    var bt = $('.control').offset().top;
    var bh = $('.control').outerHeight();
    var dh = $(document).height();

    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
      block_show = true;
      
   
      // Код анимации

      $('.container_projects').addClass('Left');
    }
    if (wt + wh >= bt || wh + wt == dh || bh + bt < wh) {
      block_show = true;


      // Код анимации

      $('.control').addClass('Right');
    }
  }


  $(window).scroll(function () {
    scrollTracking();
  });

  $(document).ready(function () {
    scrollTracking();
  });
  //Валидация формы модального окна
   $('.modal__form').validate({
     errorClass: "invalid",
     rules: {
       // строчное правило
       userName: {
         required: true,
         minlength: 2,
         maxlength: 15
       },
       userPhone: "required",
       // правило-объект
       userEmail: {
         required: true,
         email: true
       }
     }, // сообщения
     errorElement: "div",
     messages: {
       userName: {
         required: "Заполните поле",
         minlength: "Имя не короче двух букв",
         maxlength: "Имя не больше 15 букв"
       },
       userPhone: "Заполните поле",
       userEmail: {
         required: "Заполните поле",
         email: "Введите корректный email"
       }
     }
   });
   // Валидация control__form

   $('.control__form').validate({
     errorClass: "invalid",
     rules: {
       // строчное правило
       userName: {
         required: true,
         minlength: 2,
         maxlength: 15
       },
       userPhone: "required",
     }, // сообщения
     errorElement: "div",
     messages: {
       userName: {
         required: "Заполните поле",
         minlength: "Имя не короче двух букв",
         maxlength: "Имя не больше 15 букв"
       },
       userPhone: {
         required: "Заполните поле"
       }
     }
   });
   // Валидация footer__form
   $('.footer__form').validate({
     errorClass: "invalid",
     rules: {
       // строчное правило
       userName: {
         required: true,
         minlength: 2,
         maxlength: 15
       },
       userPhone: "required",
       // правило-объект
       userQuestion: {
         required: true,
         minlength: 5,
         maxlength: 40
       }
     }, // сообщения
     errorElement: "div",
     messages: {
       userName: {
         required: "Заполните поле",
         minlength: "Имя не короче двух букв",
         maxlength: "Имя не больше 15 букв"
       },
       userPhone: "Заполните поле",
       userQuestion: {
         required: "Заполните поле",
          minlength: "Не короче 5 букв",
          maxlength: "Не больше 40 букв"
       }
     }
   });


    // маска для телефона
    $('[type=tel]').mask('+7(000) 000-00-00', { placeholder: "+7(___) ___-__-__"});




   ymaps.ready(function () {
     var myMap = new ymaps.Map('map', {
         center: [47.244734, 39.723227],
         zoom: 9
       }, {
         searchControlProvider: 'yandex#search'
       }),

       // Создаём макет содержимого.
       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
         '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
       ),

       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
         hintContent: 'Собственный значок метки',
         balloonContent: 'Это красивая метка'
       }, {
         // Опции.
         // Необходимо указать данный тип макета.
         iconLayout: 'default#image',
         // Своё изображение иконки метки.
         iconImageHref: 'img/footer/placeholder.png',
         // Размеры метки.
         iconImageSize: [32, 32],
         // Смещение левого верхнего угла иконки относительно
         // её "ножки" (точки привязки).
         iconImageOffset: [-5, -38]
       });

     myMap.geoObjects
       .add(myPlacemark)
       .add(myPlacemarkWithContent);
   });

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

  