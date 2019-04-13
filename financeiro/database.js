let DB_URI = "mongodb://localhost:27017/feiradafruta";

/* Caso exista uma URL configurada no processo do node, usamos ela. */
if (process.env.MONGO_DB_URI) {
    DB_URI = process.env.MONGO_DB_URI;
}

module.exports = {
    DB_URI
};