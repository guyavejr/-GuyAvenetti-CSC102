// function to check if inputed text is a palondrome
function checkPalindrome() {
    const inputText = document.getElementById('textInput').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = inputText.split('').reverse().join('');

    // if else statement for if something is or is not a palidrome and calls function to display result
    if (inputText === reversedText) {
        displayResult('It is a palindrome!');
    } else {
        displayResult('It is NOT a palindrome.');
    }
}
// function to display the result after it checks for palindrome
function displayResult(resultText) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = resultText;
}