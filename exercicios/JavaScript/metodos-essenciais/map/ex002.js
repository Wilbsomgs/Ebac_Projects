const precos = [4.19, 7.39, 42.29];

const precosConvertidos = precos.map((preco) => preco * 5.74);
console.log(precosConvertidos);

// Código acima é o mesmo que: 

function converter(numero){
    return numero * 5.74
}

console.log(converter(4));