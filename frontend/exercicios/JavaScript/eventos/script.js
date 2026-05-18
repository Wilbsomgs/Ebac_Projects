function eventoInline(){
    alert("Evento Inline");
}


const btn = document.getElementById("btn_dom")

btn.addEventListener("click", (evento)=>{
    alert("Evento na DOM executado" + evento.type);
})