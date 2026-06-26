public class TiposNaoPrimitivos {
    public static void main(String[] args) throws Exception {        
        // Tipos não primitivos: classes wrapper: Integer, Double, Float, String, Character

        // Métodos de classes wrapper
        // Double
        
        double d = Double.parseDouble("3.12"); // Converte em double primitivo
        System.out.printf("Converteu string pra double: %s\n", d);
        
        Double numberDouble01 = Double.valueOf(10.5); // Converte double para objeto double
        System.out.printf("Converte %s para objeto Double\n", numberDouble01);
        
        Double teste = 0.0/0.0;    
        System.out.println("Variável d não é um número:  " + Double.isNaN(numberDouble01));
        System.out.println("Variável teste é não é um número: " + Double.isNaN(teste));


        // Character
        //isDigit()
        System.out.println("Verificando se 5 é um dígito: " + Character.isDigit('5')); // Verifica se é um digito (0-9)
        
        //toUpperCase 
        char c = 'c';
        System.out.println("toUppperCase():" + Character.toUpperCase(c)); // Deixa letra maiúscula
        

        // isLetter()
        System.out.println("isLetter():" + Character.isLetter(c));; // Verifica se variável c é uma letra de A-Z ou a-z 
        
        // Boolean 
        boolean b = Boolean.parseBoolean("true"); // Converte string para boolean
        System.out.println("parseBoolen" + b); 

        // valueOf()
        System.out.println("valueOf()" + Boolean.valueOf(b)); // Converte um boolean primitivo para um objeto Boolean
        
        // logicalAnd()
        boolean isEmailCorret = true;
        boolean isPasswordCorrect = false;
        boolean enter = Boolean.logicalAnd(isEmailCorret, isPasswordCorrect);

        System.out.println("Tem permissão para entrar: " + enter);
    }
}
