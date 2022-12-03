import sequelize from './instance';
import users from '../models/user';
import categories from '../models/category';
import products from '../models/product';
import orders from '../models/order';
import order_has_product from '../models/order_has_product';

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export async function migrate() {
  try {
    await checkConnection();
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await users.sync({ force: true });
    await categories.sync({ force: true });
    await products.sync({ force: true });
    await orders.sync({ force: true });
    await order_has_product.sync({ force: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.log(error);
  }
}

migrate();

export {};
