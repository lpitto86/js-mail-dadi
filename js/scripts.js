// Lista di email consentite
const allowedEmails = ['user1@example.com', 'user2@example.com', 'user3@example.com'];

// Chiedi all'utente la sua email
const userEmail = prompt('Inserisci la tua email:');

// Controlla se l'email è nella lista consentita
if (allowedEmails.includes(userEmail)) {
    alert('Accesso consentito. Benvenuto!');
} else {
    alert('Accesso negato. La tua email non è autorizzata.');
}

// Funzione per generare un numero casuale da 1 a 6
function rollDice() {
      return Math.floor(Math.random() * 6) + 1;
}

// Array dei risultati dei dadi
const diceResults = [rollDice(), rollDice()];

// Punteggi del giocatore e del computer
const playerScore = diceResults[0];
const computerScore = diceResults[1];

// Stampa i risultati
console.log('Risultati dei dadi:', diceResults);
console.log('Punteggio del giocatore:', playerScore);
console.log('Punteggio del computer:', computerScore);