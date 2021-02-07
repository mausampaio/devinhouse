-- Inserindo estudantes em alguns cursos
INSERT INTO estudante_curso (
  matricula_est,
  codigo_curso,
  media_aluno
)
VALUES (
  1001,
  2001,
  9.0
),
(
  1002,
  2002,
  9.0
);

-- Realizando busca
SELECT estudantes.*
FROM estudantes
INNER JOIN estudante_curso ON estudante_curso.matricula_est = estudantes.matricula
INNER JOIN cursos ON cursos.codigo = estudante_curso.codigo_curso
WHERE cursos.ead = true;