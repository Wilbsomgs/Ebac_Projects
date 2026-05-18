const API_URL_STATUS =   "http://localhost:8080/api/v1/status";
const API_URL_USUARIO = "http://localhost:8080/api/v1/usuario";


interface User{
    id: number;
    name: string;
}

console.log("1. O script foi carregado pelo navegador!")

async function conectarAoBackend(): Promise<void>{
    try{
        const resposta = await fetch(API_URL_USUARIO, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        
        if (resposta.ok) {           
            const data = await resposta.json();
            console.log("Resposta do Back-end:", data);
        }
    }catch (erro){
        console.error("Erro crítico de conexão: O servidor está offiline ou o IP esta errado")
    }
}

conectarAoBackend()