prompt = require("prompt-sync")();

let temperatura = parseFloat(prompt("Digite sua temperatura em grau Celsius (ºC): "))
let Fahrenheit = temperatura * 9/5 + 32
console.log("Sua temperatura em Fahrenheit é " + Fahrenheit + " graus")