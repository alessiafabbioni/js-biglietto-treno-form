

// Funzione per calcolare il biglietto
function calculateTicketPrice() {
    // Valori di input
    let name = document.getElementById('Name').value;
    let km = parseFloat(document.getElementById('Km').value);
    let ageSelect = document.getElementById('Age');
    let age = ageSelect.options[ageSelect.selectedIndex].value;

    // I campi sono completati
    if (name && !isNaN(km) && age !== "Seleziona l'età") {

        let basePrice = km * 0.21;
        let discount = getDiscount(age);
        let finalPrice = basePrice * discount;

        // Mostra i dettagli passo per passo
        displayTicketDetails(name, basePrice, discount, finalPrice);
    } else {
        alert('Completa tutti i campi prima di generare il biglietto.');
    }
}

// Funzione per ottenere lo sconto
function getDiscount(age) {
    switch (age) {
        case "1":
            return 0.8; // Minorenne ottiene sconto 20%
        case "2":
            return 1; // Maggiorenne biglietto pieno
        case "3":
            return 0.6; // Senior 40% di sconto
        default:
            return 1; // Se la categoria non è selezionata
    }
}

// Funzione per mostrare le info
function displayTicketDetails(name, basePrice, discount, finalPrice) {
    //nell'html
    document.getElementById('biglietto').style.display = 'block';

    document.getElementById('username').innerText = name;
    document.getElementById('offerta').innerText = getOfferType(discount);
    document.getElementById('carrozza').innerText = getRandomNumber(1, 10); 
    document.getElementById('codice-cp').innerText = getRandomNumber(1, 1000); 
    document.getElementById('costo-biglietto').innerText = finalPrice.toFixed(2) + '€';
}

// Funzione per ottenere il tipo di offerta basandosi sullo sconto
function getOfferType(discount) {
    return discount === 1 ? 'Standard' : (discount === 0.8 ? 'Sconto Minorenne' : 'Sconto Senior');
}

// Funzione per ottenere un numero randomico tra un minimo e un massimo
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Event listener per "Genera"
document.getElementById('genera-button').addEventListener('click', calculateTicketPrice);


