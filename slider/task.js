const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const sliderElems = document.querySelectorAll('.slider__item');

function nextSlide() {
  const indexActiveSlide = findActiveSlide();
  console.log();
  sliderElems[indexActiveSlide].classList.remove('slider__item_active');
  if (indexActiveSlide === sliderElems.length - 1) {
    sliderElems[0].classList.add('slider__item_active');
  } else {
    sliderElems[indexActiveSlide + 1].classList.add('slider__item_active');
  }
};

function prevSlide() {
  const indexActiveSlide = findActiveSlide();
  sliderElems[indexActiveSlide].classList.remove('slider__item_active');
  if (indexActiveSlide === 0) {
    sliderElems[sliderElems.length - 1].classList.add('slider__item_active');
  } else {
    sliderElems[indexActiveSlide - 1].classList.add('slider__item_active');
  }
};

function findActiveSlide() {
  let activeSlide = 0;
  sliderElems.forEach((item, index) => {
    if (item.classList.contains('slider__item_active')) {
      return activeSlide = index;
    }
  });
  return activeSlide;
};