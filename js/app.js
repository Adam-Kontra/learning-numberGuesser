// Setup variables from DOM
const form = document.querySelector('#form');

const guessedNumberInput = document.querySelector('#number');

const submitButton = document.querySelector('#playButton');

const messageResult = document.querySelector('#message-result');

const guessesLeftP = document.querySelector('#message-guesses-left');

const restartButton = document.querySelector('#restartButton');

// Variables for mechanics of the game
const min = 1;

const max = 100;

let guessesLeft = 10;

const generatedNumber = Math.floor(Math.random() * 100) + 1; //2;



// Call Event Listeners
callEventListeners();

function callEventListeners() {
  form.addEventListener('submit', theGame);
  form.addEventListener('reset', restart);
}

guessesLeftP.textContent = `Guesses left: ${guessesLeft}`;

// Function: theGame
function theGame(e) {
  e.preventDefault();
  const guessedNumber = parseInt(guessedNumberInput.value);
  
  if(isNaN(guessedNumber) || guessedNumber < min || guessedNumber > max) {
    message(`Please enter a number between ${min} and ${max}`, 'red');
  } else {

    if(guessedNumber === generatedNumber) {
      guessedNumberInput.disabled = true;
      submitButton.disabled = true;
      guessedNumberInput.style.borderColor = 'green';
      guessedNumberInput.style.backgroundColor = 'rgb(255, 255, 245)';
      submitButton.style.backgroundColor = 'rgb(255, 255, 245)';
      guessedNumberInput.placeholder = `${generatedNumber}`;
      message('YOU HAVE WON!!', 'green');
    } else {
      guessesLeft -= 1;
      guessesLeftP.textContent = `Guesses left: ${guessesLeft}, Your last guess: ${guessedNumber}`;
      if(guessesLeft != 0){

        if(guessedNumber > generatedNumber) {
          message('Last guess was too high!', 'red');
        } else {
          message('Last guess was too low!', 'red');
        }
      } else {
        guessedNumberInput.disabled = true;
        submitButton.disabled = true;
        guessedNumberInput.style.borderColor = 'red';
        guessedNumberInput.style.backgroundColor = 'rgb(255, 255, 245)';
        submitButton.style.backgroundColor = 'rgb(255, 255, 245)';
        message('YOU HAVE LOST!! TRY AGAIN.', 'red');
      }
    }
  } 
guessedNumberInput.value = '';
}

// Function: message
function message(msg, color) {
  messageResult.textContent = msg;
  messageResult.style.color = color;
}

// Function: restart
function restart() {
  guessesLeft = 10;
  guessesLeftP.textContent = `Guesses left: ${guessesLeft}`;
  messageResult.textContent = '';
  guessedNumberInput.disabled = false;
  submitButton.disabled = false;
  guessedNumberInput.style.borderColor = 'black';
  guessedNumberInput.style.backgroundColor = 'rgb(243, 243, 243)';
  submitButton.style.backgroundColor = 'rgb(243, 243, 243)';
  guessedNumberInput.placeholder = 'Enter The Number';

  guessedNumberInput.addEventListener('mouseover', colorChangeOne);  
  guessedNumberInput.addEventListener('mouseleave', colorChangeTwo);  

  function colorChangeOne() {
    guessedNumberInput.style.backgroundColor = 'rgb(251, 255, 245)';
  }

  function colorChangeTwo() {
    guessedNumberInput.style.backgroundColor = 'rgb(243, 243, 243)';
  }

  submitButton.addEventListener('mouseover', colorChangeThree);  
  submitButton.addEventListener('mouseleave', colorChangeFor);  
  submitButton.addEventListener('mousedown', colorChangeFive);  
  submitButton.addEventListener('mouseup', colorChangeSix);  

  function colorChangeThree() {
    submitButton.style.backgroundColor = 'rgb(251, 255, 245)';
  }

  function colorChangeFor() {
    submitButton.style.backgroundColor = 'rgb(243, 243, 243)';
  }

  function colorChangeFive() {
    submitButton.style.backgroundColor = 'rgb(243, 243, 243)';
  }

  function colorChangeSix() {
    submitButton.style.backgroundColor = 'rgb(251, 255, 245)';
  }
}

