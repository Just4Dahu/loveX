import getLovePercentageSync from './loveCalculator';


test('le pourcentage d\'amour entre "melvin" et "geraldine" doit être 110%', () => {
    // Exécuter la fonction avec les noms test et stocker le résultat
    const percentage = getLovePercentageSync('melvin', 'geraldine');

    // Vérifier si le résultat est celui attendu
    expect(percentage).toBe(110);
});
