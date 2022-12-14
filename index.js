'use strict';

// Navbar toggle

const navbar = document.querySelector('.navbar');
const toggler = document.querySelector('.navigation-toggle-button');

toggler.addEventListener('click', function(){
    console.log('I was clicked');
    navbar.classList.toggle('active');
    this.classList.toggle('active')
})

// #Header 
const header = document.querySelector('.header');
const activeHeaderOnScroll = function(){
    if(window.scrollY > 200){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}
window.addEventListener('scroll', activeHeaderOnScroll);

// Slider 
const slider = document.querySelector('.slider');
const sliderInitialize = function(currentSlide){
    const sliderContainer = currentSlide.querySelector('.slider-container');
    const previousButton = currentSlide.querySelector('[data-slider-previous]')
    const NextButton = currentSlide.querySelector('[data-slider-next]')

    const totalSlider = Number(getComputedStyle(currentSlide).getPropertyValue('--slider-item'))
    const sliderItems = sliderContainer.childElementCount.childElementCount - totalSlider
    
    const currentSlidePosition = 0;
    const moveSliderItem = function () {
        sliderContainer.style.transform = `translateX(-${
            sliderContainer.children[currentSlidePosition].offsetLeft
        }px)`;
    }

    const nextSlide = function (){
        const endSlide = currentSlidePosition >= totalSlider
        if (endSlide){
            currentSlidePosition = 0 ;
        } else {
            currentSlidePosition++;
        }
        moveSliderItem();
    }

    NextButton.addEventListener("click", nextSlide);
}


for(const i=0, len=slider.length; i < len; i++) {
    sliderInitialize(slider[i]);
}