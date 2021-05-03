const navigationToggle = document.querySelector('.page-header__nav-toggle');
const userNavigation = document.querySelector('.user-nav');
const mainNavigation = document.querySelector('.main-nav');

if (userNavigation.classList.contains('user-nav--no-js')) {
  userNavigation.classList.remove('user-nav--no-js');
  if (mainNavigation.classList.contains('main-nav--no-js')) {
  mainNavigation.classList.remove('main-nav--no-js');
}};

navigationToggle.addEventListener('click', function (evn) {
  evn.preventDefault();
  navigationToggle.classList.toggle('page-header__nav-toggle--active');
  userNavigation.classList.toggle('user-nav--hidden');
  mainNavigation.classList.toggle('main-nav--hidden');
});
