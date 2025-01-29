// Add interactivity if needed
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded!");
    // Example: Add a smooth scroll effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });