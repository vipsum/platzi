const prompt = require('prompt-sync')();
const nombre = prompt('What is your name? ');
let letra = 0
while (letra < nombre.length) {
    console.log(nombre[letra].repeat(letra + 1))
    letra++
}