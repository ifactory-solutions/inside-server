module.exports = (sequelize) => {
  const UserRole = sequelize.define(
    'UserRole',
    {},
    {
      tableName: 'UserRoles',
    },
  );

  return UserRole;
};
