var albumModel = require("../models/albumModel");

function calcularVezes(req, res) {

    console.log(`Recuperando quantidade de vezes em tempo real`);

    albumModel.calcularVezes().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function calcularFavoritos(req, res) {

    console.log(`Recuperando quantidade de favoritos em tempo real`);

    albumModel.calcularFavoritos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimao favoritos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function atualizarVezes(req, res) {

    var cont = req.body.contServer;
    var idAlbum = req.body.idServer

    if (cont == undefined) {
        res.status(400).send("Seu cont está undefined!");
    }
    else if (idAlbum == undefined) {
        res.status(400).send("Seu idAlbum está undefined!");
    } else {

        albumModel.atualizarVezes(cont, idAlbum)

            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o envio dos dados! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );

    }
}

module.exports = {
    atualizarVezes,
    calcularFavoritos,
    calcularVezes
}