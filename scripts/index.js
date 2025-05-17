const closeModal = document.getElementById('closeModal')
closeModal.addEventListener('click', () => {
  modal.classList.remove('modal-show')
})
const modal = document.querySelector('.modal')
const userRegister = document.getElementById('userRegister')
userRegister.addEventListener('click', function(event) {
  event.preventDefault
  modal.classList.add('modal-show')
})


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