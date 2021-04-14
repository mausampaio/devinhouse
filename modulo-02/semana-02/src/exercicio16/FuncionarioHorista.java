package exercicio16;

public class FuncionarioHorista extends Funcionario {
  private double horasTrabalhadas;
  private double salarioHora;

  public FuncionarioHorista(String nome, String sobrenome, String CPF, double horasTrabalhadas, double salarioHora) {
    super(nome, sobrenome, CPF);
    this.horasTrabalhadas = validaHoras(horasTrabalhadas);
    this.salarioHora = validaSalario(salarioHora);
  }

  public double getHorasTrabalhadas() {
    return horasTrabalhadas;
  }

  public void setHorasTrabalhadas(double horasTrabalhadas) {
    this.horasTrabalhadas = validaHoras(horasTrabalhadas);
  }

  public double getSalarioHora() {
    return salarioHora;
  }

  public void setSalarioHora(double salarioHora) {
    this.salarioHora = validaSalario(salarioHora);
  }

  private double validaSalario(double salario) {
    return Math.max(salario, 0.00);
  }

  private double validaHoras(double horas) {
    if(horas >=0 && horas <= 168) {
        return horas;
    } else {
        return 0;
    }
  }

  public double ganhos() {
    return horasTrabalhadas * salarioHora;
  }

  @Override
  public String toString() {
    return String.format("Nome: %s%nSobrenome: %s%nCPF: %s%nHoras trabalhadas: %.2f%nSalário por hora: R$ %.2f.",
      this.nome, this.sobrenome, this.CPF, this.horasTrabalhadas, this.salarioHora);
  }
}
