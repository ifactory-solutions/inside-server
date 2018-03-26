module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'CompanyUsers',
      [
        {
          CompanyId: 1,
          UserId: 1,
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('CompanyUsers', null, {}),
};
