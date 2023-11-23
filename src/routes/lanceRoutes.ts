// src/routes/lanceRoutes.ts
import express, { Request, Response } from 'express';
import { LanceController } from '../controllers/lanceController';

const router = express.Router();
const lanceController = new LanceController();

router.get('/', async (req: Request, res: Response) => {
  await lanceController.getAllLances(req, res);
});

router.get('/:id', async (req: Request, res: Response) => {
  await lanceController.getLanceById(req, res);
});

router.post('/', async (req: Request, res: Response) => {
  await lanceController.createLance(req, res);
});

export default router;
