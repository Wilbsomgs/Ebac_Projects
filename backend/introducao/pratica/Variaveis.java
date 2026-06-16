public class Variaveis {
    public static void main(String[] args) {
        int numero = 100;
        double altura = 1.45;
        String nome = "João";
        boolean maiorDeIdade = true;

        System.out.println(numero);
        System.out.println(altura);
        System.out.println(nome);
        System.out.println(maiorDeIdade);

        // Atribuindo valor de variável a outra variável 
        
        int numero1 = 32; // Atribui 32 à numero
		int numero2 = 12;
		
		numero1 = numero2; // numero recebe o valor de numero2
		
		System.out.println(numero1); // exibe 12

    }
}
