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

    CompanyUser.hasOne(models.UserPersonalInfo, { foreignKey: 'personalInfoId' });
    CompanyUser.hasOne(models.UserHomeAddress, { foreignKey: 'homeAddressId' });
    CompanyUser.hasOne(models.UserContactInfo, { foreignKey: 'contactInfoId' });
    CompanyUser.hasOne(models.UserDocuments, { foreignKey: 'documentsId' });
    CompanyUser.hasOne(models.UserBankAccount, { foreignKey: 'bankAccountId' });

    CompanyUser.hasMany(models.Telephone);
    CompanyUser.hasMany(models.Email);
  };

  return CompanyUser;
};
