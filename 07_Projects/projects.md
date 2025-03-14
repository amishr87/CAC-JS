# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

## Project 2 Solution

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //this is to stop the event from performing any default action if there is any. This is a precautionary method

  const height = parseInt(document.querySelector('#height').value); //this is to change the value of height from the string datatype to int datatype
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (
    (height === '' || height <= 0 || isNaN(height)) &&
    (weight === '' || weight <= 0 || isNaN(weight))
  ) {
    results.innerHTML = `Please enter a valid Height and Weight: ${height}, ${weight}`;
  } else if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid Height: ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid Weight: ${weight}`;
  } else {
    //dividing by 10000 since the height entered is in cm and not m, toFixed(2) is to limit the number of decimal digits to 2
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `${bmi}`;
  }
});


```

## Project 3 Solution Code

```javascript
const clock = document.getElementById('clock');
//We could have used document.querySelector('#clock') as well

//set interval is to keep running the method after the set time, in this case 1000 ms (1 sec)
setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());

  let currTime = date.toLocaleTimeString();
  clock.innerHTML = `${currTime}`;
}, 1000);

```

## Project 4 Solution


```javascript

//to generate a number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    //console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number >= 1');
  } else if (guess > 100) {
    alert('Please enter a number <= 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remainingGuesses.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remainingGuesses.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```


# Project 5 Solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6 Solution

```javascript

//function to generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID;

const startChangingColor = function () {
  const generateColor = function () {
    document.body.style.backgroundColor = randomColor();
  };
  // intervalID = setInterval(generateColor, 1000);
  //Above line would have worked as well but this is better code
  if (intervalID == null) {
    intervalID = setInterval(generateColor, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null; //This is clean up memory
  document.body.style.backgroundColor = '#212121';
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);



```