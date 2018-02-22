module.exports = (sequelize, DataTypes) => {
  const Telephone = sequelize.define(
    'Telephone',
    {
      telefone: { allowNull: false, type: DataTypes.STRING },
      type: { allowNull: false, type: DataTypes.STRING },
    },
    {
      tableName: 'Telephones',
    },
  );

  Telephone.associate = models => {
    Telephone.belongsTo(models.CompanyUser);
  };
};
