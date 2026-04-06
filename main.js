function toggleMenu() {
    const nav = document.getElementById('navLinks');

    if (!nav) return;

    nav.classList.toggle('active');
}

/* CRITICAL FIX — reset menu state on every page load */
window.addEventListener('pageshow', () => {
    const nav = document.getElementById('navLinks');

    if (nav) {
        nav.classList.remove('active');
    }
});

/* close menu when clicking a link */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('navLinks');

        if (nav) {
            nav.classList.remove('active');
        }
    });
});