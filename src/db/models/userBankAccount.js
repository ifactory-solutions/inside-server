module.exports = (sequelize, DataTypes) => {
  const UserBankAccount = sequelize.define(
    'UserBankAccount',
    {
      nomeBanco: { allowNull: true, type: DataTypes.STRING },
      tipoContaBancaria: { allowNull: true, type: DataTypes.STRING },
      numeroAgenciaBancaria: { allowNull: true, type: DataTypes.STRING },
      numeroContaBancaria: { allowNull: true, type: DataTypes.STRING },
    },
    {
      tableName: 'UserBankAccounts',
    },
  );

  UserBankAccount.associate = (models) => {
    UserBankAccount.belongsTo(models.CompanyUser);
  };

  return UserBankAccount;
};
