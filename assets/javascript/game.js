//game generates a random "match" number with a value of 19-120
//game has 4 crystals with a value of 1-12
//when you click a crystal it should add the previous result until it is the same as match
//if the combined crystal clicks are more than the random result you get 1 loss
//if the combined crystal clicks are the same as the match number you get 1 win
//each time you get a win or a loss reset the game for a new match and crystal values

var wins = 0;
var losses = 0;
var score = 0;

var randNumber = Math.floor(Math.random() * 101) + 19;
$(".guessedNumber").html(randNumber);
$("#random-target").html(randNumber);
console.log(randNumber);

var gems1 = Math.floor(Math.random() * 12) + 1;
var gems2 = Math.floor(Math.random() * 12) + 1;
var gems3 = Math.floor(Math.random() * 12) + 1;
var gems4 = Math.floor(Math.random() * 12) + 1;

function reset() {
    score = 0;
    randNumber = Math.floor(Math.random() * 101) + 19;
    gems1 = Math.floor(Math.random() * 12) + 1;
    gems2 = Math.floor(Math.random() * 12) + 1;
    gems3 = Math.floor(Math.random() * 12) + 1;
    gems4 = Math.floor(Math.random() * 12) + 1;
    $("#random-target").html(randNumber);
    $("#added-score").text(score);
}

$(".gems1").on("click", function() {
    score += parseInt(gems1);
    $("#added-score").text(score);
    console.log(score);
    game();
});
$(".gems2").on("click", function() {
    score += parseInt(gems1);
    $("#added-score").text(score);
    console.log(score);
    game();

});
$(".gems3").on("click", function() {
    score += parseInt(gems3);
    $("#added-score").text(score);
    console.log(score);
    game();
});
$(".gems4").on("click", function() {
    score += parseInt(gems4);
    $("#added-score").text(score);
    console.log(score);
    game();
});

function game(){
    console.log(score)
    if (score === randNumber) {
        wins++;
        $("#win").text(wins);
        alert("good job!");
        reset();
    }
    if (score > randNumber) {
        $("#loss").text(losses);
        losses++;
        alert("NOPE");
        reset();
    }
}