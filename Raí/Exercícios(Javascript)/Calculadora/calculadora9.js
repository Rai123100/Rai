prompt = require("prompt-sync")();

let valor_total = parseFloat(prompt("Digite o valor de sua compra: "))
let juros = parseFloat(prompt("Digite a quantida de juros por parcela: "))
let n_parcelas = 12;

let valor_parcela = (valor_total / n_parcelas)

let valor_parcela1 = (valor_total / n_parcelas) * (juros / 100) + valor_parcela
let valor_parcela2 = valor_parcela1 * (juros / 100) + valor_parcela1
let valor_parcela3 = valor_parcela2 * (juros / 100) + valor_parcela2
let valor_parcela4 = valor_parcela3 * (juros / 100) + valor_parcela3
let valor_parcela5 = valor_parcela4 * (juros / 100) + valor_parcela4
let valor_parcela6 = valor_parcela5 * (juros / 100) + valor_parcela5
let valor_parcela7 = valor_parcela6 * (juros / 100) + valor_parcela6
let valor_parcela8 = valor_parcela7 * (juros / 100) + valor_parcela7
let valor_parcela9 = valor_parcela8 * (juros / 100) + valor_parcela8
let valor_parcela10 = valor_parcela9 * (juros / 100) + valor_parcela9
let valor_parcela11 = valor_parcela10 * (juros / 100) + valor_parcela10
let valor_parcela12 = valor_parcela11 * (juros / 100) + valor_parcela11




console.log("---------------------------------------------------------------------------------------------")
console.log("Sua compra de " + valor_total + ", quando parcelada em 12 vezes, terá parcelas respectivas:")

console.log("Primeira parcela: " + valor_parcela1)
console.log("Segunda parcela: " + valor_parcela2)
console.log("Terceira parcela: " + valor_parcela3)
console.log("Quarta parcela: " + valor_parcela4)
console.log("Quinta parcela: " + valor_parcela5)
console.log("Sexta parcela: " + valor_parcela6)
console.log("Setima parcela: " + valor_parcela7)
console.log("Oitava parcela: " + valor_parcela8)
console.log("Nona parcela: " + valor_parcela9)
console.log("Décima parcela: " + valor_parcela10)
console.log("Décima primeira parcela: " + valor_parcela11)
console.log("Décima segunda parcela: " + valor_parcela12)
console.log("---------------------------------------------------------------------------------------------")

