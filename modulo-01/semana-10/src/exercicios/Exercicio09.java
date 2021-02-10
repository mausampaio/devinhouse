package exercicios;

import java.util.Scanner;

public class Exercicio09 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		try {
			System.out.print("Digite um nome: ");
			String nome = input.nextLine();
			int nomeLength = nome.length();
			
			System.out.printf("O nome possui %d letra(s)", nomeLength);
		} finally {
			input.close();
		}
	}

}
