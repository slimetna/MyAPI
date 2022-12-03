'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class order_has_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  order_has_product.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'order_has_product',
  });
  return order_has_product;
};

export default Model.order_has_product;
