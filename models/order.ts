'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      models.Order.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
      models.Order.belongsToMany(models.Product, { through: 'order_has_product' });
    }
  }
  Order.init({
    id: DataTypes.INTEGER,
    adress: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};

export default Model.Order;
