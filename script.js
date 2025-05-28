document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.navbar');
  if (!burger || !navbar) return;
  burger.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // Prevent navigation
      const dd = link.parentElement; // The .dropdown li
      dd.classList.toggle('open'); // Toggle the .open class
    });
  });
});
