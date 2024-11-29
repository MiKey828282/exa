module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Producto 1',
        price: 100.0,
        stock: 10,
        discount: 0,
        image: 'https://via.placeholder.com/150',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Producto 2',
        price: 200.0,
        stock: 5,
        discount: 10,
        image: 'https://via.placeholder.com/150',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
