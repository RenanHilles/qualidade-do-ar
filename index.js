// backend/index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./auth'); // Importar rotas de autenticação
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json()); // Permitir o envio de JSON no corpo das requisições

// Rota para dados ambientais
app.get('/api/air-quality', (req, res) => {
    res.json({
        co2: (Math.random() * 400 + 300).toFixed(2),
        pm25: (Math.random() * 50).toFixed(2),
        o3: (Math.random() * 100).toFixed(2),
        timestamp: new Date().toISOString()
    });
});

// Rotas de autenticação
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
