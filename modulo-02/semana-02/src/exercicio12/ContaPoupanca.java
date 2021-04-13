package exercicio12;

public class ContaPoupanca extends Conta {
  public ContaPoupanca(String nomeDoTitular, int numero, int agencia) {
    super(nomeDoTitular, numero, agencia);
  }

  public void renderJurosDePoupanca() {
      this.saldo *= 1.001;
  }

  @Override
  public String getTipo() {
    return super.getTipo() + " Poupança";
  }
}
