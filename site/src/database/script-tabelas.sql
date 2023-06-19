Create database Iron_Maiden;
USE Iron_Maiden;
Drop database Iron_Maiden;
DROP table usuario;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	idade INT,
	fkAlbum_Favorito INT,
	CONSTRAINT fkAlbFav FOREIGN KEY (fkAlbum_Favorito)
	REFERENCES album(idAlbum)
);

select * from usuario;

CREATE TABLE MembrosBanda (
  idMembro INT PRIMARY KEY,
  nome VARCHAR(50),
  funcao VARCHAR(50),
  DtEntrada date,
  DtSaida date
);

CREATE TABLE InformacoesPessoais (
  idInfo INT PRIMARY KEY,
  dtNasc date,
  localizacao VARCHAR(50),
   fkMembro INT,
  FOREIGN KEY (fkMembro) REFERENCES MembrosBanda(idMembro)
);

Create table album (
idAlbum INT PRIMARY KEY,
Nome VARCHAR(50),
DtLançamento date,
QtdMusicas INT,
DuraçãoTotal VARCHAR(50),
Gravadora VARCHAR(50),
Vezes_Selecionado INT
);

Create table musica (
idMusica INT PRIMARY KEY,
Titulo VARCHAR (100),
Numero_faixa int,
Gênero VARCHAR(50),
Duração VARCHAR(50),
fkAlbum INT,
constraint fkAlb foreign key (fkAlbum)
	references album(idAlbum)
);
CREATE TABLE playlist (
  fk_idUsuario INT,
  fk_IdMusica INT,
  titulo VARCHAR(100),
  duracao VARCHAR(50),
  PRIMARY KEY (fk_idUsuario, fk_IdMusica),
  FOREIGN KEY (fk_idUsuario) REFERENCES usuario(id),
  FOREIGN KEY (fk_IdMusica) REFERENCES musica(idMusica)
);
 -- Inserts para tabela MembrosBanda
INSERT INTO MembrosBanda (idMembro, nome, funcao, DtEntrada, DtSaida)
VALUES
  (1, 'Paul Di\'Anno', 'Vocalista', '1978-01-01', '1981-08-31'),
  (2, 'Bruce Dickinson', 'Vocalista', '1981-09-01', NULL),
  (3, 'Blaze Bayley', 'Vocalista', '1994-03-01', '1999-02-28'),
  (4, 'Steve Harris', 'Baixista', '1975-12-25', NULL),
  (5, 'Dave Murray', 'Guitarrista', '1976-01-01', NULL),
  (6, 'Adrian Smith', 'Guitarrista', '1980-10-01', '1990-02-28'),
  (7, 'Janick Gers', 'Guitarrista', '1990-01-01', NULL),
  (8, 'Dennis Stratton', 'Guitarrista', '1979-03-01', '1980-09-30'),
  (9, 'Clive Burr', 'Baterista', '1979-01-01', '1982-12-31'),
  (10, 'Nicko McBrain', 'Baterista', '1982-09-01', NULL);

-- Inserts para tabela InformacoesPessoais
INSERT INTO InformacoesPessoais (idInfo, dtNasc, localizacao, fkMembro)
VALUES
  (1, '1958-05-17', 'London, Reino Unido', 1),
  (2, '1958-08-07', 'London, Reino Unido', 2),
  (3, '1963-05-29', 'Birmingham, Reino Unido', 3),
  (4, '1956-03-12', 'Leytonstone, Reino Unido', 4),
  (5, '1958-12-23', 'London, Reino Unido', 5),
  (6, '1957-02-27', 'Hackney, Reino Unido', 6),
  (7, '1957-01-27', 'Hartlepool, Reino Unido', 7),
  (8, '1952-02-09', 'London, Reino Unido', 8),
  (9, '1957-03-08', 'East Ham, Reino Unido', 9),
  (10, '1952-06-05', 'Londres, Reino Unido', 10);
  
 INSERT INTO album (idAlbum, Nome, DtLançamento, QtdMusicas, DuraçãoTotal, Gravadora, Vezes_Selecionado)
