package exercicios;

import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

public class Exercicio04 {
	public static void main(String[] args) {
		DateTimeFormatter timeFormat = DateTimeFormatter.ofPattern("HH:mm");
		LocalDateTime time = LocalDateTime.now();
		
		System.out.println("Boa tarde, no momento são " + timeFormat.format(time));
	}
}
