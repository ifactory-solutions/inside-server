module.exports = (sequelize, DataTypes) => {
  const RolePermission = sequelize.define(
    'RolePermission',
    {
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: DataTypes.DATE,
      },
      updatedAt: { allowNull: true, type: DataTypes.DATE },
    },
    {
      tableName: 'RolePermissions',
    },
  );

  return RolePermission;
};
