const db = require('../../models/index');

interface Product {
  name: string;
  price: number;
  categoryId: number;
}

export async function create(req: any, res: any) {
  const product: Product = req.query;
  const date: Date = new Date();

  if (!product.name) {
    product.name = 'undefined';
  }
  if (!product.price) {
    product.price = 0;
  }
  if (!product.categoryId) {
    product.categoryId = 1;
  }

  const result: any = await db.Product.create({
    name: product.name, price: product.price, CategoryId: product.categoryId, createdAt: date, updatedAt: date,
  });
  res.send(result);
}

export async function updateById(req: any, res: any) {
  const { id } = req.params;
  const product: any = await db.Product.findOne({ where: { id } });

  let { name } = req.query;
  let categoryId : any = req.query.categoryid;
  let { price } = req.query;

  if (!price) {
    price = product.price;
  }
  if (!name) {
    name = product.name;
  }
  if (!categoryId) {
    categoryId = product.CategoryId;
  }

  await db.Product.update({
    name,
    price,
    CategoryId: categoryId,
    updatedAt: new Date(),
  }, {
    where: {
      id,
    },
  });

  res.send(await db.Product.findOne({ where: { id } }));
}

export async function deleteById(req: any, res: any) {
  const { id } = req.params;
  const destroy: any = await db.Product.destroy({
    where: {
      id,
    },
  });
  res.send(`${destroy} element(s) deleted(s)`);
}
