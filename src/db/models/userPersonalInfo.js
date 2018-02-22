module.exports = (sequelize, DataTypes) => {
  const UserPersonalInfo = sequelize.define(
    'UserPersonalInfo',
    {
      fullName: { allowNull: false, type: DataTypes.STRING },
      nickname: { allowNull: false, type: DataTypes.STRING },
      fatherName: { allowNull: false, type: DataTypes.STRING },
      motherName: { allowNull: false, type: DataTypes.STRING },
      nationality: { allowNull: false, type: DataTypes.STRING },
      birthdate: { allowNull: false, type: DataTypes.DATE },
      gender: { allowNull: false, type: DataTypes.STRING },
      maritalStatus: { allowNull: true, type: DataTypes.STRING },
      spouseName: { allowNull: true, type: DataTypes.STRING },
      childAmount: { allowNull: true, defaultValue: 0, type: DataTypes.NUMBER },
      createdAt: { allowNull: false, type: DataTypes.DATE },
      updatedAt: { allowNull: false, type: DataTypes.DATE },
    },
    {
      tableName: 'UserPersonalInfos',
    },
  );

  UserPersonalInfo.associate = (models) => {
    UserPersonalInfo.belongsTo(models.CompanyUser);
  };

  return UserPersonalInfo;
};
