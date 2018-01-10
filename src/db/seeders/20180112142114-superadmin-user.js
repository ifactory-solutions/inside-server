module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Super',
          cpf: 'Admin',
          email: 'admin@admin.com',
          password: 'b946ccc987465afcda7e45b1715219711a13518d1f1663b8c53b848cb0143441',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    ),

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', [
      {
        email: 'admin@admin.com',
      },
    ]);
  },
};
