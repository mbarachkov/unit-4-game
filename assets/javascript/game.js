//game generates a random "match" number with a value of 19-120
//game has 4 crystals with a value of 1-12
//when you click a crystal it should add the previous result until it is the same as match
//if the combined crystal clicks are more than the random result you get 1 loss
//if the combined crystal clicks are the same as the match number you get 1 win
//each time you get a win or a loss reset the game for a new match and crystal values

var wins = 0;
var losses = 0;

var randNumber = Math.floor(Math.random() * 101) + 19;
$(".guessedNumber").html(randNumber);
$("#random-target").text(randNumber);

var gems1 = Math.floor(Math.random() * 12) + 1;
var gems2 = Math.floor(Math.random() * 12) + 1;
var gems3 = Math.floor(Math.random() * 12) + 1;
var gems4 = Math.floor(Math.random() * 12) + 1;

$(".gems1").on("click", function() {
    $("#added-score").text(gems1);
});
$(".gems2").on("click", function() {
    $("#added-score").text(gems2);
});
$(".gems3").on("click", function() {
    $("#added-score").text(gems3);
});
$(".gems4").on("click", function() {
    $("#added-score").text(gems4);
});


