const DB_HOST = process.env.DB_HOST
  ? process.env.DB_HOST
  : "mongodb://localhost:27017/feiradafruta";
const STATUS_PEDIDO = {
  PROGRAMADO: 1
};

module.exports = {
  DB_HOST,
  STATUS_PEDIDO
};
