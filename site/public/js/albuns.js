
  window.addEventListener('load', function() {
  var msc_sorteada = document.getElementById('msc_sorteada');
  var tocarBtn = document.getElementById('tocar-btn');
  var pauseBtn = document.getElementById('pause-btn');
  var barraVolume = document.getElementById('barra-volume');
  var duracaoMsc = document.getElementById('duracao');

  tocarBtn.addEventListener('click', function() {
    msc_sorteada.play();
  });

  pauseBtn.addEventListener('click', function() {
    msc_sorteada.pause();
  });

  barraVolume.addEventListener('input', function() {
    msc_sorteada.volume = barraVolume.value;
  });

  msc_sorteada.addEventListener('timeupdate', function() {
    var minutos = Math.floor(msc_sorteada.currentTime / 60);
    var segundos = Math.floor(msc_sorteada.currentTime % 60);
    duracaoMsc.textContent = ('0' + minutos).slice(-2) + ':' + ('0' + segundos).slice(-2);
  });
});

  window.onload = calcularVezes()

  var vetorAlbuns = []
  var cont1 = 0
  var cont2 = 0
  var cont3 = 0
  var cont4 = 0
  var cont5 = 0
  var cont6 = 0
  var cont7 = 0
  var cont8 = 0
  var cont9 = 0
  var cont10 = 0
  var cont11 = 0
  var cont12 = 0
  var cont13 = 0
  var cont14 = 0
  var cont15 = 0
  var cont16 = 0
  var cont17 = 0

  function info(btnId) {
    if (btnId === "ironInfo") {
      tituloAlbum.innerHTML = 'Iron Maiden'
      DataTexto.innerHTML = '14 de abril, 1980'
      NumeroTexto.innerHTML = '8 músicas'
      DuracaoTexto.innerHTML = '40:06 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '4.175 milhões de unidades'

    } else if (btnId === "killersInfo") {
      tituloAlbum.innerHTML = 'Killers'
      DataTexto.innerHTML = '2 de fevereiro, 1981'
      NumeroTexto.innerHTML = '10 músicas'
      DuracaoTexto.innerHTML = '38:49 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '4.855 milhões de unidades'
    } else if (btnId === "BeastInfo") {
      tituloAlbum.innerHTML = 'The Number of the Beast'
      DataTexto.innerHTML = '29 de março, 1982'
      NumeroTexto.innerHTML = '8 músicas'
      DuracaoTexto.innerHTML = '39:14 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '8.330 milhões de unidades'
    } else if (btnId === "PieceInfo") {
      tituloAlbum.innerHTML = 'Piece of Mind'
      DataTexto.innerHTML = '16 de maio, 1983'
      NumeroTexto.innerHTML = '9 músicas'
      DuracaoTexto.innerHTML = '45:04 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '6.615 milhões de unidades'
    } else if (btnId === "PowerslaveInfo") {
      tituloAlbum.innerHTML = 'Powerslave'
      DataTexto.innerHTML = '3 de setembro, 1984'
      NumeroTexto.innerHTML = '8 músicas'
      DuracaoTexto.innerHTML = '51:12 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '5.610 milhões de unidades'
    } else if (btnId === "SomewhereInfo") {
      tituloAlbum.innerHTML = 'Somewhere in Time'
      DataTexto.innerHTML = '29 de setembro, 1986'
      NumeroTexto.innerHTML = '8 músicas'
      DuracaoTexto.innerHTML = '51:17 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '5.290 milhões de unidades'
    } else if (btnId === "SeventhInfo") {
      tituloAlbum.innerHTML = 'Seventh Son of a Seventh Son'
      DataTexto.innerHTML = '11 de abril, 1988'
      NumeroTexto.innerHTML = '8 músicas'
      DuracaoTexto.innerHTML = '44:06 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '4.815 milhões de unidades'
    } else if (btnId === "PrayerInfo") {
      tituloAlbum.innerHTML = 'No Prayer for the Dying'
      DataTexto.innerHTML = '1 de outubro, 1990'
      NumeroTexto.innerHTML = '10 músicas'
      DuracaoTexto.innerHTML = '43:53 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '3.010 milhões de unidades'
    } else if (btnId === "FearInfo") {
      tituloAlbum.innerHTML = 'Fear of the Dark'
      DataTexto.innerHTML = '11 de maio, 1992'
      NumeroTexto.innerHTML = '12 músicas'
      DuracaoTexto.innerHTML = '58:37 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '3.615 milhões de unidades'
    } else if (btnId === "XInfo") {
      tituloAlbum.innerHTML = 'The X Factor'
      DataTexto.innerHTML = '2 de outubro, 1995'
      NumeroTexto.innerHTML = '11 músicas'
      DuracaoTexto.innerHTML = '66:57 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '1.410 milhões de unidades'
    } else if (btnId === "XiInfo") {
      tituloAlbum.innerHTML = 'Virtual XI'
      DataTexto.innerHTML = '23 de março, 1998'
      NumeroTexto.innerHTML = '8 músicas'
      DuracaoTexto.innerHTML = '53:19 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '1.185 milhões de unidades'
    } else if (btnId === "BraveInfo") {
      tituloAlbum.innerHTML = 'Brave New World'
      DataTexto.innerHTML = '29 de maio, 2000'
      NumeroTexto.innerHTML = '10 músicas'
      DuracaoTexto.innerHTML = '66:57 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '2.290 milhões de unidades'
    } else if (btnId === "DanceInfo") {
      tituloAlbum.innerHTML = 'Dance of Death'
      DataTexto.innerHTML = '8 de setembro, 2003'
      NumeroTexto.innerHTML = '11 músicas'
      DuracaoTexto.innerHTML = '67:30 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '1.490 milhão de unidades'
    } else if (btnId === "MatterInfo") {
      tituloAlbum.innerHTML = 'A Matter of Life and Death';
      DataTexto.innerHTML = '28 de agosto, 2006'
      NumeroTexto.innerHTML = '10 músicas'
      DuracaoTexto.innerHTML = '72:08 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '1.440 milhão de unidades'
    } else if (btnId === "FinalInfo") {
      tituloAlbum.innerHTML = 'The Final Frontier'
      DataTexto.innerHTML = '13 de agosto, 2010'
      NumeroTexto.innerHTML = '10 músicas'
      DuracaoTexto.innerHTML = '76:35 minutos'
      GravadoraTexto.innerHTML = 'EMI'
      DiscosTexto.innerHTML = '1.120 milhão de unidades'
    } else if (btnId === "SoulsInfo") {
      tituloAlbum.innerHTML = 'The Book of Souls'
      DataTexto.innerHTML = '4 de setembro, 2015'
      NumeroTexto.innerHTML = '11 músicas'
      DuracaoTexto.innerHTML = '92:11 minutos'
      GravadoraTexto.innerHTML = 'Parlophone'
      DiscosTexto.innerHTML = '1.090 milhões de unidades'
    } else if (btnId === "SenjutsuInfo") {
      tituloAlbum.innerHTML = 'Senjutsu'
      DataTexto.innerHTML = '3 de setembro, 2021'
      NumeroTexto.innerHTML = '10 músicas'
      DuracaoTexto.innerHTML = '82:52 minutos'
      GravadoraTexto.innerHTML = 'Parlophone'
      DiscosTexto.innerHTML = '480 mil unidades'
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    var telaInfo = document.getElementById("containerAlerta")
    telaInfo.style.display = "block"
  }
  function voltar() {
    var telaInfo = document.getElementById("containerAlerta")
    telaInfo.style.display = "none"
  }
  function calcularVezes() {

    fetch(`/album/calcularVezes/`, { cache: 'no-store' }).then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

          console.log(resposta)
          for (var c = 0; c < resposta.length; c++) {
            var registro = resposta[c];
            vetorAlbuns.push(registro.vezes);

          }

          cont1 = vetorAlbuns[0]
          cont2 = vetorAlbuns[1]
          cont3 = vetorAlbuns[2]
          cont4 = vetorAlbuns[3]
          cont5 = vetorAlbuns[4]
          cont6 = vetorAlbuns[5]
          cont7 = vetorAlbuns[6]
          cont8 = vetorAlbuns[7]
          cont9 = vetorAlbuns[8]
          cont10 = vetorAlbuns[9]
          cont11 = vetorAlbuns[10]
          cont12 = vetorAlbuns[11]
          cont13 = vetorAlbuns[12]
          cont14 = vetorAlbuns[13]
          cont15 = vetorAlbuns[14]
          cont16 = vetorAlbuns[15]
          cont17 = vetorAlbuns[16]


          localStorage.setItem("dados_vezes", JSON.stringify(vetorAlbuns));
        });
      } else {
        console.error('Nenhum dado encontrado ou erro na API');
      }
    })
      .catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
      });
  }

  var album = ""
  var id = ""
  var cont = 0

  function albumIron() {
    album = ironMaiden
    cont1++
    cont = cont1
    id = 1
    window.location = "nave.html"
  }
  function albumKillers() {
    album = killers
    cont2++
    cont = cont2
    id = 2

    window.location = "cruzada.html"
  }
  function albumBeast() {
    album = numberofbeast
    cont3++
    cont = cont3
    id = 3

    window.location = "pong.html"
  }
  function albumPiece() {
    album = pieceofmind
    cont4++
    cont = cont4
    id = 4


    window.location = "dashboard.html"
  }
  function albumPower() {
    album = powerslave
    cont5++
    cont = cont5
    id = 5
  }
  function albumSomewhere() {
    album = somewhere
    cont6++
    cont = cont6
    id = 6
  }
  function albumSeventh() {
    album = seventh
    cont7++
    cont = cont7
    id = 7
  }
  function albumPrayer() {
    album = noprayer
    cont8++
    cont = cont8
    id = 8
  }
  function albumFear() {
    album = fearofthedark
    cont9++
    cont = cont9
    id = 9
  }
  function albumX() {
    album = xfactor
    cont10++
    cont = cont10
    id = 10
  }
  function albumVirtual() {
    album = virtualxi
    cont11++
    cont = cont11
    id = 11
  }
  function albumBrave() {
    album = bravenew
    cont12++
    cont = cont12
    id = 12
  }
  function albumDance() {
    album = danceofdeath
    cont13++
    cont = cont13
    id = 13
  }
  function albumMatter() {
    album = matteroflife
    cont14++
    cont = cont14
    id = 14
  }
  function albumFinal() {
    album = finalfrontier
    cont15++
    cont = cont15
    id = 15
  }
  function albumBook() {
    album = bookofsouls
    cont16++
    cont = cont16
    id = 16
  }
  function albumSenjutsu() {
    album = senjutsu
    cont17++
    cont = cont17
    id = 17
  }
  var ironMaiden = [
    'audio/Charlotte the Harlot.mp3',
    'audio/Iron Maiden.mp3',
    'audio/Phantom of the Opera.mp3',
    'audio/Prowler.mp3',
    'audio/Remember Tomorrow.mp3',
    'audio/Running Free.mp3',
    'audio/Strange World.mp3',
    'audio/Transylvania.mp3'
  ]
  var killers = [
    'audio/Another life.mp3',
    'audio/Drifter.mp3',
    'audio/Genghis Khan.mp3',
    'audio/Innocent Exile.mp3',
    'audio/Killers.mp3',
    'audio/Murders in the Rue Morgue.mp3',
    'audio/Prodigal Son.mp3',
    'audio/Purgatory.mp3',
    'audio/The Ides of March.mp3',
    'audio/Wrathchild.mp3'
  ]
  var numberofbeast = [
    'audio/22 Acacia Avenue.mp3',
    'audio/Children of the Damned.mp3',
    'audio/Gangland.mp3',
    'audio/Hallowed Be Thy Name.mp3',
    'audio/Invaders.mp3',
    'audio/The Number of the Beast.mp3',
    'audio/Run to the Hills.mp3',
    'audio/The Prisoner.mp3'
  ];

  var pieceofmind = [
    'audio/Die With Your Boots On (2015 Remaster).mp3',
    'audio/Flight of Icarus (2015 Remaster).mp3',
    'audio/Quest for Fire (2015 Remaster).mp3',
    'audio/Revelations (2015 Remaster).mp3',
    'audio/Still Life (2015 Remaster).mp3',
    'audio/The Trooper (2015 Remaster).mp3',
    'audio/Sun and Steel (2015 Remaster).mp3',
    'audio/To Tame a Land (2015 Remaster).mp3',
    'audio/Where Eagles Dare (2015 Remaster).mp3'
  ]
  var powerslave = [
    'audio/Aces High (2015 Remaster).mp3',
    'audio/2 Minutes to Midnight (2015 Remaster).mp3',
    'audio/Losfer Words (Big Orra) (2015 Remaster).mp3',
    'audio/Flash of the Blade (2015 Remaster).mp3',
    'audio/The Duellists (2015 Remaster).mp3',
    'audio/Back in the Village (2015 Remaster).mp3',
    'audio/Powerslave (2015 Remaster).mp3',
    'audio/Rime of the Ancient Mariner (2015 Remaster).mp3'
  ]
  var somewhere = [
    'audio/Caught Somewhere in Time (2015 Remaster).mp3',
    'audio/Wasted Years (2015 Remaster).mp3',
    'audio/Sea of Madness (2015 Remaster).mp3',
    'audio/Heaven Can Wait (2015 Remaster).mp3',
    'audio/The Loneliness of the Long Distance Runner (2015 Remaster).mp3',
    'audio/Stranger in a Strange Land (2015 Remaster).mp3',
    'audio/Deja Vu (2015 Remaster).mp3',
    'audio/Alexander the Great (2015 Remaster).mp3'
  ]
  var seventh = [
    'audio/Moonchild (2015 Remaster).mp3',
    'audio/Infinite Dreams (2015 Remaster).mp3',
    'audio/Can I Play with Madness (2015 Remaster).mp3',
    'audio/The Evil That Men Do (2015 Remaster).mp3',
    'audio/Seventh Son of a Seventh Son (2015 Remaster).mp3',
    'audio/The Prophecy (2015 Remaster).mp3',
    'audio/The Clairvoyant (2015 Remaster).mp3',
    'audio/Only the Good Die Young (2015 Remaster).mp3'
  ]
  var noprayer = [
    'audio/Tailgunner (2015 Remaster).mp3',
    'audio/Holy Smoke (2015 Remaster).mp3',
    'audio/No Prayer for the Dying (2015 Remaster).mp3',
    'audio/Public Enema Number One (2015 Remaster).mp3',
    'audio/Fates Warning (2015 Remaster).mp3',
    'audio/The Assassin (2015 Remaster).mp3',
    'audio/Run Silent Run Deep (2015 Remaster).mp3',
    'audio/Hooks in You (2015 Remaster).mp3',
    'audio/Bring Your Daughter... to the Slaughter (2015 Remaster).mp3',
    'audio/Mother Russia (2015 Remaster).mp3'
  ]
  var fearofthedark = [
    'audio/Be Quick or Be Dead.mp3',
    'audio/From Here To Eternity.mp3',
    'audio/Afraid to Shoot Strangers (2015 Remaster).mp3',
    'audio/Fear of the Dark (2015 Remaster).mp3',
    'audio/Childhoods End (2015 Remaster).mp3',
    'audio/Wasting Love.mp3',
    'audio/The Fugitive (2015 Remaster).mp3',
    'audio/Chains of Misery (2015 Remaster).mp3',
    'audio/The Apparition (2015 Remaster).mp3',
    'audio/Judas Be My Guide (2015 Remaster).mp3',
    'audio/Weekend Warrior (2015 Remaster).mp3',
    'audio/Fear Is the Key (2015 Remaster).mp3',
  ]
  var xfactor = [
    'audio/Sign of the Cross (2015 Remaster).mp3',
    'audio/Lord of the Flies (2015 Remaster).mp3',
    'audio/Man on the Edge (2015 Remaster).mp3',
    'audio/Fortunes of War (2015 Remaster).mp3',
    'audio/Look for the Truth (2015 Remaster).mp3',
    'audio/The Aftermath (2015 Remaster).mp3',
    'audio/Judgement of Heaven (2015 Remaster).mp3',
    'audio/Blood on the Worlds Hands (2015 Remaster).mp3',
    'audio/The Edge of Darkness (2015 Remaster).mp3',
    'audio/2 AM (2015 Remaster).mp3',
    'audio/The Unbeliever (2015 Remaster).mp3'
  ]
  var virtualxi = [
    'audio/Futureal (2015 Remaster).mp3',
    'audio/The Angel and the Gambler (2015 Remaster).mp3',
    'audio/Lightning Strikes Twice (2015 Remaster).mp3',
    'audio/The Clansman (2015 Remaster).mp3',
    'audio/When Two Worlds Collide (2015 Remaster).mp3',
    'audio/The Educated Fool (2015 Remaster).mp3',
    'audio/Dont Look to the Eyes of a Stranger (2015 Remaster).mp3',
    'audio/Como Estais Amigos (2015 Remaster).mp3'
  ]
  var bravenew = [
    'audio/The Wicker Man.mp3',
    'audio/Ghost of the Navigator (2015 Remaster).mp3',
    'audio/Brave New World (2015 Remaster).mp3',
    'audio/Blood Brothers (2015 Remaster).mp3',
    'audio/The Mercenary (2015 Remaster).mp3',
    'audio/Dream of Mirrors (2015 Remaster).mp3',
    'audio/The Fallen Angel (2015 Remaster).mp3',
    'audio/The Nomad (2015 Remaster).mp3',
    'audio/Out of the Silent Planet.mp3',
    'audio/The Thin Line Between Love and Hate (2015 Remaster).mp3'
  ];

  var danceofdeath = [
    'audio/Wildest Dreams (2015 Remaster).mp3',
    'audio/Rainmaker (2015 Remaster).mp3',
    'audio/No More Lies (2015 Remaster).mp3',
    'audio/Montségur (2015 Remaster).mp3',
    'audio/Dance of Death (2015 Remaster).mp3',
    'audio/Gates of Tomorrow (2015 Remaster).mp3',
    'audio/New Frontier (2015 Remaster).mp3',
    'audio/Paschendale (2015 Remaster).mp3',
    'audio/Face in the Sand (2015 Remaster).mp3',
    'audio/Age of Innocence (2015 Remaster).mp3',
    'audio/Journeyman (2015 Remaster).mp3'
  ];

  var matteroflife = [
    'audio/Different World (2015 Remaster).mp3',
    'audio/These Colours Dont Run (2015 Remaster).mp3',
    'audio/Brighter Than a Thousand Suns (2015 Remaster).mp3',
    'audio/The Pilgrim (2015 Remaster).mp3',
    'audio/The Longest Day (2015 Remaster).mp3',
    'audio/Out of the Shadows (2015 Remaster).mp3',
    'audio/The Reincarnation of Benjamin Breeg (2015 Remaster).mp3',
    'audio/For the Greater Good of God (2015 Remaster).mp3',
    'audio/Lord of Light (2015 Remaster).mp3',
    'audio/The Legacy (2015 Remaster).mp3'
  ];
  var finalfrontier = [
    'audio/Satellite 15 The Final Frontier (2015 Remaster).mp3',
    'audio/El Dorado (2015 Remaster).mp3',
    'audio/Mother of Mercy (2015 Remaster).mp3',
    'audio/Coming Home (2015 Remaster).mp3',
    'audio/The Alchemist (2015 Remaster).mp3',
    'audio/Isle of Avalon (2015 Remaster).mp3',
    'audio/Starblind (2015 Remaster).mp3',
    'audio/The Talisman (2015 Remaster).mp3',
    'audio/The Man Who Would Be King (2015 Remaster).mp3',
    'audio/When the Wild Wind Blows (2015 Remaster).mp3'
  ];

  var bookofsouls = [
    'audio/If Eternity Should Fail.mp3',
    'audio/Speed of Light.mp3',
    'audio/The Great Unknown.mp3',
    'audio/The Red and the Black.mp3',
    'audio/The Book of Souls.mp3',
    'audio/Death or Glory.mp3',
    'audio/Shadows of the Valley.mp3',
    'audio/Tears of a Clown.mp3',
    'audio/The Man of Sorrows.mp3',
    'audio/Empire of the Clouds.mp3'
  ];

  var senjutsu = [
    'audio/Senjutsu.mp3',
    'audio/Stratego.mp3',
    'audio/The Writing on the Wall.mp3',
    'audio/Lost in a Lost World.mp3',
    'audio/Days of Future Past.mp3',
    'audio/The Time Machine.mp3',
    'audio/Darkest Hour.mp3',
    'audio/Death of the Celts.mp3',
    'audio/The Parchment.mp3',
    'audio/Hell on Earth.mp3'
  ];

  function playmusic() {
    
    if (album.length > 0) {
      var musicaSorteada = parseInt(Math.random() * album.length);

      var musica = msc_sorteada
      musica.src = album[musicaSorteada]
      musica.play();

      album.splice(musicaSorteada, 1)
      console.log(musicaSorteada)
    } else {
      if (ironMaiden.length == 0) {
        ironMaiden.push(
          'audio/Charlotte the Harlot.mp3',
          'audio/Iron Maiden.mp3',
          'audio/Phantom of the Opera.mp3',
          'audio/Prowler.mp3',
          'audio/Remember Tomorrow.mp3',
          'audio/Running Free.mp3',
          'audio/Strange World.mp3',
          'audio/Transylvania.mp3'
        )
      }
      if (killers.length == 0) {
        killers.push(
          'audio/Another life.mp3',
          'audio/Drifter.mp3',
          'audio/Genghis Khan.mp3',
          'audio/Innocent Exile.mp3',
          'audio/Killers.mp3',
          'audio/Murders in the Rue Morgue.mp3',
          'audio/Prodigal Son.mp3',
          'audio/Purgatory.mp3',
          'audio/The Ides of March.mp3',
          'audio/Wrathchild.mp3'
        )
      }
      if (numberofbeast.length == 0) {
        numberofbeast.push(
          'audio/22 Acacia Avenue.mp3',
          'audio/Children of the Damned.mp3',
          'audio/Gangland.mp3',
          'audio/Hallowed Be Thy Name.mp3',
          'audio/Invaders.mp3',
          'audio/The Number of the Beast.mp3',
          'audio/Run to the Hills.mp3',
          'audio/The Prisoner.mp3',
        )
      }
      if (pieceofmind.length == 0) {
        pieceofmind.push(
          'audio/Die With Your Boots On (2015 Remaster).mp3',
          'audio/Flight of Icarus (2015 Remaster).mp3',
          'audio/Quest for Fire (2015 Remaster).mp3',
          'audio/Revelations (2015 Remaster).mp3',
          'audio/Still Life (2015 Remaster).mp3',
          'audio/The Trooper (2015 Remaster).mp3',
          'audio/Sun and Steel (2015 Remaster).mp3',
          'audio/To Tame a Land (2015 Remaster).mp3',
          'audio/Where Eagles Dare (2015 Remaster).mp3'
        )
      }
      if (powerslave.length == 0) {
        powerslave.push(
          'audio/Aces High (2015 Remaster).mp3',
          'audio/2 Minutes to Midnight (2015 Remaster).mp3',
          'audio/Losfer Words (Big Orra) (2015 Remaster).mp3',
          'audio/Flash of the Blade (2015 Remaster).mp3',
          'audio/The Duellists (2015 Remaster).mp3',
          'audio/Back in the Village (2015 Remaster).mp3',
          'audio/Powerslave (2015 Remaster).mp3',
          'audio/Rime of the Ancient Mariner (2015 Remaster).mp3'
        )
      }
      if (somewhere.length == 0) {
        somewhere.push(
          'audio/Caught Somewhere in Time (2015 Remaster).mp3',
          'audio/Wasted Years (2015 Remaster).mp3',
          'audio/Sea of Madness (2015 Remaster).mp3',
          'audio/Heaven Can Wait (2015 Remaster).mp3',
          'audio/The Loneliness of the Long Distance Runner (2015 Remaster).mp3',
          'audio/Stranger in a Strange Land (2015 Remaster).mp3',
          'audio/Deja Vu (2015 Remaster).mp3',
          'audio/Alexander the Great (2015 Remaster).mp3'
        )
      }
      if (seventh.length == 0) {
        seventh.push(
          'audio/Moonchild (2015 Remaster).mp3',
          'audio/Infinite Dreams (2015 Remaster).mp3',
          'audio/Can I Play with Madness (2015 Remaster).mp3',
          'audio/The Evil That Men Do (2015 Remaster).mp3',
          'audio/Seventh Son of a Seventh Son (2015 Remaster).mp3',
          'audio/The Prophecy (2015 Remaster).mp3',
          'audio/The Clairvoyant (2015 Remaster).mp3',
          'audio/Only the Good Die Young (2015 Remaster).mp3'
        )
      }
      if (fearofthedark.length == 0) {
        fearofthedark.push(
          'audio/Be Quick or Be Dead.mp3',
          'audio/From Here To Eternity.mp3',
          'audio/Afraid to Shoot Strangers (2015 Remaster).mp3',
          'audio/Fear of the Dark (2015 Remaster).mp3',
          'audio/Childhoods End (2015 Remaster).mp3',
          'audio/Wasting Love.mp3',
          'audio/The Fugitive (2015 Remaster).mp3',
          'audio/Chains of Misery (2015 Remaster).mp3',
          'audio/The Apparition (2015 Remaster).mp3',
          'audio/Judas Be My Guide (2015 Remaster).mp3',
          'audio/Weekend Warrior (2015 Remaster).mp3',
          'audio/Fear Is the Key (2015 Remaster).mp3',
        )
      }
      if (xfactor.length == 0) {
        xfactor.push(
          'audio/Sign of the Cross (2015 Remaster).mp3',
          'audio/Lord of the Flies (2015 Remaster).mp3',
          'audio/Man on the Edge (2015 Remaster).mp3',
          'audio/Fortunes of War (2015 Remaster).mp3',
          'audio/Look for the Truth (2015 Remaster).mp3',
          'audio/The Aftermath (2015 Remaster).mp3',
          'audio/Judgement of Heaven (2015 Remaster).mp3',
          'audio/Blood on the Worlds Hands (2015 Remaster).mp3',
          'audio/The Edge of Darkness (2015 Remaster).mp3',
          'audio/2 AM (2015 Remaster).mp3',
          'audio/The Unbeliever (2015 Remaster).mp3'
        )
      }
      if (virtualxi.length == 0) {
        virtualxi.push(
          'audio/Futureal (2015 Remaster).mp3',
          'audio/The Angel and the Gambler (2015 Remaster).mp3',
          'audio/Lightning Strikes Twice (2015 Remaster).mp3',
          'audio/The Clansman (2015 Remaster).mp3',
          'audio/When Two Worlds Collide (2015 Remaster).mp3',
          'audio/The Educated Fool (2015 Remaster).mp3',
          'audio/Dont Look to the Eyes of a Stranger (2015 Remaster).mp3',
          'audio/Como Estais Amigos (2015 Remaster).mp3'
        )
      }
      if (bravenew.length == 0) {
        bravenew.push(
          'audio/Futureal (2015 Remaster).mp3',
          'audio/The Angel and the Gambler (2015 Remaster).mp3',
          'audio/Lightning Strikes Twice (2015 Remaster).mp3',
          'audio/The Clansman (2015 Remaster).mp3',
          'audio/When Two Worlds Collide (2015 Remaster).mp3',
          'audio/The Educated Fool (2015 Remaster).mp3',
          'audio/Dont Look to the Eyes of a Stranger (2015 Remaster).mp3',
          'audio/Como Estais Amigos (2015 Remaster).mp3'
        )
      }
      if (danceofdeath.length == 0) {
        danceofdeath.push(
          'audio/Futureal (2015 Remaster).mp3',
          'audio/The Angel and the Gambler (2015 Remaster).mp3',
          'audio/Lightning Strikes Twice (2015 Remaster).mp3',
          'audio/The Clansman (2015 Remaster).mp3',
          'audio/When Two Worlds Collide (2015 Remaster).mp3',
          'audio/The Educated Fool (2015 Remaster).mp3',
          'audio/Dont Look to the Eyes of a Stranger (2015 Remaster).mp3',
          'audio/Como Estais Amigos (2015 Remaster).mp3'
        )
      }
      if (matteroflife.length == 0) {
        matteroflife.push(
          'audio/Futureal (2015 Remaster).mp3',
          'audio/The Angel and the Gambler (2015 Remaster).mp3',
          'audio/Lightning Strikes Twice (2015 Remaster).mp3',
          'audio/The Clansman (2015 Remaster).mp3',
          'audio/When Two Worlds Collide (2015 Remaster).mp3',
          'audio/The Educated Fool (2015 Remaster).mp3',
          'audio/Dont Look to the Eyes of a Stranger (2015 Remaster).mp3',
          'audio/Como Estais Amigos (2015 Remaster).mp3'
        )
      }
      if (finalfrontier.length == 0) {
        finalfrontier.push(
          'audio/Satellite 15 The Final Frontier (2015 Remaster).mp3',
          'audio/El Dorado (2015 Remaster).mp3',
          'audio/Mother of Mercy (2015 Remaster).mp3',
          'audio/Coming Home (2015 Remaster).mp3',
          'audio/The Alchemist (2015 Remaster).mp3',
          'audio/Isle of Avalon (2015 Remaster).mp3',
          'audio/Starblind (2015 Remaster).mp3',
          'audio/The Talisman (2015 Remaster).mp3',
          'audio/The Man Who Would Be King (2015 Remaster).mp3',
          'audio/When the Wild Wind Blows (2015 Remaster).mp3'
        )
      }
      if (bookofsouls.length == 0) {
        bookofsouls.push(
          'audio/If Eternity Should Fail.mp3',
          'audio/Speed of Light.mp3',
          'audio/The Great Unknown.mp3',
          'audio/The Red and the Black.mp3',
          'audio/The Book of Souls.mp3',
          'audio/Death or Glory.mp3',
          'audio/Shadows of the Valley.mp3',
          'audio/Tears of a Clown.mp3',
          'audio/The Man of Sorrows.mp3',
          'audio/Empire of the Clouds.mp3'
        )
      }
      if (senjutsu.length == 0) {
        senjutsu.push(
          'audio/Senjutsu.mp3',
          'audio/Stratego.mp3',
          'audio/The Writing on the Wall.mp3',
          'audio/Lost in a Lost World.mp3',
          'audio/Days of Future Past.mp3',
          'audio/The Time Machine.mp3',
          'audio/Darkest Hour.mp3',
          'audio/Death of the Celts.mp3',
          'audio/The Parchment.mp3',
          'audio/Hell on Earth.mp3'
        )
      }
    }

    fetch("/album/atualizarVezes/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({

        idServer: id,
        contServer: cont,

      })
    })

  }

