// index.js

// Instalar dependências:
// npm init -y
// npm install express cors

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

// Função para gerar dados aleatórios de qualidade do ar
function getRandomAirQuality() {
    return {
        co2: (Math.random() * 400 + 300).toFixed(2),  // CO2 em ppm
        pm25: (Math.random() * 50).toFixed(2),        // PM2.5 em μg/m³
        o3: (Math.random() * 100).toFixed(2),         // O3 em ppb
        timestamp: new Date().toISOString()
    };
}

// Rota que retorna os dados ambientais
app.get('/api/air-quality', (req, res) => {
    const data = getRandomAirQuality();
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
