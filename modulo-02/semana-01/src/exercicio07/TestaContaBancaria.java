package exercicio07;

public class TestaContaBancaria {

	public static void main(String[] args) {
		ContaBancaria cc = new ContaBancaria();
		
		System.out.println(cc.getSaldo());
		
		cc.sacar(200);
		
		System.out.println(cc.getSaldo());
		
		cc.depositar(200);
		
		System.out.println(cc.getSaldo());
	}

}
