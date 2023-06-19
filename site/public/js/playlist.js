var posicao = 0
    window.addEventListener('load', function () {

        var msc_sorteada = document.getElementById('msc_sorteada');
        var tocarBtn = document.getElementById('tocar-btn');
        var pauseBtn = document.getElementById('pause-btn');
        var proximaBtn = document.getElementById('proxima-button');
        var anteriorBtn = document.getElementById('anterior-button');
        var barraVolume = document.getElementById('barra-volume');
        var duracaoMsc = document.getElementById('duracao');

        tocarBtn.addEventListener('click', function () {
            msc_sorteada.play();
        })

        pauseBtn.addEventListener('click', function () {
            msc_sorteada.pause();
        })

        proximaBtn.addEventListener('click', function () {
            if (vetorMusicaF.length > 0) {

                if (posicao < vetorMusicaF.length - 1) {
                    posicao++

                    var musica = msc_sorteada;
                    musica.src = '/audio/' + `${vetorMusicaF[posicao]}` + '.mp3';
                    musica.play();

                    console.log(vetorMusicaF[posicao]);
                } else {

                    alert('Você chegou à última música.');
                }
            }
        });
        anteriorBtn.addEventListener('click', function () {
            if (vetorMusicaF.length > 0) {

                if (posicao < vetorMusicaF.length - 1) {
                    posicao--

                    var musica = msc_sorteada;
                    musica.src = '/audio/' + `${vetorMusicaF[posicao]}` + '.mp3';
                    musica.play();

                    console.log(vetorMusicaF[posicao]);
                } else {

                    alert('Você chegou à primeira música.');
                }
            }
        });
        barraVolume.addEventListener('input', function () {
            msc_sorteada.volume = barraVolume.value;
        })

        msc_sorteada.addEventListener('timeupdate', function () {
            var minutos = Math.floor(msc_sorteada.currentTime / 60)
            var segundos = Math.floor(msc_sorteada.currentTime % 60)
            duracaoMsc.textContent = ('0' + minutos).slice(-2) + ':' + ('0' + segundos).slice(-2)
        })
    })
    /* linha 146 está formatando a duração da música, 
    garantindo que tanto os minutos quanto os segundos tenham sempre dois dígitos. 
    O resultado final será uma string no formato "mm:ss", onde "mm" representa os minutos e "ss" representa os segundos. */
    var idusuario = sessionStorage.getItem('ID_USUARIO')

    var vetorMusicaE = []
    var vetorTempoE = []
    var vetorIdMscE = []

    var vetorMusicaF = []
    var vetorTempoF = []
    var vetorIdMscF = []

    function buscarAlbum() {

        var albumSelect = playlist_album.value
        MscExibidas.innerHTML = ''
        vetorMusicaE.splice(0, vetorMusicaE.length);
        vetorTempoE.splice(0, vetorTempoE.length);
        vetorIdMscE.splice(0, vetorIdMscE.length);

        setTimeout(function () {
            fetch(`/playlist/buscarAlbum/${albumSelect}`, { cache: 'no-store' })
                .then(function (response) {
                    if (response.ok) {
                        response.json().then(function (resposta) {
                            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                            console.log(resposta);

                            for (var c = 0; c < resposta.length; c++) {
                                var registro = resposta[c];
                                vetorMusicaE.push(registro.titulo);
                                vetorTempoE.push(registro.tempo);
                                vetorIdMscE.push(registro.idMsc);
                            }

                            for (var i = 0; i < vetorMusicaE.length; i++) {
                                var titulo = vetorMusicaE[i];
                                var tempo = vetorTempoE[i];
                                MscExibidas.innerHTML += `${i}-${titulo} ${tempo}<br>`;
                            }
                        });
                    } else {
                        console.error('Nenhum dado encontrado ou erro na API');
                    }
                })
                .catch(function (error) {
                    console.error(`Erro na obtenção dos dados ${error.message}`);
                });
        }, 200);
    }
    function adicionar() {
        var add = Number(add_input.value)

        fetch("/playlist/adicionar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                IDUserPlaylistServer: idusuario,
                IDMusicaServer: vetorIdMscE[add],
                TituloServer: vetorMusicaE[add],
                TempoServer: vetorTempoE[add],
            })
        })
    }

    function AtualizarPlaylist() {


        lista_musica.innerHTML = ''
        vetorMusicaF.splice(0, vetorMusicaF.length);
        vetorTempoF.splice(0, vetorTempoF.length);
        vetorIdMscF.splice(0, vetorIdMscF.length);

        setTimeout(function () {
            fetch(`/playlist/AtualizarPlaylist/${idusuario}`, { cache: 'no-store' })
                .then(function (response) {
                    if (response.ok) {
                        response.json().then(function (resposta) {
                            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                            console.log(resposta);

                            for (var c = 0; c < resposta.length; c++) {
                                var registro = resposta[c];
                                vetorMusicaF.push(registro.nome);
                                vetorTempoF.push(registro.tempo);
                                vetorIdMscF.push(registro.idMusica);
                            }

                            for (var i = 0; i < vetorMusicaF.length; i++) {
                                var titulo = vetorMusicaF[i];
                                var tempo = vetorTempoF[i];
                                var id = vetorIdMscF[i]
                                lista_musica.innerHTML += `Id: ${id}-${titulo} - ${tempo}<br>`;
                            }
                        });
                    } else {
                        console.error('Nenhum dado encontrado ou erro na API');
                    }
                })
                .catch(function (error) {
                    console.error(`Erro na obtenção dos dados ${error.message}`);
                });
        }, 200);
    }
    function remover() {
        var removerMusica = input_deletar.value

        fetch("/playlist/remover", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                IDUserPlaylistServer: idusuario,
                removerMusicaServer: removerMusica                                        
            })
        })

    }
    function tocarMsc() {
        if (vetorMusicaF.length > 0) {

            var musicaEscolhida = Number(input_escolha.value)

            var posicao = vetorIdMscF.findIndex(function (item) {
                return item === musicaEscolhida;
            });

            var musica = msc_sorteada
            musica.src = '/audio/' + `${vetorMusicaF[posicao]}` + '.mp3'
            musica.play();


            console.log(vetorMusicaF[posicao])
        }
    }
    function mscAleatoria() {
        if (vetorMusicaF.length > 0) {
            var musicaSorteada = parseInt(Math.random() * vetorMusicaF.length);

            var musica = msc_sorteada
            musica.src = '/audio/' + `${vetorMusicaF[musicaSorteada]}` + '.mp3'
            musica.play();


            console.log(vetorMusicaF[musicaSorteada])
        }
    }