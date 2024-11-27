// Smooth scroll for 'Home' link
document.querySelector('.nav-link[href="#home"]').addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
