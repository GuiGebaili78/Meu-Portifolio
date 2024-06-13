document.addEventListener('DOMContentLoaded', function() {
  const bannerContainer = document.querySelector('.banner-container');
  const banners = bannerContainer.querySelectorAll('.banner');

  // Configuração do IntersectionObserver para mostrar os banners
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adiciona a classe 'show' com um atraso
        setTimeout(() => {
          entry.target.classList.add('show');
        }, 800); 
      }
    });
  }, {
    threshold: 0.5 
  });

  // Adiciona o observer a cada banner
  banners.forEach(banner => {
    observer.observe(banner);
  });

  // Event listener para o efeito do mouse
  document.addEventListener('mousemove', function(e) {
    const light = document.getElementById('light');
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
  });

  // Smooth scrolling for browsers that do not support CSS scroll-behavior
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
