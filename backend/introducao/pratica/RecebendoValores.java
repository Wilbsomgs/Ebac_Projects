import java.util.Scanner;

public class RecebendoValores {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Olá, digite o seu nome: ");
        String nome = scanner.nextLine();
        
        System.out.println("Agora digite a sua idade: ");
        int idade = scanner.nextInt();

        System.out.println("Agora digite a sua altura: ");
        double altura = scanner.nextDouble();

        scanner.close();

        System.out.println("O seu nome é " + nome + ", a sua idade é " + idade + "e a sua altura é " + altura);
    }
}
