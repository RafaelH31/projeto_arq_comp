var playlistModel = require("../models/playlistModel");

function buscarAlbum(req, res) {

    var albumSelecionado = req.params.albumId

    console.log(`Recuperando as musicas em tempo real`);
    
    playlistModel.buscarAlbum(albumSelecionado).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as músicas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function adicionar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo playlist.html
   
    var IDUser = req.body.IDUserPlaylistServer;
    var IDMusica = req.body.IDMusicaServer;
    var TituloPlaylist = req.body.TituloServer;
    var DuracaoPlaylist = req.body.TempoServer;
   
    // Faça as validações dos valores
    if (IDUser == undefined) {
        res.status(400).send("Seu ID está undefined!");
    } else if (IDMusica == undefined) {
        res.status(400).send("Seu IDMusica está undefined!");
    } else if (TituloPlaylist == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (DuracaoPlaylist == undefined) {
        res.status(400).send("Sua duração está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo playlistModel.js
        playlistModel.adicionar(IDUser, IDMusica, TituloPlaylist, DuracaoPlaylist)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a adição! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function remover(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo playlist.html
   
    var IDUser = req.body.IDUserPlaylistServer;
    var MscRemove = req.body.removerMusicaServer;
   
    // Faça as validações dos valores
    if (IDUser == undefined) {
        res.status(400).send("Seu ID está undefined!");
    } else if (MscRemove == undefined) {
        res.status(400).send("Seu MscRemove está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo playlistModel.js
        playlistModel.remover(IDUser, MscRemove)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a adição! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function AtualizarPlaylist(req, res) {

    var idUsuarioFinal = req.params.idusuario

    console.log(`Recuperando a playlist em tempo real`);
    
    playlistModel.AtualizarPlaylist(idUsuarioFinal).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a playlist.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    buscarAlbum,
    adicionar,
    remover,
    AtualizarPlaylist
}