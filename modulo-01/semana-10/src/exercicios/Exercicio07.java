package exercicios;

import java.util.Scanner;

public class Exercicio07 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		System.out.print("Digite o seu nome: ");
		String nome = input.nextLine();
		System.out.print("Digite o seu sobrenome: ");
		String sobrenome = input.nextLine();
		
		System.out.printf("O seu nome completo é: %s %s", nome, sobrenome);
	}

}
