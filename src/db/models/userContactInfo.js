module.exports = (sequelize, DataTypes) => {
  const UserContactInfo = sequelize.define(
    'UserContactInfo',
    {
      phone1: { allowNull: false, type: DataTypes.STRING },
      phone2: { allowNull: true, type: DataTypes.STRING },
      personalEmail: { allowNull: false, type: DataTypes.STRING },
      officeEmail: { allowNull: true, type: DataTypes.STRING },
    },
    {
      tableName: 'UserContactInfo',
    },
  );

  UserContactInfo.associate = (models) => {
    UserContactInfo.belongsTo(models.CompanyUser);
  };

  return UserContactInfo;
};
