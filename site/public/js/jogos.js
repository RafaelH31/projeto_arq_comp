  window.onload = calcularVezes()

  var vetorclicks = []
  var cont1 = 0
  var cont2 = 0
  var cont3 = 0
 

  function info(btnId) {
    if (btnId === "naveInfo") {
      nomeDoJogo.innerHTML = 'Space Invaders'
      DataTexto.innerHTML = 'April 1, 1978'
      NumeroTexto.innerHTML = '5.6 million'
      lucroTexto.innerHTML = '$13 billion em dolares 2021'
      publiTexto.innerHTML = 'Taito'
      sobreTexto.innerHTML = 'Space Invaders é um jogo de arcade clássico no qual o jogador move um canhão de laser horizontalmente na parte inferior da tela e atira em alienígenas acima. O objetivo é eliminar todos os alienígenas atirando neles. Foi um dos primeiros videogames lançados e se tornou um dos primeiros videogames de fliperama a ter grande sucesso em todo o mundo.'

    } else if (btnId === "cruzada") {
      nomeDoJogo.innerHTML = 'Cruzadinha'
      DataTexto.innerHTML = '??'
      NumeroTexto.innerHTML = '??'
      lucroTexto.innerHTML = '??'
      publiTexto.innerHTML = '??'
      sobreTexto.innerHTML = 'O jogo de palavras cruzadas é um passatempo bastante difundido. Consiste de várias linhas formadas por quadrados em branco, algumas na vertical e outras na horizontal, que se cruzam umas com as outras.'
    } else if (btnId === "pongInfo") {
      nomeDoJogo.innerHTML = 'Pong'
      DataTexto.innerHTML = '29 November 1972'
      NumeroTexto.innerHTML = '35 mil'
      lucroTexto.innerHTML = '$35-40 dolares por dia em 35k de maquinas'
      publiTexto.innerHTML = 'atari'
      sobreTexto.innerHTML = 'Pong é um jogo esportivo bidimensional que simula tênis de mesa. O jogador controla uma raquete no jogo movendo-a verticalmente no lado esquerdo ou direito da tela. Eles podem competir contra outro jogador controlando uma segunda raquete no lado oposto. Foi um dos primeiros jogos de computador já criados e foi lançado pela Atari em 1972.'
    } else if(btnId === "riverInfo" ){
      nomeDoJogo.innerHTML = 'River Raid'
DataTexto.innerHTML = '1982'
NumeroTexto.innerHTML = '1 million'
lucroTexto.innerHTML = 'N/A'
publiTexto.innerHTML = 'Activision'
sobreTexto.innerHTML = 'River Raid é um jogo de tiro de rolagem vertical lançado em 1982 pela Activision para o Atari 2600. O objetivo do jogo é pilotar um avião de combate sobre um rio enquanto destrói pontes, navios e helicópteros inimigos.'
    }else if(btnId === "endurInfo"){
      nomeDoJogo.innerHTML = 'Enduro'
DataTexto.innerHTML = '1983'
NumeroTexto.innerHTML = '750k'
lucroTexto.innerHTML = 'N/A'
publiTexto.innerHTML = 'Activision'
sobreTexto.innerHTML = 'Enduro é um jogo de corrida lançado em 1983 pela Activision para o Atari 2600. O objetivo do jogo é ultrapassar um certo número de carros em um dia para avançar para o próximo dia de corrida.'
    }
    else if(btnId === "doomInfo"){
      nomeDoJogo.innerHTML = 'Doom'
DataTexto.innerHTML = '1993'
NumeroTexto.innerHTML = '4.65 million'
lucroTexto.innerHTML = 'US$8.74 million'
publiTexto.innerHTML = 'id Software'
sobreTexto.innerHTML = 'Doom é um jogo de tiro em primeira pessoa (FPS) de 1993 desenvolvido pela id Software para MS-DOS. Os jogadores assumem o papel de um fuzileiro naval espacial, popularmente conhecido como Doom guy, lutando contra hordas de demônios invasores do inferno.'
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

    fetch(`/jogo/calcularVezes/`, { cache: 'no-store' }).then(function (response) {
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

  var jogo = ""
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
    // jogo = powerslave
    // cont5++
    // cont = cont5
    // id = 5
    window.location = "dashboard.html"

  }

  function jogarJ() {

    fetch("/jogo/atualizarVezes/", {
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

