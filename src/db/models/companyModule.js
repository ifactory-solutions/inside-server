module.exports = (sequelize, DataTypes) => {
  const CompanyModule = sequelize.define(
    'CompanyModule',
    {
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: DataTypes.DATE,
      },
      updatedAt: { allowNull: true, type: DataTypes.DATE },
    },
    {
      tableName: 'CompanyModules',
    },
  );

  return CompanyModule;
};
