let firstCard = 11;
let secondCard = 5;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEL = document.getElementById("cards-el");

function startGame() {
    cardsEL.textContent += firstCard + " " + secondCard;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent += sum;
}

function newCard() {
    console.log("Drawing a new card from the deck");
}