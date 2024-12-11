prompt = require("prompt-sync")();

let nasceu = prompt("Digite o ano do seu nascimento: ")
let agora = new Date().getFullYear()
let resultado = parseFloat(agora) - parseFloat(nasceu)
console.log("Sua idade atual é " + resultado + " anos")