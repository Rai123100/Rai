 prompt = require("prompt-sync")();

//  let numero = prompt("Digite um numero: ");
//  let parOuImpar = ( numero % 2 ) === 0 ? 'Par' : 'Impar' ;
//  console.log( `O numero ${numero} é: ${parOuImpar}.` ) ;

let num = prompt("Digite seu valor: ")
 
if (num % 2 === 0) {
  console.log('Seu valor é par');
} else {
  console.log('Seu valor é ímpar');
}