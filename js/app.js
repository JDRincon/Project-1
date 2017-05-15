$(document).ready(function(){


var currentlyFlipped= [];
var cardsFlipped = 0;
var cardArr =[];
var score = 0;
var $playerOneScore = $("#player_one_score")
var $playerTwoScore = $("#player_one_score")

//storing divs into the cardArr empty array. using push to place them in card Arr
for ( let i =0; i < $('.card-container').length; i++){
  cardArr.push($('.card-container')[i]);
}

//functin to shuffle order of cards and store them in new array
function shuffle(arr) {
  var i = 0
    , j = 0
    , temp = null

  for (i = cardArr.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr;
};



//on click of a card, should flip
function clickedCard(){
  cardsFlipped = 0;
  let shuffledCards = shuffle(cardArr);

  $('.card-container').on("click",function(){
    $(this).children().eq(0).show();
    console.log($(this).children());
    //not pushing the card ID?
    cardChosen = $(this).attr('id');
    currentlyFlipped.push(cardChosen);
    cardsFlipped++;
    if(cardsFlipped === 2){
      $('.card-container').off("click");

      checkMatch();
      //playerTracker++;
    }
  //  console.log(cardsFlipped);
  });

} //end of clicked Card function
clickedCard();

var checkMatch = function(){
  if (currentlyFlipped[0] !== currentlyFlipped[1]){
    console.log("try again ");
    // will face them down?
   //use the ids in the currentlyflipped to access elements on the DOM
    $('.card-container').toggle();
  } else {
  //will always be true b/c of card ID???
    score += 1;
    console.log("found a match " + score);
    $playerOneScore.text(score + "Point(s)");
  }
}

var playerTracker=[];

  
let turn = 0

if(turn % 2 === 0){
  //it is player 1's turn
} else {
  //it is player 2's turn
}

//toggle player



});
