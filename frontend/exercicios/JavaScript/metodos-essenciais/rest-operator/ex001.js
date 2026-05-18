// Sem o rest operator
function multiplicador(a,b,c){ // Limita a qntd de parâmetros, pois não é possível colocar quatro
    return a * b * c;
}

// Com o rest operator
function multiplicarTudo(...numeros) { // Permite colocar quantos parâmetros quiser
    return numeros.reduce((produto, numero)=> produto * numero, 1);
}

console.log(multiplicador(2,4,4))
console.log(multiplicarTudo(2,4,7,2))