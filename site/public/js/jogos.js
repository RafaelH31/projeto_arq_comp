  window.onload = calcularVezes()

  var vetorclicks = []
  var cont1 = 0
  var cont2 = 0
  var cont3 = 0
 

  function info(btnId) {
    if (btnId === "ironInfo") {
      nomeDoJogo.innerHTML = 'Iron Maiden'
      DataTexto.innerHTML = '14 de abril, 1980'
      NumeroTexto.innerHTML = '8 músicas'
      lucroTexto.innerHTML = '40:06 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '4.175 milhões de unidades'

    } else if (btnId === "killersInfo") {
      nomeDoJogo.innerHTML = 'Killers'
      DataTexto.innerHTML = '2 de fevereiro, 1981'
      NumeroTexto.innerHTML = '10 músicas'
      lucroTexto.innerHTML = '38:49 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '4.855 milhões de unidades'
    } else if (btnId === "BeastInfo") {
      nomeDoJogo.innerHTML = 'The Number of the Beast'
      DataTexto.innerHTML = '29 de março, 1982'
      NumeroTexto.innerHTML = '8 músicas'
      lucroTexto.innerHTML = '39:14 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '8.330 milhões de unidades'
    } else if (btnId === "PieceInfo") {
      nomeDoJogo.innerHTML = 'Piece of Mind'
      DataTexto.innerHTML = '16 de maio, 1983'
      NumeroTexto.innerHTML = '9 músicas'
      lucroTexto.innerHTML = '45:04 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '6.615 milhões de unidades'
    } else if (btnId === "PowerslaveInfo") {
      nomeDoJogo.innerHTML = 'Powerslave'
      DataTexto.innerHTML = '3 de setembro, 1984'
      NumeroTexto.innerHTML = '8 músicas'
      lucroTexto.innerHTML = '51:12 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '5.610 milhões de unidades'
    } else if (btnId === "SomewhereInfo") {
      nomeDoJogo.innerHTML = 'Somewhere in Time'
      DataTexto.innerHTML = '29 de setembro, 1986'
      NumeroTexto.innerHTML = '8 músicas'
      lucroTexto.innerHTML = '51:17 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '5.290 milhões de unidades'
    } else if (btnId === "SeventhInfo") {
      nomeDoJogo.innerHTML = 'Seventh Son of a Seventh Son'
        DataTexto.innerHTML = '11 de abril, 1988'
        NumeroTexto.innerHTML = '8 músicas'
      lucroTexto.innerHTML = '44:06 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '4.815 milhões de unidades'
    } else if (btnId === "PrayerInfo") {
      nomeDoJogo.innerHTML = 'No Prayer for the Dying'
      DataTexto.innerHTML = '1 de outubro, 1990'
      NumeroTexto.innerHTML = '10 músicas'
      lucroTexto.innerHTML = '43:53 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '3.010 milhões de unidades'
    } else if (btnId === "FearInfo") {
      nomeDoJogo.innerHTML = 'Fear of the Dark'
      DataTexto.innerHTML = '11 de maio, 1992'
      NumeroTexto.innerHTML = '12 músicas'
      lucroTexto.innerHTML = '58:37 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '3.615 milhões de unidades'
    } else if (btnId === "XInfo") {
      nomeDoJogo.innerHTML = 'The X Factor'
      DataTexto.innerHTML = '2 de outubro, 1995'
      NumeroTexto.innerHTML = '11 músicas'
      lucroTexto.innerHTML = '66:57 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '1.410 milhões de unidades'
    } else if (btnId === "XiInfo") {
      nomeDoJogo.innerHTML = 'Virtual XI'
      DataTexto.innerHTML = '23 de março, 1998'
      NumeroTexto.innerHTML = '8 músicas'
      lucroTexto.innerHTML = '53:19 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '1.185 milhões de unidades'
    } else if (btnId === "BraveInfo") {
      nomeDoJogo.innerHTML = 'Brave New World'
      DataTexto.innerHTML = '29 de maio, 2000'
      NumeroTexto.innerHTML = '10 músicas'
      lucroTexto.innerHTML = '66:57 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '2.290 milhões de unidades'
    } else if (btnId === "DanceInfo") {
      nomeDoJogo.innerHTML = 'Dance of Death'
      DataTexto.innerHTML = '8 de setembro, 2003'
      NumeroTexto.innerHTML = '11 músicas'
      lucroTexto.innerHTML = '67:30 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '1.490 milhão de unidades'
    } else if (btnId === "MatterInfo") {
      nomeDoJogo.innerHTML = 'A Matter of Life and Death';
      DataTexto.innerHTML = '28 de agosto, 2006'
      NumeroTexto.innerHTML = '10 músicas'
      lucroTexto.innerHTML = '72:08 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '1.440 milhão de unidades'
    } else if (btnId === "FinalInfo") {
      nomeDoJogo.innerHTML = 'The Final Frontier'
      DataTexto.innerHTML = '13 de agosto, 2010'
      NumeroTexto.innerHTML = '10 músicas'
      lucroTexto.innerHTML = '76:35 minutos'
      publiTexto.innerHTML = 'EMI'
      sobreTexto.innerHTML = '1.120 milhão de unidades'
    } else if (btnId === "SoulsInfo") {
      nomeDoJogo.innerHTML = 'The Book of Souls'
      DataTexto.innerHTML = '4 de setembro, 2015'
      NumeroTexto.innerHTML = '11 músicas'
      lucroTexto.innerHTML = '92:11 minutos'
      publiTexto.innerHTML = 'Parlophone'
      sobreTexto.innerHTML = '1.090 milhões de unidades'
    } else if (btnId === "SenjutsuInfo") {
      nomeDoJogo.innerHTML = 'Senjutsu'
      DataTexto.innerHTML = '3 de setembro, 2021'
      NumeroTexto.innerHTML = '10 músicas'
      lucroTexto.innerHTML = '82:52 minutos'
      publiTexto.innerHTML = 'Parlophone'
      sobreTexto.innerHTML = '480 mil unidades'
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

  function jogarJ() {

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

