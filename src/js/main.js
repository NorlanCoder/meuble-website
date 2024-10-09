
function loadHTML(filePath, elementID, callback) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementID).innerHTML = data;
      if (callback) {
        callback(); // Exécuter la fonction callback une fois le contenu chargé
      }
    })
    .catch(error => console.error('Error loading HTML:', error));
}
  
 
  // Charger les pages et initialiser le modal après le chargement
  loadHTML('/', 'heroSection');
  loadHTML('/pages/PartnerSection.html', 'Partners');
  loadHTML('/pages/GalleryAll.html', 'GalleryAll',initializeGalleryAll);
  loadHTML('/pages/ElevateSpace.html', 'ElevateSpace');
  loadHTML('/pages/ElevateSection.html', 'Elevate');
  loadHTML('/pages/DedicateSection.html', 'dedicate');
  // loadHTML('/pages/gallery.html', 'gallery', initializeGalleryModal); // Le callback `initializeGalleryModal` est appelé après le chargement de la galerie
  loadHTML('/pages/testimonials.html', 'testimonials');
  loadHTML('/pages/footer.html', 'footer');
  


  const navbar = document.querySelector('header');
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('menu-btn');
  
  // Fonction pour vérifier la position de défilement et activer le sticky navbar
  function stickyNavbar() {
    if (window.scrollY > 100) {

      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }
  
  // Ajoute un écouteur pour l'événement 'scroll' sur la fenêtre
  window.addEventListener('scroll', stickyNavbar);
  
  // Gestionnaire pour le bouton de menu
  hamburger.addEventListener('click', function () {
    // Toggle la visibilité du menu mobile et l'animation du bouton hamburger
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('open');
  });
  
  // Gestionnaire pour fermer le menu lorsqu'un lien est cliqué
  const navbarLinks = document.querySelectorAll('.navbar-link');
  
  navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Ferme le menu après le clic
      menu.classList.add('hidden');
      hamburger.classList.remove('open');
  
      // Scroll vers l'élément cible de façon fluide
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  