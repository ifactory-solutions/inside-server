module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      cpf: { type: DataTypes.STRING, unique: true },
      email: { type: DataTypes.STRING, unique: true, validate: { isEmail: true } },
      password: DataTypes.STRING,
      createdAt: { allowNull: false, type: DataTypes.DATE },
      updatedAt: { allowNull: false, type: DataTypes.DATE },
    },
    {
      tableName: 'Users',
    },
  );

  User.associate = (models) => {
    User.Role = User.belongsToMany(models.Role, {
      as: 'roles',
      through: models.UserRole,
    });

    User.Company = User.belongsToMany(models.Company, {
      as: 'companies',
      through: models.CompanyUser,
    });
  };

  return User;
};
