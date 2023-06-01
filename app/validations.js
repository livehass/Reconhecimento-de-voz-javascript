function verifyIfGuessIsValid(guess){
    const number = +guess

    if(ifGuessIsInvalid(number)){
        elementGuess.innerHTML += ` 
            <div class="error"> 
            The number must be between 
            ${lowValue} to ${highValue}
            </div>
        `
        
        return
    }
    if (numberIsbiggerOrLowerThanAllowed(number)) {
        elementGuess.innerHTML += ` 
            <div class="error"> 
            The number must be between 
            ${lowValue} to ${highValue}
            </div>
        `

        return 
    }
    if (number === randomNumber) {
        document.body.innerHTML = `
            <h2>You're guess right!</h2>
            <h4>The random number is <span id="right-number">${number}</span></h4>
            <button id="button" class="button-play">Play Again</button>
        ` 
    }else if (number > randomNumber){
        elementGuess.innerHTML = `
            <div>The random number is less than <i class="fa-solid fa-down-long fa-bounce"></i> </div> 
        
        `
    }else {
        elementGuess.innerHTML = `
            <div>The random number is mora than <i class="fa-solid fa-up-long fa-bounce"></i> </div> 
        `
    }
}   
function ifGuessIsInvalid(number) {
    return Number.isNaN(number);
}
function numberIsbiggerOrLowerThanAllowed(number){
    return number > highValue || number < lowValue;
}

document.body.addEventListener("click", e => {
    if(e.target.id == 'button') {
        indow.location.reload()
    }
});
