function verificarParImpar() {
    let num;
    let valor;
  
    do {
      valor = document.getElementById("valor").value;
      
      if (valor === null) {
        break; // Sai do loop se o usuário cancelar o prompt
      }
      
      num = parseInt(valor);
      
      if (isNaN(num)) {
        document.getElementById('resposta').innerHTML = "Por favor, insira um número válido.";
      } else if (num % 2 === 0) {
        document.getElementById('resposta').innerHTML = "O número " + num + " é Par.";
      } else {
        document.getElementById('resposta').innerHTML = "O número " + num + " é Ímpar.";
      }
    } while (valor !== null);
  }
  
  verificarParImpar();