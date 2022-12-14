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
const sliders = document.querySelector('.slider');
const sliderInitialize = function(currentSlider){
    const sliderContainer = currentSlider.querySelector('.slider-container');
    const sliderPreviousButton = currentSlider.querySelector('.previous')
    const sliderNextButton = currentSlider.querySelector('.next')

    const totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue('--slider-item'));
    const totalSliderItems = sliderContainer.childElementCount.childElementCount - totalSliderVisibleItems;
    
    // Current Slide 
    const currentSlidePosition = 0;
    const moveSliderItem = function () {
        sliderContainer.style.transform = `translateX(-${
            sliderContainer.children[currentSlidePosition].offsetLeft}px)`;
    }

    // Next Slide 
    const slideNext = function (){
        const slideEnd = currentSlidePosition >= totalSliderItems
        if (slideEnd){
            currentSlidePosition = 0 ;
        } else {
            currentSlidePosition++;
        }
        moveSliderItem();
    }

    sliderNextButton.addEventListener("click", slideNext);
}


for(const i=0, len=sliders.length; i < len; i++) {
    sliderInitialize(sliders[i]);
}