$(document).ready(function(){


var currentlyFlipped= [];
var cardsFlipped = 0;
var cardArr =[];
var score = 0;

//storing divs into the cardArr empty array. using push to place them in card Arr
for ( let i =0; i < $('.card-container').length; i++){
  cardArr.push($('.card-container')[i]);
}

//functin to shuffle order of cards and store them in new array
function shuffle (arr) {
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

shuffle(cardArr);
console.log(shuffle(cardArr));

//on click of a card, should flip
function clickedCard(){
  cardsFlipped = 0;
  shuffle(cardArr);
  $('.card-container').on("click",function(){
    $(this).children().eq(0).show();
    console.log($(this).children());
    firstPick = $(this).attr('id');
    currentlyFlipped.push();
    cardsFlipped++;
    if(cardsFlipped === 2){
      $('.card-container').off("click");

      checkMatch();
    }
  //  console.log(cardsFlipped);
  });

} //end of clicked Card function
clickedCard();

var checkMatch = function(){
  if (currentlyFlipped[0] !== currentlyFlipped[1]){
    console.log("try again");
  } else {
    console.log("found a match");
  }
}


/*


//Look for Pair id, if a match remove card from board and add point to player_score

if(firstPick === secondPick){
  console.log("Found a match");
  player_one++;
} else {
  //flip back around
}

//toggle player
//click two and after a fews it will face down again

*/




});
