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
window.addEventListener('scroll', activeHeaderOnScroll)