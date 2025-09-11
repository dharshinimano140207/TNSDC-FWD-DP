// Smooth scroll to section

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    const targetID = this.getAttribute('href');

    document.querySelector(targetID).scrollIntoView({

      behavior: 'smooth'

    });

  });

});

// Form submission (basic)

document.getElementById('contact-form').addEventListener('submit', function(e) {

  e.preventDefault();

  alert("Thank you for your message!");

  this.reset();

});