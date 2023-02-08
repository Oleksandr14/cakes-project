// nav-icon

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const headerWrapper = document.querySelector('.header-wrapper');

navBtn.addEventListener('click', () => {
  headerWrapper.classList.toggle('nav-mobile');
  menuIcon.classList.toggle('menu-icon-active');
});

// scroll to the top

const offset = 100;
const scrollUp = document.querySelector('.scroll-up');

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up--active');
  } else {
    scrollUp.classList.remove('scroll-up--active');
  }
});

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
