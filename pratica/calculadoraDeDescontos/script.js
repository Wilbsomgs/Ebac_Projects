function calcularDesconto(){
    // Entrada de dados
    let valorOriginal = document.getElementById("valor").value;
    let desconto = document.getElementById("desconto").value;

    // Processamento de dados
    let valorDesconto =  (valorOriginal  * desconto) / 100;
    let valorFinal = valorOriginal - valorDesconto;

    document.getElementById("resultado").textContent = "Valor final: " + valorFinal;
    // Saída
}
