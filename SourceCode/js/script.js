
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');

    if (menuToggle && navbar) {
        // Toggle menu on button click
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navbar.classList.toggle('active');
        });

        const navLinks = navbar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
            });
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('header')) {
                navbar.classList.remove('active');
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    function setActiveNavLink() {
        const currentPage = window.location.pathname;
        const navLinks = document.querySelectorAll('nav a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');

            if (currentPage.includes(href) ||
                (currentPage.includes('index.html') && href.includes('index.html'))) {
                link.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }
        });
    }

    window.addEventListener('load', setActiveNavLink);
});
