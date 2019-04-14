/* */
const router = require("express").Router();

/**
 * Todas as nossas rotas estarão dentro da lógica /api/v1/rota_pai/rota_filha
 */
router.use("/api/v1", require("./v1"));

module.exports = router;
