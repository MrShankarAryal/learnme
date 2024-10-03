document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.nav-menu');

  menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      menuIcon.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
});
