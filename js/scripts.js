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