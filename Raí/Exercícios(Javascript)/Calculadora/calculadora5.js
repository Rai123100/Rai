prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do seu produto: ")
let preço = parseFloat(prompt("Digite o preço unitário do seu produto: "))
let quantidade = parseFloat(prompt("Digite a quantidade que você deseja comprar: "))
let valor = preço * quantidade
let importinho = 18
let resultado1 = (valor * (importinho / 100))
let imposto = resultado1 + valor
console.log("O produto " + nome + " de preço unitário " + preço + ", quando comprado em " + quantidade + " unidades, terá um valor de " + imposto + ", com a taxa de " + resultado1 + "% incluida")
