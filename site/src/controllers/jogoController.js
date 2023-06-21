var jogoModel = require("../models/jogoModel");

function calcularVezes(req, res) {

    console.log(`Recuperando quantidade de vezes em tempo real`);

    jogoModel.calcularVezes().then(function (resultado) {
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

    jogoModel.calcularFavoritos().then(function (resultado) {
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
    var idjogo = req.body.idServer

    if (cont == undefined) {
        res.status(400).send("Seu cont está undefined!");
    }
    else if (idjogo == undefined) {
        res.status(400).send("Seu idjogo está undefined!");
    } else {

        jogoModel.atualizarVezes(cont, idjogo)

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