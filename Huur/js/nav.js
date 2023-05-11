const navEL = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        navEL.classList.add('navbar-scrolled');
        navLinks.forEach(link => link.classList.add('col-white'));
    } else {
        navEL.classList.remove('navbar-scrolled');
        navLinks.forEach(link => link.classList.remove('col-white'));
    }
});
