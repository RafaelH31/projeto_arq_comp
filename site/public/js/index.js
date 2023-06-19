
  function alterar() {
    if (slide1.checked) {
      titulo.innerHTML = "Década de 70"
      paragrafo.innerHTML = `O Iron Maiden foi formado em 25 de dezembro de 1975, quando o baixista Steve Harris deixou sua banda anterior. Ele decidiu criar sua própria banda depois que suas composições foram rejeitadas por outras bandas. O nome "Iron Maiden" foi inspirado em um instrumento de tortura. A primeira apresentação da banda aconteceu em maio de 1976, e eles tocaram principalmente no Cart and Horses Pub, em Londres. A formação original da banda teve várias mudanças, com diferentes vocalistas e guitarristas entrando e saindo. A formação mais estável incluiu Steve Harris, Dave Murray, Paul Di'Anno, Clive Burr e Adrian Smith. 
      Eles passaram por dificuldades no início, mas eventualmente encontraram sucesso após o lançamento de seu álbum de estreia chamado "Iron Maiden" em 1980.`
    }
    if (slide2.checked) {
      titulo.innerHTML = "Década de 80"
      paragrafo.innerHTML = `A década de 1980 foi o período de maior sucesso comercial do Iron Maiden. Eles lançaram uma série de álbuns clássicos que se tornaram pilares do gênero. O álbum "The Number of the Beast" (1982) trouxe a entrada do vocalista Bruce Dickinson e incluiu hinos do metal como "Run to the Hills" e a faixa-título. Seguiram-se álbuns como "Piece of Mind" (1983), "Powerslave" (1984) e "Seventh Son of a Seventh Son" (1988), cada um adicionando à crescente popularidade da banda. Eles também começaram a realizar grandes turnês pelo mundo e se tornaram conhecidos por suas incríveis performances ao vivo.`
    }
    if (slide3.checked) {
      titulo.innerHTML = "Década de 90"
      paragrafo.innerHTML = `Na década de 1990, o Iron Maiden enfrentou algumas mudanças e desafios. O álbum "No Prayer for the Dying" (1990) marcou uma direção mais simples e crua em seu som. Em seguida, lançaram "Fear of the Dark" (1992), que continha a faixa-título icônica. Depois disso, Bruce Dickinson deixou a banda para seguir carreira solo. Blaze Bayley assumiu os vocais e lançaram dois álbuns, "The X Factor" (1995) e "Virtual XI" (1998). Apesar das críticas mistas, esses álbuns tiveram seu apelo e mantiveram a base de fãs leais.`
    }
    if (slide4.checked) {
      titulo.innerHTML = "Anos 2000"
      paragrafo.innerHTML = `O início do século marcou o retorno triunfante de Bruce Dickinson e do guitarrista Adrian Smith à formação do Iron Maiden. Eles lançaram o álbum "Brave New World" (2000), que foi extremamente bem recebido pelos fãs e críticos, trazendo uma abordagem renovada ao seu som clássico. A banda continuou a lançar álbuns bem-sucedidos, como "Dance of Death" (2003) e "A Matter of Life and Death" (2006), que mantiveram a integridade artística da banda e sua posição como uma das principais bandas de metal do mundo.`
    }
    if (slide5.checked) {
      titulo.innerHTML = "Anos 2010"
      paragrafo.innerHTML = `Na década de 2010, foram lançados os albúns "The Final Frontier" (2010) e "The Book of Souls" (2015).
      "The Final Frontier" mostrou a habilidade da banda em criar músicas longas e complexas, com destaque para faixas como "El Dorado" e "When the Wild Wind Blows". Já em "The Book of Souls", a banda demonstrou sua excelência musical, com temas épicos, solos de guitarra marcantes e letras cativantes. O álbum também trouxe a música mais longa da carreira do Iron Maiden, "Empire of the Clouds", com mais de 18 minutos de duração. Além de lançar novas músicas, o Iron Maiden embarcou em turnês globais impressionantes durante essa década. A turnê "The Book of Souls World Tour", que começou em 2016, foi uma das maiores e mais ambiciosas da banda até então. Eles percorreram vários continentes, tocando em arenas lotadas e em festivais de renome, proporcionando experiências memoráveis para os fãs ao redor do mundo.`
    }
    if (slide6.checked) {
      titulo.innerHTML = "Anos 2020"
      paragrafo.innerHTML = `"Senjutsu" é o décimo sétimo álbum de estúdio da banda de heavy metal Iron Maiden, lançado em 3 de setembro de 2021. O título do álbum faz referência a um termo japonês que se refere às técnicas e estratégias militares utilizadas nas artes marciais, especialmente no contexto dos samurais. É um álbum duplo, apresentando dez faixas no total, e marca o primeiro lançamento de estúdio do Iron Maiden desde "The Book of Souls", de 2015. "Senjutsu" recebeu uma recepção positiva da crítica e dos fãs, sendo elogiado pela habilidade musical da banda, suas letras envolventes e pela atmosfera épica que transmite. O álbum mostra que o Iron Maiden continua a explorar e evoluir seu som característico, mantendo-se fiel ao seu legado e entregando uma obra musicalmente rica e emocionante. `
    }
  }
  function atualizarInfos(){
  if (select_album.value == 1) {
  nome.innerHTML = 'Bruce Dickinson'
  dtE.innerHTML = "Data de Entrada: 1 de setembro 1981"
  dtS.innerHTML = ""
  local.innerHTML = "Local de Nascimento: Londres, Reino Unido"
  dtNas.innerHTML = "Data de Nascimento: 7 de outubro 1958"
  funcao.innerHTML = "Função: Vocalista"
  foto.src = "img/BruceDick.jpeg"
}
if (select_album.value == 2) {
  nome.innerHTML = "Paul Di'Anno"
  dtE.innerHTML = "Data de Entrada: 1 de janeiro 1978"
  dtS.innerHTML = "Data de Saída: 31 de agosto 1981"
  local.innerHTML = "Local de Nascimento: Leytonstone, Reino Unido"
  dtNas.innerHTML = "Data de Nascimento: 17 de maio 1958"
  funcao.innerHTML = "Função: Vocalista"
  foto.src = "img/paulDino.jpg"
}
if (select_album.value == 3) {
  nome.innerHTML = "Blaze Bayley"
  dtE.innerHTML = "Data de Entrada: 1 de março 1994"
  dtS.innerHTML = "Data de Saída: 28 de fevereiro 1999"
  local.innerHTML = "Local de Nascimento: Birmingham, Reino Unido"
  dtNas.innerHTML = "Data de Nascimento: 29 de maio 1963"
  funcao.innerHTML = "Função: Vocalista"
  foto.src = "img/Blaze.jpg"
}
if (select_album.value == 4) {
  nome.innerHTML = "Steve Harris"
  dtE.innerHTML = "Data de Entrada: 25 de dezembro 1975"
  dtS.innerHTML = ""
  local.innerHTML = "Local de Nascimento: Leytonstone, Reino Unido"
  dtNas.innerHTML = "Data de Nascimento: 12 de março 1956"
  funcao.innerHTML = "Função: Baixista"
  foto.src = "img/steve.jpg"
}
if (select_album.value == 5) {
  nome.innerHTML = "Dave Murray"
  dtE.innerHTML = "Data de Entrada: 1 de janeiro 1976"
  dtS.innerHTML = ""
  local.innerHTML = "Local de Nascimento: Londres, Reino Unido"
  dtNas.innerHTML = "Data de Nascimento: 23 de dezembro 1958"
  funcao.innerHTML = "Função: Guitarrista"
  foto.src = "img/dave.jpg"
}
if (select_album.value == 6) {
  nome.innerHTML = "Adrian Smith"
  dtE.innerHTML = "Data de Entrada: 1 de outubro 1980"
  dtS.innerHTML = "Data de Saída: 28 de fevereiro 1990"
  local.innerHTML = "Local de Nascimento: Hackney, Reino Unido"
  dtNas.innerHTML = "Data de Nascimento: 27 de fevereiro 1957"
  funcao.innerHTML = "Função: Guitarrista"
  foto.src = "img/adrian.jpg"
}
if (select_album.value == 7) {
  nome.innerHTML = "Janick Gers"
  dtE.innerHTML = "Data de Entrada: 1 de janeiro 1990"
  dtS.innerHTML = ""
  local.innerHTML = "Local de Nascimento: Hartlepool, Reino Unido"
  dtNas.innerHTML = "Data de Nascimento: 27 de janeiro 1957"
  funcao.innerHTML = "Função: Guitarrista"
  foto.src = "img/janick.jpg"
}
if (select_album.value == 8) {
  nome.innerHTML = "Dennis Stratton"
  dtE.innerHTML = "Data de Entrada: 1 de março 1979"
  dtS.innerHTML = "Data de Saída: 30 de setembro 1980"
  local.innerHTML = "Local de Nascimento: Londres, Reino Unido"
  dtNas.innerHTML = "Data de Nascimento: 9 de fevereiro 1952"
  funcao.innerHTML = "Função: Guitarrista"
  foto.src = "img/dennis.jpg"
}
if (select_album.value == 9) {
  nome.innerHTML = "Clive Burr"
  dtE.innerHTML = "Data de Entrada: 1 de janeiro 1979"
  dtS.innerHTML = "Data de Saída: 31 de dezembro 1982"
  local.innerHTML = "Local de Nascimento: East Ham, Reino Unido"
  dtNas.innerHTML = "Data de Nascimento: 8 de março 1957"
  funcao.innerHTML = "Função: Baterista"
  foto.src = "img/clive.jpeg"
}
if (select_album.value == 10) {
  nome.innerHTML = "Nicko McBrain"
  dtE.innerHTML = "Data de Entrada: 1 de setembro 1982"
  dtS.innerHTML = ""
  local.innerHTML = "Local de Nascimento: Londres, Reino Unido"
  dtNas.innerHTML = "Data de Nascimento: 5 de junho 1952"
  funcao.innerHTML = "Função: Baterista"
  foto.src = "img/nicko.jpeg"
}
  }
  setInterval(atualizarInfos, 500);
