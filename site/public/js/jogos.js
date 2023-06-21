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
      lucroTexto.innerHTML = '$13 billion in 2021-adjusted terms'
      publiTexto.innerHTML = 'Taito'
      sobreTexto.innerHTML = 'Space Invaders is a classic arcade game in which the player moves a laser cannon horizontally across the bottom of the screen and fires at aliens overhead. The goal is to eliminate all of the aliens by shooting them. It was one of the earliest video games released and became one of the first coin-op video arcade games to enjoy mega-success worldwide.'

    } else if (btnId === "cruzada") {
      nomeDoJogo.innerHTML = 'cruzada'
      DataTexto.innerHTML = '??'
      NumeroTexto.innerHTML = '??'
      lucroTexto.innerHTML = '??'
      publiTexto.innerHTML = '??'
      sobreTexto.innerHTML = 'O jogo de palavras cruzadas é um passatempo bastante difundido. Consiste de várias linhas formadas por quadrados em branco, algumas na vertical e outras na horizontal, que se cruzam umas com as outras.'
    } else if (btnId === "pongInfo") {
      nomeDoJogo.innerHTML = 'pong'
      DataTexto.innerHTML = '29 November 1972'
      NumeroTexto.innerHTML = '35 mil'
      lucroTexto.innerHTML = '$35-40 dollars a day em 35k de maquinas'
      publiTexto.innerHTML = 'ataro'
      sobreTexto.innerHTML = 'Pong is a two-dimensional sports game that simulates table tennis. The player controls an in-game paddle by moving it vertically across the left or right side of the screen. They can compete against another player controlling a second paddle on the opposing side. It was one of the first computer games ever created and was released by Atari in 1972.'
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

