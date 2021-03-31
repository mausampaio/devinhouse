package exercicio17;

public class ContaPoupanca {
  private static double taxaDeJurosAnual;

  private double saldo;

  public ContaPoupanca(double saldo) {
      this.saldo = saldo;
  }

  public double getSaldo() {
      return saldo;
  }

  public void calcularJuroMensal() {
      this.saldo += (saldo * taxaDeJurosAnual) / 12;
  }

  public static void alterarTaxaAnual(double novaTaxa) {
      taxaDeJurosAnual = novaTaxa;
  }
}
