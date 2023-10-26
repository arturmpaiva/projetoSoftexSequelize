const database = require('./config/config');

(async () => {
    try {
        await database.authenticate();
        console.log('Conexão com o banco de dados realizada com sucesso!');
    }
    catch (error) {
        console.error('Erro ao conectar ao banco de dados: ', error);
    }
    finally {
        database.close();
    }
})();