module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    'Company',
    {
      name: { allowNull: false, type: DataTypes.STRING },
      createdAt: { allowNull: false, defaultValue: new Date(), type: DataTypes.DATE },
      updatedAt: { allowNull: false, defaultValue: new Date(), type: DataTypes.DATE },
    },
    {
      tableName: 'Companies',
    },
  );

  Company.associate = (models) => {
    Company.User = Company.belongsToMany(models.User, {
      as: 'users',
      through: models.CompanyUser,
    });

    Company.Module = Company.belongsToMany(models.Module, {
      as: 'modules',
      through: models.CompanyModule,
    });
  };
  return Company;
};
