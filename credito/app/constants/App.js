const DB_HOST = process.env.DB_HOST
  ? process.env.DB_HOST
  : "mongodb://localhost:27017/feiradafruta";
const SQS_URL = process.env.SQS_URL;
const STATUS_PEDIDO = {
  PROGRAMADO: 1,
  VERIFICANDO_CREDITO: 2
};

module.exports = {
  DB_HOST,
  SQS_URL,
  STATUS_PEDIDO
};
