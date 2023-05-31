
function verifyIfGuessIsValid(guess){
    const number = +guess

    if(ifGuessIsInvalid(number)){
        elementGuess.innerHTML += ` <div class="error"> Must be a number between ${lowValue} to ${highValue}</div>`
    }
    if (numberIsbiggerOrLowerThanAllowed(number)) {
        elementGuess.innerHTML +=` <div class="error"> Must be a number between ${lowValue} to ${highValue}</div>`
    }
}    
function ifGuessIsInvalid(number) {
    return Number.isNaN(number);
}
function numberIsbiggerOrLowerThanAllowed(number){
    return number > highValue || number < lowValue;
}
