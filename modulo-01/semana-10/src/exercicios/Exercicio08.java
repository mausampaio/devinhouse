package exercicios;

import java.util.Scanner;

public class Exercicio08 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		try {
			System.out.print("Digite um n�mero com 2 ou mais casas decimais: ");
			double num = input.nextDouble();
			int numInt = (int) num;
			
			System.out.println("O n�mero inteiro � " + numInt);			
		} finally {
			input.close();
		}
	}

}
