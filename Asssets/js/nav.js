document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
    
    console.log('Hamburger element:', hamburger);
    console.log('Nav menu element:', navMenu);

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function() {
            console.log('Hamburger clicked');
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    } else {
        console.error('Hamburger or nav menu element not found');
    }

    document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", function() {
        console.log('Nav link clicked');
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
});
