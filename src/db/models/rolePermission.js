module.exports = (sequelize) => {
  const RolePermission = sequelize.define(
    'RolePermission',
    {},
    {
      tableName: 'RolePermissions',
    },
  );

  return RolePermission;
}
