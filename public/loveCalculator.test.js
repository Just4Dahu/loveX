import { getLovePercentageAsync } from './loveCalculator';


test('le pourcentage d\'amour entre "melvin" et "geraldine" doit être 110%', async () => {
    // Attendre le résultat de la fonction asynchrone
    const percentage = await getLovePercentageAsync('melvin', 'geraldine');

    // Vérifier si le résultat est celui attendu
    expect(percentage).toBe(110);
});
