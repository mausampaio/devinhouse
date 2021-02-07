-- Alterando a tabela professores para adicionar a coluna sexo
ALTER TABLE professores
ADD sexo CHAR NOT NULL;

-- Atualizando a tabela professores
UPDATE professores SET sexo = "F"
WHERE nome = 'Albertina';

UPDATE professores SET sexo = "M"
WHERE nome = 'Alberto';

-- Realizando busca
SELECT cursos.nome,
cursos.codigo,
cursos.ead,
cursos.nr_max_alunos,
professores.nome as professor_nome,
professores.sobrenome as professor_sobrenome,
professores.sexo
FROM cursos
INNER JOIN professores ON cursos.id_professor = professores.id
WHERE professores.sexo = "F";