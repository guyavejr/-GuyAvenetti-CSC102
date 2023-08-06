/*function for the dice game*/
function diceGame() {

    /*the two dice rolls*/
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    /*sum of the two dice rolls*/
    const sum = die1 + die2;

    /*output to be displayed on html page*/
    const outputElement = document.getElementById('output');

    
    /*the math logic for the game and what to display*/
    if (sum === 7 || sum === 11) {
    outputElement.innerHTML = "Craps - You Lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
    outputElement.innerHTML = "You Won!";
    } else {
    outputElement.innerHTML = "You Pushed!";
    }
}