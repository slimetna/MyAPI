import { generateAccessToken } from '../middlewares/authenticateJWT';

const db = require('../../models/index');

interface User {
  username: string,
  email: string,
  password: string,
  createdAt: Date,
  updatedAt: Date
}

export async function createUser(req: any, res: any) {
  const user: User = req.query;
  const date: Date = new Date();

  if (!user.username) {
    user.username = 'undefined';
  }
  if (!user.email) {
    user.email = 'undefined';
  }
  if (!user.password) {
    user.password = 'undefined';
  }

  const result: any = await db.User.create({
    username: user.username, email: user.email, password: user.password, createdAt: date, updatedAt: date,
  });

  console.log(result);

  res.send(result);
}

export async function updateById(req: any, res: any) {
  const { id } = req.params;
  const user: any = await db.User.findOne({ where: { id } });

  let { username } = req.query;
  let { email } = req.query;
  let { password } = req.query;

  if (!email) {
    email = user.email;
  }
  if (!username) {
    username = user.username;
  }
  if (!password) {
    password = user.password;
  }

  await db.User.update({
    username,
    password,
    email,
    updatedAt: new Date(),
  }, {
    where: {
      id,
    },
  });

  res.send(await db.User.findOne({ where: { id } }));
}

export async function deleteById(req: any, res: any) {
  const { id } = req.params;
  const destroy: any = await db.User.destroy({
    where: {
      id,
    },
  });
  res.send(`${destroy} element(s) deleted(s)`);
}
