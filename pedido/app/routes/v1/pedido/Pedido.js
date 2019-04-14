/* Importação de dependencias */
const router = require("express").Router();

/* Importação de middlewares */
// const SchemaValidator = require("../../../middlewares/SchemaValidation");

/* Importação Controllers */
const PedidosController = require("../../../controllers/pedido/Pedido");

/*  */
router
  .route("/pedido")
  .get()
  .post(PedidosController.criar);

module.exports = router;
