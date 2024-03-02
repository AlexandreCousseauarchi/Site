// Sélectionner les éléments nécessaires
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

// Définir l'index actuel du carousel
let currentIndex = 0;

// Fonction pour passer à l'élément suivant
const nextItem = () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
};

// Fonction pour mettre à jour le carousel
const updateCarousel = () => {
    const offset = -currentIndex * 100; // Décalage en pourcentage
    carouselContainer.style.transform = `translateX(${offset}%)`;
};

// Définir l'intervalle de temps pour le défilement automatique
let autoScroll = setInterval(nextItem, 3000); // Changer selon vos besoins

// Arrêter le défilement automatique lorsqu'un utilisateur interagit avec le carousel
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoScroll);
});

carouselContainer.addEventListener('mouseleave', () => {
    autoScroll = setInterval(nextItem, 3000); // Changer selon vos besoins
});

// Mettre à jour le carousel initialement
updateCarousel();
