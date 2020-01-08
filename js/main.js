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
    closeBtn = $('.modal__close'),
    windowModal = $('.window'),
    closeWBtn = $('.window__close'),
    modalRemove = function () {
      modal.toggleClass('modal_visible');
    };

  modalBtn.on('click', function (e) {
    modal.toggleClass('modal_visible');
  });
  closeBtn.on('click', function (e) {
    modal.toggleClass('modal_visible');
  });
  closeWBtn.on('click', function (e) {
    windowModal.toggleClass('window_visible');
  });


  $(document).on('click', function (e) {
    if (modal.is(e.target)) {
      modal.toggleClass('modal_visible');
    }
  });
  $(document).on('click', function (e) {
    if (windowModal.is(e.target)) {
      windowModal.toggleClass('window_visible');
    }
  });



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

  next.css('left', prev.width() + 30 + bullets.width() + 30);
  bullets.css('left', prev.width() + 27);

  var stepsSwiper = new Swiper('.steps__swiper-container', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.steps__swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    },
  });

  var next2 = $('.steps__swiper-button-next');
  var prev2 = $('.steps__swiper-button-prev');
  var bullets2 = $('.steps__swiper-pagination');

  next2.css('left', prev2.width() + bullets2.width() + 40);
  bullets2.css('left', prev2.width() + 20);

  // переключение слайдов по табам из секции 6 

  $('.steps__tabs-item').on('click', function () {
    $('.steps__tabs-item').removeClass('active');
    $(this).addClass('active');
    const e = $(this).data('index');
    stepsSwiper.slideTo(e);
  })

  stepsSwiper.on('slideChange', (function () {
    let e = stepsSwiper.activeIndex - 1;
    if (e === 6) {
      e = 0
    };
    $('.steps__tabs-item').removeClass('active');
    $('.steps__tabs-item').eq(e).addClass('active');
  }))
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
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal_visible');
          windowModal.toggleClass('window_visible');

        }
      });
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
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {

          $(form)[0].reset();
          windowModal.toggleClass('window_visible');
        }
      });
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
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {

          $(form)[0].reset();
          windowModal.toggleClass('window_visible');
        }
      });
    }
  });


  // маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {
    placeholder: "+7(___) ___-__-__"
  });




  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  // ymaps.ready(init);
  // function init(){
  //     // Создание карты.
  //     var myMap = new ymaps.Map("map", {
  //         // Координаты центра карты.
  //         // Порядок по умолчанию: «широта, долгота».
  //         // Чтобы не определять координаты центра карты вручную,
  //         // воспользуйтесь инструментом Определение координат.
  //         center: [55.76, 37.64],
  //         // Уровень масштабирования. Допустимые значения:
  //         // от 0 (весь мир) до 19.
  //         zoom: 7
  //     });
  // }
  var footer = $('.client');
  var footerTop = footer.offset().top;
  $(window).bind('scroll', function () {
    var windowTop = $(this).scrollTop();
    if (windowTop > footerTop) {
      $('#map').html(`<script src="https://api-maps.yandex.ru/2.1/?apikey=899cc7aa-c78b-42b1-863f-45890119587c&lang=ru_RU" type ="text/javascript"></script>`);

      $(window).unbind('scroll');
      setTimeout(() => {
        ymaps.ready(function () {
          var myMap = new ymaps.Map('map', {
              center: [47.244734, 39.723227],
              zoom: 15
            }, {
              searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Наш офис',
              balloonContent: 'Вход со двора'
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
          myMap.behaviors
            // Отключаем часть включенных по умолчанию поведений:
            //  - drag - перемещение карты при нажатой левой кнопки мыши;
            //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
            .disable(['rightMouseButtonMagnifier', 'scrollZoom'])
            // Включаем линейку.
            .enable('ruler');

          // Изменяем свойство поведения с помощью опции:
          // изменение масштаба колесом прокрутки будет происходить медленно,
          // на 1/2 уровня масштабирования в секунду.
          myMap.options.set('scrollZoomSpeed', 0.5);
          myMap.geoObjects
            .add(myPlacemark);
        });
      }, 1000)
    }
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