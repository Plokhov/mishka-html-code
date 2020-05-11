const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const catalogOrderButtons = document.querySelectorAll('.catalog__button');
const modal = document.querySelector('.modal');

for (let i = 0; i < catalogOrderButtons.length; i++) {
  const currentButton = catalogOrderButtons[i];
  currentButton.addEventListener('click', () => {
    modal.classList.remove('modal--close');
    modal.classList.add('modal--open');
  });
}

const modalButton = document.querySelector('.modal__button');
modalButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  modal.classList.remove('modal--open');
  modal.classList.add('modal--close');
})
