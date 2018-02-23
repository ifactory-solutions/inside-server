module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Companies',
      [
        {
          name: 'iFactory Solutions',
        },
        {
          name: 'ExceedLabs',
        },
      ],
      {},
    ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Companies', null, {}),
};
