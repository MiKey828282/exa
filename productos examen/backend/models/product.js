const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    discount: DataTypes.FLOAT,
    image: DataTypes.STRING,
  });
  Product.associate = (models) => {
    Product.hasMany(models.Sale, { foreignKey: 'productId' });
  };
  return Product;
};
