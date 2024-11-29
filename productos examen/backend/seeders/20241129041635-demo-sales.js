module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sales', [
      {
        userId: 1, // ID del usuario que ya existe en la tabla Users
        productId: 1, // ID del producto que ya existe en la tabla Products
        quantity: 2,
        total: 200.0, // Ajusta según el precio del producto y la cantidad
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        productId: 2,
        quantity: 1,
        total: 200.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sales', null, {});
  },
};
