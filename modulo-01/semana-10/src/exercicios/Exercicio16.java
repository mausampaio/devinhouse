package exercicios;

import java.util.Scanner;

public class Exercicio16 {
	
	public static int[] calcPa(int initNum, int rootNum) {
		int[] pa = new int[10];
		int temp = 0;
		
		for (int i = 0; i < 10; i++) {
			if (i == 0) {
				pa[i] = initNum;
				temp = initNum;
			} else {
				pa[i] = temp + rootNum;
				temp = pa[i];
			}
		}
		
		return pa;
	}
	
	public static int[] calcPg(int initNum, int rootNum) {
		int[] pg = new int[10];
		int temp = 0;
		
		for (int i = 0; i < 10; i++) {
			if (i == 0) {
				pg[i] = initNum;
				temp = initNum;
			} else {
				pg[i] = temp * rootNum;
				temp = pg[i];
			}
		}
		
		return pg;
	}

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		try {
			System.out.print("Digite o valor inicial: ");
			int init = input.nextInt();
			System.out.print("Digite o valor da raiz: ");
			int root = input.nextInt();
			input.nextLine();
			System.out.print("Qual deseja calcular? PA ou PG? ");
			String papg = input.nextLine();
			int[] result = new int[10];
			
			switch (papg) {
				case "pa":
					result = calcPa(init, root);
					break;
				case "pg":
					result = calcPg(init, root);
					break;
				default:
					System.out.println("Favor digitar PA ou PG!");
			}
			
			if (result[0] != result[1]) {
				for (int i = 0; i < 10; i++) {
					System.out.print(result[i] + " ");
				}				
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			input.close();
		}
	}

}
