let random = parseInt(Math.random() * 10+1)

console.log(random);

const submit = document.querySelector('#sub');
const userinput = document.querySelector('#num');
const guessSlot = document.querySelector('#pre');
const remaining = document.querySelector('#gue');
const loworhi = document.querySelector('#lowOrHi');
const startover = document.querySelector('#Over');

const p = document.createElement('p');

let preguess = [];
let numguess = [];

let playgame = true;

if(playgame){
    submit.addEventListener('click', function(a){
        const guess = parseInt(userinput.value)
        Validityguess(guess)
    })
}

function Validityguess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess < 1){
        alert("Please enter a number more than zero.")
    }   
    else if(guess > 10){
        alert("Please enter a number between 1 to 10")
    }
    else{
        preguess.push(guess)
        if(numguess === 9){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${random}`)
            endgame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === random){
        displayMessage(`WOW! Your Guess is right`)
        endgame()
    }
    else if (guess > random){
        displayMessage(`Your guess is high`)
    }
    else if(guess < random){
        displayMessage(`Your guess is low`)
    }
}

function displayGuess(guess) {
    userinput.value = ``
    guessSlot.innerHTML += `${guess} ,`
    numguess++;
    remaining.innerHTML = `${9 - numguess }`
}

function displayMessage(Message) {
    loworhi.innerHTML = `<h2>${Message}</h2>`
}

function endgame(){ 
    userinput.value = ``
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startover.appendChild(p)
    playgame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener("click", function (a) {
        random= parseInt(Math.random()*10+1)
        preguess = []
        numguess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numguess}`
        userinput.removeAttribute('disabled')
        startover.remove(p)
        displayMessage(``)
        playgame = true
    })
}