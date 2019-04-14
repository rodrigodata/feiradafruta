/* Importação de validação Joi para o Schema Credito */
const CreditoSchemaValidation = require("./credito/Credito");

module.exports = {
  ...CreditoSchemaValidation
};
