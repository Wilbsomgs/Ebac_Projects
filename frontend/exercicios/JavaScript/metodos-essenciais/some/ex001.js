const numeros = [10,20,30,42]; 
const numeros02 = [40,23,56,76,200];

// Método que retorna true ou false dependendo da condição. 
function verificar(lista = []){
    const temMaiorQue50 = lista.some(n=> n> 50);

    return temMaiorQue50;
} 

console.log("1° Array" + " " +  verificar(numeros))
console.log("2° Array" + " " + verificar(numeros02))

