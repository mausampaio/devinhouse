package exercicio13;

import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;

public class PerfilDeSaude {
	private String nome;
	private String sobrenome;
	private String genero;
	private String dataNascimento;
	private double altura;
	private double peso;

	public PerfilDeSaude(String nome, String sobrenome, String sexo, String dataNascimento, double altura, double peso) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.genero = sexo;
		this.dataNascimento = dataNascimento;
		this.altura = altura;
		this.peso = peso;
	}

	public String getNome() {
		return nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public String getGenero() {
		return genero;
	}

	public String getDataNascimento() {
		return dataNascimento;
	}

	public double getAltura() {
		return altura;
	}

	public double getPeso() {
		return peso;
	}

	public int getIdade() {
		LocalDate nascimento = LocalDate.parse(this.dataNascimento, DateTimeFormatter.ofPattern("dd/MM/yyyy"));
		return Period.between(nascimento, LocalDate.now()).getYears();
	}

	public int getFrequenciaMaxima() {
		return 220 - this.getIdade();
	}

	public String getFrequenciaAlvo() {
		int min = (int) (this.getFrequenciaMaxima() * 0.5);
		int max = (int) (this.getFrequenciaMaxima() * 0.85);
		
		return "Entre " + min + " e " + max;
	}

	public double getIMC() {
		return this.peso / (this.altura * this.altura);
	}
}
