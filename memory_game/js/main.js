

var cards = [ 
{
	rank : "Queen",
	suit : "hearts",
	cardImage : "image/queen-of-hearts.png"
},
{
	rank : "Queen",
	suit : "Diamonds",
	cardImage : "images/queen-of-diamonds.png"
},
{
	rank : "King",
	suit : "Hearts",
	cardImage : "images/king-of-hearts.png"
},
{
	rank : "King",
	suit : "Diamonds",
	cardImage : "image/king-of-diamonds.png"
}
];
//cards on the board

var cardsInPlay = [];
//holds the cards in play

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]){
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}}

function flipCard(cardId) {
	console.log("User flipped a " + cards[cardId].rank + ".");
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	}

	flipCard(0);
	flipCard(1);

	checkForMatch();



