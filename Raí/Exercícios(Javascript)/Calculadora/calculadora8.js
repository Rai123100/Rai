prompt = require("prompt-sync")();

let n_horas = parseInt(prompt("Digite a quantidade de horas que você trabalha na semana: "))
let valor_hora = parseFloat(prompt("Digite quanto custa a sua hora: "))
let por_semana = n_horas * valor_hora
let por_mes = por_semana * 4
console.log("Seu salário mensal é " + por_mes + ", sendo " + por_semana + " semanalmente")

