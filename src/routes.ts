import { Router } from 'express';

import { route as usersRoute } from './routes/users.route';
import { route as orderRoute } from './routes/orders.route';
import { route as productRoute } from './routes/products.route';
import { route as categorieRoute } from './routes/categories.route';
import { route as authRoute } from './routes/auth.route';
import { route as registerRoute } from './routes/register.route';

export const route = Router();

route.use('/users', usersRoute);
route.use('/orders', orderRoute);
route.use('/register', registerRoute);
route.use('/auth', authRoute);
route.use('/products', productRoute);
route.use('/categories', categorieRoute);
