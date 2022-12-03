import { Router } from 'express';

import { auth } from '../controllers/users.controller';

export const route = Router();

route.post('/', async (req: any, res: any) => {
  await auth(req, res);
});
