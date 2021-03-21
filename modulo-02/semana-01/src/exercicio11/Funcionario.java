package exercicio11;

public class Funcionario {
	private String nome;
	private String sobreNome;
	private double salarioMensal;
	
	public Funcionario(String nome, String sobreNome, double salarioMensal) {
		this.nome = nome;
		this.sobreNome = sobreNome;
		if (salarioMensal < 0) {
			this.salarioMensal = 0;
		} else {
			this.salarioMensal = salarioMensal;
		}
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobreNome() {
		return sobreNome;
	}

	public void setSobreNome(String sobreNome) {
		this.sobreNome = sobreNome;
	}

	public double getSalarioMensal() {
		return salarioMensal;
	}

	public void setSalarioMensal(double salarioMensal) {
		this.salarioMensal = salarioMensal;
	}
	
	public double getSalarioAnual() {
		return this.salarioMensal * 13;
	}
	
	public void setAumentoSalario(double aumento) {
		if (aumento < 0) {
			aumento = 0;
		} else if (aumento > 1) {
			aumento = 1;			
		}
		this.salarioMensal = this.salarioMensal + this.salarioMensal * aumento;
	}
}