VALUES 
    (1, 'Iron Maiden', '1980-04-14', 8, '40:06 min', 'EMI', 0),
    (2, 'Killers', '1981-02-02', 10, '38:49 min', 'EMI', 0),
    (3, 'The Number of the Beast', '1982-03-29', 8, '39:14 min', 'EMI', 0),
    (4, 'Piece of Mind', '1983-05-16', 9, '45:04 min', 'EMI', 0),
    (5, 'Powerslave', '1984-09-03', 8, '51:12 min', 'EMI', 0),
    (6, 'Somewhere in Time', '1986-09-29', 8, '51:17 min', 'EMI', 0),
    (7, 'Seventh Son of a Seventh Son', '1988-04-11', 8, '44:06 min', 'EMI', 0),
    (8, 'No Prayer for the Dying', '1990-10-01', 10, '43:53 min', 'EMI', 0),
    (9, 'Fear of the Dark', '1992-05-11', 12, '58:37 min', 'EMI', 0),
    (10, 'The X Factor', '1995-10-02', 11, '66:57 min', 'EMI', 0),
    (11, 'Virtual XI', '1998-03-23', 8, '53:19 min', 'EMI', 0),
    (12, 'Brave New World', '2000-05-29', 10, '66:57 min', 'EMI', 0),
    (13, 'Dance of Death', '2003-09-08', 11, '67:30 min', 'EMI', 0),
    (14, 'A Matter of Life and Death', '2006-08-28', 10, '72:08min', 'EMI', 0),
    (15, 'The Final Frontier', '2010-08-13', 10, '76:35 min', 'EMI', 0),
    (16, 'The Book of Souls', '2015-09-04', 11, '92:11 min', 'Parlophone', 0),
    (17, 'Senjutsu', '2021-09-03', 10, '82:52', 'Parlophone', 0);
    
SELECT * FROM album;

