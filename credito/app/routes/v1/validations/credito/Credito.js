/* Importação de dependencias */
const Joi = require("joi");

/* Validação da rota */
const BuscarCreditoSchema = Joi.object({
  valor: Joi.number().required(),
  cpf: Joi.string()
    .lowercase()
    .min(11)
    .max(11)
});

/* Validação da rota */
const CriarCreditoSchema = Joi.object({
  valor: Joi.number().required(),
  cpf: Joi.string()
    .lowercase()
    .min(11)
    .max(11)
    .required()
});

module.exports = {
  Validations: [
    {
      method: "GET",
      route: "/credito",
      _object: BuscarCreditoSchema
    },
    {
      method: "POST",
      route: "/credito",
      _object: CriarCreditoSchema
    }
  ]
};
