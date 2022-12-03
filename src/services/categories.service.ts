const db = require('../../models/index');

interface Category {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function create(req: any, res: any) {
  const category: Category = req.query;
  const date: Date = new Date();

  if (!category.name) {
    category.name = 'undefined';
  }

  const result: any = await db.Category.create({ name: category.name, createdAt: date, updatedAt: date });
  res.send(result);
}

export async function updateById(req: any, res: any) {
  const { id } = req.params;
  const category: any = await db.Category.findOne({ where: { id } });

  let { name } = req.query;

  if (!name) {
    name = category.name;
  }

  await db.Category.update({
    name,
    updatedAt: new Date(),
  }, {
    where: {
      id,
    },
  });

  res.send(await db.Category.findOne({ where: { id } }));
}

export async function deleteById(req: any, res: any) {
  const { id } = req.params;
  const destroy: any = await db.Category.destroy({
    where: {
      id,
    },
  });
  res.send(`${destroy} element(s) deleted(s)`);
}
