let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackjack = false;

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳");
    hasBlackjack = true;
} else {
    console.log("You're out of the game! 😭");
}

console.log(hasBlackjack);