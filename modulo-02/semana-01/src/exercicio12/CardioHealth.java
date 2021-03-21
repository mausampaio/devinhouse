package exercicio12;

import java.util.Scanner;

public class CardioHealth {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		try {
			FrequenciaCardiaca usuario = new FrequenciaCardiaca();
			
			System.out.println("<---  CARDIO HEALTH  --->");
      System.out.println("Por favor, insira o seu primeiro nome:");
      usuario.setNome(input.nextLine());
      System.out.println("Por favor, insira o seu sobrenome:");
      usuario.setSobrenome(input.nextLine());
      System.out.println("Insira sua data de nascimento no formato (dd/mm/aaaa)");
      usuario.setDataNascimento(input.nextLine());

      System.out.printf("%s, aqui está seu relatório:%n%n", usuario.getNome());
      System.out.printf("Nome completo: %s %s%nIdade: %d anos%nFrequência cardíaca máxima: %d%nFrequência ideal: %s%n",
      		usuario.getNome(),
      		usuario.getSobrenome(),
      		usuario.getIdade(),
      		usuario.getFrequenciaMaxima(),
      		usuario.getFrequenciaAlvo());
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			input.close();
		}
	}

}
