package exercicios;

import java.util.Scanner;

public class Exercicio13 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		try {
			System.out.print("Digite a primeira nota: ");
			double n1 = input.nextDouble();
			System.out.print("Digite a segunda nota: ");
			double n2 = input.nextDouble();
			System.out.print("Digite a terceira nota: ");
			double n3 = input.nextDouble();
			
			double result = (n1 + n2 + n3) / 3;
			
			System.out.printf("%nSua média final é: %.2f", result);
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			input.close();
		}
	}

}
