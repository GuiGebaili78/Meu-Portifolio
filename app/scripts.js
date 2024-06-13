document.addEventListener('DOMContentLoaded', function() {
  const bannerContainer = document.querySelector('.banner-container');
  const banners = bannerContainer.querySelectorAll('.banner');

  // Configuração do IntersectionObserver para mostrar os banners
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adiciona a classe 'show' com um atraso de 1 segundo
        setTimeout(() => {
          entry.target.classList.add('show');
        }, 800); // 1000 milissegundos = 1 segundo
      }
    });
  }, {
    threshold: 0.5 // Define o threshold para 50% de visibilidade
  });

  // Adiciona o observer a cada banner
  banners.forEach(banner => {
    observer.observe(banner);
  });

  // Event listener para o efeito do mouse (não modificado)
  document.addEventListener('mousemove', function(e) {
    const light = document.getElementById('light');
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
  });

});
