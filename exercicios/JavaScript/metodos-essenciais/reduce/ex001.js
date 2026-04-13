// Ao inves de 
console.log("Função manual")
const valores = [10,20,32]

function somarElementos(valores){
    let somaTotal = 0;

    for(let i = 0; i < valores.length; i++){
        somaTotal += valores[i];
    }  
    return somaTotal;
}

console.log("Usando o reduce")
console.log(somarElementos(valores));
const valores02 = [20,254,32]

const somaTotal = valores02.reduce((acumulador, numero)=>acumulador + numero, 0);
console.log(somaTotal);