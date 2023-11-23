// src/controllers/lanceController.ts
import { Request, Response } from 'express';
import { LanceService } from '../services/lanceService';

const lanceService = new LanceService();

export class LanceController {
  async getAllLances(req: Request, res: Response) {
    try {
      const lances = await lanceService.getAllLances();
      res.json(lances);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getLanceById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const lance = await lanceService.getLanceById(id);
      if (!lance) {
        return res.status(404).json({ error: 'Lance not found' });
      }
      res.json(lance);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createLance(req: Request, res: Response) {
    try {
      const lanceData = req.body;
      const newLance = await lanceService.createLance(lanceData);
      res.json(newLance);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
