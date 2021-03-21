package exercicio05;

public class TestaPessoa {

	public static void main(String[] args) {
		Pessoa p1 = new Pessoa();
		
		System.out.println("Nome: " + p1.nome);
		System.out.println("Idade: " + p1.idade);
		
		p1.fazAniversario();
		
		System.out.println("Idade 2: " + p1.idade);
	}

}
