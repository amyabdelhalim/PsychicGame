var alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
//  square bracket = Array
// curly bracket= object 
var random = Math.random() * alphabet.length
// console.log(random)
var floorRandom = Math.floor(random)
// console.log(floorRandom)

// var random = Math.floor( Math.random() * alphabet.length )

var computerChoice = alphabet[floorRandom]
console.log(computerChoice)

document.onkeyup = function (event) {
    console.log(event.key)
    var userChoice = event.key

    if (computerChoice === userChoice) {
        console.log("You WIN!")
    }
    else {
        console.log("You LOSE!")
    }
}
// if condition = true else=false
//  === is a comparison opperator  and the result is a Boolean(T/F)
