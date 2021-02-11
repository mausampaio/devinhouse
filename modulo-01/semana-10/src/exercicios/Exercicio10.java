package exercicios;

import java.util.Scanner;

public class Exercicio10 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		try {
			System.out.print("Adivinhe qual número de 1 a 5 eu estou pensando: ");
			int num = input.nextInt();
			int rand = (int) (Math.random() * (5-1) + 1);
			String result = (num == rand) ? "Você acertou!" : "Você errou, o número correto era " + rand;
			
			System.out.println(result);
		} finally {
			input.close();
		}
	}

}
