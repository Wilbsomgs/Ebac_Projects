package manipulandostring;

public class ManipulandoString {
    public static void main(String[] args) {
        String frase = "Manipulando Strings";

        System.out.println(frase.length()); // Imprime a quantidade de caracteres
        
        System.out.println(frase.toUpperCase()); // Tudo maiúsculo

        System.out.println(frase.toLowerCase()); // Tudo minúsculo

        System.out.println(frase.substring(10)); // Ignora caracteeres

    }
}