// src/controllers/leilaoController.ts
import { Request, Response } from 'express';
import { LeilaoService } from '../services/leilaoService';

const leilaoService = new LeilaoService();

export class LeilaoController {
  async getAllLeiloes(req: Request, res: Response) {
    try {
      const leiloes = await leilaoService.getAllLeiloes();
      res.json(leiloes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getLeilaoById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const leilao = await leilaoService.getLeilaoById(id);
      if (!leilao) {
        return res.status(404).json({ error: 'Leilao not found' });
      }
      res.json(leilao);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createLeilao(req: Request, res: Response) {
    try {
      const leilaoData = req.body;
      const newLeilao = await leilaoService.createLeilao(leilaoData);
      res.json(newLeilao);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
