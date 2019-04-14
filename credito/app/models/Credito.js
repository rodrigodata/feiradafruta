/* Importação de dependencias */
const Mongoose = require("mongoose");

const CreditoSchema = new Mongoose.Schema({
  cpf: {
    type: String,
    required: [true, "não pode ser vazio"],
    maxlength: 11,
    minlength: 11
  },
  de: {
    type: String,
    required: [true, "não pode ser vazio"]
  },
  ate: {
    type: String,
    required: [true, "não pode ser vazio"]
  },
  valor: {
    type: Number,
    required: [true, "não pode ser vazio"]
  }
});

Mongoose.model("Credito", CreditoSchema);
