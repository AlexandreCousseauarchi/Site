document.addEventListener("DOMContentLoaded", function() {
  const carouselContainer = document.querySelector(".owl-carousel1");
  const carouselItems = document.querySelectorAll(".card");
  const numItems = carouselItems.length;
  let currentIndex = 0;
  let intervalId;

  function startCarousel() {
    intervalId = setInterval(function() {
      showNextSlide();
    }, 4000); // Défilement automatique toutes les 4 secondes
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  function showNextSlide() {
    currentIndex++;
    if (currentIndex >= numItems) {
      currentIndex = 0;
    }
    carouselItems.forEach(item => {
      item.style.display = "none";
    });
    carouselItems[currentIndex].style.display = "block";
  }

  // Démarrer le carrousel
  startCarousel();

  // Arrêter le carrousel lorsque le curseur est sur le carrousel
  carouselContainer.addEventListener("mouseenter", stopCarousel);

  // Redémarrer le carrousel lorsque le curseur quitte le carrousel
  carouselContainer.addEventListener("mouseleave", startCarousel);
});
