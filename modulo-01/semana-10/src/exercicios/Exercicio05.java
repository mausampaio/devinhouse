package exercicios;

import java.util.Locale;

public class Exercicio05 {

	public static void main(String[] args) {
		Locale locale = Locale.getDefault();
		String lang = locale.getDisplayLanguage();
		
		System.out.println("O idioma do sistema é " + lang);
	}

}
