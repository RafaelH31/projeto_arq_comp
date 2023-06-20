  window.onload = calcularVezes()

  var vetorclicks = []
  var cont1 = 0
  var cont2 = 0
  var cont3 = 0
 

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
            vetorclicks.push(registro.vezes);

          }

          cont1 = vetorclicks[0]
          cont2 = vetorclicks[1]
          cont3 = vetorclicks[2]


          localStorage.setItem("dados_vezes", JSON.stringify(vetorclicks));
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

  function nave() {
    cont1++
    cont = cont1
    id = 1
    window.location = "nave.html"
  }
  function cruzada() {
    cont2++
    cont = cont2
    id = 2

    window.location = "cruzada.html"
  }
  function pong() {
   
    cont3++
    cont = cont3
    id = 3

    window.location = "pongmp.html"
  }
  function dashboard() {
    // album = powerslave
    // cont5++
    // cont = cont5
    // id = 5
    window.location = "dashboard.html"

  }

  function playmusic() {

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

