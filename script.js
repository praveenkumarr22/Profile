const typed = new Typed('.text', {
    strings : ['Web Developer','Java Developer'],
    typeSpeed: 200,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navlink');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});