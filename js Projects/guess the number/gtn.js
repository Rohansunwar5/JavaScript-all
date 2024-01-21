let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#sub');
const userInput = document.querySelector('#guessField');

const GuessSlot = document.querySelector('.guesses');
const Remaininguess = document.querySelector('.lastResult')

const lowOrHi= document.querySelector('.lowORhi');
const startOver= document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame =true;

if(playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    let guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess (guess)  {
  // 
  if(isNaN(guess)){
    alert('please enter valid number');
  }
  else if(guess < 1){
    alert('please enter larger number');
  }
  else if(guess > 100){
    alert('please enter lower number');
  } else {
    prevGuess.push(guess)
    
    if(numGuess > 10){
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`)
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess (guess) {
  if(guess === randomNumber){
    displayMessage("Congratulations! You got it right!");
  }
  else if ( guess > randomNumber){
    displayMessage('Greater then random')
  } 
  else{
    displayMessage('Lesser than random number')
  }
}
function displayGuess(guess) {
  userInput.value= ''
  GuessSlot.innerHTML += `${guess}, `
  numGuess +=1;
  Remaininguess.innerHTML = `${11- numGuess}`
}

function displayMessage (message) {
  lowOrHi.innerHTML = `<h2> ${message}</h2>`;
}

function newGame() {
  const newGamebtn = document.querySelector('#newGame');
  newGamebtn.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess =[];
    numGuess =1;
    GuessSlot.innerHTML='';
    Remaininguess.innerHTML = `${11- numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
  })
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame" >Start Game </h2>`
  startOver.appendChild(p);
  playGame= false;
  newGame();
}