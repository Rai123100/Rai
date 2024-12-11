prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do produto: ")
let preço_o = parseFloat(prompt("Digite o preço do produto: "))
let desconto = parseFloat(prompt("Digite a porcentagem do desconto: "))
let valor_do_desconto = (preço_o * (desconto / 100))
let preço_f = preço_o - valor_do_desconto
console.log("Seu produto " + nome + ", terá um desconto de " + valor_do_desconto + ", passando a custar " + preço_f)


