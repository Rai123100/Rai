prompt = require("prompt-sync")();

let preço_b = parseFloat(prompt("Digite o valor da compra: "))
let quantidade_parcelas = parseInt(prompt("Digite a quantidade de parcelas: "))
let cada_parcela = preço_b / quantidade_parcelas
console.log("Sua compra de " + preço_b + ", quando comprada em " + quantidade_parcelas + ", cada parcela custará " + cada_parcela)