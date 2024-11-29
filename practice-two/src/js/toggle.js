const icon = document.querySelector('.hamburger-icon');
const navbarList = document.querySelector('.navbar-list');

icon.addEventListener('click', function() {
  icon.classList.toggle('active');
  navbarList.classList.toggle('active');
});
