// src/app.ts
import express from 'express';
import userRoutes from './routes/userRoutes';
import lanceRoutes from './routes/lanceRoutes';
import leilaoRoutes from './routes/leilaoRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/lances', lanceRoutes);
app.use('/leiloes', leilaoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
