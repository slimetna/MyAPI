import { Router } from 'express';

import { register } from '../controllers/users.controller';

export const route = Router();

route.post('/', async (req: any, res: any) => {
  await register(req, res);
});
