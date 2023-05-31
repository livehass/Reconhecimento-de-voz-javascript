 const elementGuess = document.getElementById('Guess');
 
 
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
   var guess = e.results[0][0].transcript;
   showGuessOnScreen(guess);
}
function showGuessOnScreen(guess) {
    elementGuess.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${guess}</span>
    `
}