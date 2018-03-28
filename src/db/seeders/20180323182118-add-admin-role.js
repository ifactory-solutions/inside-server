module.exports = {
  up: queryInterface =>
    queryInterface
      .bulkInsert(
        'Roles',
        [
          {
            id: 1,
            name: 'Admin Role',
            CompanyId: 1,
          },
        ],
        {},
      )
      .then(() =>
        queryInterface.bulkInsert('RolePermissions', [
          {
            RoleId: 1,
            PermissionId: 1,
          },
          {
            RoleId: 1,
            PermissionId: 2,
          },
          {
            RoleId: 1,
            PermissionId: 3,
          },
          {
            RoleId: 1,
            PermissionId: 4,
          },
          {
            RoleId: 1,
            PermissionId: 5,
          },
          {
            RoleId: 1,
            PermissionId: 6,
          },
          {
            RoleId: 1,
            PermissionId: 7,
          },
          {
            RoleId: 1,
            PermissionId: 8,
          },
          {
            RoleId: 1,
            PermissionId: 9,
          },
          {
            RoleId: 1,
            PermissionId: 10,
          },
          {
            RoleId: 1,
            PermissionId: 11,
          },
          {
            RoleId: 1,
            PermissionId: 12,
          },
          {
            RoleId: 1,
            PermissionId: 13,
          },
          {
            RoleId: 1,
            PermissionId: 14,
          },
        ]),
      ),

  down: queryInterface =>
    queryInterface
      .bulkDelete('RolePermissions', null, {})
      .then(() => queryInterface.bulkDelete('Roles', null, {})),
};
