import { Router } from 'express';

import { getAllUsers, getUserById } from '../controllers/users.controller';
import { createUser, updateById, deleteById } from '../services/users.service';

import { authenticateJWT } from '../middlewares/authenticateJWT';

export const route = Router();

route.get('/', authenticateJWT, async (req: any, res: any) => {
  await getAllUsers(req, res);
});

route.get('/:id', authenticateJWT, async (req: any, res: any) => {
  await getUserById(req, res);
});

route.post('/', authenticateJWT, async (req: any, res: any) => {
  await createUser(req, res);
});

route.patch('/:id', authenticateJWT, async (req: any, res: any) => {
  await updateById(req, res);
});

route.delete('/:id', authenticateJWT, async (req: any, res: any) => {
  await deleteById(req, res);
});
