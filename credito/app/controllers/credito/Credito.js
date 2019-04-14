/* Importação de dependencias */
const Mongoose = require("mongoose");

/* Importação Models */
const Credito = Mongoose.model("Credito");

/* Importação Constants */
const AppConstants = require("../../constants/App");

/* Controller responsável pela criação de novos pedidos. */
exports.buscar = function(req, res, next) {
  let query = req.query;
  console.log(query);
  return res.status(200).send(query);
};
