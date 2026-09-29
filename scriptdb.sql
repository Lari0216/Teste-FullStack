CREATE TABLE usuarios (
	id serial PRIMARY KEY, 
	nome VARCHAR(100) NOT NULL, 
	idade INT NOT NULL
); 

SELECT * FROM usuarios; 

INSERT INTO usuarios (nome, idade) VALUES
('Lúcia Tavares', 26),
('Rebecca Borges', 60),
('Matheus Correia', 40),
('Valentina Castro', 20)
;