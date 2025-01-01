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

// Image Rotation for Hero Section
document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.getElementById('heroImage');
  const imageFolder = 'assets/home/';
  
  // List of images in the assets/home folder
  const imageList = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
  ];
  
  let currentIndex = 0;
  
  function changeHeroImage() {
    currentIndex = (currentIndex + 1) % imageList.length;
    heroImage.style.opacity = '0';
    
    setTimeout(() => {
      heroImage.src = `${imageFolder}${imageList[currentIndex]}`;
      heroImage.style.opacity = '1';
    }, 1000); // Matches the transition duration
  }
  
  // Start image rotation every 10 seconds
  setInterval(changeHeroImage, 10000);
});
