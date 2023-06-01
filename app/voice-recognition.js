window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementGuess = document.getElementById('Guess');
const recognition = new SpeechRecognition();


recognition.lang = 'en';
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
   var guess = e.results[0][0].transcript;
   showGuessOnScreen(guess);
   verifyIfGuessIsValid(guess);
}
function showGuessOnScreen(guess) {
    elementGuess.innerHTML = `
        <div>You said:</div>
        <span class="box">${guess}</span>
    `
}

recognition.addEventListener('end', ()=> recognition.start());
