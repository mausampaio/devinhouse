package exercicio16;

public class PessoaFisica {
  String nome;
  String sobrenome;
  String CPF;
  String dataNascimento;

  public PessoaFisica(String nome, String sobrenome, String CPF, String dataNascimento) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.CPF = CPF;
      this.dataNascimento = dataNascimento;
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

  public boolean setCPF(String CPF) {
      if(CPF.length() < 11) {
          return false;
      }
      this.CPF = CPF;
      return true;
  }

  public String getDataNascimento() {
      return dataNascimento;
  }

  public void setDataNascimento(String dataNascimento) {
      this.dataNascimento = dataNascimento;
  }
}
