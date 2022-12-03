import { createUser } from '../services/users.service';

const jwt = require('jsonwebtoken');
const db = require('../../models/index');

export async function getAllUsers(req: any, res: any) {
  res.send(await db.User.findAll());
}

export async function getUserById(req: any, res: any) {
  const { id } = req.params;
  res.send(await db.User.findOne({ where: { id } }));
}

export async function register(req: any, res: any) {
  createUser(req, res);
}

export async function auth(req: any, res: any) {
  let { username } = req.query;
  let { password } = req.query;
  const user = {
    username,
    password,
  };

  if (!username) {
    username = 'undefined';
  }
  if (!password) {
    password = 'undefined';
  }

  const userDb: any = await db.User.findOne({ where: { username, password } });

  if (!userDb) {
    return res.send({ response: 'Username or password are wrong.' });
  }

  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' });
  res.send(accessToken);
}
