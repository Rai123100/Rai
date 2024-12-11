prompt = require("prompt-sync")();

const numero = Math.floor(Math.random() * 100) + 1
let tentativa = 0
let pessoa

while (pessoa !== numero) {

    let pessoa = parseInt(prompt("Digite um número entre 100 e 1: "))
    tentativa ++;

    if (pessoa < numero) {
        console.log("Você chutou baixo")
    }
    else if (pessoa > 100 || pessoa < 0) {
        console.log("Número inválido")
    }
    else if (pessoa > numero) {
        console.log("Você chutou alto")
    }
    else if (pessoa === numero) {
        console.log("Você acertou em " + tentativa + " tentativas")
    }
}