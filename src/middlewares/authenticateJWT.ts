import { Request, Response } from 'express';

const jwt = require('jsonwebtoken');

export function authenticateJWT(req: Request, res: Response, next: Function) {
  const token: any = req.headers.authorization;
  if (!token) return res.sendStatus(403);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any) => {
    console.log(err)
    if (err) return res.sendStatus(401);
    next();
  });
}

export function generateAccessToken(user: any) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
}
