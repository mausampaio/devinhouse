package exercicio10;

public class TestaFatura {

	public static void main(String[] args) {
		Fatura f = new Fatura("001", "Placa de v�deo", -3, 2320.56);
		
		System.out.println("O valor total da fatura �: R$ " + f.getValorFatura());
	}

}
