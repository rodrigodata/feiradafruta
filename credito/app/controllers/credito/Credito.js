/* Importação de dependencias */
const Mongoose = require("mongoose");

/* Importação Models */
const Credito = Mongoose.model("Credito");

/* Importação Constants */
const AppConstants = require("../../constants/App");

/* */
const SQS = require("../../services/SQS");

/* Controller responsável pela busca de credito para um determinado CPF. */
exports.buscar = function(req, res, next) {
  let query = req.query;
  Credito.findOne({ cpf: query.cpf })
    .then(function(credito) {
      let compradorPossuiCredito = false;

      /* Verificamos se o comprador possui credito maior que o pedido solicitado */
      if (credito.valor >= query.valor) compradorPossuiCredito = true;

      /* Formatamos registro para SQS */
      let mensagemFila = credito.formataRespostaJSON(compradorPossuiCredito);

      /* Retorna formatado */
      return res.status(200).send(mensagemFila);
    })
    .catch(next);
};

/* Controller responsavel pela criacao de novos credito para um determinado CPF. */
exports.criar = function(req, res, next) {
  let body = req.body;
  let credito = new Credito();
  credito.cpf = body.cpf;
  credito.valor = body.valor;

  credito
    .save()
    .then(_credito => {
      return res.status(201).send({
        mensagem: "Credito criado com sucesso!",
        _item: _credito
      });
    })
    .catch(next);
};
