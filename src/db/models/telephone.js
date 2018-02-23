module.exports = (sequelize, DataTypes) => {
  const Telephone = sequelize.define(
    'Telephone',
    {
      telephone: { allowNull: false, type: DataTypes.STRING },
      type: { allowNull: false, type: DataTypes.STRING },
    },
    {
      tableName: 'telephones',
    },
  );

  Telephone.associate = (models) => {
    Telephone.belongsTo(models.CompanyUser);
  };

  return Telephone;
};