INSERT INTO musica (idMusica, Titulo, Numero_faixa, Gênero, Duração, fkAlbum)
VALUES 
    -- Músicas do álbum "Iron Maiden"
    (1, 'Prowler', 1, 'Heavy Metal', '3:55 min', 1),
    (2, 'Remember Tomorrow', 2, 'Heavy Metal', '5:27 min', 1),
    (3, 'Running Free', 3, 'Heavy Metal', '3:17 min', 1),
    (4, 'Phantom of the Opera', 4, 'Heavy Metal', '7:20 min', 1),
    (5, 'Transylvania', 5, 'Instrumental', '4:05 min', 1),
    (6, 'Strange World', 6, 'Heavy Metal', '5:45 min', 1),
    (7, 'Charlotte the Harlotn', 7, 'Heavy Metal', '4:12 min', 1),
    (8, 'Iron Maiden', 8, 'Heavy Metal', '3:35 min', 1),

    -- Músicas do álbum "Killers"
    (9, 'The Ides of March', 1, 'Heavy Metal', '1:45 min', 2),
    (10, 'Wrathchild', 2, 'Heavy Metal', '2:54 min', 2),
    (11, 'Murders in the Rue Morgue', 3, 'Heavy Metal', '4:18 min', 2),
    (12, 'Another Life', 4, 'Heavy Metal', '3:22 min', 2),
    (13, 'Genghis Khan', 5, 'Instrumental', '3:06 min', 2),
    (14, 'Innocent Exile', 6, 'Heavy Metal', '3:51 min', 2),
    (15, 'Killers', 7, 'Heavy Metal', '4:58 min', 2),
    (16, 'Prodigal Son', 8, 'Heavy Metal', '6:11 min', 2),
    (17, 'Purgatory', 9, 'Heavy Metal', '3:20 min', 2),
    (18, 'Drifter', 10, 'Heavy Metal', '4:48 min', 2),
    
    -- Músicas do álbum "The Number of the Beast"
	(19, 'Invaders', 1, 'Heavy Metal', '3:20 min', 3),
	(20, 'Children of the Damned', 2, 'Heavy Metal', '4:35 min', 3),
	(21, 'The Prisoner', 3, 'Heavy Metal', '6:00 min', 3),
	(22, '22 Acacia Avenue', 4, 'Heavy Metal', '6:38 min', 3),
	(23, 'The Number of the Beast', 5, 'Heavy Metal', '4:52 min', 3),
	(24, 'Run to the Hills', 6, 'Heavy Metal', '3:54 min', 3),
	(25, 'Gangland', 7, 'Heavy Metal', '3:47 min', 3),
	(26, 'Hallowed Be Thy Name', 8, 'Heavy Metal', '7:11 min', 3),
    
    -- Músicas do álbum "Piece of Mind"
	(27, 'Where Eagles Dare (2015 Remaster)', 1, 'Heavy Metal', '6:08 min', 4),
	(28, 'Revelations (2015 Remaster)', 2, 'Heavy Metal', '6:49 min', 4),
	(29, 'Flight of Icarus (2015 Remaster)', 3, 'Heavy Metal', '3:49 min', 4),
	(30, 'Die with Your Boots On (2015 Remaster)', 4, 'Heavy Metal', '5:28 min', 4),
	(31, 'The Trooper (2015 Remaster)', 5, 'Heavy Metal', '4:11 min', 4),
	(32, 'Still Life (2015 Remaster)', 6, 'Heavy Metal', '4:56 min', 4),
	(33, 'Quest for Fire (2015 Remaster)', 7, 'Heavy Metal', '3:40 min', 4),
	(34, 'Sun and Steel (2015 Remaster)', 8, 'Heavy Metal', '3:26 min', 4),
	(35, 'To Tame a Land (2015 Remaster)', 9, 'Heavy Metal', '7:26 min', 4),
    
    -- Músicas do álbum "Powerslave"
	(36, 'Aces High (2015 Remaster)', 1, 'Heavy Metal', '4:31 min', 5),
	(37, '2 Minutes to Midnight (2015 Remaster)', 2, 'Heavy Metal', '6:00 min', 5),
	(38, 'Losfer Words (Big Orra) (2015 Remaster)', 3, 'Instrumental', '4:15 min', 5),
	(39, 'Flash of the Blade (2015 Remaster)', 4, 'Heavy Metal', '4:05 min', 5),
	(40, 'The Duellists (2015 Remaster)', 5, 'Heavy Metal', '6:06 min', 5),
	(41, 'Back in the Village (2015 Remaster)', 6, 'Heavy Metal', '5:03 min', 5),
	(42, 'Powerslave (2015 Remaster)', 7, 'Heavy Metal', '7:11 min', 5),
	(43, 'Rime of the Ancient Mariner (2015 Remaster)', 8, 'Heavy Metal', '13:45 min', 5),
    
    -- Músicas do álbum "Somewhere in Time"
	(44, 'Caught Somewhere in Time (2015 Remaster)', 1, 'Heavy Metal', '7:26 min', 6),
	(45, 'Wasted Years (2015 Remaster)', 2, 'Heavy Metal', '5:06 min', 6),
	(46, 'Sea of Madness (2015 Remaster)', 3, 'Heavy Metal', '5:42 min', 6),
	(47, 'Heaven Can Wait (2015 Remaster)', 4, 'Heavy Metal', '7:24 min', 6),
	(48, 'The Loneliness of the Long Distance Runner (2015 Remaster)', 5, 'Heavy Metal', '6:31 min', 6),
	(49, 'Stranger in a Strange Land (2015 Remaster)', 6, 'Heavy Metal', '5:43 min', 6),
	(50, 'Deja Vu (2015 Remaster)', 7, 'Heavy Metal', '4:56 min', 6),
	(51, 'Alexander the Great (2015 Remaster)', 8, 'Heavy Metal', '8:35 min', 6),
    
    -- Músicas do álbum "Seventh Son of a Seventh Son"
	(52, 'Moonchild (2015 Remaster)', 1, 'Heavy Metal', '5:41 min', 7),
	(53, 'Infinite Dreams (2015 Remaster)', 2, 'Heavy Metal', '6:09 min', 7),
	(54, 'Can I Play with Madness (2015 Remaster)', 3, 'Heavy Metal', '3:31 min', 7),
	(55, 'The Evil That Men Do (2015 Remaster)', 4, 'Heavy Metal', '4:34 min', 7),
	(56, 'Seventh Son of a Seventh Son (2015 Remaster)', 5, 'Heavy Metal', '9:53 min', 7),
	(57, 'The Prophecy (2015 Remaster)', 6, 'Heavy Metal', '5:05 min', 7),
	(58, 'The Clairvoyant (2015 Remaster)', 7, 'Heavy Metal', '4:27 min', 7),
	(59, 'Only the Good Die Young (2015 Remaster)', 8, 'Heavy Metal', '4:42 min', 7),
    
    -- Músicas do álbum "No Prayer for the Dying"
	(60, 'Tailgunner (2015 Remaster)', 1, 'Heavy Metal', '4:13 min', 8),
	(61, 'Holy Smoke (2015 Remaster)', 2, 'Heavy Metal', '3:49 min', 8),
	(62, 'No Prayer for the Dying (2015 Remaster)', 3, 'Heavy Metal', '4:23 min', 8),
	(63, 'Public Enema Number One (2015 Remaster)', 4, 'Heavy Metal', '4:14 min', 8),
	(64, 'Fates Warning (2015 Remaster)', 5, 'Heavy Metal', '4:11 min', 8),
	(65, 'The Assassin (2015 Remaster)', 6, 'Heavy Metal', '4:18 min', 8),
	(66, 'Run Silent Run Deep (2015 Remaster)', 7, 'Heavy Metal', '4:35 min', 8),
	(67, 'Hooks in You (2015 Remaster)', 8, 'Heavy Metal', '4:08 min', 8),
	(68, 'Bring Your Daughter... to the Slaughter (2015 Remaster)', 9, 'Heavy Metal', '4:45 min', 8),
	(69, 'Mother Russia (2015 Remaster)', 10, 'Heavy Metal', '5:32 min', 8),
    
    -- Músicas do álbum "Fear of the Dark"
	(70, 'Be Quick or Be Dead', 1, 'Heavy Metal', '3:24 min', 9),
	(71, 'From Here to Eternity', 2, 'Heavy Metal', '3:38 min', 9),
	(72, 'Afraid to Shoot Strangers (2015 Remaster)', 3, 'Heavy Metal', '6:56 min', 9),
	(73, 'Fear Is the Key (2015 Remaster)', 4, 'Heavy Metal', '5:35 min', 9),
	(74, 'Childhoods End (2015 Remaster)', 5, 'Heavy Metal', '4:40 min', 9),
	(75, 'Wasting Love (2015 Remaster)', 6, 'Heavy Metal', '5:50 min', 9),
	(76, 'The Fugitive (2015 Remaster)', 7, 'Heavy Metal', '4:54 min', 9),
	(77, 'Chains of Misery (2015 Remaster)', 8, 'Heavy Metal', '3:37 min', 9),
	(78, 'The Apparition (2015 Remaster)', 9, 'Heavy Metal', '3:54 min', 9),
	(79, 'Judas Be My Guide (2015 Remaster)', 10, 'Heavy Metal', '3:08 min', 9),
	(80, 'Weekend Warrior (2015 Remaster)', 11, 'Heavy Metal', '5:39 min', 9),
	(81, 'Fear of the Dark (2015 Remaster)', 12, 'Heavy Metal', '7:18 min', 9),
    
    -- Músicas do álbum "The X Factor"
	(82, 'Sign of the Cross (2015 Remaster)', 1, 'Heavy Metal', '11:17 min', 10),
	(83, 'Lord of the Flies (2015 Remaster)', 2, 'Heavy Metal', '5:03 min', 10),
	(84, 'Man on the Edge (2015 Remaster)', 3, 'Heavy Metal', '4:11 min', 10),
	(85, 'Fortunes of War (2015 Remaster)', 4, 'Heavy Metal', '7:24 min', 10),
	(86, 'Look for the Truth (2015 Remaster)', 5, 'Heavy Metal', '5:10 min', 10),
	(87, 'The Aftermath (2015 Remaster)', 6, 'Heavy Metal', '6:20 min', 10),
	(88, 'Judgement of Heaven (2015 Remaster)', 7, 'Heavy Metal', '5:12 min', 10),
	(89, 'Blood on the Worlds Hands (2015 Remaster)', 8, 'Heavy Metal', '5:58 min', 10),
	(90, 'The Edge of Darkness (2015 Remaster)', 9, 'Heavy Metal', '6:39 min', 10),
	(91, '2 AM (2015 Remaster)', 10, 'Heavy Metal', '5:37 min', 10),
	(92, 'The Unbeliever (2015 Remaster)', 11, 'Heavy Metal', '8:10 min', 10),
    
    -- Músicas do álbum "Virtual XI"
	(93, 'Futureal (2015 Remaster)', 1, 'Heavy Metal', '2:55 min', 11),
	(94, 'The Angel and the Gambler (2015 Remaster)', 2, 'Heavy Metal', '9:52 min', 11),
	(95, 'Lightning Strikes Twice (2015 Remaster)', 3, 'Heavy Metal', '4:50 min', 11),
	(96, 'The Clansman (2015 Remaster)', 4, 'Heavy Metal', '9:06 min', 11),
	(97, 'When Two Worlds Collide (2015 Remaster)', 5, 'Heavy Metal', '6:17 min', 11),
	(98, 'The Educated Fool (2015 Remaster)', 6, 'Heavy Metal', '6:44 min', 11),
	(99, 'Dont Look to the Eyes of a Stranger (2015 Remaster)', 7, 'Heavy Metal', '8:03 min', 11),
	(100, 'Como Estais Amigos (2015 Remaster)', 8, 'Heavy Metal', '5:30 min', 11),
    
    -- Músicas do álbum "Brave New World"
	(101, 'The Wicker Man', 1, 'Heavy Metal', '4:35 min', 12),
	(102, 'Ghost of the Navigator (2015 Remaster)', 2, 'Heavy Metal', '6:50 min', 12),
	(103, 'Brave New World (2015 Remaster)', 3, 'Heavy Metal', '6:18 min', 12),
	(104, 'Blood Brothers (2015 Remaster)', 4, 'Heavy Metal', '7:14 min', 12),
	(105, 'The Mercenary (2015 Remaster)', 5, 'Heavy Metal', '4:42 min', 12),
	(106, 'Dream of Mirrors (2015 Remaster)', 6, 'Heavy Metal', '9:21 min', 12),
	(107, 'The Fallen Angel (2015 Remaster)', 7, 'Heavy Metal', '4:00 min', 12),
	(108, 'The Nomad (2015 Remaster)', 8, 'Heavy Metal', '9:06 min', 12),
	(109, 'Out of the Silent Planet', 9, 'Heavy Metal', '6:25 min', 12),
	(110, 'The Thin Line Between Love and Hate (2015 Remaster)', 10, 'Heavy Metal', '8:27 min', 12),
    
    -- Músicas do álbum "Dance of Death"
	(111, 'Wildest Dreams (2015 Remaster)', 1, 'Heavy Metal', '3:52 min', 13),
	(112, 'Rainmaker (2015 Remaster)', 2, 'Heavy Metal', '3:49 min', 13),
	(113, 'No More Lies (2015 Remaster)', 3, 'Heavy Metal', '7:21 min', 13),
	(114, 'Montségur (2015 Remaster)', 4, 'Heavy Metal', '5:50 min', 13),
	(115, 'Dance of Death (2015 Remaster)', 5, 'Heavy Metal', '8:36 min', 13),
	(116, 'Gates of Tomorrow (2015 Remaster)', 6, 'Heavy Metal', '5:12 min', 13),
	(117, 'New Frontier (2015 Remaster)', 7, 'Heavy Metal', '5:04 min', 13),
	(118, 'Paschendale (2015 Remaster)', 8, 'Heavy Metal', '8:28 min', 13),
	(119, 'Face in the Sand (2015 Remaster)', 9, 'Heavy Metal', '6:31 min', 13),
	(120, 'Age of Innocence (2015 Remaster)', 10, 'Heavy Metal', '6:10 min', 13),
	(121, 'Journeyman (2015 Remaster)', 11, 'Heavy Metal', '7:07 min', 13),
    
    -- Músicas do álbum "A Matter of Life and Death"
	(122, 'Different World (2015 Remaster)', 1, 'Heavy Metal', '4:17 min', 14),
	(123, 'These Colours Dont Run (2015 Remaster)', 2, 'Heavy Metal', '6:52 min', 14),
	(124, 'Brighter Than a Thousand Suns (2015 Remaster)', 3, 'Heavy Metal', '8:44 min', 14),
	(125, 'The Pilgrim (2015 Remaster)', 4, 'Heavy Metal', '5:07 min', 14),
	(126, 'The Longest Day (2015 Remaster)', 5, 'Heavy Metal', '7:48 min', 14),
	(127, 'Out of the Shadows (2015 Remaster)', 6, 'Heavy Metal', '5:36 min', 14),
	(128, 'The Reincarnation of Benjamin Breeg (2015 Remaster)', 7, 'Heavy Metal', '7:21 min', 14),
	(129, 'For the Greater Good of God (2015 Remaster)', 8, 'Heavy Metal', '9:24 min', 14),
	(130, 'Lord of Light (2015 Remaster)', 9, 'Heavy Metal', '7:23 min', 14),
	(131, 'The Legacy (2015 Remaster)', 10, 'Heavy Metal', '9:20 min', 14), 
    
	-- Músicas do álbum "The Final Frontier"
	(132, 'Satellite 15 The Final Frontier (2015 Remaster)', 1, 'Heavy Metal', '8:40 min', 15),
	(133, 'El Dorado (2015 Remaster)', 2, 'Heavy Metal', '6:49 min', 15),
	(134, 'Mother of Mercy (2015 Remaster)', 3, 'Heavy Metal', '5:20 min', 15),
	(135, 'Coming Home (2015 Remaster)', 4, 'Heavy Metal', '5:52 min', 15),
	(136, 'The Alchemist (2015 Remaster)', 5, 'Heavy Metal', '4:29 min', 15),
	(137, 'Isle of Avalon (2015 Remaster)', 6, 'Heavy Metal', '9:06 min', 15),
	(138, 'Starblind (2015 Remaster)', 7, 'Heavy Metal', '7:48 min', 15),
	(139, 'The Talisman (2015 Remaster)', 8, 'Heavy Metal', '9:03 min', 15),
	(140, 'The Man Who Would Be King (2015 Remaster)', 9, 'Heavy Metal', '8:28 min', 15),
	(141, 'When the Wild Wind Blows (2015 Remaster)', 10, 'Heavy Metal', '10:59 min', 15),
    
	-- Músicas do álbum "The Book of Souls"
	(142, 'If Eternity Should Fail', 1, 'Heavy Metal', '8:28 min', 16),
	(143, 'Speed of Light', 2, 'Heavy Metal', '5:01 min', 16),
	(144, 'The Great Unknown', 3, 'Heavy Metal', '6:37 min', 16),
	(145, 'The Red and the Black', 4, 'Heavy Metal', '13:33 min', 16),
	(146, 'When the River Runs Deep', 5, 'Heavy Metal', '5:52 min', 16),
	(147, 'The Book of Souls', 6, 'Heavy Metal', '10:27 min', 16),
	(148, 'Death or Glory', 7, 'Heavy Metal', '5:13 min', 16),
	(149, 'Shadows of the Valley', 8, 'Heavy Metal', '7:32 min', 16),
	(150, 'Tears of a Clown', 9, 'Heavy Metal', '4:59 min', 16),
	(151, 'The Man of Sorrows', 10, 'Heavy Metal', '6:28 min', 16),
	(152, 'Empire of the Clouds', 11, 'Heavy Metal', '18:01 min', 16),
    
    -- Músicas do álbum "Senjutsu"
	(153, 'Senjutsu', 1, 'Heavy Metal', '8:20 min', 17),
	(154, 'Stratego', 2, 'Heavy Metal', '4:59 min', 17),
	(155, 'The Writing on the Wall', 3, 'Heavy Metal', '6:13 min', 17),
	(156, 'Lost in a Lost World', 4, 'Heavy Metal', '9:31 min', 17),
	(157, 'Days of Future Past', 5, 'Heavy Metal', '4:03 min', 17),
	(158, 'The Time Machine', 6, 'Heavy Metal', '7:09 min', 17),
	(159, 'Darkest Hour', 7, 'Heavy Metal', '7:20 min', 17),
	(160, 'Death of the Celts', 8, 'Heavy Metal', '10:20 min', 17),
	(161, 'The Parchment', 9, 'Heavy Metal', '12:39 min', 17),
	(162, 'Hell on Earth', 10, 'Heavy Metal', '11:19 min', 17);
    
	DROP TABLE Musica;
    INSERT INTO usuario (nome, email, senha, idade, fkAlbum_Favorito)
