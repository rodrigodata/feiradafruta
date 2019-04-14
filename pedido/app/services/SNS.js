/* Importacao de dependencias */
let AWS = require("aws-sdk");

/* Atualizacao regiao */
AWS.config.update({
  region: process.env.AWS_REGION_DEFAULT
});

/* Instacia SNS */
let SNS = new AWS.SNS();

const publicar = function(mensagem) {
  return new Promise(function(resolve, reject) {
    var parametros = {
      TopicArn: process.env.TOPIC_ARN,
      Message: JSON.stringify(mensagem)
    };

    SNS.publish(parametros, function(err, data) {
      if (err) reject(err);

      resolve(data);
    });
  });
};

module.exports = {
  publicar
};
