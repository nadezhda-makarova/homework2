const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalCloseBtn = document.querySelectorAll('.modal__close_times');
const showSuccessBtn = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

const closeModal = () => {
  document.querySelector('.modal_active').classList.remove('modal_active');
};

modalCloseBtn.forEach(function(item) {
  item.addEventListener('click', closeModal);
});

showSuccessBtn.addEventListener('click', () => {
  closeModal();
  modalSuccess.classList.add('modal_active');
});
