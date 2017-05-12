$(document).ready(function(){

var randomizedOrder = [];
var currentlyFlipped= [];
var cardsFlipped = 0;
var cardArr =[];

//functin to shuffle order of cards and store them in new array

for ( let i =0; i < $('.card').length; i++){
  cardArr.push($(".card")[i]);
}

console.log(cardArr);

function shuffle (cardArr) {
  var i = 0
    , j = 0
    , temp = null

  for (i = cardArr.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = cardArr[i]
    cardArr[i] = cardArr[j]
    cardArr[j] = temp
  }
  return cardArr;
}
shuffle(cardArr);
console.log(cardArr);


/////for loop and assigning shuffled cards




// generate game-board
//on click of a card, should flip
function newBoard(){
  currentlyFlipped = 0;
  shuffle();
  for (var i =0; i < cards.length; i++){
    $(".card").on("click",function(){

    })
  }
}
//Look for Pair id, if a match remove card from board and add point to player_score
var clicks = 0;
var firstPick="";
var secondPick= "";

if(firstPick === secondPick){
  console.log("Found a match");
  player_one++;
} else {
  //flip back around
}

//toggle player
//click two and after a fews it will face down again





});
