package exercicio06;

import java.time.LocalDate;

public class Estudante {
  private String nome;
  private String sobrenome;
  private LocalDate dataNascimento;
  private String matricula;

  public Estudante(String nome, String sobrenome, LocalDate dataNascimento, String matricula) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.dataNascimento = dataNascimento;
      this.matricula = matricula;
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

  public LocalDate getDataNascimento() {
      return dataNascimento;
  }

  public void setDataNascimento(LocalDate dataNascimento) {
      this.dataNascimento = dataNascimento;
  }

  public String getMatricula() {
      return matricula;
  }

  public void setMatricula(String matricula) {
      this.matricula = matricula;
  }
}
