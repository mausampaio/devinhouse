CREATE TABLE estudante_curso (
  id INT NOT NULL AUTO_INCREMENT,
  matricula_est INT NOT NULL UNIQUE,
  codigo_curso INT NOT NULL UNIQUE,
  media_aluno FLOAT(3,1) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (matricula_est) REFERENCES estudantes(matricula),
  FOREIGN KEY (codigo_curso) REFERENCES cursos(codigo)
);