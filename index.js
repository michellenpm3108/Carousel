const slides = document.getElementsByClassName('carousel-item');

document.querySelector('.carousel-btn-prev').addEventListener('click', moveToPrevSlide)
document.querySelector('.carousel-btn-next').addEventListener('click', moveToNextSlide)

function hideAllSlides() {
    for(let slide of slides) {
        slide.classList.add('carousel-item-hidden')
    }
}


let slidePosition = 0;
const totalSlides = slides.length;
function moveToNextSlide(){

    if (slidePosition === totalSlides-1) {
      slidePosition = 0;
  } else {
      slidePosition ++;
  }
  hideAllSlides()
  slides[slidePosition].classList.add('carousel-item-visible')
}

function moveToPrevSlide(){


}

