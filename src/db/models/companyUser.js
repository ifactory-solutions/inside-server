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
    CompanyUser.UserPersonalInfo = CompanyUser.hasOne(models.UserPersonalInfo, {
      as: 'personalInfo',
      onDelete: 'CASCADE',
    });
    CompanyUser.UserBankAccount = CompanyUser.hasOne(models.UserBankAccount, {
      as: 'bankAccount',
      onDelete: 'CASCADE',
    });
    CompanyUser.UserHomeAddress = CompanyUser.hasOne(models.UserHomeAddress, {
      as: 'address',
      onDelete: 'CASCADE',
    });
    CompanyUser.UserDocuments = CompanyUser.hasOne(models.UserDocuments, {
      as: 'documentation',
      onDelete: 'CASCADE',
    });

    CompanyUser.hasMany(models.Telephone, {
      as: 'telephones',
      onDelete: 'CASCADE',
    });
    CompanyUser.hasMany(models.Email, {
      as: 'emails',
      onDelete: 'CASCADE',
    });
  };

  return CompanyUser;
};
