INSERT INTO professores 
(
  nome, 
  sobrenome, 
  data_nascimento,
  endereco, 
  nacionalidade 
) 
VALUES 
(
"Alberto",
"do Leite",
"1988-08-22",
"Rua abobrinha n 4 - Centro - Florianópolis, SC",
"Brasil"
),
(
"Albertina",
"Ineia",
"1988-08-22",
"Rua abobrinha n 4 - Centro - Florianópolis, SC",
"Brasil"
),
(
"Alberto",
"do Chile",
"1988-08-22",
"Rua abobrinha n 4 - Centro - Florianópolis, SC",
"Chile"
),
(
"Albertina",
"da Zoropa",
"1988-08-22",
"Rua abobrinha n 4 - Centro - Florianópolis, SC",
"Espanha"
);

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
  "Maurício",
  "Sampaio",
  "1988-08-03",
  "mausampaio@gmail.com",
  001001,
  "Brasil",
  10.0
),
(
  "Michael",
  "Nascimento",
  "1988-08-03",
  "michael.nascimento@gmail.com",
  001002,
  "Brasil",
  9.2
),
(
  "Alanderson",
  "Santana",
  "1988-08-03",
  "alandersons@gmail.com",
  001003,
  "Brasil",
  7.0
),
(
  "Emanuelle",
  "Figueiredo",
  "1988-08-03",
  "emanuellebf@gmail.com",
  001004,
  "Brasil",
  8.5
),
(
  "Fuleiro",
  "da Silva",
  "1988-08-03",
  "fuleiros@gmail.com",
  001005,
  "Brasil",
  5.1
);

INSERT INTO cursos
(
  nome,
  codigo,
  EAD,
  nr_max_alunos,
  id_professor
)
VALUES (
  "Curso 1",
  002001,
  false,
  40,
  1
),
(
  "Curso 2",
  002002,
  true,
  40,
  2
),
(
  "Curso 3",
  002003,
  true,
  20,
  3
),
(
  "Curso 4",
  002004,
  true,
  10,
  4
);
