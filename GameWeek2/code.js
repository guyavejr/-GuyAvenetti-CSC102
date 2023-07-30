function diceGame() {

    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    const sum = die1 + die2;


    const outputElement = document.getElementById('output');

    

    if (sum === 7 || sum === 11) {
    outputElement.innerHTML = "Craps - You Lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
    outputElement.innerHTML = "You Won!";
    } else {
    outputElement.innerHTML = "You Pushed!";
    }
}