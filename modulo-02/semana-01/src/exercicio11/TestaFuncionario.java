package exercicio11;

public class TestaFuncionario {

	public static void main(String[] args) {
		Funcionario f = new Funcionario("Mauricio", "Sampaio", 4000);
		
		System.out.printf("Salario anual é de: %.2f%n", f.getSalarioAnual());
		
		f.setAumentoSalario(0.1);
		
		System.out.printf("Salario anual depois do aumento é: %.2f%n", f.getSalarioAnual());
	}

}
