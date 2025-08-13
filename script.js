// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach
(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 5 ?
        navbar.style.background = 'rgba(10,10,10,0.98)' :
        navbar.style.background = 'rgba(10,10,10,0.95)';
});