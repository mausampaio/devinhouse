package exercicios;

import java.util.Scanner;

public class Exercicio14 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		try {
			System.out.print("Digite o primeiro n�mero: ");
			int num1 = input.nextInt();
			System.out.print("Digite o segundo n�mero: ");
			int num2 = input.nextInt();
			input.nextLine();
			System.out.print("Digite o operador: ");
			String op = input.nextLine();
			int result = 0;

			switch (op) {
			case "somar":
				result = num1 + num2;
				break;
			case "subtrair":
				result = num1 - num2;
				break;
			case "multiplicar":
				result = num1 * num2;
				break;
			case "dividir":
				result = num1 / num2;
				break;
			default:
				System.out.println("N�o foi poss�vel identificar o operador!");
			}

			if (result != 0) {
				System.out.println("O resultado �: " + result);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			input.close();
		}
	}

}
