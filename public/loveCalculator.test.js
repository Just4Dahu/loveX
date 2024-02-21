// loveCalculator.test.js
const { calculateLovePercentage } = require('./loveCalculator'); // Assurez-vous d'exporter la fonction depuis loveCalculator.js

// Mock de document.getElementById pour simuler le DOM
document.getElementById = jest.fn((id) => {
    return {
        innerText: ''
    };
});

test('le pourcentage d\'amour entre "melvin" et "geraldine" doit être 110%', () => {
// Exécuter la fonction avec les noms test
    getLovePercentageSync('melvin', 'geraldine');

// Vérifier si le résultat est celui attendu
expect(document.getElementById("percentage").innerText).toBe(`Percentage : 110 %`);
});

