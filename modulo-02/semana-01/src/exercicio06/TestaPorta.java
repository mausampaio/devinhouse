package exercicio06;

public class TestaPorta {

	public static void main(String[] args) {
		Porta p = new Porta();
		
		System.out.println("Cor: " + p.cor);
		
		p.pinta("cinza");
		
		System.out.println("Cor: " + p.cor);
	}

}
