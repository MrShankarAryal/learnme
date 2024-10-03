document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-bars input');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('slide');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('slide')) {
                nav.classList.remove('slide');
                menuToggle.checked = false;
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickInsideMenuToggle = menuToggle.contains(event.target);

        if (!isClickInsideNav && !isClickInsideMenuToggle && nav.classList.contains('slide')) {
            nav.classList.remove('slide');
            menuToggle.checked = false;
        }
    });
});
 
