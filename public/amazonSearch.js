// Définir la fonction searchAmazonProducts
function searchAmazonProducts(keyword) {
    fetch(`/search-amazon?keyword=${encodeURIComponent(keyword)}`)
        .then(response => response.json())
        .then(data => {
            const resultsElement = document.getElementById('results');
            resultsElement.innerHTML = ''; // Efface les résultats précédents
            data.searchProductDetails.slice(0, 10).forEach(product => { // Prend uniquement les 10 premiers produits
                const productElement = document.createElement('div');
                productElement.innerHTML = `
                    <h3>${product.productDescription}</h3>
                    <p>Price: ${product.price}€</p>
                    <img src="${product.imgUrl}" alt="${product.productDescription}" style="width:100px;height:auto;">
                    <a href="https://www.amazon.fr/dp/${product.asin}" target="_blank">View Product</a>
                `;
                resultsElement.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error:', error));
}

function checkApiResponse(keyword) {
    return fetch(`/search-amazon?keyword=${encodeURIComponent(keyword)}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.searchProductDetails) {
                return 1; // API a renvoyé une réponse
            } else {
                return 0; // Réponse inattendue de l'API
            }
        })
        .catch(error => {
            console.error('Error:', error);
            return 0; // Erreur lors de la requête à l'API
        });
}

// Exporter les fonctions pour les rendre accessibles pour les tests ou d'autres fichiers
export { searchAmazonProducts, checkApiResponse };

// Ajoute l'événement click aux boutons
document.querySelectorAll('.searchBtn').forEach(button => {
    button.addEventListener('click', function() {
        const keyword = this.textContent; // Utilise le texte du bouton comme mot-clé
        searchAmazonProducts(keyword);
    });
});
