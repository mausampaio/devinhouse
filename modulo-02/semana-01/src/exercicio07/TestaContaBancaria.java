package exercicio07;

public class TestaContaBancaria {

	public static void main(String[] args) {
		ContaBancaria cc = new ContaBancaria();
		
		System.out.printf(cc.recuperaDadosParaImpressao());
		
		cc.sacar(200);
		
		System.out.println();
		
		System.out.println(cc.getSaldo());
		
		cc.depositar(200);
		
		System.out.println(cc.getSaldo());
	}

}
