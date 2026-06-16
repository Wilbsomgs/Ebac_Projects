package Ebac_Projects.backend.manipulandovariaveis.pratica;
public class tiposPrimitivos {
  public static void main(String[] args) {
    // Tipos não primitivos: int, double, char, boolean

    int numero = 12;    
    double peso = 56.6;   
    char character = 'e';   
    boolean confirm = true;

    // Tipos não primitivos: Character, String, Integer, Boolean, Float, Double
    Integer meuInteger = 30;
    System.out.println("Número Integer:" + meuInteger);
    System.out.println(meuInteger.compareTo(30)); // Compara um número

    // doubleValue()
    double numeroDouble = meuInteger.doubleValue();
    System.out.println(numeroDouble);
  }
}
