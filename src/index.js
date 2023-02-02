// nav-icon

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const headerWrapper = document.querySelector('.header-wrapper');

navBtn.addEventListener('click', () => {
  headerWrapper.classList.toggle('nav-mobile');
  menuIcon.classList.toggle('menu-icon-active');
});
