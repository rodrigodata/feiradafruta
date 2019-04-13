/* Importação de dependencias */
const router = require("express").Router();

/**
 * Quando o endpoint que estamos trabalhando é o do pai, precisamos dizer para o express
 * que o seu endpoint é o atual. Ou seja, '/'.
 */
router.use("/", require("./pedido"));

module.exports = router;
