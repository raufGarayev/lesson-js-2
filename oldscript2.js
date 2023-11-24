let text = document.getElementById('greeting')
/* 
/* let text = document.getElementById('greeting')
var myBtn = document.getElementById('theBtn')
let classElement = document.getElementsByClassName('sometext')
let headline = document.querySelector('#headline') */
let buttons = document.querySelectorAll('#theBtn')

/* console.log(headline) */

/* console.log(classElement) */

let count = 0



/* buttons.addEventListener('click', function() {
    count++
    console.log("You clicked the button")
    text.innerText = `Hello world ${count}`
})
 */

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        count++
        console.log("clicked button")
        text.innerText = `Hello world ${count}`
    })
})

buttons[0].addEventListener('click', function() {
    alert('Hello world')
})

/* let game = confirm("Salam necesen") */

let playersChoise = prompt("Your number")
console.log(typeof playersChoise)
let numbers = [1, 2, 3]

let compNumber = Math.floor(Math.random() * 3)

/* let numberedPlayersChoise = Number(playersChoise) */
let numberedPlayersChoise = +playersChoise

if(numberedPlayersChoise  > compNumber) {
    alert("You won")
} else if(numberedPlayersChoise === compNumber) {
    alert("It is a tie")
} else {
    alert("You lost")
}


