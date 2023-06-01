function verifyIfGuessIsValid(guess){
    const number = +guess

    if(ifGuessIsInvalid(number)){
        elementGuess.innerHTML += ` <div class="error"> o número deve ser entre ${lowValue} até ${highValue}</div>`
        
        return
    }
    if (numberIsbiggerOrLowerThanAllowed(number)) {
        elementGuess.innerHTML +=` <div class="error"> o número deve ser entre ${lowValue} até ${highValue}</div>`

        return 
    }
    if (number === randomNumber) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h4>O número secreto era <span id="right-number">${number}</span></h4>
        ` 
    }else if (number > randomNumber){
        elementGuess.innerHTML = `
            <div>O número secreto é menor <i class="fa-solid fa-down-long fa-bounce"></i> </div> 
        
        `
    }else {
        elementGuess.innerHTML = `
            <div>O número secreto é maior <i class="fa-solid fa-up-long fa-bounce"></i> </div> 
        `
    }
}    
function ifGuessIsInvalid(number) {
    return Number.isNaN(number);
}
function numberIsbiggerOrLowerThanAllowed(number){
    return number > highValue || number < lowValue;
}
