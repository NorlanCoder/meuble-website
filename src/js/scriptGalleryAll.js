
// Sélectionne la section des produits
function initializeGalleryAll () {
const productContainer = document.querySelector('.grid');

// Tableau contenant les produits pour chaque catégorie
const products = {
bestSeller: [
{ name: "Fabric Chair", priceOld: "$105.00", priceNew: "$95.00", image: "/src/assets/prod1.png" },
{ name: "Luxury Table", priceOld: "$250.00", priceNew: "$200.00", image: "/src/assets/prod2.png" },
{ name: "Modern Sofa", priceOld: "$500.00", priceNew: "$450.00", image: "/src/assets/prod3.png" },
{ name: "Fabric Chair", priceOld: "$105.00", priceNew: "$95.00", image: "/src/assets/prod4.png" },
{ name: "Luxury Table", priceOld: "$250.00", priceNew: "$200.00", image: "/src/assets/prod5.png" },
{ name: "Modern Sofa", priceOld: "$500.00", priceNew: "$450.00", image: "/src/assets/prod6.png" },
{ name: "Fabric Chair", priceOld: "$105.00", priceNew: "$95.00", image: "/src/assets/prod7.png" },
{ name: "Luxury Table", priceOld: "$250.00", priceNew: "$200.00", image: "/src/assets/prod8.png" }

],
chair: [
{ name: "Comfort Chair", priceOld: "$120.00", priceNew: "$100.00", image: "/src/assets/prod4.png" },
{ name: "Stylish Chair", priceOld: "$140.00", priceNew: "$110.00", image: "/src/assets/prod5.png" },
{ name: "Executive Chair", priceOld: "$160.00", priceNew: "$130.00", image: "/src/assets/prod6.png" }
],
table: [
{ name: "Wooden Table", priceOld: "$220.00", priceNew: "$190.00", image: "/src/assets/prod7.png" },
{ name: "Dining Table", priceOld: "$320.00", priceNew: "$270.00", image: "/src/assets/prod8.png" },
{ name: "Coffee Table", priceOld: "$120.00", priceNew: "$90.00", image: "/src/assets/prod1.png" },
{ name: "Dining Table", priceOld: "$320.00", priceNew: "$270.00", image: "/src/assets/prod5.png" },
{ name: "Coffee Table", priceOld: "$120.00", priceNew: "$90.00", image: "/src/assets/prod2.png" }
],
bed: [
{ name: "King Bed", priceOld: "$600.00", priceNew: "$550.00", image: "/src/assets/prod2.png" },
{ name: "Queen Bed", priceOld: "$500.00", priceNew: "$450.00", image: "/src/assets/prod3.png" },
{ name: "Single Bed", priceOld: "$400.00", priceNew: "$350.00", image: "/src/assets/prod5.png" }
],
closet: [
{ name: "Wooden Closet", priceOld: "$300.00", priceNew: "$250.00", image: "/src/assets/prod6.png" },
{ name: "Modern Closet", priceOld: "$350.00", priceNew: "$300.00", image: "/src/assets/prod7.png" },
{ name: "Compact Closet", priceOld: "$200.00", priceNew: "$180.00", image: "/src/assets/prod8.png" }
]
};

// Fonction pour afficher les produits
// Fonction pour afficher les produits
function displayProducts(category) {
productContainer.innerHTML = ''; // Vide le conteneur avant d'ajouter de nouveaux produits

// Parcourt chaque produit dans la catégorie et l'ajoute au conteneur
products[category].forEach(product => {
const productHTML = `
  <div class="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
    <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover">
    <div class="p-4">
      <h3 class="text-xl font-semibold text-gray-800">${product.name}</h3>

       <div class="flex justify-between items-center mt-4">
  <div class="">
    <span class="text-gray-500 line-through">${product.priceOld}</span>
    <span class="text-lg font-bold text-red-500 ml-2">${product.priceNew}</span>
  </div>

  
  <div class="flex items-center space-x-2 border-2 border-gray-200 bg-gray-100 p-2 rounded-lg">
    <!-- Lien WhatsApp avec icône et texte -->
    <a href="http://wa.me/+22967697670" class="flex items-center space-x-2">
      <span class="text-xs md:text-md lg:text-md xl:text-xl font-semibold">
        Commander
      </span>
       <img src="/src/assets/whatsapp.png" alt="WhatsApp" class="w-6 h-6">
    </a>
  </div>
</div>


    </div>
  </div>
`;
productContainer.innerHTML += productHTML;
});
}


// Ajouter les écouteurs d'événements aux boutons
document.getElementById('best-seller-btn').addEventListener('click', () => displayProducts('bestSeller'));
document.getElementById('chair-btn').addEventListener('click', () => displayProducts('chair'));
document.getElementById('table-btn').addEventListener('click', () => displayProducts('table'));
document.getElementById('bed-btn').addEventListener('click', () => displayProducts('bed'));
document.getElementById('closet-btn').addEventListener('click', () => displayProducts('closet'));

// Par défaut, afficher la catégorie "Best Seller"
displayProducts('bestSeller');


// Fonction pour changer l'état actif
function setActiveButton(buttonId) {
  // Récupérer tous les boutons de catégorie
  const buttons = document.querySelectorAll('.category-btn');

  // Boucle sur chaque bouton et supprimer la classe "active"
  buttons.forEach(button => {
    button.classList.remove('bg-black', 'text-white');
    button.classList.add('bg-gray-200', 'text-black');
  });

  // Ajouter les classes "active" au bouton cliqué
  const activeButton = document.getElementById(buttonId);
  activeButton.classList.remove('bg-gray-200', 'text-black');
  activeButton.classList.add('bg-black', 'text-white');
}

// Ajouter des événements de clic sur chaque bouton
document.getElementById('best-seller-btn').addEventListener('click', () => {
  setActiveButton('best-seller-btn');
});

document.getElementById('chair-btn').addEventListener('click', () => {
  setActiveButton('chair-btn');
});

document.getElementById('table-btn').addEventListener('click', () => {
  setActiveButton('table-btn');
});

document.getElementById('bed-btn').addEventListener('click', () => {
  setActiveButton('bed-btn');
});

document.getElementById('closet-btn').addEventListener('click', () => {
  setActiveButton('closet-btn');
});

// Activer le bouton "Best Seller" par défaut
setActiveButton('best-seller-btn');


}