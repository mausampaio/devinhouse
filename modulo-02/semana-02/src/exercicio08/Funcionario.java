package exercicio08;

public class Funcionario {
  private String nome;
  private String sobrenome;
  private String cpf;
  protected double salario;

  public Funcionario(String nome, String sobrenome, String cpf, double salario) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.cpf = cpf;
      this.salario = salario > 0 ? salario : 0.00;
  }
}
