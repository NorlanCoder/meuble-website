
function loadHTML(filePath, elementID) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementID).innerHTML = data;
      })
      .catch(error => console.error('Error loading HTML:', error));
  }
  
  // Charger les pages
  loadHTML('/pages/home.html', 'home');

  loadHTML('/pages/saleproducts.html','saleproducts');

  loadHTML('/pages/products.html','products');

  loadHTML('/pages/elevate.html', 'elevate');

  loadHTML('/pages/someproducts.html','someproducts');

  loadHTML('/pages/elevate2.html','elevate2');

  loadHTML('/pages/dedicate.html','dedicate');

  loadHTML('/pages/gallery.html','gallery');

  loadHTML('/pages/footer.html', 'footer');

  