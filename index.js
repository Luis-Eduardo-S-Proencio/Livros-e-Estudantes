const express = require('express');
const bodyParser = require('body-parser');

// Importando as rotas
const livrosRouter = require('./routes/livros');
const estudantesRouter = require('./routes/estudantes');
const alugueisRouter = require('./routes/alugueis');

const app = express();
const PORT = 3000;

// Configurando o body-parser para lidar com requisições JSON
app.use(bodyParser.json());

// Configurando as rotas
app.use('/livros', livrosRouter);
app.use('/estudantes', estudantesRouter);
app.use('/alugueis', alugueisRouter);

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

