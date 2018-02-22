module.exports = (sequelize, DataTypes) => {
  const UserBankAccount = sequelize.define(
    'UserBankAccount',
    {
      nomeBanco: { allowNull: false, type: DataTypes.STRING },
      tipoContaBancaria: { allowNull: false, type: DataTypes.STRING },
      numeroAgenciaBancaria: { allowNull: false, type: DataTypes.STRING },
      numeroContaBancaria: { allowNull: false, type: DataTypes.STRING },
    },
    {
      tableName: 'UserBankAccount',
    },
  );

  UserBankAccount.associate = (models) => {
    UserBankAccount.belongsTo(models.CompanyUser);
  };

  return UserBankAccount;
};
