// Script pour que la nav defile

// Récupération de l'élément header
const header = document.querySelector('header');

// Ajout d'un écouteur d'événement pour l'événement scroll
window.addEventListener('scroll', function() {
  // Récupération de la position verticale de l'utilisateur
  const scroll = window.scrollY;

  // Si la position verticale de l'utilisateur est supérieure à 100px
  if (scroll > 10) {
    // Ajout de la classe 'sticky' à l'élément header
    header.classList.add('sticky');
  } else {
    // Suppression de la classe 'sticky' de l'élément header
    header.classList.remove('sticky');
  }
});