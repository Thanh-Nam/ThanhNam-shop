'use strict';


/*
1: Sửa header-top(Hệ thống showroom & Tư vấn bán hàng)
2: onclick show form login
3: slider img
4: render product

*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const login = $('#login');
const register = $('#register');
const loginBtn = $('.login');
const registerBtn = $('.register');
const closeLogin = $('.close-login');
const closeRegister = $('.close-register');
const modalBodyLogin = $('.modal__body-login');
const modalBodyRegister = $('.modal__body-register');
const sliderImg = $('.stage-item-img');


// open login form
loginBtn.onclick = function () {
    login.classList.add('open');
}

closeLogin.onclick = function () {
    login.classList.remove('open');
}

login.onclick = function () {
    login.classList.remove('open');
}

modalBodyLogin.onclick = function (e) {
    e.stopPropagation();
}

// open register form
registerBtn.onclick = function () {
    register.classList.add('open');
}

closeRegister.onclick = function () {
    register.classList.remove('open');
}

register.onclick = function () {
    register.classList.remove('open');
}

modalBodyRegister.onclick = function (e) {
    e.stopPropagation();
}

const imagesSlider = $$('.stage-item-img');

let i = 0;

setInterval(function(){ 

    if(i == 0) {
      imagesSlider[i].style.display = 'block';
    } else if(i == imagesSlider.length ) {
      imagesSlider[i - 1].style.display = 'none';
      imagesSlider[0].style.display = 'block';
      i = 0;
    } else {
      imagesSlider[i - 1].style.display = 'none';
      imagesSlider[i].style.display = 'block';
    }
    
   i++;
   
  }, 2000);