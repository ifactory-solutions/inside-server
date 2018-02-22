module.exports = (sequelize, DataTypes) => {
  const UserHomeAddress = sequelize.define(
    'UserHomeAddress',
    {
      line1: { allowNull: false, type: DataTypes.STRING },
      line2: { allowNull: false, type: DataTypes.NUMBER },
      line3: { allowNull: true, type: DataTypes.STRING },
      line4: { allowNull: false, type: DataTypes.STRING },
      zipcode: { allowNull: false, type: DataTypes.STRING },
      city: { allowNull: false, type: DataTypes.STRING },
      state: { allowNull: false, type: DataTypes.STRING },
      country: { allowNull: false, type: DataTypes.STRING },
    },
    {
      tableName: 'UserHomeAddress',
    },
  );

  UserHomeAddress.associate = (models) => {
    UserHomeAddress.belongsTo(models.CompanyUser);
  };

  return UserHomeAddress;
};
