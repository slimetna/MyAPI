import { Router } from 'express';

import { getAll, getById } from '../controllers/categories.controller';
import { create, updateById, deleteById } from '../services/categories.service';

import { authenticateJWT } from '../middlewares/authenticateJWT';

export const route = Router();

route.get('/', authenticateJWT, async (req: any, res: any) => {
  await getAll(req, res);
});

route.get('/:id', authenticateJWT, async (req: any, res: any) => {
  await getById(req, res);
});

route.post('/', authenticateJWT, async (req: any, res: any) => {
  await create(req, res);
});

route.patch('/:id', authenticateJWT, async (req: any, res: any) => {
  await updateById(req, res);
});

route.delete('/:id', authenticateJWT, async (req: any, res: any) => {
  await deleteById(req, res);
});
