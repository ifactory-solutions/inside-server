module.exports = (sequelize, DataTypes) => {
  const UserHomeAddress = sequelize.define(
    'UserHomeAddress',
    {
      streetAddress: { allowNull: false, type: DataTypes.STRING },
      number: { allowNull: false, type: DataTypes.INTEGER },
      apNumber: { allowNull: true, type: DataTypes.STRING },
      neighborhood: { allowNull: false, type: DataTypes.STRING },
      zipcode: { allowNull: false, type: DataTypes.STRING },
      city: { allowNull: false, type: DataTypes.STRING },
      state: { allowNull: false, type: DataTypes.STRING },
      country: { allowNull: false, type: DataTypes.STRING },
    },
    {
      tableName: 'UserHomeAddresses',
    },
  );

  UserHomeAddress.associate = (models) => {
    UserHomeAddress.belongsTo(models.CompanyUser);
  };

  return UserHomeAddress;
};
