// ******* Script pour que la nav defile *******

// Récupération de l'élément header
const header = document.querySelector("header");

// Ajout d'un écouteur d'événement pour l'événement scroll
window.addEventListener("scroll", function () {
  // Récupération de la position verticale de l'utilisateur
  const scroll = window.scrollY;

  // Si la position verticale de l'utilisateur est supérieure à 100px
  if (scroll > 10) {
    // Ajout de la classe 'sticky' à l'élément header
    header.classList.add("sticky");
  } else {
    // Suppression de la classe 'sticky' de l'élément header
    header.classList.remove("sticky");
  }
});

// ******* *******

// Script pour afficher le burger bun menu en mobile

const menuButton = document.querySelector(".menu-button");
const navM = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  navM.classList.toggle("show");
  if (navM.classList.contains("show")) {
    navMobile.style.display = "flex";
    setTimeout(() => {
      navM.classList.add("show-transition");
    }, 20);
  } else {
    navM.classList.remove("show-transition");
    navM.addEventListener("transitionend", () => {
      navM.style.display = "none";
    });
  }
});

// Script pour montrer les alertes du form quand on clique sur le submit

const container = document.querySelector(".alert-duration");
// const button = container.querySelector('.submit-bt');
// const alert2 = container.querySelector('sl-alert');
const isSuccess = "<?php echo $success; ?>";
if (isSuccess == true) {
  document.getElementById("success-message").style.display = "block";
}
if (isSuccess == false) {
  document.getElementById("error-message").style.display = "block";
}

// button.addEventListener("click", () => alert2.show());

// Script pour fermer les alertes du form

// const alert1 = document.querySelector(".alert-closable");
// alert1.addEventListener("sl-after-hide", () => {
//   setTimeout(() => (alert1.open = true), 2000);
// });
