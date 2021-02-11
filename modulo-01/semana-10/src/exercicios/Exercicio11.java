package exercicios;

import java.util.Calendar;
import java.util.Scanner;

public class Exercicio11 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		try {
			System.out.print("Digite sua data de nascimento no formato (DD-MM-AAAA): ");
			String inputBirth = input.next("[0-3][0-9]-[0-9]{2}-[12][0-9]{3}");
			int dayBirth = Integer.parseInt(inputBirth.substring(0, 2));
			int monthBirth = Integer.parseInt(inputBirth.substring(3, 5)); 
			int yearBirth = Integer.parseInt(inputBirth.substring(6, 10)); 
			
		  Calendar dateNow = Calendar.getInstance(); 
		  int thisYear =dateNow.get(Calendar.YEAR); 
		  int thisMonth = dateNow.get(Calendar.MONTH)+1;
		  int thisDay = dateNow.get(Calendar.DAY_OF_MONTH);
		  
		  int age = thisYear - yearBirth;
		  
		  if (thisMonth < monthBirth) { age -= 1; } if (thisMonth == monthBirth &&
		  thisDay < dayBirth) { age -= 1; }
		  
		  String result = age >= 18 ? "Você é maior de idade" : "Você é menor de idade";
		 
		  System.out.println(result);
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			input.close();
		}
	}

}
