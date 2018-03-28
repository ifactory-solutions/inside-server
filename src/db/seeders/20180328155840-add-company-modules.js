module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'CompanyModules',
      [
        {
          CompanyId: 1,
          ModuleId: 1,
        },
        {
          CompanyId: 1,
          ModuleId: 2,
        },
        {
          CompanyId: 1,
          ModuleId: 3,
        },
        {
          CompanyId: 1,
          ModuleId: 4,
        },
        {
          CompanyId: 1,
          ModuleId: 5,
        },
        {
          CompanyId: 1,
          ModuleId: 6,
        },
        {
          CompanyId: 1,
          ModuleId: 7,
        },
        {
          CompanyId: 1,
          ModuleId: 8,
        },
      ],
      {},
    ),

  down: queryInterface => queryInterface.bulkDelete('CompanyModules', null, {}),
};
