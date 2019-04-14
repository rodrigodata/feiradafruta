/* Importação de dependencias */
const Joi = require("joi");

/* Validação da rota */
const BuscarCreditoSchema = Joi.object({
  valor: Joi.number().required(),
  cpf: Joi.string()
    .lowercase()
    .min(11)
    .max(11)
    .required()
});

module.exports = {
  "/credito": BuscarCreditoSchema
};
