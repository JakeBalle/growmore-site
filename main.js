// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const toggle = document.querySelector('.menu-toggle');

  nav.classList.toggle('active');
  toggle.classList.toggle('active');
}


// Add shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');

  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Ensure menu is always closed on page load
window.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navLinks');
  if (nav) {
    nav.classList.remove('active');
  }
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('navLinks');
    if (nav) {
      nav.classList.remove('active');
    }
  });
});