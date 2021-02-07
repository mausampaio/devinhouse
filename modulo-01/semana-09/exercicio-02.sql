CREATE TABLE professores (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  sobrenome VARCHAR(100) NOT NULL,
  data_nascimento DATE NOT NULL,
  endereco VARCHAR(500),
  nacionalidade VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE estudantes (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  sobrenome VARCHAR(100) NOT NULL,
  data_nascimento DATE NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  matricula INT NOT NULL UNIQUE,
  nacionalidade VARCHAR(100),
  media_geral FLOAT(3,1),
  PRIMARY KEY (id)
);

CREATE TABLE cursos (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  codigo INT UNIQUE,
  ead BOOLEAN NOT NULL DEFAULT TRUE,
  nr_max_alunos INT,
  id_professor INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_professor) REFERENCES professores(id)
);