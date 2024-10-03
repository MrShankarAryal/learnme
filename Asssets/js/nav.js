document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    function toggleMenu() {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        menuToggle.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('#nav-menu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickInsideMenuToggle = menuToggle.contains(event.target);
        if (!isClickInsideNav && !isClickInsideMenuToggle && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
