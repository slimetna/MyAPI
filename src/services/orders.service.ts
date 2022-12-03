const db = require('../../models/index');

interface Order {
  user_id: number;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function create(req: any, res: any) {
  const order: Order = req.query;
  const date: Date = new Date();

  if (!order.user_id) {
    order.user_id = 0;
  }
  if (!order.address) {
    order.address = 'undefined';
  }

  const result: any = await db.Order.create({
    UserId: order.user_id, adress: order.address, createdAt: date, updatedAt: date,
  });
  res.send(result);
}

export async function updateById(req: any, res: any) {
  const { id } = req.params;
  const order: any = await db.Order.findOne({ where: { id } });

  let { user_id } = req.query;
  let { address } = req.query;

  if (!user_id) {
    user_id = order.userId;
  }
  if (!address) {
    address = order.adress;
  }

  await db.Product.update({
    userId: user_id,
    adress: address,
    updatedAt: new Date(),
  }, {
    where: {
      id,
    },
  });

  res.send(await db.Order.findOne({ where: { id } }));
}

export async function deleteById(req: any, res: any) {
  const { id } = req.params;
  const destroy: any = await db.Order.destroy({
    where: {
      id,
    },
  });
  res.send(`${destroy} element(s) deleted(s)`);
}
