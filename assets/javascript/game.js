/* 1. create variables */

var randomNumberGenerated = ""; 

console.log(randomNumberGenerated);

var gemNumber = [5, 2, 1, 10]

var redGemNumberGenerated = "";

var blueGemNumberGenerated = "";

var yellowGemNumberGenerated = "";

var greenGemNumberGenerated = "";


var win = 1;
var lose = 1;

var totalScore = 0;

var numberGoalElement = $("#number-goal");

var redGemElement = $("#red-gem");

var blueGemElement = $("#blue-gem");

var yellowGemElement = $("#yellow-gem");

var greenGemElement = $("#green-gem");

var totalScoreElement = $("#total-number");

var winElement = $("#win");

var loseElement = $("#lose");

/* 2. create start game logic */

function startGame() {
    randomNumberGenerated = Math.floor(Math.random() * 100) + 1;
    numberGoalElement.text(randomNumberGenerated);
    totalScore = 0;
    totalScoreElement.text(totalScore); 
    redGemNumberGenerated = gemNumber[Math.floor(Math.random() * gemNumber.length)];
    blueGemNumberGenerated = gemNumber[Math.floor(Math.random() * gemNumber.length)];
    yellowGemNumberGenerated = gemNumber[Math.floor(Math.random() * gemNumber.length)];
    greenGemNumberGenerated = gemNumber[Math.floor(Math.random() * gemNumber.length)];
    redGemElement.val(redGemNumberGenerated);
    blueGemElement.val(blueGemNumberGenerated);
    yellowGemElement.val(yellowGemNumberGenerated);
    greenGemElement.val(greenGemNumberGenerated);
    console.log(redGemElement);
    console.log(blueGemElement);
    console.log(yellowGemElement);
    console.log(greenGemElement);
}
startGame();

$(document).ready(function() {
    
    var randomNumberGeneratedInt = parseInt(randomNumberGenerated);

    $(".button-gem").on("click", function() {
        var totalScoreInt = parseInt(totalScore);
        var gemValueInt = parseInt($(this).val());
        totalScore = totalScoreInt + gemValueInt;
        totalScoreElement.text(totalScore);
        console.log(totalScore);
        if (randomNumberGeneratedInt === totalScore) {
            alert("Good job! You get a point!")
            winElement.text(win++);
            startGame();
            } else if (randomNumberGeneratedInt < totalScore) {
            alert("Sorry! Try again!");
            loseElement.text(lose++);
            startGame();
            }
    
    })

});
/* 5. create logic to add up button clicks */
/* 6. create if statements for wins/losses */

