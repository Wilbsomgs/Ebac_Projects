let min = 1;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

const winMessage = document.getElementById("win");
const greaterMessage = document.getElementById("greater");
const lowestMessage = document.getElementById("lowest");
const countingAttempts = document.getElementById("attempts-id");

let limitAttempt = 5;

// Função chamada ao clicar no botão CHUTAR
function verifyAttempt() {
  let attempt = parseInt(document.getElementById("attempt").value);

  console.log(randomNumber);

  if (attempt < min || attempt > max) {
    alert("Digite um número entre 1 - 100");
    winMessage.style.display = "none";
    greaterMessage.style.display = "none";
    lowestMessage.style.display = "none";
  } else if (attempt === randomNumber) {
    winMessage.style.display = "flex";
    greaterMessage.style.display = "none";
    lowestMessage.style.display = "none";
  } else if (attempt > randomNumber) {
    winMessage.style.display = "none";
    greaterMessage.style.display = "flex";
    lowestMessage.style.display = "none";

    limitAttempt -= 1;
  } else if (attempt < randomNumber) {
    winMessage.style.display = "none";
    greaterMessage.style.display = "none";
    lowestMessage.style.display = "flex";
    limitAttempt -= 1;
  }

  countingAttempts.innerText = 'TENTATIVAS:' + limitAttempt;
  console.log(limitAttempt);

  if (limitAttempt <= 0) {
    alert("Suas tentativas acabaram");
  }
}
