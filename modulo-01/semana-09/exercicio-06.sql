-- Criando curso novo para poder excluir
INSERT INTO cursos
(
  nome,
  codigo,
  EAD,
  nr_max_alunos,
  id_professor
)
VALUES (
  "Curso 5",
  002005,
  false,
  30,
  2
);

-- Excluindo curso
DELETE FROM cursos WHERE nome = 'Curso 5';