module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'UserRoles',
      [
        {
          UserId: 1,
          RoleId: 1,
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('UserRoles', null, {}),
};
