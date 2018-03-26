module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'Companies',
      [
        {
          id: 1,
          name: 'Inside',
        },
        {
          id: 2,
          name: 'iFactory Solutions',
        },
        {
          id: 3,
          name: 'ExceedLabs',
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('Companies', null, {}),
};
