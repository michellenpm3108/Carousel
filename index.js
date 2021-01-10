const slides = document.getElementsByClassName('carousel-item');

document.querySelector('.carousel-btn-prev').addEventListener('click', moveToPrevSlide)
document.querySelector('.carousel-btn-next').addEventListener('click', moveToNextSlide)

let i=0;
const totalSlides = slides.length
function moveToNextSlide(){
    if (i === totalSlides-1) {
        i=0
    } else { 
        i++
    }
slides[i].classList.add('carousel-item-visible')    
}

function moveToPrevSlide(){


}

