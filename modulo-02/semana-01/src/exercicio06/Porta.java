package exercicio06;

public class Porta {
	String cor = "branco";
	double largura = 70;
	double altura = 200;
	double profundidade = 15;
	boolean aberta = false;
	
	public void abre() {
		this.aberta = true;
	}
	
	public void fecha() {
		this.aberta = false;
	}
	
	public void pinta(String cor) {
		this.cor = cor;
	}
	
	public boolean isAberta() {
		return this.aberta;
	}
}
