// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
if (localStorage.getItem('theme') === 'light') body.classList.add('light');
themeBtn.textContent = body.classList.contains('light') ? '🌞' : '🌙';
themeBtn.onclick = () => {
  body.classList.toggle('light');
  themeBtn.textContent = body.classList.contains('light') ? '🌞' : '🌙';
  localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
};

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.onclick = () => navLinks.classList.toggle('active');

// Smooth scrolling for nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active');
  });
});

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Basic form handling
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});
