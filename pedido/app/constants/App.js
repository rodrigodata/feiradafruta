const DB_HOST = process.env.DB_HOST
  ? process.env.DB_HOST
  : "mongodb://localhost:27017/feiradafruta";
const SQS_URL = process.env.SQS_URL;

module.exports = {
  DB_HOST,
  SQS_URL
};