VALUES
  ('João Silva', 'joao.silva@gmail.com', 'senha123', 25, 4),
  ('Maria Souza', 'maria.souza@gmail.com', 'abc123', 32, 16),
  ('Pedro Santos', 'pedro.santos@gmail.com', 'senha456', 20, 2),
  ('Ana Oliveira', 'ana.oliveira@gmail.com', 'qwerty', 28, 8),
  ('Carlos Ferreira', 'carlos.ferreira@gmail.com', '123456', 30, 14),
  ('Juliana Costa', 'juliana.costa@gmail.com', 'senha789', 23, 6),
  ('Rafael Mendes', 'rafael.mendes@gmail.com', 'abcdef', 27, 12),
  ('Lúcia Almeida', 'lucia.almeida@gmail.com', 'senha321', 31, 1),
  ('Fernando Rocha', 'fernando.rocha@gmail.com', 'xyz789', 29, 9),
  ('Mariana Lima', 'mariana.lima@gmail.com', 'senha555', 26, 5),
  ('José Cardoso', 'jose.cardoso@gmail.com', '789xyz', 33, 15),
  ('Camila Rodrigues', 'camila.rodrigues@gmail.com', 'senha999', 24, 3),
  ('Gustavo Gomes', 'gustavo.gomes@gmail.com', 'qwerty123', 22, 7),
  ('Amanda Santos', 'amanda.santos@gmail.com', 'senha000', 34, 13),
  ('Ricardo Oliveira', 'ricardo.oliveira@gmail.com', 'abcdefg', 21, 11),
  ('Isabela Costa', 'isabela.costa@gmail.com', 'senha777', 35, 17),
  ('Paulo Sousa', 'paulo.sousa@gmail.com', '123abc', 19, 10),
  ('Fernanda Alves', 'fernanda.alves@gmail.com', 'senha111', 37, 16),
  ('Tiago Ramos', 'tiago.ramos@gmail.com', 'xyz123', 36, 2),
  ('Luana Mendonça', 'luana.mendonca@gmail.com', 'senha888', 18, 8),
  ('Roberto Castro', 'roberto.castro@gmail.com', '456xyz', 39, 4),
  ('Eduarda Barbosa', 'eduarda.barbosa@gmail.com', 'senha555', 38, 16),
  ('Gabriel Costa', 'gabriel.costa@gmail.com', '999abc', 17, 2),
  ('Vitória Lima', 'vitoria.lima@gmail.com', 'senha222', 40, 8),
  ('Raul Pereira', 'raul.pereira@gmail.com', 'abcdefg', 16, 14),
  ('Larissa Fernandes', 'larissa.fernandes@gmail.com', '777xyz', 41, 1),
  ('Jorge Santos', 'jorge.santos@gmail.com', 'senha444', 42, 9),
  ('Sofia Almeida', 'sofia.almeida@gmail.com', '123xyz', 43, 5),
  ('Gustavo Silva', 'gustavo.silva@gmail.com', 'senha999', 44, 15),
  ('Laura Ribeiro', 'laura.ribeiro@gmail.com', 'xyz123', 45, 3),
  ('Ricardo Costa', 'ricardo.costa@gmail.com', 'senha777', 46, 7),
  ('Bruno Oliveira', 'bruno.oliveira@gmail.com', 'senha123', 28, 6),
  ('Fernanda Costa', 'fernanda.costa@gmail.com', 'abc123', 33, 12),
  ('Leonardo Santos', 'leonardo.santos@gmail.com', 'senha456', 25, 4),
  ('Mariana Lima', 'mariana.lima@gmail.com', 'qwerty', 30, 10),
  ('Lucas Ferreira', 'lucas.ferreira@gmail.com', '123456', 27, 16),
  ('Isabela Souza', 'isabela.souza@gmail.com', 'senha789', 22, 8),
  ('Gustavo Pereira', 'gustavo.pereira@gmail.com', 'abcdef', 26, 14),
  ('Carolina Almeida', 'carolina.almeida@gmail.com', 'senha321', 29, 2),
  ('Ricardo Rodrigues', 'ricardo.rodrigues@gmail.com', 'xyz789', 31, 9),
  ('Luana Santos', 'luana.santos@gmail.com', 'senha555', 24, 5),
  ('Rodrigo Mendes', 'rodrigo.mendes@gmail.com', '789xyz', 32, 11),
  ('Gabriela Castro', 'gabriela.castro@gmail.com', 'senha999', 23, 7),
  ('Pedro Gomes', 'pedro.gomes@gmail.com', 'qwerty123', 30, 13),
  ('Amanda Oliveira', 'amanda.oliveira@gmail.com', 'senha000', 35, 1),
  ('Marcelo Silva', 'marcelo.silva@gmail.com', 'abcdefg', 33, 17),
  ('Juliana Costa', 'juliana.costa@gmail.com', 'senha777', 31, 3),
  ('Daniel Sousa', 'daniel.sousa@gmail.com', '123abc', 29, 15),
  ('Larissa Fernandes', 'larissa.fernandes@gmail.com', 'senha111', 27, 9),
  ('Lucas Ramos', 'lucas.ramos@gmail.com', 'xyz123', 26, 5),
  ('Laura Ribeiro', 'laura.ribeiro@gmail.com', 'senha888', 24, 16),
  ('Rafael Mendes', 'rafael.mendes@gmail.com', '456xyz', 37, 2),
  ('Vitória Barbosa', 'vitoria.barbosa@gmail.com', 'senha555', 38, 8),
  ('Paulo Castro', 'paulo.castro@gmail.com', '999abc', 22, 4),
  ('Isabella Lima', 'isabella.lima@gmail.com', 'senha222', 23, 12),
  ('Roberto Santos', 'roberto.santos@gmail.com', 'abcdefg', 39, 6),
  ('Amanda Costa', 'amanda.costa@gmail.com', '777xyz', 21, 14),
  ('Bruno Fernandes', 'bruno.fernandes@gmail.com', 'senha444', 25, 1),
  ('Rafaela Alves', 'rafaela.alves@gmail.com', '123456', 27, 10),
  ('Mariana Pereira', 'mariana.pereira@gmail.com', 'senha777', 24, 7),
  ('João Carvalho', 'joao.carvalho@gmail.com', 'xyz789', 26, 13);
  
  INSERT INTO usuario (nome, email, senha, idade, fkAlbum_Favorito)
