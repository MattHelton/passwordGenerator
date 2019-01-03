let generator = document.getElementById('generate')



const digitArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let pwArray = []

function randomCharacter (max) {
return Math.floor(Math.random() * Math.floor(max))
}

function generate (num) {
    return digitArray[randomCharacter(num)]
}

function assignFirstDigit () {
    let first = digitArray[generate(25)]
    pwArray.push(first)
}

function buildPasswordArray () {
    for (let i = 0; i < 15; i++) {
        pwArray.push(generate(36))
    }
}

function printPassword (array) {
    console.log(array.join(''))
}

generator.addEventListener('click', function () {
    assignFirstDigit()
    buildPasswordArray()
    printPassword(pwArray)
})