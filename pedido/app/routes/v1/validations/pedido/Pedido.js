/* Importação de dependencias */
const Joi = require("joi");

/* Validação da rota */
const CriarPedidoSchema = Joi.object({
  produto: Joi.string()
    .lowercase()
    .required(),
  descricao: Joi.string()
    .lowercase()
    .required(),
  valor: Joi.number().required(),
  cpf: Joi.string()
    .lowercase()
    .min(11)
    .max(11)
    .required(),
  cliente: Joi.string()
    .lowercase()
    .required()
});

module.exports = {
  Validations: [
    {
      method: "POST",
      route: "/pedido",
      _object: CriarPedidoSchema
    }
  ]
};
