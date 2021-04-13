package exercicio08;

public class GerenteRegional extends Gerente {
  public GerenteRegional(String nome, String sobrenome, String cpf, double salario, String senha) {
    super(nome, sobrenome, cpf, salario, senha);
  }

  @Override
  public double calculaBonificacao () {
    return (this.salario * 0.15) + 1000.00;
  }
}
