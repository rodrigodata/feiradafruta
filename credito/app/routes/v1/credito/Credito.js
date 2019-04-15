/* Importação de dependencias */
const router = require("express").Router();

/* Importação de middlewares. */
const SchemaValidation = require("../../../middlewares/SchemaValidation");

/* Importação Controllers */
const CreditoController = require("../../../controllers/credito/Credito");

router
  .route("/credito")
  .get(SchemaValidation(true), CreditoController.buscar)
  .post();

module.exports = router;
