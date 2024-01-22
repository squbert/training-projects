'use strict';

const getQuerySelector = element => document.querySelector(element);

const modalWindow = getQuerySelector('.modal-window');
const buttonsShowModalWindow = document.querySelectorAll('.show-modal-window');
const buttonCloseModalWindow = getQuerySelector('.close-modal-window');
const overlay = getQuerySelector('.overlay');

const showModalWindow = () => {
  overlay.classList.remove('hidden');
  modalWindow.classList.remove('hidden');
};

const closeModalWindow = () => {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < buttonsShowModalWindow.length; i++) {
  buttonsShowModalWindow[i].addEventListener('click', showModalWindow);
}

buttonCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);
document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});
