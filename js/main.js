// main.js

document.addEventListener("DOMContentLoaded", function() {
    // Reveal on scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.1 };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, revealOptions);
    revealElements.forEach(el => revealObserver.observe(el));

    // Skill bar animation
    const skillBars = document.querySelectorAll('.bar');
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const skillValue = bar.getAttribute('data-skill');
          // Animate from 0% to the data-skill value
          bar.style.width = skillValue + '%';
        }
      });
    }, { threshold: 0.1 });
    skillBars.forEach(bar => barObserver.observe(bar));
  });