const tarefas = ["Comprar pão", "Estudar Javascript", "Pagar contas", "Fazer exercícios"];

const listaTarefasHTML = tarefas.map(tarefa => `<li>${tarefa}</li>`);

console.log(listaTarefasHTML);