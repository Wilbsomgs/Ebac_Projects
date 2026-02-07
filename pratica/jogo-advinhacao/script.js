let min = 1;
let max = 100;  
const randomNumber = Math.floor(Math.random() * (max - min) * min);

const message = document.getElementById("message");

const winMessage = "Parabéns, você acertou o número aleatório";
const greaterAttempt =  "Dica: o número aleatório é menor que o seu palpite";
const lowestAttempt = "Dica: o número aleatório é maior que o seu palpite";


function generateRandomNumber(){

  
  let attempt = document.getElementById("attempt").value;

  console.log(randomNumber);
  if(attempt < min||attempt > max){
    alert("Digite um número entre 1 - 100");
  }else if(attempt == randomNumber){
    message.textContent = winMessage;
  } else if(attempt > randomNumber){
    message.textContent = greaterAttempt;
  }else if(attempt < randomNumber){
    message.textContent = lowestAttempt;
  }
}