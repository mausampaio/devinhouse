package exercicio13;

import java.util.Scanner;

public class CardioHealth {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		try {			
			System.out.println("<---  CARDIO HEALTH v2.0  --->");
      System.out.println("Por favor, insira o seu primeiro nome:");
      String nome = (input.nextLine());
      System.out.println("Por favor, insira o seu sobrenome:");
      String sobrenome = (input.nextLine());
      System.out.println("Insira o seu genero no formato (masculino ou feminino)");
      String genero = (input.nextLine());
      System.out.println("Insira sua data de nascimento no formato (dd/mm/aaaa)");
      String dataDeNascimento = (input.nextLine());
      System.out.println("Insira a sua altura em cm");
      double altura = (input.nextDouble());
      System.out.println("Insira o seu peso em Kg");
      double peso = (input.nextDouble());
      
      PerfilDeSaude usuario = new PerfilDeSaude(nome, sobrenome, genero, dataDeNascimento, altura, peso);

      System.out.printf("%s, aqui está seu relatório:%n%n", usuario.getNome());
      System.out.printf("Nome completo: %s %s%nGênero: %s%nIdade: %d anos%nAltura: %.2f m%nPeso: %.2f Kg%nFrequência cardíaca máxima: %d%nFrequência ideal: %s%nIMC: %.2f%n",
      		usuario.getNome(),
      		usuario.getSobrenome(),
      		usuario.getGenero(),
      		usuario.getIdade(),
      		usuario.getAltura(),
      		usuario.getPeso(),
      		usuario.getFrequenciaMaxima(),
      		usuario.getFrequenciaAlvo(),
      		usuario.getIMC());
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
			input.close();
		}
	}

}
