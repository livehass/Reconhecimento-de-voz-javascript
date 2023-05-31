function verifyIfGuessIsValid(guess){
    const number = +guess

    if(ifGuessIsInvalid(number)){
        console.log("invalid")
    }else {
        console.log("valid");
    }
}
function ifGuessIsInvalid(number) {
    return Number.isNaN(number);
}

