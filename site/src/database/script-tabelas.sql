Create database projetocomp;
USE rapazes;
Drop database rapazes;
DROP table usuario;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fkjogo_Favorito INT,
	CONSTRAINT fkJogFav FOREIGN KEY (fkjogo_Favorito)
	REFERENCES jogo(idjogo)
);

select * from usuario;

Create table jogo (
idjogo INT PRIMARY KEY,
Vezes_Selecionado INT
);


insert into jogo VALUES 
(1, 0),
(2, 0),
(3, 0),
(4, 0);
 INSERT INTO usuario (nome, email, senha, fkjogo_Favorito) VALUES ('rafael', 'rafael.cebrian@sptech.school.com', '1234567@', '1');
 INSERT INTO usuario (nome, email, senha, fkjogo_Favorito) VALUES ('enzo', 'enzo.gama@sptech.school.com', '1234567@', '2');
