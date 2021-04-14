package exercicio16;

public class FuncionarioComissionado extends Funcionario {
  private double vendasBrutas;
  private double taxaComissao;

  public double getVendasBrutas() {
    return vendasBrutas;
  }

  public void setVendasBrutas(double vendasBrutas) {
    this.vendasBrutas = vendasBrutas;
  }

  public double getTaxaComissao() {
    return taxaComissao;
  }

  public void setTaxaComissao(double taxaComissao) {
    this.taxaComissao = taxaComissao;
  }

  public FuncionarioComissionado(String nome, String sobrenome, String CPF, double vendasBrutas, double taxaComissao) {
    super(nome, sobrenome, CPF);
    this.vendasBrutas = validaVendasBrutas(vendasBrutas);
    this.taxaComissao = validarTaxaComissao(taxaComissao);
  }

  public double validaVendasBrutas(double valor) {
    return Math.max(valor, 0.00);
  }

  public double validarTaxaComissao(double taxa) {
    if ( taxa >= 0.00 && taxa < 1) {
        return taxa;
    } else {
        return 0.00;
    }
  }

  @Override
  public String toString() {
      return String.format("Nome: %s%nSobrenome: %s%nCPF: %s%nVendas brutas: R$%.2f%nTaxa comissão: %.2f",
        this.nome, this.sobrenome, this.CPF, this.vendasBrutas, this.taxaComissao);
  }

  public double ganhos() {
    return this.taxaComissao * this.vendasBrutas;
  }
}
