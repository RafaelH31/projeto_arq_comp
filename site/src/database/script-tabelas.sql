Create database rapazes;
USE rapazes;
Drop database rapazes;
DROP table usuario;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	idade INT,
	fkjogo_Favorito INT,
	CONSTRAINT fkJogFav FOREIGN KEY (fkjogo_Favorito)
	REFERENCES jogo(idjogo)
);

select * from usuario;

Create table jogo (
idjogo INT PRIMARY KEY,
Vezes_Selecionado INT
);
