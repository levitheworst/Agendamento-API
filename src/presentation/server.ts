import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes';

const app = express();
app.use(express.json());

// Definindo as rotas
app.use('/api', usuarioRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});