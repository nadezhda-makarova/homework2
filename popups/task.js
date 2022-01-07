const modal_main = document.getElementById('modal_main');
const modal_success = document.getElementById('modal_success');
const modal_close = document.querySelectorAll('.modal__close');
const show_success_btn = document.querySelector('.show-success');

modal_main.classList.add('modal_active');


function close_modal() {
  if(modal_main.classList.contains('modal_active')) {
    modal_main.classList.remove('modal_active');
    modal_success.classList.add('modal_active');
  } else {
    modal_success.classList.remove('modal_active');
  }
};

modal_close.forEach(function(item) {
  item.addEventListener('click', close_modal);
});
