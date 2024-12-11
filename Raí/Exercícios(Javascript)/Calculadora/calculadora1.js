prompt = require("prompt-sync")();

let n1 = prompt("Digite um valor ")
let n2 = prompt("Digite outro valor ")
let n3 = parseInt(n1) + parseInt(n2)
console.log("A soma dos dois valores é: " + n3)