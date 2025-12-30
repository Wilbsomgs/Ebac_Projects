document.getElementById("calcular").addEventListener("click", calcularIMC);

function calcularIMC(){
  let peso = parseFloat(document.getElementById('peso').value);
  let altura = parseFloat(document.getElementById('altura').value);
  
  let imc = peso / (altura * altura);

  imc = imc.toFixed(2);

  let resultado = document.getElementById("resultado")

  resultado.innerHTML = "Seu IMC é: " + imc;

  let mensagem = document.getElementById("mensagem");

  if(imc < 18.4){
    mensagem.innerHTML = "Você está abaixo do peso";
  }
  else if(imc >= 18.5 && imc < 24.9) {
    mensagem.innerHTML = "Peso normal";
  }
  else if(imc >= 25 && imc < 29.9) {
    mensagem.innerHTML = "Você está com sobrepeso";
  }
}
