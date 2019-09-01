var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//  square bracket = Array
// curly bracket= object 
var random = Math.random() * alphabet.length
// console.log(random)
var floorRandom = Math.floor(random)
// console.log(floorRandom)
// var random = Math.floor( Math.random() * alphabet.length )
var computerChoice = alphabet[floorRandom]

console.log(computerChoice)

// counters
var wins = 0
var loses = 0
var guessesLeft = 10
var guessesString = ''
var guessesSoFar = []

function render(){
    document.querySelector(".guesses-left").innerText = guessesLeft
    document.querySelector(".wins").innerText = wins
    document.querySelector(".loses").innerText = loses
    document.querySelector(".guessFar").innerText = guessesString
}

document.onkeyup = function (event) {
    console.log(event.key)
    var userChoice = event.key
    guessesSoFar.push(userChoice)
    guessesString = ''
    console.log(computerChoice);

    for (let i = 0; i < guessesSoFar.length; i++) {
        guessesString += guessesSoFar[i] + ', ';
        
    }
    console.log(guessesSoFar);
    console.log(guessesString);
    
        
    guessesLeft = guessesLeft - 1

    if (computerChoice === userChoice) {
        alert("You WIN!")
        wins++ 
    }
    else {
        if (guessesLeft < 1) {
            alert("You LOSE!")
            loses++
        }
    }

    render()
}

render()
// if condition = true else=false
//  === is a comparison opperator  and the result is a Boolean(T/F)
