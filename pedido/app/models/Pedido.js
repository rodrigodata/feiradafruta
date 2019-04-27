/* Importação de dependencias */
const Mongoose = require("mongoose");

const PedidoSchema = new Mongoose.Schema({
  produto: {
    type: String,
    require: [true, "não pode ser vazio"]
  },
  descricao: {
    type: String,
    required: [true, "não pode ser vazio"]
  },
  valor: {
    type: Number,
    required: [true, "não pode ser vazio"]
  },
  cpf: {
    // TODO: aplicar propriedade match para validar apenas numeros e no formato de cpf correto
    type: String,
    required: [true, "não pode ser vazio"],
    maxlength: 11,
    minlength: 11
  },
  cliente: {
    type: String,
    required: [true, "não pode ser vazio"]
  },
  status: {
    type: Number,
    required: [true, "não pode ser vazio"]
  }
});

/**
 * Status:
 * 1 - Programado
 * 2 - Verificando Credito
 *    21 - Credito Negado
 *    22 - Credito Aprovado
 * 3 - Verificando Disponibilidade
 *    31 - Produto Disponivel
 *    32 - Produto Indisponivel
 *    33 - Produto Solicitado
 * 4 - Pedido Efetuado com Sucesso!
 * 5 - Pedido Finalizado
 */

Mongoose.model("Pedido", PedidoSchema);
