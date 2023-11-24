/* let game = {
    1: "rock",
    2: "paper",
    3: "scissors"
}

let playerAnswer = prompt("Choose side")


while (playerAnswer > 3 || playerAnswer < 1) {
    playerAnswer = prompt("Choose side")
}

let compNumber = Math.floor(Math.random() * 3)

console.log(compNumber)

let playerToNumber = +playerAnswer

if(playerToNumber === 1 && compNumber === 2) {
    alert(`You lost. Computer chose ${compNumber}`)
} else if(playerToNumber === 2 && compNumber === 3) {
    alert(`You lost. Computer chose ${compNumber}`)
} else if(playerToNumber === 3 && compNumber === 1) {
    alert(`You lost. Computer chose ${compNumber}`)
} else if(playerToNumber === compNumber) {
    alert("It is a tie")
} else {
    alert(`You won. Computer chose ${compNumber}`)
}
 */

const text = document.getElementById('greeting')

const btns = document.getElementById('theBtn')

btns.addEventListener('click', function() {
    text.style.color = 'red'
})