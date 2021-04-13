package exercicio12;

public class ContaCorrente extends Conta {
  public ContaCorrente(String nomeDoTitular, int numero, int agencia) {
    super(nomeDoTitular, numero, agencia);
}

  @Override
  public boolean sacar(double valor) {
    return super.sacar(valor - 0.10);
  }

  @Override
  public String getTipo() {
    return super.getTipo() + " Corrente";
  }
}
