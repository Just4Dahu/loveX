# LoveX

Ce README décrit deux fonctionnalités JavaScript développées pour enrichir l'expérience utilisateur sur un site web. La première est un calculateur d'affinité amoureuse basé sur les prénoms, et la seconde est une fonction de recherche de produits sur Amazon utilisant le texte d'un bouton comme requête de recherche.

## Calculateur d'Affinité Amoureuse

### Description
Cette fonctionnalité permet aux utilisateurs de calculer le pourcentage d'affinité amoureuse entre deux personnes en saisissant leurs prénoms. Un cas spécial est traité où, si l'un des prénoms entrés est "Géraldine" ou "Geraldine", le pourcentage affiché est automatiquement de 110 % avec un message personnalisé.

### Comment ça marche
L'utilisateur doit entrer deux prénoms dans les champs prévus à cet effet et appuyer sur le bouton de soumission pour voir le résultat. Le pourcentage d'affinité et un message résultant s'affichent à l'écran.

### Code
```javascript
document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();
    let fname = document.getElementById('fname').value;
    let sname = document.getElementById('sname').value;
    calculateLovePercentage(fname, sname);
});

function calculateLovePercentage(fname, sname) {
    if (fname.toLowerCase() === "géraldine" || fname.toLowerCase() === "geraldine" ||
        sname.toLowerCase() === "géraldine" || sname.toLowerCase() === "geraldine") {
        document.getElementById("percentage").innerText = `Percentage: 110%`;
        document.getElementById("result").innerText = `Result: Une bonne nuit en perspective`;
    } else {
        // Logique pour la requête à l'API
    }
}
```

## Recherche de Produits sur Amazon

### Description
Cette fonctionnalité permet de rechercher des produits sur Amazon en utilisant le texte contenu dans un bouton comme mot-clé de recherche. Les résultats, incluant la description, le prix, une image, et un lien vers le produit sur Amazon, sont affichés directement sur la page.

### Comment ça marche
Les utilisateurs cliquent sur un bouton de recherche pour démarrer la recherche avec le texte du bouton comme mot-clé. Les 10 premiers résultats de produits sont affichés sur la page.

### Code : 
```javascript
function searchAmazonProducts(keyword) {
    fetch(`/search-amazon?keyword=${encodeURIComponent(keyword)}`)
        .then(response => response.json())
        .then(data => {
            const resultsElement = document.getElementById('results');
            resultsElement.innerHTML = '';
            data.searchProductDetails.slice(0, 10).forEach(product => {
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

document.querySelectorAll('.searchBtn').forEach(button => {
    button.addEventListener('click', function() {
        const keyword = this.textContent;
        searchAmazonProducts(keyword);
    });
});
```

Ces deux fonctionnalités améliorent considérablement l'interactivité et l'engagement des utilisateurs sur le site, offrant à la fois amusement et utilité.

