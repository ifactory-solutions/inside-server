module.exports = (sequelize) => {
  const RolePermission = sequelize.create(
    'RolePermission',
    {},
    {
      tableName: 'RolePermissions',
    },
  );

  return RolePermission;
}
