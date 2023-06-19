var database = require("../database/config");

function buscarAlbum(albumSelecionado) {

  instrucaoSql = `SELECT Titulo as titulo, Duração as tempo, idMusica as idMsc
  FROM musica
  WHERE fkAlbum = ${albumSelecionado};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);

}

function adicionar(IDUser, IDMusica, TituloPlaylist, DuracaoPlaylist) {
  console.log("ACESSEI O PLAYLIST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", IDUser, IDMusica, TituloPlaylist, DuracaoPlaylist);
  
  var instrucao = `
      INSERT INTO playlist (fk_idUsuario, fk_IdMusica, titulo, duracao) VALUES ('${IDUser}', '${IDMusica}', '${TituloPlaylist}','${DuracaoPlaylist}');
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function remover(IDUser, MscRemove) {
  console.log("ACESSEI O PLAYLIST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", IDUser, MscRemove);
  
  var instrucao = `
    DELETE FROM playlist WHERE fk_idUsuario = ${IDUser} AND fk_idMusica = ${MscRemove};
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function  AtualizarPlaylist(idUsuarioFinal) {

  instrucaoSql = `SELECT titulo as nome, fk_IdMusica as idMusica, duracao as tempo
  FROM playlist
  WHERE fk_idUsuario = ${idUsuarioFinal}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);

}

module.exports = {
    buscarAlbum,
    adicionar,
    remover,
    AtualizarPlaylist
};