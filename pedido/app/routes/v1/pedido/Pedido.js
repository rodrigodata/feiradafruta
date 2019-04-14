/* Importação de dependencias */
const router = require("express").Router();

/* Importação de middlewares */
const SchemaValidation = require("../../../middlewares/SchemaValidation");

/* Importação Controllers */
const PedidosController = require("../../../controllers/pedido/Pedido");

router
  .route("/pedido")
  .get()
  .post(SchemaValidation(true), PedidosController.criar);

module.exports = router;
