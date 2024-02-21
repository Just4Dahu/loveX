document.querySelectorAll('.searchBtn').forEach(button => {
    button.addEventListener('click', function(e) {
        const keyword = this.textContent; // Utilise le texte du bouton comme mot-clé
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
    });
});
