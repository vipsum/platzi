const prompt = require('prompt-sync')();
const nombre = prompt('What is your name? ');

for (letra in nombre) {
    console.log(nombre[letra].repeat(parseInt(letra) + 1))
}

for (let letra = 0; letra < nombre.length; letra++) {
    console.log(nombre[letra].repeat(letra + 1))
}