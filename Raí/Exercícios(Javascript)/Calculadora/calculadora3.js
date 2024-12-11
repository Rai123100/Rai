prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Digite um valor "))
let n2 = parseFloat(prompt("Digite um valor "))
let resultado = Math.abs(n1-n2)
console.log("A diferença entre seus valores é " + resultado)