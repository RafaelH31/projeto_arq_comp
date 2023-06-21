var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.put("/atualizarVezes", function (req, res) {
    // função a ser chamada quando acessar /jogos/cadastrar
    jogoController.atualizarVezes(req, res);
});

router.get("/calcularVezes", function (req, res) {
    jogoController.calcularVezes(req, res);
});

router.get("/calcularFavoritos", function (req, res) {
    jogoController.calcularFavoritos(req, res);
});

module.exports = router;