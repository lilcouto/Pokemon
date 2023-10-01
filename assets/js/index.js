document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carouselExampleCaptions');
    const items = carousel.querySelectorAll('[data-te-carousel-item]');
    let currentIndex = 0;
  
    function showItem(index) {
      items.forEach(item => item.classList.add('hidden'));
      items[index].classList.remove('hidden');
    }
  
    function updateIndicators(index) {
      const indicators = carousel.querySelectorAll('[data-te-carousel-active]');
      indicators.forEach(indicator => indicator.removeAttribute('data-te-carousel-active'));
      indicators[index].setAttribute('data-te-carousel-active', '');
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
      updateIndicators(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
      updateIndicators(currentIndex);
    }
  
    const nextButton = document.querySelector('[data-te-slide="next"]');
    const prevButton = document.querySelector('[data-te-slide="prev"]');
  
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  });