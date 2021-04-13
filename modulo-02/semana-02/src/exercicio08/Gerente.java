package exercicio08;

public class Gerente extends Funcionario {
  private String senha;
  private int numSubordinados;

  public Gerente(String nome, String sobrenome, String cpf, double salario, String senha) {
      super(nome, sobrenome, cpf, salario);
      this.senha = senha;
      this.numSubordinados = 0;
  }
}
