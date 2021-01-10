const slides = document.getElementsByClassName('carousel-item');

let slidePosition = 0;
const totalSlides = slides.length;

document.querySelector('.carousel-btn-prev').addEventListener('click', moveToPrevSlide)
document.querySelector('.carousel-btn-next').addEventListener('click', moveToNextSlide)


function moveToNextSlide(){
    console.log ('next slide')
}

function moveToPrevSlide(){
    console.log ('prev slide')
}