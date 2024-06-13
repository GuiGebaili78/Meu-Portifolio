document.addEventListener('DOMContentLoaded', function() {
  const bannerContainer = document.querySelector('.banner-container');
  const banners = bannerContainer.querySelectorAll('.banner');

  banners.forEach((banner, index) => {
    showBanner(banner, index * 200);
  });

  document.addEventListener('mousemove', function(e) {
    const light = document.getElementById('light');
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
  });

  function showBanner(banner, delay) {
    setTimeout(() => {
      banner.classList.add('show');
    }, delay);
  }
});
