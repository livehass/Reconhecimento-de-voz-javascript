
function verifyIfGuessIsValid(guess){
    const number = +guess

    if(ifGuessIsInvalid(number)){
        elementGuess.innerHTML += ` <div class="error"> Must be a number between ${lowValue} to ${highValue}</div>`
        
        return
    }
    if (numberIsbiggerOrLowerThanAllowed(number)) {
        elementGuess.innerHTML +=` <div class="error"> Must be a number between ${lowValue} to ${highValue}</div>`

        return 
    }
    if (number === randomNumber) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h4>O número secreto era <span id="right-number">${number}</span></h4>

        ` 
    }else if (number > randomNumber){

    }
}    
function ifGuessIsInvalid(number) {
    return Number.isNaN(number);
}
function numberIsbiggerOrLowerThanAllowed(number){
    return number > highValue || number < lowValue;
}
