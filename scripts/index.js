import imgSrc from '../images/hero.png';

const img = document.createElement('img');
img.src = imgSrc;
document.body.appendChild(img);


const menu = document.querySelector('.menu-icons')
const navbar = document.querySelector('.navbar')
menu.addEventListener('click', () => {
  menu.classList.toggle("move")
  navbar.classList.toggle("open-menu")
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });