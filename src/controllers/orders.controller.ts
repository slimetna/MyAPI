const db = require('../../models/index');

export async function getAll(req: any, res: any) {
  res.send(await db.Order.findAll());
}

export async function getById(req: any, res: any) {
  const { id } = req.params;
  res.send(await db.Order.findOne({ where: { id } }));
}
