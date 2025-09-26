import app from './app.js';
import express from "express";

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
 console.log(`Server rodando em http://localhost:${PORT}`);
});