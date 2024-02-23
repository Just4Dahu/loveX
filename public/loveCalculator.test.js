import { getLovePercentageAsync } from './loveCalculator';


test('le pourcentage d\'amour entre "paul" et "geraldine" doit être 110%', async () => {
    // Attendre le résultat de la fonction asynchrone
    const percentage = await getLovePercentageAsync('paul', 'geraldine');

    // Vérifier si le résultat est celui attendu
    expect(percentage).toBe(110);
});
