module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'password123', // Recuerda que en producción las contraseñas deben estar hasheadas.
        role: 'admin', // admin o client
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Client User',
        email: 'client@example.com',
        password: 'password123',
        role: 'client',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
