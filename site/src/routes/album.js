var express = require("express");
var router = express.Router();

var albumController = require("../controllers/albumController");

router.put("/atualizarVezes", function (req, res) {
    // função a ser chamada quando acessar /albums/cadastrar
    albumController.atualizarVezes(req, res);
});

router.get("/calcularVezes", function (req, res) {
    albumController.calcularVezes(req, res);
});

router.get("/calcularFavoritos", function (req, res) {
    albumController.calcularFavoritos(req, res);
});

module.exports = router;