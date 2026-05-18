function aplicar(f,x){
    return f(x);
}

function dobro(n){
    return n * 2;
}

const resultado = aplicar(dobro,5);

console.log(`Resultado da HOF: ${resultado}.`);
