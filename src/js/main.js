
function loadHTML(filePath, elementID) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementID).innerHTML = data;
      })
      .catch(error => console.error('Error loading HTML:', error));
  }
  
  // Charger les pages

  loadHTML('/pages/footer.html', 'footer');

  