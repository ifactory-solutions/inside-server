module.exports = (sequelize, DataTypes) => {
  const CompanyUser = sequelize.define(
    'CompanyUser',
    {
      createdAt: { allowNull: false, type: DataTypes.DATE },
      updatedAt: { allowNull: false, type: DataTypes.DATE },
    },
    {
      tableName: 'CompanyUsers',
    },
  );

  // Class Method
  CompanyUser.associate = (models) => {
    // Will add userId and companyId to CompanyUser
    CompanyUser.belongsTo(models.User);
    CompanyUser.belongsTo(models.Company);
  };
  return CompanyUser;
};
