package com.example.conexao_back;

import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/v1")
public class ConexaoController {

    @CrossOrigin(origins = "http://localhost:5500")
    @GetMapping("/status") // Certifique-se de que essa anotação está aqui!
    public String checarConexao() {
        return "{\"mensagem\": \"Conexão estabelecida com sucesso!\"}";
    };

    @CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:5500"})
    @GetMapping("/usuario")
    public Map<String, String> getUsuario() {
        Map<String, String> usuario = new HashMap<>();
        usuario.put("nome", "Wilbsom");
        usuario.put("curso", "ciência da computação");
        System.out.println("Get mapping usuarios funcionando");

        return usuario;
    }
}