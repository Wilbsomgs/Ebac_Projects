const tarefas = document.getElementById('listaTarefas');

fetch("https://crudcrud.com/api/8a9c5d03b29d49cfaa3e28b30022360c/tarefas")
.then(resposta => resposta.json())
.then((listaTarefas) =>{

    listaTarefas.forEach(tarefa => {
        const item = document.createElement("li");
        item.innerHTML = `${tarefa.descricao} <button>X</button>`
        tarefas.appendChild(item);
    }); 
});

document.getElementById("add").addEventListener('click', ()=>{
    const descricao = document.getElementById("tarefa").value;
    fetch("https://crudcrud.com/api/8a9c5d03b29d49cfaa3e28b30022360c/tarefas",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({descricao: descricao})
    })
    .then(resposta => resposta.json())
    .then(tarefa => {
        const item = document.createElement("li")

        item.innerHTML = `${tarefa.descricao} <button>X</button>`
        tarefas.appendChild(item);
    }) 
})