module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    'Company',
    {
      name: { allowNull: false, type: DataTypes.STRING },
      razaoSocial: { allowNull: false, type: DataTypes.STRING },
      cnpj: { allowNull: false, type: DataTypes.STRING },
      inscricaoEstadual: { allowNull: false, type: DataTypes.STRING },
      inscricaoMunicipal: { allowNull: false, type: DataTypes.STRING },
      streetAddress: { allowNull: false, type: DataTypes.STRING },
      number: { allowNull: false, type: DataTypes.INTEGER },
      neighborhood: { allowNull: false, type: DataTypes.STRING },
      zipcode: { allowNull: false, type: DataTypes.STRING },
      city: { allowNull: false, type: DataTypes.STRING },
      state: { allowNull: false, type: DataTypes.STRING },
      country: { allowNull: false, type: DataTypes.STRING },
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
