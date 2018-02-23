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

  return Company;
};
