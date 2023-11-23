// src/routes/leilaoRoutes.ts
import express, { Request, Response } from 'express';
import { LeilaoController } from '../controllers/leilaoController';

const router = express.Router();
const leilaoController = new LeilaoController();

router.get('/', async (req: Request, res: Response) => {
  await leilaoController.getAllLeiloes(req, res);
});

router.get('/:id', async (req: Request, res: Response) => {
  await leilaoController.getLeilaoById(req, res);
});

router.post('/', async (req: Request, res: Response) => {
  await leilaoController.createLeilao(req, res);
});

export default router;
