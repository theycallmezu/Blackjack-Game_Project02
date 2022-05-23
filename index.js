/* Blackjack game */
let firstCard = 10;
let secondCard = 4;

let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = " ";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");


function startGame() {
    renderGame();
}

function renderGame() {

    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        
    } else if (sum === 21) {
        message = "Wohoo! You've got a Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    
    messageEl.textContent = message;
}



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



function newCard() {
    let card = getRandomIntInclusive(2, 11);
    sum += card;
    cards.push(card);
    renderGame();
}


for ( let count = 1;  count < 11;  count += 1 )  {
    
    console.log(count)

}



/*
 
if (sum < 21) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!");
} else {
    console.log("You're out of the game!");
}


// LESSON 
let age = 22

if (age < 21) {
    console.log("You can not enter the club!");
} else {
    console.log("Welcome!");
}

// LESSON 
let age = 100

if (age < 100) {
    console.log("Not elegible");
} else if (age === 100) {
    console.log("Here is your birthday card fromt he King!");
} else {
    console.log("Not elegible, you have already gotten one");
}


*/