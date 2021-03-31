package exercicio14;

public class Retangulo {
  private double comprimento;
    private double largura;

    public Retangulo() {
        comprimento = 1;
        largura = 1;
    }

    public double getComprimento() {
        return comprimento;
    }

    public boolean setComprimento(double comprimento) {
        if(comprimento > 0.00 && comprimento < 20.0) {
            this.comprimento = comprimento;
            return true;
        } else {
            return false;
        }
    }

    public double getLargura() {
        return largura;
    }

    public boolean setLargura(double largura) {
        if(largura > 0.00  && largura < 20.0) {
            this.largura = largura;
            return true;
        } else {
            return false;
        }
    }

    public double getArea() {
        return this.comprimento * this.largura;
    }

    public double getPerimetro(){
        return (this.comprimento + this.largura) * 2;
    }
}
