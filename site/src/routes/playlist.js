var express = require("express");
var router = express.Router();

var playlistController = require("../controllers/playlistController");

router.get("/buscarAlbum/:albumId", function (req, res) {
    playlistController.buscarAlbum(req, res);
})

router.post("/adicionar", function (req, res) {
    playlistController.adicionar(req, res);
})

router.delete("/remover", function (req, res) {
    playlistController.remover(req, res);
})

router.get("/AtualizarPlaylist/:idusuario", function (req, res) {
    playlistController.AtualizarPlaylist(req, res);
})

module.exports = router;