const { checkApiResponse } = require('./amazonSearch'); // Assurez-vous que le chemin est correct

describe('checkApiResponse', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('should return 1 if the API returns a response', async () => {
        // Configurer fetch mock pour simuler une réponse de l'API positive
        fetch.mockResponseOnce(JSON.stringify({
            searchProductDetails: [
                { productDescription: "Cle USB", price: "10", imgUrl: "https://example.com/img.jpg", asin: "B00TEST" }
            ]
        }));

        const response = await checkApiResponse("test product");
        expect(response).toBe(1); // S'attend à ce que la fonction retourne 1
    });

    it('should return 0 if the API returns an unexpected response', async () => {
        // Simuler une réponse inattendue ou vide de l'API
        fetch.mockResponseOnce(JSON.stringify({}));

        const response = await checkApiResponse("test product");
        expect(response).toBe(0); // S'attend à ce que la fonction retourne 0
    });
});
