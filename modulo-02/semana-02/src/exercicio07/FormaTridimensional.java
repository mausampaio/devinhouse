package exercicio07;

public class FormaTridimensional extends Forma {
  private int altura;
  private int largura;
  private int comprimento;

  public FormaTridimensional(String cor, int altura, int largura, int comprimento) {
    super(cor);
    this.altura = altura;
    this.largura = largura;
    this.comprimento = comprimento;
  }
}
