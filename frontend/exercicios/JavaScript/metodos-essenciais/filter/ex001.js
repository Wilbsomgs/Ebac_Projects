const numeros = [2,3,7,24,42];

// Função que retorna os elementos que atendem a uma condição
const maioresQueDez = numeros.filter(n => n > 10);

console.log(maioresQueDez)

// Mesma função que 
function filter(){
    lista = [12,21,6]; 
    novaLista = [];

    for(let i = 0; i <= lista.length; i++){
        if(lista[i] >= 10 ){
            novaLista.push(lista[i])
        }
    }
    return novaLista
}

console.log(filter())

