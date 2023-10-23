let firstCard = 11;
let secondCard = 5;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEL = document.getElementById("cards-el");
let gameStart = false;
let changeButton = document.getElementById("new-card-pre-game");


function startGame() {
    gameStart = true;
    // document.getElementById("new-card-pre-game").id = "new-card";
    renderGame();
}

function renderGame() {
    cardsEL.textContent = "Cards: " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum: " + sum;
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
  
}

function newCard() {
    if (gameStart) {
    let card = 3;
    sum += card;
    cards.push(card);
    renderGame();
    };
}