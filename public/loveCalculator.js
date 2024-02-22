// loveCalculator.js

// Fonction principale pour attacher l'événement au bouton submit
function attachSubmitListener() {
    document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault();

        let fname = document.getElementById('fname').value;
        let sname = document.getElementById('sname').value;

        calculateLovePercentage(fname, sname);
    });
}

// Fonction pour calculer le pourcentage d'amour
function calculateLovePercentage(fname, sname) {
    if (fname.toLowerCase() === "géraldine" || fname.toLowerCase() === "geraldine" ||
        sname.toLowerCase() === "géraldine" || sname.toLowerCase() === "geraldine") {
        document.getElementById("percentage").innerText = `Percentage : 110 %`;
        document.getElementById("result").innerText = `Result : Une bonne nuit en perspective`;
    } else {
        // Si ce n'est pas "géraldine" ou "geraldine", effectuer la requête à l'API
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0dbd38fc8dmsh7004146a64a1761p17226ejsnceab381ff0ef',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
        };

        let url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`;
        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                document.getElementById("percentage").innerText = `Percentage : ${response.percentage} %`;
                document.getElementById("result").innerText = `Result : ${response.result}`;
            })
            .catch(error => console.error('Error:', error));
    }
}
// Fonction simulée pour obtenir le pourcentage d'amour de manière synchrone
export function getLovePercentageAsync(fname, sname) {
    if (fname.toLowerCase() === "géraldine" || fname.toLowerCase() === "geraldine" ||
        sname.toLowerCase() === "géraldine" || sname.toLowerCase() === "geraldine") {
        return 110; // Retourne un pourcentage spécial pour "Géraldine"
    } else {
        return 55;
    }
}

// Mettre à jour l'exportation pour inclure la nouvelle fonction
export { calculateLovePercentage, attachSubmitListener };
