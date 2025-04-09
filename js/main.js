// Initialiser AOS.js
AOS.init({
    duration: 1200, // Durée de l'animation
    easing: 'ease', // Type d'animation
    once: true, // Animer une seule fois
  });
  
  // Optionnel : Ajouter des effets supplémentaires si tu veux que des éléments apparaissent lors du défilement
  document.addEventListener("DOMContentLoaded", function() {
    AOS.refresh(); // Rafraîchir les animations AOS au chargement
  });

  // Masque le loader après que la page est complètement chargée
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; // Cache le loader
  });
  