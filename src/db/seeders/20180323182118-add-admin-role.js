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
          {
            RoleId: 1,
            PermissionId: 15,
          },
          {
            RoleId: 1,
            PermissionId: 16,
          },
          {
            RoleId: 1,
            PermissionId: 17,
          },
          {
            RoleId: 1,
            PermissionId: 18,
          },
          {
            RoleId: 1,
            PermissionId: 19,
          },
          {
            RoleId: 1,
            PermissionId: 20,
          },
          {
            RoleId: 1,
            PermissionId: 21,
          },
          {
            RoleId: 1,
            PermissionId: 22,
          },
          {
            RoleId: 1,
            PermissionId: 23,
          },
          {
            RoleId: 1,
            PermissionId: 24,
          },
          {
            RoleId: 1,
            PermissionId: 25,
          },
          {
            RoleId: 1,
            PermissionId: 26,
          },
          {
            RoleId: 1,
            PermissionId: 27,
          },
          {
            RoleId: 1,
            PermissionId: 28,
          },
          {
            RoleId: 1,
            PermissionId: 29,
          },
          {
            RoleId: 1,
            PermissionId: 30,
          },
          {
            RoleId: 1,
            PermissionId: 31,
          },
          {
            RoleId: 1,
            PermissionId: 32,
          },
          {
            RoleId: 1,
            PermissionId: 33,
          },
          {
            RoleId: 1,
            PermissionId: 34,
          },
          {
            RoleId: 1,
            PermissionId: 35,
          },
          {
            RoleId: 1,
            PermissionId: 36,
          },
          {
            RoleId: 1,
            PermissionId: 37,
          },
          {
            RoleId: 1,
            PermissionId: 38,
          },
          {
            RoleId: 1,
            PermissionId: 39,
          },
          {
            RoleId: 1,
            PermissionId: 40,
          },
          {
            RoleId: 1,
            PermissionId: 41,
          },
          {
            RoleId: 1,
            PermissionId: 42,
          },
          {
            RoleId: 1,
            PermissionId: 43,
          },
          {
            RoleId: 1,
            PermissionId: 44,
          },
          {
            RoleId: 1,
            PermissionId: 45,
          },
          {
            RoleId: 1,
            PermissionId: 46,
          },
          {
            RoleId: 1,
            PermissionId: 47,
          },
          {
            RoleId: 1,
            PermissionId: 48,
          },
          {
            RoleId: 1,
            PermissionId: 49,
          },
          {
            RoleId: 1,
            PermissionId: 50,
          },
          {
            RoleId: 1,
            PermissionId: 51,
          },
          {
            RoleId: 1,
            PermissionId: 52,
          },
          {
            RoleId: 1,
            PermissionId: 53,
          },
          {
            RoleId: 1,
            PermissionId: 54,
          },
          {
            RoleId: 1,
            PermissionId: 55,
          },
          {
            RoleId: 1,
            PermissionId: 56,
          },
          {
            RoleId: 1,
            PermissionId: 57,
          },
          {
            RoleId: 1,
            PermissionId: 58,
          },
          {
            RoleId: 1,
            PermissionId: 59,
          },
          {
            RoleId: 1,
            PermissionId: 60,
          },
          {
            RoleId: 1,
            PermissionId: 61,
          },
          {
            RoleId: 1,
            PermissionId: 62,
          },
          {
            RoleId: 1,
            PermissionId: 63,
          },
          {
            RoleId: 1,
            PermissionId: 64,
          },
          {
            RoleId: 1,
            PermissionId: 65,
          },
          {
            RoleId: 1,
            PermissionId: 66,
          },
          {
            RoleId: 1,
            PermissionId: 67,
          },
        ]),
      ),

  down: queryInterface =>
    queryInterface.bulkDelete('RolePermissions', null, {}).then(() => queryInterface.bulkDelete('Roles', null, {})),
};
