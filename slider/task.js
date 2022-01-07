const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
let selectElem;

const sliderElems = document.querySelectorAll('.slider__item');

function nextSlide() {
  findActiveSlide();
  sliderElems[selectElem].classList.remove('slider__item_active');
  if(selectElem === sliderElems.length - 1) {
    sliderElems[0].classList.add('slider__item_active');
  } else {
    sliderElems[selectElem + 1].classList.add('slider__item_active');
  }
};

function prevSlide() {
  findActiveSlide();
  sliderElems[selectElem].classList.remove('slider__item_active');
  if(selectElem === 0) {
    sliderElems[sliderElems.length -1].classList.add('slider__item_active');
  } else {
    sliderElems[selectElem -1].classList.add('slider__item_active');
  }
};

function findActiveSlide() {
  sliderElems.forEach((item, index) => {
    if(item.classList.contains('slider__item_active')) {
      selectElem = index;
    }
  });
};