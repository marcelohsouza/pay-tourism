import app from './app.js';
import express from "express";

const PORT = process.env.PORT || 3000;

// Midedlewares e rotas
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.json({message: 'Backend funcionando!'});
});

app.listen(PORT, () => {
 console.log(`Server rodando em http://localhost:${PORT}`);
});