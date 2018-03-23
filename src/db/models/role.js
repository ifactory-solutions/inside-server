module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      name: { allowNull: false, type: DataTypes.STRING },
    },
    {
      tableName: 'Roles',
    },
  );

  Role.associate = (models) => {
    Role.Permission = Role.belongsToMany(models.Permission, {
      as: 'permissions',
      through: models.RolePermission,
    });

    Role.User = Role.belongsToMany(models.User, {
      as: 'users',
      through: models.UserRole,
    });
  };

  return Role;
};
