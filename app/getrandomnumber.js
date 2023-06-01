const lowValue = 1;
const highValue = 1000;
const randomNumber = getRandomNumber();
const lowElementValue = document.getElementById('lower-value');
const highElementValue = document.getElementById('high-value');

function getRandomNumber() {
   return parseInt(Math.random()* highValue + 1);
   
}
lowElementValue.innerHTML = lowValue;
highElementValue.innerHTML = highValue;
console.log(randomNumber);
