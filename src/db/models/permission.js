module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define(
    'Permission',
    {
      name: { allowNull: false, type: DataTypes.STRING },
      context: { allowNull: false, type: DataTypes.STRING },
      action: { allowNull: false, type: DataTypes.STRING },
      resource: { allowNull: false, type: DataTypes.STRING },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: DataTypes.DATE,
      },
      updatedAt: { allowNull: true, type: DataTypes.DATE },
    },
    {
      tableName: 'Permissions',
    },
  );

  Permission.associate = (models) => {
    Permission.Role = Permission.belongsToMany(models.Role, {
      as: 'roles',
      through: models.RolePermission,
    });
  };

  return Permission;
};
