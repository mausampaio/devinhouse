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

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getSobrenome() {
    return sobrenome;
  }

  public void setSobrenome(String sobrenome) {
    this.sobrenome = sobrenome;
  }

  public String getCpf() {
    return cpf;
  }
  
  public void setCpf(String cpf) {
    this.cpf = cpf;
  }

  public double getSalario() {
    return salario;
  }

  public void setSalario(double salario) {
    if(salario > 0) {
      this.salario = salario;
    }
  }
}
