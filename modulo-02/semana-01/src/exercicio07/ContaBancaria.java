package exercicio07;

public class ContaBancaria {
	String nomeDoTitular = "Mauricio";
	int numero = 1;
	int agencia = 1;
	double saldo = 200;
	double limite = 400;
	
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
}
