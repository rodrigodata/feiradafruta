/* Importação de validação Joi para o Schema Pedido */
const PedidoSchemaValidation = require("./pedido/Pedido");

module.exports = {
  ...PedidoSchemaValidation
};
