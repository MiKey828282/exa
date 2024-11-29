module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Sales', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    });

    await queryInterface.addColumn('Sales', 'productId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
      },
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Sales', 'userId');
    await queryInterface.removeColumn('Sales', 'productId');
  },
};
