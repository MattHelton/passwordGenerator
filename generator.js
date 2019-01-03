let generator = document.getElementById('generate')

const digitArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '&']
let pwArray = []

function randomCharacter (max) {
return Math.floor(Math.random() * Math.floor(max))
}

function generate (num) {
    return digitArray[randomCharacter(num)]
}

function assignFirstDigit () {
    let first = digitArray[randomCharacter(25)]
    pwArray.push(first)
}

function buildPasswordArray () {
    for (let i = 0; i < 15; i++) {
        pwArray.push(generate(42))
    }
}

function empty () {
    pwArray = []
}

function printPassword (array) {
    let div = document.createElement('div')
    let password = document.createTextNode(array)
    let currentDiv = document.getElementById('password')

    div.id = 'generatedPassword'
    div.appendChild(password)
    document.body.insertBefore(div, currentDiv)
}

function deleteElement (el) {
    if(!el){

    } else {
        el.parentNode.removeChild(el)
    }
}

generator.addEventListener('click', function () {
    let generatedPassword = document.getElementById('generatedPassword')
    deleteElement(generatedPassword)
    assignFirstDigit()
    buildPasswordArray()
    printPassword(pwArray.join(''))
    empty()
})