/* 1. create variables */

var randomNumberGenerated = Math.floor(Math.random() * 100) + 1; 

console.log(randomNumberGenerated);

var gemNumber = [5, 2, 1, 10, 20, 3]

var redGemNumberGenerated = gemNumber[Math.floor(Math.random() * gemNumber.length)];

var blueGemNumberGenerated = gemNumber[Math.floor(Math.random() * gemNumber.length)];

var yellowGemNumberGenerated = gemNumber[Math.floor(Math.random() * gemNumber.length)];

var greenGemNumberGenerated = gemNumber[Math.floor(Math.random() * gemNumber.length)];


var win = 0;
var lose = 0;

var totalScore = 0;

var numberGoalElement = $("#number-goal")

var redGemElement = $("#red-gem");

var blueGemElement = $("#blue-gem");

var yellowGemElement = $("#yellow-gem");

var greenGemElement = $("#green-gem");

var totalScoreElement = $("#total-number")
/* 2. create start game logic */

function startGame() {
    numberGoalElement.text(randomNumberGenerated);
    totalScore = 0;
    totalScoreElement.text(totalScore); 
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
/* 3. generate random number */
/* 4. randomize numbers assigned to each gem */
/* 5. create logic to add up button clicks */
/* 6. create if statements for wins/losses */



    
