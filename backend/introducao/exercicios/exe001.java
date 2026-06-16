package exercicios;
import java.util.Scanner;
/*
1. Dê boas vindas a um usuário no console.

2. Logo depois, peça ao usuário alguns dados: 
nome completo, 
    -cpf, 
    -idade, 
    -peso, 
    -altura e 
    -estado civíl.

*/

public class exe001 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Seja bem vindo(a)!");
        System.out.println("Antes de começar, preciso de algumas informações.\n");

        System.out.println("Digite seu nome completo: ");
        String nome = scanner.nextLine();

        System.out.println("Digite seu CPF, contendo os traços e pontos.");
        String cpf = scanner.nextLine();

        System.out.println("Agora gostaria de saber sua idade");
        int idade = scanner.nextInt();

        System.out.println("Qual seu peso?");
        double peso = scanner.nextDouble();

        System.out.println("Qual sua altura?");
        double altura = scanner.nextDouble();

        System.out.println("Qual seu Estado Civil? (Solteiro(a)/Casado(a))");
        String estadoCivil = scanner.nextLine();


        System.out.println("\n------------RESUMO------------");
        System.out.println("Nome: " + nome);
        System.out.println("CPF: " + cpf);
        System.out.println("Idade: " + idade + "anos");
        System.out.println("Peso: " + peso);
        System.out.println("Altura: " + altura);
        System.out.println("Estado Civil: " + estadoCivil);

        System.out.println("Confima as informações inseridas yes/no");
        String exit = scanner.nextLine();


        scanner.close();

        switch (exit) {
            case "yes":
                System.out.println("Dados cadastrados com sucesso!");
                System.exit(0);
                break;
            case "no":
                System.out.println("Operação cancelada com sucesso."); 
                System.exit(0); 
                break;
            default:
                System.out.println("Opção inválida, por favor tente novamente.");
                break;
        }
    }
}
