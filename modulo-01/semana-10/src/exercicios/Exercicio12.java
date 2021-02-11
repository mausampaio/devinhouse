package exercicios;

import java.util.Scanner;

public class Exercicio12 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		try {
			System.out.print("Digite um n�mero inteiro: ");
			int num = input.nextInt();
			
			String result = num % 2 == 0 ? "O n�mero � par" : "O n�mero � impar";
			
			System.out.println(result);
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			input.close();
		}
	}

}
