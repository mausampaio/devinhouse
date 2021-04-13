package exercicio12;

public class Conta {
  private static int totalDeContas;
  private int identificador;

	String nomeDoTitular;
	int numero;
	int agencia;
	double saldo;
	double limite;

	public Conta() {
		Conta.totalDeContas++;
	}

	public Conta(String nomeDoTitular, int numero, int agencia) {
		this();
		this.identificador = totalDeContas;
		this.nomeDoTitular = nomeDoTitular;
		this.numero = numero;
		this.agencia = agencia;
}
	
	public boolean depositar(double valor) {
		if (valor <= 0) {
			return false;
		}
		this.saldo += valor;
		return true;
	}
	
	public boolean sacar(double valor) {
		if (this.saldo + this.limite - valor >= 0) {
			this.saldo -= valor;
			return true;
		}
		return false;
	}
	
	public double getSaldo() {
		return this.saldo + this.limite;
	}
	
	public String recuperaDadosParaImpressao() {
		return "Titular: " + this.nomeDoTitular 
				+ "%nCC: " + this.numero + "%nAG: " + this.agencia + "%nSaldo: " + this.saldo + "%nLimite: " + this.limite;
	}

	public int getIdentificador() {
		return identificador;
	}

  public String getTipo () {
    return "Conta";
  }
}
