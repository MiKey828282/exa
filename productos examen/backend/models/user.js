// models/user.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Aseguramos que el email sea único
      validate: {
        isEmail: true, // Validamos que el email sea un formato correcto
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'client', // Role predeterminado es 'client'
      validate: {
        isIn: [['client', 'admin']], // Solo 'client' o 'admin' como valores válidos
      },
    },
  });

  // Relación con las ventas (user puede tener muchas ventas)
  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'userId' });
  };

  return User;
};
