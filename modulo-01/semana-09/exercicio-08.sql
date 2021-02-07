-- Criando aluno com letra J
INSERT INTO estudantes
(
  nome,
  sobrenome,
  data_nascimento,
  email,
  matricula,
  nacionalidade,
  media_geral
)
VALUES 
(
  "João",
  "Alberto",
  "1988-08-03",
  "joaoa@gmail.com",
  001006,
  "Brasil",
  3.0
);

-- Buscando alunos que começam com a letra J
SELECT * FROM estudantes 
WHERE nome LIKE 'J%';