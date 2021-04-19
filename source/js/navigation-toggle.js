const navigationToggle = document.querySelector('.page-header__nav-toggle');
console.log(navigationToggle)
const userNavigation = document.querySelector('.user-nav');
const mainNavigation = document.querySelector('.main-nav');

navigationToggle.addEventListener('click', function (evn) {
  evn.preventDefault();
  navigationToggle.classList.toggle('page-header__nav-toggle--active');
  userNavigation.classList.toggle('user-nav--hidden');
  mainNavigation.classList.toggle('main-nav--hidden');
});
