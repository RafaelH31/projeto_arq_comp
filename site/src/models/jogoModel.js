var database = require("../database/config");

function calcularVezes() {

  instrucaoSql = `SELECT Vezes_selecionado as vezes FROM jogo`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function calcularFavoritos() {
    instrucaoSql2 = `SELECT COUNT(*) AS quantidade
    FROM usuario
    GROUP BY fkjogo_Favorito
    HAVING fkjogo_Favorito IS NOT NULL`;

    console.log("Executando a instrução SQL2: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}

function atualizarVezes(cont, idjogo) {
    console.log("ACESSEI O jogo MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", cont, idjogo);
    var instrucao = `
        UPDATE jogo set Vezes_Selecionado = ${cont} where idjogo = ${idjogo}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    atualizarVezes,
    calcularFavoritos,
    calcularVezes
};