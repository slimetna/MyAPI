'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      models.Product.belongsToMany(models.Order, { through: 'order_has_product' });
      models.Product.belongsTo(models.Category);
    }
  }
  Product.init({
    id: {
      DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};

module.exports = Model.Product;
