module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    'Company',
    {
      createdAt: { allowNull: false, type: DataTypes.DATE },
      updatedAt: { allowNull: false, type: DataTypes.DATE },
    },
    {
      tableName: 'Companies',
    },
  );
  return Company;
};
