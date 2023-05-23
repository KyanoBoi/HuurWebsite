document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');

  let currentIndex = 0;
  let timer;

  function showSlide(index) {
    if (index < 0 || index >= items.length) {
      return;
    }

    items.forEach(item => {
      item.classList.remove('active');
    });

    items[index].classList.add('active');
  }

  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = items.length - 1;
    }
    showSlide(currentIndex);
    resetTimer();
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= items.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  resetTimer(); // Start the timer initially

  carousel.addEventListener('mouseenter', resetTimer); // Reset timer on mouse enter
  carousel.addEventListener('mouseleave', resetTimer); // Reset timer on mouse leave
});
