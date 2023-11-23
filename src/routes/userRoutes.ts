// src/routes/userRoutes.ts
import express, { Request, Response } from 'express';
import { UserController } from '../controllers/userController';

const router = express.Router();
const userController = new UserController();

router.get('/', async (req: Request, res: Response) => {
  await userController.getAllUsers(req, res);
});

router.get('/:id', async (req: Request, res: Response) => {
  await userController.getUserById(req, res);
});

router.post('/', async (req: Request, res: Response) => {
  await userController.createUser(req, res);
});

export default router;
