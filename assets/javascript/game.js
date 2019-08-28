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

function render(){
    document.querySelector(".guesses-left").innerText = guessesLeft
    document.querySelector(".wins").innerText = wins
    document.querySelector(".loses").innerText = loses
}

document.onkeyup = function (event) {
    console.log(event.key)
    var userChoice = event.key
    
    guessesLeft = guessesLeft - 1
    // guessesLeft--
    // guessesLeft += 1

    if (computerChoice === userChoice) {
        console.log("You WIN!")
    }
    else {
        if (guessesLeft < 1) {
            console.log("You LOSE!")
        }
    }

    render()
}

render()
// if condition = true else=false
//  === is a comparison opperator  and the result is a Boolean(T/F)
