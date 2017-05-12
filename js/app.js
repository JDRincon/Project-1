$(document).ready(function(){


var currentlyFlipped= [];
var cardsFlipped = 0;
var cardArr =[];


//storing divs into the cardArr empty array. using push to place them in card Arr
for ( let i =0; i < $('.card').length; i++){
  cardArr.push($(".card")[i]);
}
//functin to shuffle order of cards and store them in new array
function shuffle (arr) {
  var i = 0
    , j = 0
    , temp = null

  for (i = arr.length - 1; i > 0; i -= 1) {
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
  shuffle(cardArr);
  $('.card').on("click",function(){
    firstPick = $(this).attr('id');
    $(this).show();
    currentlyFlipped.push();
    cardsFlipped++;
  });
}

///cf 0 to cf 1//
clickedCard();

/*
clickedCard();
console.log(clickedCard());
*/
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
