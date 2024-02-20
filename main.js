'use strict';

{
  const hamburger = document.getElementById('hamburger');
  const borderBottom = document.getElementById('border-bottom');
  const borderTop = document.getElementById('border-top');
  const menu = document.getElementById('menu');
  const mask = document.getElementById('mask');
  const lists = document.querySelectorAll('.mainvisual header div ul li');

  hamburger.addEventListener('click',() =>{
    borderTop.classList.toggle('show');
    borderBottom.classList.toggle('show');
    menu.classList.toggle('show');
    mask.classList.toggle('show');
  });
  menu.addEventListener('click',() =>{
    borderTop.classList.remove('show');
    borderBottom.classList.remove('show');
    menu.classList.remove('show');
    mask.classList.remove('show');
  });
  mask.addEventListener('click',() =>{
    borderTop.classList.remove('show');
    borderBottom.classList.remove('show');
    menu.classList.remove('show');
    mask.classList.remove('show');
  });
  lists.forEach(list => {
    list.addEventListener('click',() =>{
      borderTop.classList.remove('show');
      borderBottom.classList.remove('show');
      menu.classList.remove('show');
      mask.classList.remove('show');
    });
  });
  


  const content1 = document.getElementById('content1');
  const content2 = document.getElementById('content2');
  const content3 = document.getElementById('content3');

  content1.addEventListener('click',() =>{
    content1.classList.add('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
  });
  content2.addEventListener('click',() =>{
    content1.classList.remove('active');
    content2.classList.add('active');
    content3.classList.remove('active');
  });
  content3.addEventListener('click',() =>{
    content1.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.add('active');
  });


  const target1 = document.getElementById('target1');
  const target2 = document.getElementById('target2');
  const target3 = document.getElementById('target3');

  window.addEventListener('scroll',() =>{
    let targetPosition = window.innerHeight / 2;
    let targetItemPosition1 = target1.getBoundingClientRect().top;

    if(targetItemPosition1 < targetPosition) {
      target1.style.opacity = '1';
      target1.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll',() =>{
    let targetPosition = window.innerHeight / 2;
    let targetItemPosition2 = target2.getBoundingClientRect().top;

    if(targetItemPosition2 < targetPosition) {
      target2.style.opacity = '1';
      target2.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll',() =>{
    let targetPosition = window.innerHeight / 2;
    let targetItemPosition3 = target3.getBoundingClientRect().top;

    if(targetItemPosition3 < targetPosition) {
      target3.style.opacity = '1';
      target3.style.transform = 'translateX(0)';
    }
  });

  const thumbnails1 = document.querySelectorAll('.thumbnail1');
  const mainImg = document.getElementById('main-image');
  const thumbnails2 = document.querySelectorAll('.thumbnail2');
  const thumbnails3 = document.querySelectorAll('.thumbnail3');
  const thumbnails4 = document.querySelectorAll('.thumbnail4');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  let activeIndex = 0;

  thumbnails1[0].addEventListener('click',() => {
    activeIndex = 0;
    mainImg.src = thumbnails1[0].src;
  });
  thumbnails1[1].addEventListener('click',() => {
    activeIndex = 1;
    mainImg.src = thumbnails1[1].src;
  });
  thumbnails1[2].addEventListener('click',() => {
    activeIndex = 2;
    mainImg.src = thumbnails1[2].src;
  });
  thumbnails1[3].addEventListener('click',() => {
    activeIndex = 3;
    mainImg.src = thumbnails1[3].src;
  });
  thumbnails1[4].addEventListener('click',() => {
    activeIndex = 4;
    mainImg.src = thumbnails1[4].src;
  });
  thumbnails1[5].addEventListener('click',() => {
    activeIndex = 5;
    mainImg.src = thumbnails1[5].src;
  });
  thumbnails1[6].addEventListener('click',() => {
    activeIndex = 6;
    mainImg.src = thumbnails1[6].src;
  });
  thumbnails1[7].addEventListener('click',() => {
    activeIndex = 7;
    mainImg.src = thumbnails1[7].src;
  });

  nextBtn.addEventListener('click',() => {
    activeIndex++;
    if(activeIndex > 7) {
      activeIndex = 0;
    }
    mainImg.src = thumbnails1[activeIndex].src;
  });
  prevBtn.addEventListener('click',() => {
    activeIndex--;
    if(activeIndex < 0) {
      activeIndex = 7;
    }
    mainImg.src = thumbnails1[activeIndex].src;
  });


  thumbnails2[0].addEventListener('click',() => {
    activeIndex = 0;
    mainImg.src = thumbnails2[0].src;
  });
  thumbnails2[1].addEventListener('click',() => {
    activeIndex = 1;
    mainImg.src = thumbnails2[1].src;
  });
  thumbnails2[2].addEventListener('click',() => {
    activeIndex = 2;
    mainImg.src = thumbnails2[2].src;
  });
  thumbnails2[3].addEventListener('click',() => {
    activeIndex = 3;
    mainImg.src = thumbnails2[3].src;
  });
  thumbnails2[4].addEventListener('click',() => {
    activeIndex = 4;
    mainImg.src = thumbnails2[4].src;
  });
  thumbnails2[5].addEventListener('click',() => {
    activeIndex = 5;
    mainImg.src = thumbnails2[5].src;
  });
  thumbnails2[6].addEventListener('click',() => {
    activeIndex = 6;
    mainImg.src = thumbnails2[6].src;
  });
  thumbnails2[7].addEventListener('click',() => {
    activeIndex = 7;
    mainImg.src = thumbnails2[7].src;
  });

  thumbnails3[0].addEventListener('click',() => {
    activeIndex = 0;
    mainImg.src = thumbnails3[0].src;
  });
  thumbnails3[1].addEventListener('click',() => {
    activeIndex = 1;
    mainImg.src = thumbnails3[1].src;
  });
  thumbnails3[2].addEventListener('click',() => {
    activeIndex = 2;
    mainImg.src = thumbnails3[2].src;
  });
  thumbnails3[3].addEventListener('click',() => {
    activeIndex = 3;
    mainImg.src = thumbnails3[3].src;
  });
  thumbnails3[4].addEventListener('click',() => {
    activeIndex = 4;
    mainImg.src = thumbnails3[4].src;
  });
  thumbnails3[5].addEventListener('click',() => {
    activeIndex = 5;
    mainImg.src = thumbnails3[5].src;
  });
  thumbnails3[6].addEventListener('click',() => {
    activeIndex = 6;
    mainImg.src = thumbnails3[6].src;
  });
  thumbnails3[7].addEventListener('click',() => {
    activeIndex = 7;
    mainImg.src = thumbnails3[7].src;
  });

  thumbnails4[0].addEventListener('click',() => {
    activeIndex = 0;
    mainImg.src = thumbnails4[0].src;
  });
  thumbnails4[1].addEventListener('click',() => {
    activeIndex = 1;
    mainImg.src = thumbnails4[1].src;
  });
  thumbnails4[2].addEventListener('click',() => {
    activeIndex = 2;
    mainImg.src = thumbnails4[2].src;
  });
  thumbnails4[3].addEventListener('click',() => {
    activeIndex = 3;
    mainImg.src = thumbnails4[3].src;
  });
  thumbnails4[4].addEventListener('click',() => {
    activeIndex = 4;
    mainImg.src = thumbnails4[4].src;
  });
  thumbnails4[5].addEventListener('click',() => {
    activeIndex = 5;
    mainImg.src = thumbnails4[5].src;
  });
  thumbnails4[6].addEventListener('click',() => {
    activeIndex = 6;
    mainImg.src = thumbnails4[6].src;
  });
  thumbnails4[7].addEventListener('click',() => {
    activeIndex = 7;
    mainImg.src = thumbnails4[7].src;
  });
}