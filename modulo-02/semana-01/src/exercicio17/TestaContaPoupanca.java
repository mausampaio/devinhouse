package exercicio17;

public class TestaContaPoupanca {
  public static void main(String[] args) {
    ContaPoupanca poupador1 = new ContaPoupanca(2000.00);
    ContaPoupanca poupador2 = new ContaPoupanca(3000.00);

    ContaPoupanca.alterarTaxaAnual(0.04);

    for (int mes = 1; mes <= 12; mes++) {
        poupador1.calcularJuroMensal();
        poupador2.calcularJuroMensal();
    }
    System.out.printf("Saldo da conta poupador1: R$ %.2f.%n", poupador1.getSaldo());
    System.out.printf("Saldo da conta poupador2: R$ %.2f.%n", poupador2.getSaldo());

    ContaPoupanca.alterarTaxaAnual(0.05);

    poupador1.calcularJuroMensal();
    poupador2.calcularJuroMensal();
    
    System.out.printf("Saldo da conta poupador1: R$ %.2f.%n", poupador1.getSaldo());
    System.out.printf("Saldo da conta poupador2: R$ %.2f.%n", poupador2.getSaldo());
  }
}
