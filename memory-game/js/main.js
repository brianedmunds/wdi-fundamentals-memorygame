var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne, cardTwo);
console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

if ((cardsInPlay.length === 2) && (cardOne === cardTwo)) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}