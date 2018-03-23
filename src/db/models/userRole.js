module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define(
    'UserRole',
    {
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: DataTypes.DATE,
      },
      updatedAt: { allowNull: true, type: DataTypes.DATE },
    },
    {
      tableName: 'UserRoles',
    },
  );

  return UserRole;
};
