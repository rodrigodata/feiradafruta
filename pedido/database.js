/* Importacao de dependencias */
const Mongoose = require('mongoose');

/* Seta variavel de ambiente com string do banco de dados */
const AppConstants = require('./app/constants/App');

if (AppConstants.DB_HOST) {
    Mongoose
        .connect(AppConstants.DB_HOST, { useNewUrlParser: true })
        .then(() => {
            console.log('Conexão estabelecida com o banco de dados Feira da Fruta pelo micro servico: Pedidos');
        })
        .catch((err) => {
            console.log(err.errors ? err.errors[0].err : err.errors);
        });

}