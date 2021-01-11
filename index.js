const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-btn-prev').addEventListener('click', moveToPrevSlide)
document.getElementById('carousel-btn-next').addEventListener('click', moveToNextSlide)

function hideAllSlides() {
    for (let i = 0; i < slides.length ; i++) {
        slides[i].classList.remove('carousel-item-visible');
        slides[i].classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide(){
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
        slidePosition ++;
    }
    
    slides[slidePosition].classList.add('carousel-item-visible');
}

function moveToPrevSlide(){


}

