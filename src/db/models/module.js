module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define(
    'Module',
    {
      name: { allowNull: false, type: DataTypes.STRING },
      description: { allowNull: false, type: DataTypes.STRING },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: DataTypes.DATE,
      },
      updatedAt: { allowNull: true, type: DataTypes.DATE },
    },
    {
      tableName: 'Modules',
    },
  );

  Module.associate = (models) => {
    Module.Company = Module.belongsToMany(models.Company, {
      as: 'companies',
      through: models.CompanyModule,
    });

    Module.Permission = Module.hasMany(models.Permission, {
      as: 'permissions',
    });
  };

  return Module;
};
