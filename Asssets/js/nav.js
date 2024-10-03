document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
    
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", function() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    } else {
        console.error('Hamburger or nav menu element not found');
    }
});
