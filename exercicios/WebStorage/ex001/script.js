const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", () => {
   const temaAtual = localStorage.getItem("tema") || "light";

   const novoTema = temaAtual === "dark" ? "light" : "dark";

   document.body.classList.toggle("dark", novoTema === "dark");
   localStorage.setItem("tema", novoTema);

   botaoTema.textContent = novoTema === "dark" ? "☀︎" : "☾";
});

document.addEventListener('DOMContentLoaded', ()=>{
   const temaSalvo =  localStorage.getItem("tema");

   if(temaSalvo === "dark"){
    document.body.classList.add("dark");
    botaoTema.textContent = "☀︎";
   }else{
    botaoTema.textContent =  "☾";
   }
})