VALUES
  ('Gabriela', 'gabriela@example.com', 'senha123', 25, 4),
  ('Vinicius', 'vinicius@example.com', 'senha456', 32, 16),
  ('Juliana', 'juliana@example.com', 'senha789', 28, 2),
  ('Felipe', 'felipe@example.com', 'senha123', 22, 8),
  ('Amanda', 'amanda@example.com', 'senha456', 31, 5),
  ('Lucas', 'lucas@example.com', 'senha789', 29, 10),
  ('Beatriz', 'beatriz@example.com', 'senha123', 26, 13),
  ('Ricardo', 'ricardo@example.com', 'senha456', 33, 3),
  ('Carolina', 'carolina@example.com', 'senha789', 27, 7),
  ('Pedro', 'pedro@example.com', 'senha123', 23, 12),
  ('Camila', 'camila@example.com', 'senha456', 30, 1),
  ('Gustavo', 'gustavo@example.com', 'senha789', 24, 6),
  ('Isabela', 'isabela@example.com', 'senha123', 31, 9),
  ('Eduardo', 'eduardo@example.com', 'senha456', 28, 11),
  ('Mariana', 'mariana@example.com', 'senha789', 25, 14),
  ('Guilherme', 'guilherme@example.com', 'senha123', 32, 15),
  ('Larissa', 'larissa@example.com', 'senha456', 29, 17),
  ('Rodrigo', 'rodrigo@example.com', 'senha789', 26, 4),
  ('Letícia', 'leticia@example.com', 'senha123', 33, 16),
  ('Bruno', 'bruno@example.com', 'senha456', 27, 2),
  ('Natália', 'natalia@example.com', 'senha789', 24, 8),
  ('Thiago', 'thiago@example.com', 'senha123', 31, 5),
  ('Fernanda', 'fernanda@example.com', 'senha456', 28, 10),
  ('Alexandre', 'alexandre@example.com', 'senha789', 25, 13),
  ('Bianca', 'bianca@example.com', 'senha123', 32, 3),
  ('Leonardo', 'leonardo@example.com', 'senha456', 29, 7),
  ('Marcela', 'marcela@example.com', 'senha789', 26, 12),
  ('Rafaela', 'rafaela@example.com', 'senha123', 33, 1),
  ('Diego', 'diego@example.com', 'senha456', 27, 6),
  ('Carla', 'carla@example.com', 'senha789', 24, 9),
  ('Roberto', 'roberto@example.com', 'senha123', 31, 11),
  ('Lorena', 'lorena@example.com', 'senha456', 28, 14),
  ('Henrique', 'henrique@example.com', 'senha789', 25, 15),
  ('Alice', 'alice@example.com', 'senha123', 32, 4),
  ('Giovanni', 'giovanni@example.com', 'senha456', 29, 16),
  ('Mariane', 'mariane@example.com', 'senha789', 26, 2),
  ('Renato', 'renato@example.com', 'senha123', 33, 8),
  ('Vanessa', 'vanessa@example.com', 'senha456', 27, 5),
  ('Raul', 'raul@example.com', 'senha789', 24, 10),
  ('Priscila', 'priscila@example.com', 'senha123', 31, 13),
  ('Igor', 'igor@example.com', 'senha456', 28, 3),
  ('Renata', 'renata@example.com', 'senha789', 25, 7),
  ('André', 'andre@example.com', 'senha123', 32, 12),
  ('Luana', 'luana@example.com', 'senha456', 29, 1),
  ('Maurício', 'mauricio@example.com', 'senha789', 26, 6),
  ('Laura', 'laura@example.com', 'senha123', 33, 9),
  ('Ramon', 'ramon@example.com', 'senha456', 27, 11),
  ('Patrícia', 'patricia@example.com', 'senha789', 24, 14),
  ('Henrique', 'henrique@example.com', 'senha123', 31, 15),
  ('Júlia', 'julia@example.com', 'senha456', 28, 17),
  ('Renan', 'renan@example.com', 'senha789', 25, 4),
  ('Mirella', 'mirella@example.com', 'senha123', 32, 16),
  ('Thales', 'thales@example.com', 'senha456', 29, 2),
  ('Luciana', 'luciana@example.com', 'senha789', 26, 8),
  ('Fábio', 'fabio@example.com', 'senha123', 33, 5),
  ('Cristina', 'cristina@example.com', 'senha456', 27, 10),
  ('Luiz', 'luiz@example.com', 'senha789', 24, 13),
  ('Gabriel', 'gabriel@example.com', 'senha123', 31, 3),
  ('Lívia', 'livia@example.com', 'senha456', 28, 7),
  ('Marcelo', 'marcelo@example.com', 'senha789', 25, 12),
  ('Sofia', 'sofia@example.com', 'senha123', 32, 1),
  ('Ricardo', 'ricardo@example.com', 'senha456', 29, 6),
  ('Raquel', 'raquel@example.com', 'senha789', 26, 9),
  ('Jorge', 'jorge@example.com', 'senha123', 33, 11),
  ('Renata', 'renata@example.com', 'senha456', 27, 14),
  ('Alex', 'alex@example.com', 'senha789', 24, 15);
  
SELECT fkAlbum_Favorito, COUNT(*) AS quantidade
FROM usuario
GROUP BY fkAlbum_Favorito;

SELECT COUNT(*) AS quantidade
FROM usuario
GROUP BY fkAlbum_Favorito
HAVING fkAlbum_Favorito IS NOT NULL;

SELECT SUM(quantidade) AS total
FROM (
    SELECT COUNT(*) AS quantidade
    FROM usuario
    GROUP BY fkAlbum_Favorito
) AS subquery;

    select * from musica;
    select * from usuario;
    select Vezes_selecionado as vezes from album;
    Desc  playlist;
    SELECT Titulo as titulo, Duração as tempo, idMusica as idMsc
	FROM musica
	WHERE fkAlbum = 5;

INSERT INTO playlist (fk_idUsuario, fk_IdMusica, titulo, duracao)
VALUES (1, 5, 'Minha Playlist', '03:42');

select * from playlist;
    

SELECT titulo as nome, fk_IdMusica as idMusica, duracao as tempo
FROM playlist
WHERE fk_idUsuario = 1;

select * from playlist;
DELETE FROM playlist WHERE fk_idUsuario = '1' AND fk_idMusica = '6';
    
select * from membrosBanda;
select * from InformacoesPessoais;
    
    