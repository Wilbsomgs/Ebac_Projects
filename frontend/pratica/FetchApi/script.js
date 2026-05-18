document.getElementById("cep").addEventListener("blur", (evento)=>{
    const elemento = evento.target;
    const cepInformado = elemento.value;

    if(!(cepInformado.length === 8)){
        return
    }

    console.log("Evento disparado")

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro){
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("localidade").value = data.localidade;
                document.getElementById("uf").value = data.uf;
            }else {
                alert("CEP não encontrado.");
            }
        })
        .catch(error => console.error("Erro ao buscar o CEP: ", error));
});


const button = document.getElementById('cadastrar');
const formInfo = ['cep', 'logradouro', 'bairro', 'localidade', 'uf', 'numero']

button.addEventListener('click', ()=>{


    for(i=0; i < formInfo.length; i++){
       const info = document.getElementById(formInfo[i]).value
       localStorage.setItem(formInfo[i], info) 
    }

    alert('Formulário enviado com sucesso!')

})

function carregarDadosSalvos(){
    formInfo.forEach(id=>{
        const valorSalvo = localStorage.getItem(id);
        const campo = document.getElementById(id)

        if(valorSalvo && campo){
            campo.value = valorSalvo;
        }
    })
}

carregarDadosSalvos();