module.exports = (sequelize, DataTypes) => {
  const CompanyUser = sequelize.define(
    'CompanyUser',
    {
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: DataTypes.DATE,
      },
      updatedAt: { allowNull: true, type: DataTypes.DATE },
    },
    {
      tableName: 'CompanyUsers',
    },
  );

  // Class Method
  CompanyUser.associate = (models) => {
    CompanyUser.User = CompanyUser.belongsTo(models.User);
    CompanyUser.Company = CompanyUser.belongsTo(models.Company);

    CompanyUser.UserPersonalInfo = CompanyUser.hasOne(models.UserPersonalInfo, { as: 'personalInfo' });
    CompanyUser.UserBankAccount = CompanyUser.hasOne(models.UserBankAccount, { as: 'bankAccount' });
    CompanyUser.UserHomeAddress = CompanyUser.hasOne(models.UserHomeAddress, { as: 'address' });
    CompanyUser.UserDocuments = CompanyUser.hasOne(models.UserDocuments, { as: 'documentation' });

    CompanyUser.hasMany(models.Telephone, { as: 'telephones' });
    CompanyUser.hasMany(models.Email, { as: 'emails' });
  };

  return CompanyUser;
};
