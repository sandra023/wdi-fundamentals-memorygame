

var cards = ["Queen","Queen","King","King"];
//cards on the board

var cardsInPlay = [];
//holds the cards in play

var cardOne = cards[0];
//first card the user picks

cardsInPlay.push("cardOne");
//sends the users first pick to cardsInPlay array

console.log("User Flipped " + cardOne);
//tells the user what they picked

var cardTwo = cards[2];
//second card the user pics

cardsInPlay.push("cardTwo");
//sends the users second pick to cardsInPlay array

console.log("User Flipped " + cardTwo);
//tells the user what they picked

if (cardsInPlay.length === 2 && cardOne === cardTwo){
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}


console.log(cardsInPlay);

console.log("User Flipped " + cardThree);