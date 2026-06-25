// Navigation toggle + simple form handling
(function(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
        // close nav on mobile
        mainNav.classList.remove('active');
      }
    });
  });

  // Simple form submit handler (mock)
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      // Here you would normally send data via fetch to your backend
      note.textContent = 'Merci ! Votre message a été pris en compte.';
      form.reset();
    });
  }
})();
