function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav) {
        nav.classList.toggle('active');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('navLinks');
    if (nav) {
        nav.classList.remove('active');
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        });
    });
});