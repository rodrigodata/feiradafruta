/* Importação de dependencias */
const Mongoose = require("mongoose");

const CreditoSchema = new Mongoose.Schema({
  cpf: {
    type: String,
    required: [true, "não pode ser vazio"],
    maxlength: 11,
    minlength: 11,
    unique: true
  },
  valor: {
    type: Number,
    required: [true, "não pode ser vazio"]
  }
});

CreditoSchema.methods.formataRespostaJSON = function(compradorPossuiCredito) {
  return {
    cpf: this.cpf,
    valor: this.valor,
    possuiCredito: compradorPossuiCredito ? "S" : "N"
  };
};

Mongoose.model("Credito", CreditoSchema);
