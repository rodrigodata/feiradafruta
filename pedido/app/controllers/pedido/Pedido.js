/* Importação de dependencias */
const Mongoose = require("mongoose");

/* Importação Models */
const Pedido = Mongoose.model("Pedido");

/* Importação de Servicos */
const SNS = require("../../services/SNS");

/* Controller responsável pela criação de novos pedidos. */
exports.criar = function(req, res, next) {
  let body = req.body;
  let pedido = new Pedido();
  pedido.produto = body.produto;
  pedido.descricao = body.descricao;
  pedido.cpf = body.cpf;
  pedido.cliente = body.cliente;
  pedido.status = body.status;

  pedido
    .save()
    .then(pedidoCriado => {
      SNS.publicar(pedidoCriado).then(function(_publicacao) {
        return res.status(201).send({
          mensagem: "Pedido Criado com Sucesso!",
          _item: pedidoCriado,
          _solicitacao: _publicacao
        });
      });
    })
    .catch(next);
};
