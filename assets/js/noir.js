const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

// Toggle menu dengan hamburger
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Klik di area menu → tutup menu
mobileNav.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
});

// Klik pada link → tutup menu
mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // e.stopPropagation();
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Klik di luar menu → tutup
document.addEventListener('click', (e) => {
    const clickOutside = !mobileNav.contains(e.target) && !menuToggle.contains(e.target);
    if (clickOutside) {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    }
});
