package exercicio14;

public class TestaRetangulo {
  public static void main(String[] args) {
    Retangulo retangulo = new Retangulo();

    System.out.println("Retangulo 4.00 x 10.00");
    
    if(retangulo.setComprimento(4.00) && retangulo.setLargura(10.00)) {
      System.out.println("Área: " + retangulo.getArea());
      System.out.println("Perímetro: " + retangulo.getPerimetro());
    } else {
      System.out.println("Os valores de largura e comprimento devem estar entre 0.00 e 20.00.");
    }

    System.out.println("Retangulo -1.00 x 22.00");

    if(retangulo.setComprimento(-1.00) && retangulo.setLargura(22.00)) {
      System.out.println("Área: " + retangulo.getArea());
      System.out.println("Perímetro: " + retangulo.getPerimetro());
    } else {
      System.out.println("Os valores de largura e comprimento devem estar entre 0.00 e 20.00.");
    }
  }
}
