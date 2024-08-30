/* Arquivo para fazer o start do servidor */
require("dotenv").config();

const app = require(".");

//------------- Iniciar o servidor ----------------

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`
    ***********************************

      Servidor rodando na porta: ${PORT}

    ***********************************
    `);
});