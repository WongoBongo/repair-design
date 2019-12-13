document.addEventListener("DOMContentLoaded", function (event) {
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
});