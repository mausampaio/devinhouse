package exercicio16;

public class Funcionario {
  protected String nome;
  protected String sobrenome;
  protected String CPF;

  public Funcionario(String nome, String sobrenome, String CPF) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.CPF = CPF;
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

  public String getCPF() {
    return CPF;
  }

  public void setCPF(String cPF) {
    CPF = cPF;
  }

  public String toString() {
    return String.format("Nome: %s%nSobrenome: %s%nCPF: %s", this.nome, this.sobrenome, this.CPF);
  }
}
