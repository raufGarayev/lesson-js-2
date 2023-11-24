let age = 25 //global variable

//hoisting

//regular function
/* function count(oldAge, newAge) {
    // let newAge = 10 -- local variable
    console.log(oldAge + newAge)
} */

/* count(25, 10)
count(30, 20) */

//arrow function
/* const namePrinter = (firstName, lastName) => {
    console.log(firstName + ' ' + lastName)
} */

/* namePrinter('Cavid', 'Memmedli')

namePrinter('Rauf', 'Qarayev') */

//function expression
/* let ageCounting = function() {
    console.log(age + 20)
}

ageCounting()

const secondAgeCounting = () => {
    console.log(age + 30)
}

secondAgeCounting() */

let arr = [1, 2, 3]

/* const printArray = (number) => {
    return arr.push(number)
}

printArray(9)
console.log(arr) */

const mathFunc = (a, b) => {
    return a + b
}

let sum = mathFunc(15, 24)
/* console.log(sum) */


let array = [1, 2, 3]

array.unshift("Rauf") //arrayin evveline elave edir
array.push("Cavid") //arrayin sonuna elave edir

/* console.log(array)
 */

const infoPrinter = (firstName, lastName, age, school) => {
    console.log(`${firstName} ${lastName}-nin ${age} yaşı var. O ${school} universitetində oxuyur.`)
}

infoPrinter("Cavid", "Memmedli", 18, "Memarliq ve Insaat")











