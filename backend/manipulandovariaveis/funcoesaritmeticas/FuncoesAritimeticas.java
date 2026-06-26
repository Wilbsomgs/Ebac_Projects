public class FuncoesAritimeticas{
    public static void main(String[] args) {
        // operadores aritéticos - (subtração), * (multiplicação),  e / (divisão)

        int primeiroNumero = 10;
        int segundoNumero = 2;

        System.out.println(primeiroNumero + segundoNumero); // Soma 
        System.out.println(primeiroNumero - segundoNumero); // Subtração
        System.out.println(primeiroNumero * segundoNumero); // Multiplicação
        System.out.println(primeiroNumero / segundoNumero); // Divisão 

        // operador "módulo"
        int restoDaDivisão = 10 % 3;
        System.out.println(restoDaDivisão);

        // Classe math
        double resultadoPow = Math.pow(5.0,5.0 ); // Eleva um número à outro
        System.out.println("Resultado Pow: " + resultadoPow);

        // Sqrt
        double resultadoSqrt = Math.sqrt(81);
        System.out.println("Resultado sqrt(): " + resultadoSqrt); // Calcula a raiz quadrada do valor informado

        // Max value 
        System.out.println("Verifica maior número entre 60 e 85: " + Math.max(60,85));

        //  Min value 
        System.out.println("verifica menor valor entre 60 e 85: " + Math.min(60,85));
        

    }
}