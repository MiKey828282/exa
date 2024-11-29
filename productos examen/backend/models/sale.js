const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Sale = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total: DataTypes.FLOAT,
  });
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'userId' });
    Sale.belongsTo(models.Product, { foreignKey: 'productId' });
  };
  return Sale;
};
