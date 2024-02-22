describe('searchAmazonProducts', () => {
    beforeEach(() => {
        // Réinitialiser les appels fetch mockés avant chaque test
        fetch.resetMocks();
        // Préparer le DOM
        document.body.innerHTML = '<div id="results"></div>';
    });

    it('should update the DOM with product details if API returns data', async () => {
        // Configurer fetch mock pour simuler une réponse de l'API
        fetch.mockResponseOnce(JSON.stringify({
            searchProductDetails: [
                { productDescription: "Test Product", price: "10", imgUrl: "https://example.com/img.jpg", asin: "B00TEST" }
            ]
        }));

        // Supposons que searchAmazonProducts est une fonction asynchrone
        await searchAmazonProducts("test product");

        // Vérifier que le contenu attendu est présent dans le DOM
        expect(document.getElementById('results').innerHTML).toContain("Test Product");
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
