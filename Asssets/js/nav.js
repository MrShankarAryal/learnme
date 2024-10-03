document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuBars = document.querySelector('.menu-bars');

    function toggleMenu() {
        navMenu.classList.toggle('active');
        menuBars.classList.toggle('active');
    }

    menuToggle.addEventListener('change', toggleMenu);

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('#nav-menu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
                menuToggle.checked = false;
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickInsideMenuToggle = menuBars.contains(event.target);
        if (!isClickInsideNav && !isClickInsideMenuToggle && navMenu.classList.contains('active')) {
            toggleMenu();
            menuToggle.checked = false;
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
