const digitArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let pwArray = []
let random = (max) => {
return Math.floor(Math.random() * Math.floor(max))
}

let generateDigit = () => {
    let digit = digitArray[random(36)]
    return digit
}

let passwordGen = () => {
    let i
    for( i = 0; i < 16; i++)
    pwArray.push(generateDigit())

}

passwordGen()
console.log(pwArray.join(''))