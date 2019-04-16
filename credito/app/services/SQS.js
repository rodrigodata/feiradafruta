/* Importacao de dependencias */
let AWS = require("aws-sdk");

/* Importacao de Constants */
const AppConstants = require("../constants/App");

/* Atualizacao regiao */
AWS.config.update({
  region: process.env.AWS_REGION_DEFAULT
});

/* Instacia SQS */
let SQS = new AWS.SQS();

const inserirFilaDisponibilidadeEstoque = function(mensagem) {
  return new Promise(function(resolve, reject) {
    var parametros = {
      MessageBody: JSON.stringify(mensagem),
      QueueUrl: AppConstants.SQS_URL.DISPONIBILIDADE_ESTOQUE
    };

    SQS.sendMessage(parametros, function(err, mensagemFila) {
      if (err) reject(err);

      resolve(mensagemFila);
    });
  });
};

module.exports = {
  inserirFilaDisponibilidadeEstoque
};
