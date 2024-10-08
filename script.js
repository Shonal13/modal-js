'use strict';

const btnsOpenModal = document.querySelectorAll(`.show-modal`);
const btnCloseModal = document.querySelector(`.close-modal`);
const modal = document.querySelector(`.modal`);
const overylay = document.querySelector(`.overlay`);

const openModal = function () {
  modal.classList.remove(`hidden`);
  overylay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overylay.classList.add(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);

  btnCloseModal.addEventListener(`click`, closeModal);
  overylay.addEventListener(`click`, closeModal);
}

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
